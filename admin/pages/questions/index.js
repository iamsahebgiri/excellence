import DashboardShell from "@/components/DashboardShell";
import PageHeading from "@/components/PageHeading";
import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Select,
  Spacer,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import parse from "html-react-parser";
import config from "config/config";
import { useEffect, useRef } from "react";
import useSWR from "swr";

const QuestionListItem = (props) => {
  const no = props.no;
  const { difficultyLevel, questionText } = props?.data;
  return (
    <Flex borderBottomWidth="1px" py="4">
      <Container>
        <Heading size="md" mb="2">
          Q{no + 1}.
        </Heading>
        <div dangerouslySetInnerHTML={{ __html: parse(questionText) }} />
        <Tag colorScheme="whatsapp" mt="2">
          {difficultyLevel}
        </Tag>
      </Container>
      <Button size="sm">Edit</Button>
    </Flex>
  );
};

const Questions = () => {
  const { data, error } = useSWR(`${config.API_URL}/questions`);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  console.log(data);
  return (
    <DashboardShell>
      <PageHeading
        title="Question Bank"
        btn="Create Question"
        href="questions/create"
      />
      <Flex>
        <Stack spacing="4" mt="4" width="full">
          {data.map((question, i) => (
            <QuestionListItem key={i} data={question} no={i} />
          ))}
        </Stack>
        <Box ml="8" p="4" width="md">
          <Box>
            <Flex
              py="4"
              borderBottomWidth="1px"
              mb="4"
              alignItems="center"
              justifyContent="space-between"
            >
              <Heading size="md">Filter</Heading>
            </Flex>
            <Stack spacing="4">
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
              <FormControl id="subject">
                <FormLabel>Subject</FormLabel>
                <Select placeholder="Select subject">
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
            </Stack>
          </Box>
        </Box>
      </Flex>
    </DashboardShell>
  );
};

export default Questions;
