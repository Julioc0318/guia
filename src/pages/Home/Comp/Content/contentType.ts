import ContentPath_1 from "@/assets/Content/Colegio.png";
import ContentPath_2 from "@/assets/Content/BBVA.png";
import ContentPath_3 from "@/assets/Content/NIE.png";
import ContentPath_4 from "@/assets/Content/Travel.png";

export type CONTENT_TYPE = {
  id: number;
  title: ContentTitleType;
  desc: ContentrDescType;
  src: string;
  click: ContentClickType;
};

export const CONTENT_TITLE_ENUM = {
  CONTENT_1 : "CLASE",
  CONTENT_2 : "BANK",
  CONTENT_3 : "NIE",
  CONTENT_4 : "ABOOUT US",
}

export const CONTENT_DESC_ENUM= {
  CONTENT_1 : "Find your way around Salamanca and locate Colegio Delibes easily. Our campus is perfectly situated in the heart of this beautiful golden city, making it convenient for your daily commute and exploration.",
  CONTENT_2 : "Explore our diverse range of Spanish language programs designed for all proficiency levels. From intensive grammar workshops to specialized SIELE exam preparation, we have the perfect path for your learning goals.",
  CONTENT_3 : "Get your local finances sorted without the hassle. We provide a straightforward, step-by-step guide to choosing the right Spanish bank, preparing required documents, and successfully opening your student account.",
  CONTENT_4 : "Get to know the passionate and experienced educators at Colegio Delibes. Our friendly native teachers are fully dedicated to immersive language teaching and helping you adapt smoothly to life in Spain.",
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
export type ContentrDescType =
  (typeof CONTENT_DESC_ENUM)[keyof typeof CONTENT_DESC_ENUM];

  export type ContentClickType = (typeof CONTENT_CLICK_ENUM)[keyof typeof CONTENT_CLICK_ENUM]