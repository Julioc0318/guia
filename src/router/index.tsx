/* src/router/index.tsx */
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "@/pages/Home/Home";
import { Guide } from "@/pages/Guide/Guide";
import { Contact } from "@/pages/Contact/Contact";
import { RootLayout } from "@/components/Layout";
import { Clase } from "@/pages/Clase";

const baseName = import.meta.env.BASE_URL;

export const router = createBrowserRouter(
  [
    {
      path: "/", // 对应首页 (域名/仓库名/)
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/clase", // 对应介绍页 (域名/仓库名/introduce)
          element: <Clase />,
        },
        {
          path: "/bank", // 对应指南页 (域名/仓库名/guide)
          element: <Guide />,
        },
        {
          path: "/aboutUs", // 对应联系页 (域名/仓库名/contact)
          element: <Contact />,
        },
        {
          // 防御性设计：如果输入不存在的地址，精准重定向回首页
          path: "*",
          element: <Navigate to="/" replace />,
        },
      ],
    },
  ],
  {
    basename: baseName, // 完美的灵魂绑定
  },
);
