import DashboardShell from "@/components/DashboardShell";
import PageHeading from "@/components/PageHeading";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";

const QuestionListItem = ({ no }) => {
  return (
    <Flex borderBottomWidth="1px" py="4">
      <Container w="container.sm">
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
        <Stack spacing="4">
          {data.map((e, i) => (
            <QuestionListItem key={i} no={i} />
          ))}
        </Stack>
        <Box  p="4">
          <Box bg="gray.200">
            Side bar A particle is moving around in a circle and its position is
            given in polar coordinates as x = R cos θ, and y = R sin θ, where R
            is the radius of the circle, and θ is in radians. From these
            equations derive the equation for centripetal acceleration.
          </Box>
        </Box>
      </Flex>
    </DashboardShell>
  );
};

export default Questions;
