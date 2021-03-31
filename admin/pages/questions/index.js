import DashboardShell from "@/components/DashboardShell";
import PageHeading from "@/components/PageHeading";
import { Box, Flex, Heading, Stack, Tag, Text } from "@chakra-ui/react";

const QuestionListItem = ({ no }) => {
  return (
    <Box borderBottomWidth="1px" py="4">
      <Heading size="md" mb="2">Q{no+1}.</Heading>
      <Text>
        A particle is moving around in a circle and its position is given in
        polar coordinates as x = R cos θ, and y = R sin θ, where R is the radius
        of the circle, and θ is in radians. From these equations derive the
        equation for centripetal acceleration.
      </Text>
      <Tag colorScheme="whatsapp" mt="2">
        Easy
      </Tag>
    </Box>
  );
};

const Questions = () => {
  let data = [...Array(10).keys()];
  return (
    <DashboardShell>
      <PageHeading title="Question Bank" btn="Create Question" href="questions/create" />
      <Stack spacing="4">
        {data.map((e, i) => (
          <QuestionListItem key={i} no={i} />
        ))}
      </Stack>
    </DashboardShell>
  );
};

export default Questions;
