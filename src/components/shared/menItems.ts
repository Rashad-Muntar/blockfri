import { ImProfile } from "react-icons/im";
import {
  MdOutlineSpaceDashboard,
  MdScreenSearchDesktop,
  MdHistoryEdu,
} from "react-icons/md";
import { AiOutlineBarChart } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { GiTrade } from "react-icons/gi";

export const menusItems = [
  {
    id: 0,
    name: "Profile",
    icon: ImProfile,
  },
  {
    id: 1,
    name: "Dashboard",
    icon: MdOutlineSpaceDashboard
  },
  {
    id: 2,
    name: "You strategy",
    icon: AiOutlineBarChart
  },
  {
    id: 3,
    name: "search",
    icon: MdScreenSearchDesktop
  },
  {
    id: 4,
    name: "Leaders",
    icon: RiTeamLine
  },
  {
    id: 5,
    name: "Support service",
    icon:  MdScreenSearchDesktop
  },
  {
    id: 6,
    name: "History",
    icon: MdHistoryEdu
  }
  ,{
    id: 7,
    name: "Trade",
    icon: GiTrade
  }
];
