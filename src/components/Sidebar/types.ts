export type MenuItemType = {
  name: string;
  link: string;
  icon: any;
  margin: boolean;
};

export type SidebarProps = {
  menuItems: MenuItemType[];
  initialOpenState: boolean;
};
