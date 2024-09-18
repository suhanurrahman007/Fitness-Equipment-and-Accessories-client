import { Menu } from "antd";
import sidebarRoutesGenerator from "../../utils/sidebarRoutesGenerator";
import { paths } from "../../routes/path.routes";
import { Header } from "antd/es/layout/layout";
import logo from "../../assets/logo/Bodybuilding-and-gym-logo-on-transparent-background-PNG.png";
import { BellOutlined, UserOutlined } from "@ant-design/icons";

const HeaderItem = () => {
  const sidebarItems = sidebarRoutesGenerator(paths);
  return (
    <Header className="flex items-center bg-[#001529] px-5 shadow-md z-10">
      <img
        src={logo}
        alt="Logo"
        className="w-12 h-12 mr-4 ml-6 rounded-full border-2 border-white shadow-md transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={sidebarItems}
        className="flex-1 min-w-0 text-base font-medium tracking-wide ml-20"
      />
      <div className="flex items-center gap-5">
        <BellOutlined className="text-white text-xl" />
        <UserOutlined className="text-white text-xl" />
      </div>
    </Header>
  );
};

export default HeaderItem;
