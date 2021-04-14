import CreateQuestionHeading from "@/components/questions/CreateQuestionHeading";
import SelectField from "@/components/SelectField";
import axios from "@/utils/axios";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import config from "config/config";
import { useStoreActions, useStoreState } from "easy-peasy";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const TextEditor = dynamic(() => import("@/components/TextEditor"), {
  ssr: false,
});

const CreateQuestion = () => {
  const courses = useStoreState((state) => state.category.courses);
  const classes = useStoreState((state) => state.category.classes);
  const subjects = useStoreState((state) => state.category.subjects);

  const getCourses = useStoreActions((actions) => actions.category.getCourses);
  const getClasses = useStoreActions((actions) => actions.category.getClasses);
  const getSubjects = useStoreActions(
    (actions) => actions.category.getSubjects
  );

  const addSubjects = useStoreActions(
    (actions) => actions.category.addSubjects
  );

  const [isMcqSelected, setIsMcqSelected] = useState(false);
  const [editorValue, setEditorValue] = useState("");
  const { register, control, handleSubmit } = useForm();
  
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    getCourses();
  }, []);

  const onSubmit = async (formData) => {
    axios
      .post(`${config.API_URL}/questions`, {
        ...formData,
        questionText: editorValue,
      })
      .then((res) => {
        const { data } = res;
        console.log(data);
        toast({
          title: "Question added successfully",
          description: "Your question has been added successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        router.push("/questions");
      })
      .catch((err) => {
        // console.log(err.response);
        toast({
          title: "Invalid question",
          description: err.response?.data?.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  const handleOnChange = (e) => {
    if (e.target.id === "board") {
      addSubjects([]);
      getClasses(e.target.value);
    }

    if (e.target.id === "class") {
      getSubjects(e.target.value);
    }

    if (e.target.id === "questionType") {
      if (e.target.value === "objective") setIsMcqSelected(true);
      else setIsMcqSelected(false);
    }
  };

  const handleEditorChange = (content, editor) => {
    setEditorValue(content);
  };

  return (
    <Box minH="100vh" bg="gray.50">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CreateQuestionHeading />

        <Stack spacing="8" p="4" maxW="container.md" mx="auto">
          <Box p="8" bg="white" rounded="md" shadow="sm">
            <Heading size="md" mb="4">
              Question details
            </Heading>
            <Stack spacing="4">
              <HStack>
                <Controller
                  control={control}
                  name="courseId"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <SelectField
                      id="board"
                      label="Board"
                      data={courses}
                      value={value}
                      required={true}
                      onChange={(e) => {
                        onChange(e);
                        handleOnChange(e);
                      }}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="classId"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <SelectField
                      id="class"
                      label="Class"
                      required={true}
                      data={classes}
                      value={value}
                      onChange={(e) => {
                        onChange(e);
                        handleOnChange(e);
                      }}
                    />
                  )}
                />
              </HStack>

              <HStack>
                <Controller
                  control={control}
                  name="subjectId"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <SelectField
                      id="subject"
                      label="Subject"
                      required={true}
                      data={subjects}
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="questionType"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <SelectField
                      id="questionType"
                      required={true}
                      label="Question type"
                      data={[
                        { id: "objective", name: "Objective" },
                        { id: "subjective", name: "Subjective" },
                      ]}
                      value={value}
                      onBlur={onBlur}
                      onChange={(e) => {
                        onChange(e);
                        handleOnChange(e);
                      }}
                    />
                  )}
                />
              </HStack>

              <HStack>
                <Controller
                  control={control}
                  name="difficultyLevel"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <SelectField
                      id="difficultyLevel"
                      label="Difficulty"
                      data={[
                        { id: "beginner", name: "Beginner" },
                        { id: "easy", name: "Easy" },
                        { id: "normal", name: "Normal" },
                        { id: "hard", name: "Hard" },
                        { id: "very hard", name: "Very hard" },
                      ]}
                      required={true}
                      value={value}
                      onBlur={onBlur}
                      onChange={(e) => {
                        onChange(e);
                        handleOnChange(e);
                      }}
                    />
                  )}
                />

                <FormControl id="rightMark">
                  <FormLabel>Right mark</FormLabel>
                  <Input defaultValue="1.0" {...register("rightMark")} />
                </FormControl>
                <FormControl id="wrongMark">
                  <FormLabel>Wrong mark</FormLabel>
                  <Input defaultValue="0.0" {...register("wrongMark")} />
                </FormControl>
              </HStack>
            </Stack>
          </Box>
          <Box p="8" bg="white" rounded="md" shadow="sm">
            <Heading size="md" mb="4">
              Question
            </Heading>

            <Stack spacing="6">
              <FormControl id="question" isRequired>
                <FormLabel>Write your question</FormLabel>
                <TextEditor handleEditorChange={handleEditorChange} />
              </FormControl>

              {isMcqSelected && (
                <>
                  <Flex alignItems="center" justifyContent="space-between">
                    <Heading size="sm">Options</Heading>

                    <FormControl
                      display="flex"
                      width="auto"
                      alignItems="center"
                    >
                      <FormLabel htmlFor="email-alerts" mb="0">
                        Enable editor
                      </FormLabel>
                      <Switch id="email-alerts" />
                    </FormControl>
                  </Flex>
                  <RadioGroup defaultValue="a">
                    <Stack spacing="6">
                      <Flex>
                        <Radio value="a" mr="4" />
                        <Input type="text" />
                      </Flex>
                      <Flex>
                        <Radio value="b" mr="4" />
                        <Input type="text" />
                      </Flex>
                      <Flex>
                        <Radio value="c" mr="4" />
                        <Input type="text" />
                      </Flex>
                      <Flex>
                        <Radio value="d" mr="4" />
                        <Input type="text" />
                      </Flex>
                    </Stack>
                  </RadioGroup>
                </>
              )}

              <FormControl id="solution">
                <FormLabel>Solution</FormLabel>
                <Textarea
                  height="48"
                  focusBorderColor="messenger.500"
                  {...register("solution")}
                />
              </FormControl>
            </Stack>
          </Box>
        </Stack>
      </form>
    </Box>
  );
};

export default CreateQuestion;
