import {
  Alert,
  AlertIcon,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { PasswordField } from "./PasswordField";
import { useStoreActions, useStoreState } from "easy-peasy";

export const RegisterForm = () => {
  const { error, isSubmitting } = useStoreState((state) => state.auth);
  const registerUser = useStoreActions((actions) => actions.auth.register);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    registerUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="6">
        {error && (
          <Alert status="error" rounded="md">
            <AlertIcon />
            {error}
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
