import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "@/components/NavBar/navBar";
import { Footer } from "@/components/Footer/footer";
import styles from './layout.module.less'

export const RootLayout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <main className={styles.contentLayout}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
