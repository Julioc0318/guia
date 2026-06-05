/* banner.ts */
import BannerPath_1 from "@/assets/Banner/1.jpg";
import BannerPath_2 from "@/assets/Banner/2.jpg";
import BannerPath_3 from "@/assets/Banner/3.jpg";
import BannerPath_4 from "@/assets/Banner/4.jpg";

// 1. 👑 用 const 对象平替 BANNER_TITLE_ENUM
export const BANNER_TITLE_ENUM = {
  BANNER_1: "FIRST DAY IN COLEGIO DELIBES?",
  BANNER_2: "NEED LOCAL BANK ACC OR NUM?",
  BANNER_3: "NEED DOCUMENTS OFICIAL?",
  BANNER_4: "OLÉ! GO. SALAMANCA!",
};

// 2. 👑 用 const 对象平替 BANNER_DESC_ENUM
export const BANNER_DESC_ENUM = {
  BANNER_1: "WHAT SHOULD I DO FIRST?\nLET’S GET YOU SETTLED!",
  BANNER_2: "WE HAVE BEEN THROUGH THERE.\nAND KNOW ANYTHING.",
  BANNER_3: "STEP-BY-STEP GUIDES.\nTO HELP YOU GET IDENTITY.",
  BANNER_4: "WANNA EXPLORE THE CITY?\nHERE’S A GUIDE TO GET YOU STARTED.",
};

// 3. 动态提取类型（如果你需要将这些值作为单独的 TS 类型使用）
// 这行代码属于纯 TS 类型声明，打包时会被直接擦除，完美符合规则
export type BannerTitleType =
  (typeof BANNER_TITLE_ENUM)[keyof typeof BANNER_TITLE_ENUM];
export type BannerDescType =
  (typeof BANNER_DESC_ENUM)[keyof typeof BANNER_DESC_ENUM];

// 4. 修改你的全局 BANNER_TYPE 定义
export type BANNER_TYPE = {
  id: number;
  title: BannerTitleType; // 使用上面提取出的字面量类型
  desc: BannerDescType;
  src: string;
};

export const BANNER_SRC_ENUM = {
  BANNER_1: BannerPath_1,
  BANNER_2: BannerPath_2,
  BANNER_3: BannerPath_3,
  BANNER_4: BannerPath_4,
};
