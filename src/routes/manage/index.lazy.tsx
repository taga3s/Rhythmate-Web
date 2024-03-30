import { createLazyFileRoute } from "@tanstack/react-router";
import { SearchModalIsOpenProvider } from "../../features/common/contexts/searchModalIsOpenContext";
import { ContentLayout, Header, Menu } from "../../features/common/components";
import { ManagePresenter } from "../../features/manage/components/ManagePresenter";

export const Route = createLazyFileRoute("/manage/")({
  component: () => <Manage />,
});

const Manage = () => {
  return (
    <SearchModalIsOpenProvider>
      <Header />
      <ContentLayout>
        <ManagePresenter />
      </ContentLayout>
      <Menu />
    </SearchModalIsOpenProvider>
  );
};
