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
    BANNER_1 = "FIRST DAY IN COLEGIO DELIBES?",
    BANNER_2 = "NEED LOCAL BANK ACC OR NUM?",
    BANNER_3 = "NEED DOCUMENTS OFICIAL?",
    BANNER_4 = "OLÉ! GO. SALAMANCA!",
}

export enum BANNER_DESC_ENUM {
    BANNER_1 = "WHAT SHOULD I DO FIRST?\nLET’S GET YOU SETTLED!",
    BANNER_2 = "WE HAVE BEEN THROUGH THERE.\nAND KNOW ANYTHING.",
    BANNER_3 = "STEP-BY-STEP GUIDES.\nTO HELP YOU GET IDENTITY.",
    BANNER_4 = "WANNA EXPLORE THE CITY?\nHERE’S A GUIDE TO GET YOU STARTED.",
}

export enum BANNER_SRC_ENUM {
    BANNER_1 = BannerPath_1,
    BANNER_2 = BannerPath_2,
    BANNER_3 = BannerPath_3,
    BANNER_4 = BannerPath_4,
}