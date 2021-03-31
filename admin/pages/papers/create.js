import DashboardShell from "@/components/DashboardShell";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";

const CreatePaper = () => {
  return (
    <DashboardShell>
      {/* <Link>Back</Link> */}
      <Flex>
        <Box width="65%" p="4">
          <Heading size="lg">Create a test paper</Heading>
          <FormControl id="testName">
            <FormLabel>Test name</FormLabel>
            <Input type="text" />
          </FormControl>
        </Box>
        <Box width="35%" p="4" position="sticky">
          <Heading size="md">Test summary</Heading>
          <Heading size="sm">Subject</Heading>
          <Heading size="sm">Last edit</Heading>
          <Heading size="sm">Created by</Heading>
          <Heading size="sm">Actions</Heading>
          <Button>Print test</Button>

          <Button colorScheme="messenger">Save changes</Button>
        </Box>
      </Flex>
    </DashboardShell>
  );
};

export default CreatePaper;
