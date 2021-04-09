import DashboardShell from "@/components/DashboardShell";
import PageHeading from "@/components/PageHeading";
import {
  Box,
  Button,
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

const QuestionListItem = ({ no }) => {
  return (
    <Flex borderBottomWidth="1px" py="4">
      <Container>
        <Heading size="md" mb="2">
          Q{no + 1}.
        </Heading>
        <Text>
          A particle is moving around in a circle and its position is given in
          polar coordinates as x = R cos θ, and y = R sin θ, where R is the
          radius of the circle, and θ is in radians. From these equations derive
          the equation for centripetal acceleration.
        </Text>
        <Tag colorScheme="whatsapp" mt="2">
          Easy
        </Tag>
      </Container>
      <Button size="sm">Edit</Button>
    </Flex>
  );
};

const Questions = () => {
  let data = [...Array(10).keys()];
  return (
    <DashboardShell>
      <PageHeading
        title="Question Bank"
        btn="Create Question"
        href="questions/create"
      />
      <Flex>
        <Stack spacing="4" mt="4" width="full">
          {data.map((e, i) => (
            <QuestionListItem key={i} no={i} />
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
