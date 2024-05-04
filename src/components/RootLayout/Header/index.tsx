import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { isLoggedInState } from "../../../atoms/user";
import { useState } from "react";
import AboutModal from "./AboutModal";
import { Box } from "@mui/material";

export default function Header() {
  const AuthPage = useMatch("/login");
  const ProfilePage = useMatch("/profile");
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const [open, setOpen] = useState(false);

  const handleAboutClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Container component="header">
      <Nav component="nav">
        <Col>
          <Link to="/">메모튜브</Link>
        </Col>
        <Col>
          <Items>
            <Item>demo</Item>
            <Item onClick={handleAboutClick}>About</Item>
            <AboutModal
              open={open}
              handleClose={() => {
                setOpen(false);
              }}
            />
            {/* <Item>둘러보기</Item> */}

            <Item>
              {isLoggedIn ? (
                <Link
                  to="/profile"
                  style={{ fontWeight: ProfilePage ? "bold" : "normal" }}
                >
                  내 프로필
                </Link>
              ) : (
                <Link
                  to="/login"
                  style={{ fontWeight: AuthPage ? "bold" : "normal" }}
                >
                  로그인
                </Link>
              )}
            </Item>
          </Items>
        </Col>
      </Nav>
    </Container>
  );
}

const Container = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  top: 0;
  color: ${({ theme }) => theme.black.darker};
  /* background-color: rgba(0, 0, 0, 0); */
  z-index: 999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;
const Nav = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 20px 60px;
  width: 100%;
`;
const Col = styled(Box)`
  display: flex;
  align-items: center;
`;

const Items = styled(Box)`
  display: flex;
  align-items: center;
`;
const Item = styled(Box)`
  margin-right: 20px;
  color: ${(props) => props.theme.black.lighter};
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.black.darker};
    cursor: pointer;
  }
`;
