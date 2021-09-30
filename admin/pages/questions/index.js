import DashboardShell from "@/components/dashboard/DashboardShell";
import PageHeading from "@/components/common/PageHeading";
import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
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
import { useRouter } from "next/router";
import {
  HiOutlineDotsVertical,
  HiOutlineChevronDown,
  HiChevronRight,
  HiChevronLeft,
} from "react-icons/hi";

const QuestionListItem = (props) => {
  const no = props.no;
  const { difficultyLevel, questionText, id } = props?.data;
  const router = useRouter();
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
      <Menu placement="bottom-end">
        <MenuButton
          as={IconButton}
          variant="ghost"
          rounded="full"
          _focus={{ focusfocusBorderColor: "none" }}
          icon={<HiOutlineDotsVertical />}
        />

        <MenuList fontSize="sm" shadow="sm">
          <MenuItem onClick={() => router.push(`/questions/${id}`)}>
            View
          </MenuItem>
          <MenuItem>Edit</MenuItem>
          <MenuItem color="red">Delete</MenuItem>
        </MenuList>
      </Menu>
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
        btn="Add new question"
        href="questions/create"
      />
      <Flex>
        <Box>
          <Stack spacing="4" mt="4">
            {data.results.map((question, i) => (
              <QuestionListItem key={question.id} data={question} no={i} />
            ))}
          </Stack>
          <Flex
            mt="20"
            mb="8"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton aria-label="Previous" mr="4" icon={<HiChevronLeft />} />
            <Text color="gray.500">Page 4 of 5</Text>
            <Box>
              <IconButton aria-label="Next" icon={<HiChevronRight />} />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </DashboardShell>
  );
};

export default Questions;
