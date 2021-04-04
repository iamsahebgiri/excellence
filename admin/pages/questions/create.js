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
  Select,
  Spacer,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HiOutlineX } from "react-icons/hi";

const TextEditor = dynamic(() => import("@/components/TextEditor"), {
  ssr: false,
});

const CreateQuestion = () => {
  const router = useRouter();
  return (
    <Box minH="100vh" bg="gray.50">
      <Flex
        borderBottomWidth="1px"
        bg="gray.50"
        zIndex="2"
        position="fixed"
        width="100%"
        p="4"
        alignItems="center"
      >
        <IconButton
          p="2"
          h="10"
          w="8"
          mr="4"
          rounded="full"
          variant="ghost"
          onClick={() => {
            router.back();
          }}
        >
          <Icon as={HiOutlineX} h="5" w="5" color="gray.600" />
        </IconButton>
        <Heading size="md">Add a question</Heading>
        <Spacer />

        <Button size="sm" mr="4">
          Save and add new
        </Button>
        <Button size="sm" colorScheme="messenger">
          Save question
        </Button>
      </Flex>
      <Box pt="20" />
      <Box p="4" maxW="container.lg" mx="auto">
        <Box p="8" bg="white" rounded="md" shadow="sm" mb="8">
          <Heading size="md" mb="4">
            Question details
          </Heading>

          <Stack spacing="4">
            <HStack>
              <FormControl id="board">
                <FormLabel>Board</FormLabel>
                <Select placeholder="Select board">
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
              <FormControl id="class">
                <FormLabel>Class</FormLabel>
                <Select placeholder="Select class">
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
            </HStack>

            <FormControl id="subject">
              <FormLabel>Subject</FormLabel>
              <Select placeholder="Select subject">
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
              </Select>
            </FormControl>

            <FormControl id="questionType">
              <FormLabel>Question type</FormLabel>
              <Select placeholder="Select question type">
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
              </Select>
            </FormControl>

            <HStack>
              <FormControl id="difficulty">
                <FormLabel>Difficulty</FormLabel>
                <Select placeholder="Select difficulty">
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Difficult</option>
                </Select>
              </FormControl>
              <FormControl id="rightMark">
                <FormLabel>Right mark</FormLabel>
                <Input type="number" defaultValue="1" />
              </FormControl>
              <FormControl id="wrongMark">
                <FormLabel>Wrong mark</FormLabel>
                <Input type="number" defaultValue="0" />
              </FormControl>
            </HStack>
          </Stack>
        </Box>
        <Box p="8" bg="white" rounded="md" shadow="sm">
          {/* <Heading size="md" mb="4">
            Question details
          </Heading> */}

          <Stack spacing="4">
            <FormControl id="question">
              <FormLabel>Write your question</FormLabel>
              {/* <Textarea h="200px" /> */}
              <TextEditor />
            </FormControl>

            <FormControl id="options">
              <FormLabel>Options</FormLabel>
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
            </FormControl>

            <FormControl id="solutions">
              <FormLabel>Solutions</FormLabel>
              <Textarea focusBorderColor="messenger.500" />
            </FormControl>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateQuestion;
