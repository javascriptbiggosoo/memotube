import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";

import { isLoggedInState } from "../../../atoms/user";
import { useState } from "react";
import AboutModal from "./AboutModal";
import { Box, FormControlLabel, Switch } from "@mui/material";
import { isDescState } from "../../../atoms/desc";

export default function Header() {
  const [isDesc, setIsDesc] = useRecoilState(isDescState);
  const [openHowTo, setOpenHowTo] = useState(false);
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const AuthPage = useMatch("/login");
  const ProfilePage = useMatch("/profile");

  const handleAboutClick = () => {
    setOpenHowTo((prev) => !prev);
  };
  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDesc(event.target.checked);
  };

  return (
    <Container component="header">
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
              <Link to="/demo">데모</Link>
            </Item>
            <Item onClick={handleAboutClick}>사용법</Item>
            <AboutModal
              open={openHowTo}
              handleClose={() => {
                setOpenHowTo(false);
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
  min-width: 140px; // 설명 온오프 스위치 너비 고려
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
