import DashboardShell from "@/components/DashboardShell";
import { useRouter } from "next/router";

const SinglePaper = () => {
  const router = useRouter();
  const { paperId } = router.query;
  return <DashboardShell>{paperId}</DashboardShell>;
};

export default SinglePaper;
