import { Box, Circle, Icon, Square, Text } from "@chakra-ui/react";
import { HiCheckCircle } from "react-icons/hi";

const QuestionItem = ({
  answered,
  reviewed,
  notAnswered,
  answeredAndReviewed,
}) => {
  let bgColor = "gray.100";
  let textColor = "gray.800";
  if (answered) {
    bgColor = "green.600";
    textColor = "white";
  } else if (reviewed) {
    bgColor = "purple.600";
    textColor = "white";
  } else if (notAnswered) {
    bgColor = "red.600";
    textColor = "white";
  } else if (answeredAndReviewed) {
    bgColor = "purple.600";
    textColor = "white";
  }
  return (
    <Box position="relative">
      <Square size="12" bg={bgColor} rounded="md">
        <Text textColor={textColor}>10</Text>
      </Square>
      {answeredAndReviewed && (
        <Circle position="absolute" bg="white" rounded="full" top="8" left="8">
          <Icon as={HiCheckCircle} h="6" w="6" color="green.600" />
        </Circle>
      )}
    </Box>
  );
};

export default QuestionItem;
