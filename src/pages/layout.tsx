import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/RootLayout/Header";
import { Container } from "@mui/material";
import styled from "styled-components";
import FixedButton from "../components/RootLayout/FixedButton";

export default function RootLayout() {
  return (
    <>
      <Header />
      <FixedButton />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </>
  );
}

const ContentContainer = styled(Container)`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
