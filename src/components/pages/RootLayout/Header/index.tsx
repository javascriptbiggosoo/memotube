import { useState } from "react";
import { Box } from "@mui/material";
import { Link, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import { currentUserState } from "../../../../atoms/userAtoms";
// import AboutModal from "./AboutModal";
import AuthModal from "./AuthModal";
import { removeItem } from "../../../../utils/localStorage";

export default function Header() {
  // const [openHowTo, setOpenHowTo] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const matchBoard = useMatch("/board");
  const matchMylist = useMatch("/mylist");
  const navigate = useNavigate();

  // const handleAboutClick = () => {
  //   setOpenHowTo((prev) => !prev);
  // };
  const handleLoginClick = () => {
    setOpenLogin((prev) => !prev);
  };

  const logout = () => {
    removeItem("token");
    setCurrentUser(null);
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  return (
    <HeaderContainer component="header">
      <Nav component="nav">
        <Col>
          <Link to="/">
            <svg
              width="200"
              height="50"
              viewBox="0 0 200 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0"
                y="0"
                width="200"
                height="50"
                rx="10"
                ry="10"
                fill="#87CEEB"
              />

              <polygon points="15,10 15,40 40,25" fill="#ffffff" />

              <text
                x="50"
                y="32"
                font-family="Arial, sans-serif"
                font-size="24"
                fill="#ffffff"
              >
                MemoTube
              </text>
            </svg>
          </Link>
        </Col>
        <Col>
          <Items>
            <Item>
              <Link
                to="/board"
                style={{ fontWeight: matchBoard ? "bold" : "normal" }}
              >
                게시판
              </Link>
            </Item>
            {currentUser && (
              <Item>
                <Link
                  to="/mylist"
                  style={{ fontWeight: matchMylist ? "bold" : "normal" }}
                >
                  마이리스트
                </Link>
              </Item>
            )}
            {/* <AboutModal
              open={openHowTo}
              handleClose={() => {
                setOpenHowTo(false);
              }}
            /> */}
            {currentUser ? (
              <Item onClick={logout}>로그아웃</Item>
            ) : (
              <Item onClick={handleLoginClick}>로그인</Item>
            )}
            {/* <Item onClick={handleAboutClick}>사용법</Item> */}
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
  min-width: 800px;
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
