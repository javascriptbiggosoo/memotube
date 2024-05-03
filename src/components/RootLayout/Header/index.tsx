import { Link, useMatch } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { isLoggedInState } from "../../../atoms/user";
import { useState } from "react";
import AboutModal from "./AboutModal";

export default function Header() {
  const navAnimation = useAnimation();
  const AuthPage = useMatch("/login");
  const ProfilePage = useMatch("/profile");
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const [open, setOpen] = useState(false);

  const handleAboutClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Container>
      <Nav
        initial={{ backgroundColor: "rgba(0,0,0,0)" }}
        animate={navAnimation}
      >
        <Col>
          <Link to="/">메모튜브</Link>
        </Col>
        <Col>
          <Items>
            <Item onClick={handleAboutClick}>About</Item>
            <AboutModal
              open={open}
              handleClose={(ev) => {
                if (ev.target !== ev.currentTarget) return;
                console.log("야");
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

const Container = styled.header`
  position: relative;
  align-items: center;
  width: 100vw;
  top: 0;
  color: ${(props) => props.theme.black.darker};
  /* background-color: rgba(0, 0, 0, 0); */
  z-index: 999;
`;
const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  padding: 20px 60px;
`;
const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;
const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.black.lighter};
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.black.darker};
    cursor: pointer;
  }
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
