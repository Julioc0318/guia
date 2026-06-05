import ContentPath_1 from "@/assets/Banner/1.jpg";
import ContentPath_2 from "@/assets/Banner/2.jpg";
import ContentPath_3 from "@/assets/Banner/3.jpg";
import ContentPath_4 from "@/assets/Banner/4.jpg";

export type CONTENT_TYPE = {
  id: number;
  title: ContentTitleType;
  desc: ContentrDescType;
  src: string;
  click: ContentClickType;
};

export const CONTENT_TITLE_ENUM = {
  CONTENT_1 : "COLLEGE",
  CONTENT_2 : "DOCUMENT",
  CONTENT_3 : "BANK",
  CONTENT_4 : "TEL NUM",
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
  CONTENT_1 : "https://www.colegiodelibes.es/",
  CONTENT_2 : "/guide?keyword=document",
  CONTENT_3 : "/guide?keyword=bank",
  CONTENT_4 : "/guide?keyword=telephoneNumber",
}

export type ContentTitleType =
  (typeof CONTENT_TITLE_ENUM)[keyof typeof CONTENT_TITLE_ENUM];
export type ContentrDescType =
  (typeof CONTENT_DESC_ENUM)[keyof typeof CONTENT_DESC_ENUM];

  export type ContentClickType = (typeof CONTENT_CLICK_ENUM)[keyof typeof CONTENT_CLICK_ENUM]