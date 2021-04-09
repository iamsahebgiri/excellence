import { useState } from "react";
import dynamic from "next/dynamic";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Switch,
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HiOutlineX } from "react-icons/hi";
import useSWR from "swr";
import { useForm, Controller } from "react-hook-form";
import { useStoreActions, useStoreState } from "easy-peasy";
import SelectField from "@/components/SelectField";
import CreateQuestionHeading from "@/components/questions/CreateQuestionHeading";

const TextEditor = dynamic(() => import("@/components/TextEditor"), {
  ssr: false,
});

const CreateQuestion = () => {
  const { data: courses, error: courseError } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/courses`
  );
  const classes = useStoreState((state) => state.classes);
  const subjects = useStoreState((state) => state.subjects);
  const getClasses = useStoreActions((actions) => actions.getClasses);
  const getSubjects = useStoreActions((actions) => actions.getSubjects);
  const addSubjects = useStoreActions((actions) => actions.addSubjects);

  const [isMcqSelected, setIsMcqSelected] = useState(false);

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
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
      if (e.target.value === "mcq") setIsMcqSelected(true);
      else setIsMcqSelected(false);
    }

    console.log(e.target.id);
  };

  if (!courses) return "Loading...";
  if (courseError) return "error";
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
                  name="course_id"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <SelectField
                      id="board"
                      label="Board"
                      data={courses}
                      value={value}
                      onChange={(e) => {
                        onChange(e);
                        handleOnChange(e);
                      }}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="class_id"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <SelectField
                      id="class"
                      label="Class"
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

              <Controller
                control={control}
                name="subject_id"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <SelectField
                    id="subject"
                    label="Subject"
                    data={subjects}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />

              <Controller
                control={control}
                name="question_type"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <SelectField
                    id="questionType"
                    label="Question type"
                    data={[
                      { id: "mcq", name: "MCQ" },
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

              <HStack>
                <Controller
                  control={control}
                  name="difficulty"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <SelectField
                      id="difficulty"
                      label="Difficulty"
                      data={[
                        { id: "beginner", name: "Beginner" },
                        { id: "easy", name: "Easy" },
                        { id: "normal", name: "Normal" },
                        { id: "hard", name: "Hard" },
                        { id: "very hard", name: "Very hard" },
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

                <FormControl id="rightMark">
                  <FormLabel>Right mark</FormLabel>
                  <Input
                    type="number"
                    defaultValue="1"
                    {...register("right_mark")}
                  />
                </FormControl>
                <FormControl id="wrongMark">
                  <FormLabel>Wrong mark</FormLabel>
                  <Input
                    type="number"
                    defaultValue="0"
                    {...register("wrong_mark")}
                  />
                </FormControl>
              </HStack>
            </Stack>
          </Box>
          <Box p="8" bg="white" rounded="md" shadow="sm">
            <Heading size="md" mb="4">
              Question
            </Heading>

            <Stack spacing="6">
              <FormControl id="question">
                <FormLabel>Write your question</FormLabel>
                <TextEditor />
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

              <FormControl id="solutions">
                <FormLabel>Solutions</FormLabel>
                <Textarea height="48" focusBorderColor="messenger.500" />
              </FormControl>
            </Stack>
          </Box>
        </Stack>
      </form>
    </Box>
  );
};

export default CreateQuestion;
