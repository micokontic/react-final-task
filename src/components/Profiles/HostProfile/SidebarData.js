import * as GoIcons from "react-icons/go";
import * as AiIcons from "react-icons/ai";
import * as MiIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Add Adventure",
    path: "/",
    icon: <AiIcons.AiOutlineFolderAdd />,
    cName: "nav-text",
  },
  {
    title: "Update Adventure",
    path: "/",
    icon: <MiIcons.MdBuild />,
    cName: "nav-text",
  },
  {
    title: "Delete Adventure",
    path: "/",
    icon: <AiIcons.AiFillDelete />,
    cName: "nav-text",
  },
  {
    title: "Show Statistics",
    path: "/",
    icon: <GoIcons.GoGraph />,
    cName: "nav-text",
  },
];
