export enum NavBarActiveTabEnum {
  Home = 0,
  Clase = 1,
  Bank = 2,
  AboutUs = 3,
}

export enum NavBarActiveTabPath {
  Home = "/",
  Clase = "/clase",
  Bank = "/bank",
  AboutUs = "/aboutUs",
}

export enum NavBarActiveTabName {
  Home = "HOME",
  Clase = "CLASE",
  Bank = "BANK",
  AboutUs = "ABOUT US",
}

export const NavBarList = [
  {
    key: "Home",
    name: NavBarActiveTabName.Home,
    path: NavBarActiveTabPath.Home,
  },
  {
    key: "Clase",
    name: NavBarActiveTabName.Clase,
    path: NavBarActiveTabPath.Clase,
  },
  {
    key: "Bank",
    name: NavBarActiveTabName.Bank,
    path: NavBarActiveTabPath.Bank,
  },
  {
    key: "AboutUs",
    name: NavBarActiveTabName.AboutUs,
    path: NavBarActiveTabPath.AboutUs,
  },
];
