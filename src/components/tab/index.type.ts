export interface TabProps {
  menus: Menu[];
}

export type Menu = {
  id?: string | number;
  title: string;
  disabled?: boolean;
  active?: boolean;
  icon?: string;
};
