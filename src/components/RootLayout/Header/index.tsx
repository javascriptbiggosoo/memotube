import { useState } from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";

import { isLoggedInState } from "../../../atoms/userAtoms";
import AboutModal from "./AboutModal";
import { isDescState } from "../../../atoms/descAtoms";
import AuthModal from "./AuthModal";

export default function Header() {
  const [isDesc, setIsDesc] = useRecoilState(isDescState);
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const [openHowTo, setOpenHowTo] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const matchProfile = useMatch("/profile");
  const matchBoard = useMatch("/board");
  const matchDemo = useMatch("/demo");

  const handleAboutClick = () => {
    setOpenHowTo((prev) => !prev);
  };
  const handleLoginClick = () => {
    setOpenLogin((prev) => !prev);
  };
  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDesc(event.target.checked);
  };

  return (
    <HeaderContainer component="header">
      <Nav component="nav">
        <Col>
          <FormControlLabel
            control={
              <Switch
                checked={isDesc}
                onChange={handleSwitchChange}
                color="primary"
              />
            }
            label={isDesc ? "설명 ON" : "설명 OFF"}
          />
        </Col>
        <Col>
          <Link to="/">
            {/* TODO: 서브셋폰트 */}
            Memotube
          </Link>
        </Col>
        <Col>
          <Items>
            <Item>
              <Link
                to="/demo"
                style={{ fontWeight: matchDemo ? "bold" : "normal" }}
              >
                데모
              </Link>
            </Item>

            <Item>
              <Link
                to="/board"
                style={{ fontWeight: matchBoard ? "bold" : "normal" }}
              >
                게시판
              </Link>
            </Item>
            <AboutModal
              open={openHowTo}
              handleClose={() => {
                setOpenHowTo(false);
              }}
            />
            {isLoggedIn ? (
              <Item>
                <Link
                  to="/profile"
                  style={{ fontWeight: matchProfile ? "bold" : "normal" }}
                >
                  내 프로필
                </Link>{" "}
              </Item>
            ) : (
              <Item onClick={handleLoginClick}>로그인</Item>
            )}
            <Item onClick={handleAboutClick}>사용법</Item>
            <AuthModal
              open={openLogin}
              handleClose={() => {
                setOpenLogin(false);
              }}
            />
          </Items>
        </Col>
      </Nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  top: 0;
  color: ${({ theme }) => theme.black.darker};
  /* background-color: rgba(0, 0, 0, 0); */
  z-index: 999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const Nav = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 16px 38px;
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
  color: gray;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.black.darker};
    cursor: pointer;
  }
`;
