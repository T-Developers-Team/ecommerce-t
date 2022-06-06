import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

export const LayoutView = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
