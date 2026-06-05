import ContentPath_1 from "@/assets/Content/Colegio.png";
import ContentPath_2 from "@/assets/Content/BBVA.png";
import ContentPath_3 from "@/assets/Content/NIE.png";
import ContentPath_4 from "@/assets/Content/Travel.png";

export type CONTENT_TYPE = {
  id: number;
  title: ContentTitleType;
  src: string;
  click: ContentClickType;
};

export const CONTENT_TITLE_ENUM = {
  CONTENT_1 : "home.content.Clase",
  CONTENT_2 : "home.content.Bank",
  CONTENT_3 : "home.content.NIE",
  CONTENT_4 : "home.content.aboutUs",
}

export const CONTENT_SRC_ENUM =  {
  CONTENT_1 :ContentPath_1,
  CONTENT_2 : ContentPath_2,
  CONTENT_3 : ContentPath_3,
  CONTENT_4 : ContentPath_4,
}

export const CONTENT_CLICK_ENUM = {
  CONTENT_1 : "/clase",
  CONTENT_2 : "/bank",
  CONTENT_3 : "",
  CONTENT_4 : "",
}

export type ContentTitleType =
  (typeof CONTENT_TITLE_ENUM)[keyof typeof CONTENT_TITLE_ENUM];
  export type ContentClickType = (typeof CONTENT_CLICK_ENUM)[keyof typeof CONTENT_CLICK_ENUM]

  export const CONTENT_LIST: CONTENT_TYPE[] = [
  {
    id: 1,
    title: CONTENT_TITLE_ENUM.CONTENT_1,
    src: CONTENT_SRC_ENUM.CONTENT_1,
    click: CONTENT_CLICK_ENUM.CONTENT_1,
  },
  {
    id: 2,
    title: CONTENT_TITLE_ENUM.CONTENT_2,
    src: CONTENT_SRC_ENUM.CONTENT_2,
    click: CONTENT_CLICK_ENUM.CONTENT_2,
  },
  {
    id: 3,
    title: CONTENT_TITLE_ENUM.CONTENT_3,
    src: CONTENT_SRC_ENUM.CONTENT_3,
    click: CONTENT_CLICK_ENUM.CONTENT_3,
  },
  {
    id: 4,
    title: CONTENT_TITLE_ENUM.CONTENT_4,
    src: CONTENT_SRC_ENUM.CONTENT_4,
    click: CONTENT_CLICK_ENUM.CONTENT_4,
  },
];