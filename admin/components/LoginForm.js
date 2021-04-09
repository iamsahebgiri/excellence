import {
  Alert,
  AlertIcon,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import axios from "redaxios";
import { PasswordField } from "./PasswordField";
import { setCookie } from "@/utils/cookie";

export const LoginForm = () => {
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
      url: `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      data,
    })
      .then(function (res) {
        setCookie("token", res.data.token, 30);
        router.replace("/");
      })
      .catch(function (error) {
        setApiError(error.data?.message);
        console.log(error.data);
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

        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="admin@example.com"
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
          Sign in
        </Button>
      </Stack>
    </form>
  );
};
