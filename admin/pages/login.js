import { DividerWithText } from "@/components/common/DividerWithText";
import { LoginForm } from "@/components/auth/LoginForm";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";

const LoginPage = () => {
  return (
    <Box bg={mode("gray.50", "inherit")} minH="100vh" py="12" px={{ sm: "6" }}>
      <Box maxW={{ sm: "md" }} mx={{ sm: "auto" }} w={{ sm: "full" }}>
        <Heading mt="6" textAlign="center" size="xl" fontWeight="extrabold">
          Sign in to your account
        </Heading>
        <Text mt="4" align="center" maxW="md">
          <span>Enter credentials to login to your account.</span>
        </Text>
      </Box>
      <Box maxW={{ sm: "md" }} mx={{ sm: "auto" }} mt="8" w={{ sm: "full" }}>
        <Box
          bg={mode("white", "gray.700")}
          py="8"
          px={{ base: "4", md: "10" }}
          shadow="base"
          rounded={{ sm: "lg" }}
        >
          <LoginForm />
          <DividerWithText mt="6">Don't have an account?</DividerWithText>

          <SimpleGrid mt="6" columns={1}>
            <Button>Register an account</Button>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
