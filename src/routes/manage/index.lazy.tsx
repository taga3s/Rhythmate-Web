import { createLazyFileRoute } from "@tanstack/react-router";
import { SearchModalIsOpenProvider } from "../../features/common/contexts/searchModalIsOpenContext";
import { ContentLayout, Header, Menu } from "../../features/common/components";
import { ManagePresenter } from "../../features/manage/components/ManagePresenter";
import { AuthenticateWrapper } from "../../features/common/components/AuthenticateWrapper";

export const Route = createLazyFileRoute("/manage/")({
  component: () => <Manage />,
});

const Manage = () => {
  return (
    <AuthenticateWrapper>
      <SearchModalIsOpenProvider>
        <Header />
        <ContentLayout>
          <ManagePresenter />
        </ContentLayout>
        <Menu />
      </SearchModalIsOpenProvider>
    </AuthenticateWrapper>
  );
};
