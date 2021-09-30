import DashboardShell from "@/components/dashboard/DashboardShell";
import EmptyState from "@/components/EmptyState";
import PageHeading from "@/components/common/PageHeading";
import PaperListItem from "@/components/papers/PaperListItem";

const Papers = () => {
  return (
    <DashboardShell>
      <PageHeading title="My Papers" btn="Create Test Paper" href="papers/create" />
      {/* <Flex minH="60vh" alignItems="center" justifyContent="center">
        <EmptyState />
      </Flex> */}

      <PaperListItem />
      <PaperListItem />
      <PaperListItem />
    </DashboardShell>
  );
};

export default Papers;
