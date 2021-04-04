import { setCookie } from "@/utils/cookie";
import {
  Alert,
  AlertIcon,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "redaxios";
import { PasswordField } from "./PasswordField";

export const RegisterForm = () => {
  const [apiError, setApiError] = useState(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    setApiError(null);
    axios({
      method: "post",
      url: "http://localhost:3001/api/v1/auth/register",
      data,
    })
      .then(function (res) {
        setCookie("token", res.data.token, 30);
        router.replace("/");
      })
      .catch(function (error) {
        setApiError(error.data?.message);
        console.log(error.data?.message);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="6">
        {apiError && (
          <Alert status="error" rounded="md">
            <AlertIcon />
            {apiError}
          </Alert>
        )}

        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            type="text"
            placeholder="John Doe"
            required
            {...register("name", { required: true })}
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="john@mail.com"
            autoComplete="email"
            required
            {...register("email", { required: true })}
          />
        </FormControl>
        <PasswordField {...register("password", { required: true })} />
        <Button
          type="submit"
          isLoading={isSubmitting}
          colorScheme="messenger"
          fontSize="md"
        >
          Register
        </Button>
      </Stack>
    </form>
  );
};
