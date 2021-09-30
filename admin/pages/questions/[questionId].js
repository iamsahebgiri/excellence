import DashboardShell from "@/components/dashboard/DashboardShell";
import axios from "@/utils/axios";
import { Button, useToast } from "@chakra-ui/react";
import config from "config/config";
import { useRouter } from "next/router";
import useSWR from "swr";

const ViewQuestion = () => {
  const router = useRouter();
  const { questionId } = router.query;
  const { data, error } = useSWR(
    questionId !== undefined
      ? `${config.API_URL}/questions/${questionId}`
      : null
  );

  const toast = useToast();

  const deleteQuestion = async () => {
    try {
      const res = await axios.delete(
        `${config.API_URL}/questions/${questionId}`
      );
      if (res.status === 204) {
        toast({
          title: "Question deleted successfully",
          description: "Your question has been deleted.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        router.replace("/questions");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  console.log(data);

  return (
    <DashboardShell>
      {JSON.stringify(data, null, 1)}
      <br />
      <Button size="sm" colorScheme="red" onClick={deleteQuestion}>
        Delete
      </Button>
    </DashboardShell>
  );
};

export default ViewQuestion;
