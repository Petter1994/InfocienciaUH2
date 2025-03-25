import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Artículos",
    path: "/posts",
    newTab: false,
  },
  {
    id: 2,
    title: "Centros",
    path: "/center",
    newTab: true,
  },
];
export default menuData;
