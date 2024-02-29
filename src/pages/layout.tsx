import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/RootLayout/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
