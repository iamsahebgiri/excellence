import DashboardShell from "@/components/DashboardShell";
import PageHeading from "@/components/PageHeading";
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
