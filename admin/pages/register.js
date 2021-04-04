import { DividerWithText } from "@/components/DividerWithText";
import { RegisterForm } from "@/components/RegisterForm";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";

const RegisterPage = () => {
  return (
    <Box bg={mode("gray.50", "inherit")} minH="100vh" py="12" px={{ sm: "6", lg:"8" }}>
      <Box maxW={{ sm: "md" }} mx={{ sm: "auto" }} w={{ sm: "full" }}>
        <Heading mt="6" textAlign="center" size="xl" fontWeight="extrabold">
          Register your account
        </Heading>
        <Text mt="4" align="center" maxW="md">
          <span>To finish setup, create an admin user.</span>
        </Text>
      </Box>
      <Box maxW={{ sm: "md" }} mx={{ sm: "auto" }} mt="8" w={{ sm: "full" }}>
        <Box
          bg={mode("white", "gray.700")}
          py="8"
          px={{ base: "6", md: "8" }}
          shadow="base"
          rounded={{ sm: "lg" }}
        >
          <RegisterForm />
          <DividerWithText mt="6">Already have an account?</DividerWithText>

          <SimpleGrid mt="6" columns={1}>
            <Button>Login to your account</Button>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterPage;
