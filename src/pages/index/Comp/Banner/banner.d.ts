import BannerPath_1 from "@/assets/Banner/1.jpg";
import BannerPath_2 from "@/assets/Banner/2.jpg";
import BannerPath_3 from "@/assets/Banner/3.jpg";
import BannerPath_4 from "@/assets/Banner/4.jpg";

export type BANNER_TYPE = {
  id: number;
  title: BANNER_TITLE_ENUM;
  desc: BANNER_DESC_ENUM;
  src: BANNER_SRC_ENUM;
};
export enum BANNER_TITLE_ENUM {
    BANNER_1 = "WELCOME TO SALAMANCA",
    BANNER_2 = "NEW TO COLEGIO DELIBES",
    BANNER_3 = "NO MORE PANIC",
    BANNER_4 = "GO. SALAMANCA",
}

export enum BANNER_DESC_ENUM {
    BANNER_1 = "What should I do first? Let’s get you settled!",
    BANNER_2 = "Meet your teachers, master your Spanish, and nail that SIELE exam.",
    BANNER_3 = "Step-by-step guides for housing, TIE appointments, and city survival.",
    BANNER_4 = "From Plaza Mayor to Roman Bridge, your golden city adventure starts now.",
}

export enum BANNER_SRC_ENUM {
    BANNER_1 = BannerPath_1,
    BANNER_2 = BannerPath_2,
    BANNER_3 = BannerPath_3,
    BANNER_4 = BannerPath_4,
}