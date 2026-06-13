export enum NavBarActiveTabEnum {
  Home = 0,
  Clase = 1,
  Guide = 2,
  AboutUs = 3,
}

export enum NavBarActiveTabPath {
  Home = "/",
  Clase = "/clase",
  Guide = "/guideList",
  AboutUs = "/aboutUs",
}

export enum NavBarActiveTabName {
  Home = "nav.home",
  Clase = "nav.clase",
  Guide = "nav.guide",
  AboutUs = "nav.aboutUs",
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
    key: "Guide",
    name: NavBarActiveTabName.Guide,
    path: NavBarActiveTabPath.Guide,
  },
  // {
  //   key: "AboutUs",
  //   name: NavBarActiveTabName.AboutUs,
  //   path: NavBarActiveTabPath.AboutUs,
  // },
];
