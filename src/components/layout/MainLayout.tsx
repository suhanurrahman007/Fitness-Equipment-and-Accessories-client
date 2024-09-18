import { Layout, Breadcrumb } from "antd";
import { Outlet, Link, useLocation } from "react-router-dom";
import HeaderItem from "./Header";

const { Content, Footer } = Layout;

const MainLayout = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSnippets.length - 1;

    return (
      <Breadcrumb.Item key={url}>
        {!isLast ? (
          <Link to={url}>{pathSnippets[index]}</Link>
        ) : (
          pathSnippets[index]
        )}
      </Breadcrumb.Item>
    );
  });

  return (
    <Layout>
      <HeaderItem />
      <Content className="px-12">
        <Breadcrumb className="my-4">
          <Breadcrumb.Item key="home">
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          {breadcrumbItems}
        </Breadcrumb>
        <div className="min-h-[280px] p-6">
          <Outlet />{" "}
        </div>
      </Content>
      <Footer className="text-center">
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MainLayout;
