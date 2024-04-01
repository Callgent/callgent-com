export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  curTab?: boolean;
  submenu?: Menu[];
  mobel?: boolean,
  langs?: boolean;
  description?: string;
  isLogin?: boolean;
};

export type LanguageOption = {
  lng: string;
  label: string;
}
