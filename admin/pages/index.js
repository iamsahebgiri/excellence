import DashboardShell from "@/components/dashboard/DashboardShell";
import PageHeading from "@/components/common/PageHeading";
import { useStoreState } from "easy-peasy";

const Index = () => {
  const { user } = useStoreState((state) => state.auth);
  return (
    <DashboardShell>
      <PageHeading title={`Welcome back, ${user?.name}`} />
    </DashboardShell>
  );
};

export default Index;
