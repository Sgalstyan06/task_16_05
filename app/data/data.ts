export type MenuItemType = {
  label: string;
  url: string;
};

export type MenuType = MenuItemType & {
  subMenu: MenuItemType[] | null;
};

export const menuData: MenuType[] = [
  {
    label: "Demos",
    url: "",
    subMenu: [
      { label: "Demos Header", url: "" },
      { label: "Demos Layout", url: "" },
      { label: "Share Buttons", url: "" },
      { label: "Gallery Demos", url: "" },
      { label: "Video Demos", url: "" },
    ],
  },
  {
    label: "Post",
    url: "",
    subMenu: [
      { label: "Post Header", url: "" },
      { label: "Post Layout", url: "" },
      { label: "Share Buttons", url: "" },
      { label: "Gallery Post", url: "" },
      { label: "Video Post", url: "" },
    ],
  },
  {
    label: "Categories",
    url: "",
    subMenu: [
      { label: "Header", url: "" },
      { label: "Layout", url: "" },
      { label: "Buttons", url: "" },
      { label: "Categories", url: "" },
    ],
  },
  {
    label: "Shop",
    url: "",
    subMenu: [
      { label: "Shop Header", url: "" },
      { label: "Shop Layout", url: "" },
      { label: "Share Buttons", url: "" },
      { label: "Gallery Shop", url: "" },
      { label: "Video Shop", url: "" },
    ],
  },
  { label: "Buy Now", url: "", subMenu: null },
];
