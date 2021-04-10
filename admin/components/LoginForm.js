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
import { useStoreState, useStoreActions } from "easy-peasy";

export const LoginForm = () => {
  const { error, isSubmitting } = useStoreState((state) => state.auth);
  const login = useStoreActions((actions) => actions.auth.login);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    login(data);
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
