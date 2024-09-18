import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../types";

const sidebarRoutesGenerator = (items: TUserPath[]) => {
  const SidebarItem = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.element) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return acc;
  }, []);
  return SidebarItem;
};

export default sidebarRoutesGenerator;
