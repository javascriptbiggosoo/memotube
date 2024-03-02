import { Link, useMatch } from "react-router-dom";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "../../../atoms/user";

const NavVariants = {
  top: { backgroundColor: "rgba(0,0,0,0)" },
  scroll: { backgroundColor: "rgba(0,0,0,1)" },
};

export default function Header() {
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();
  const AuthPage = useMatch("/login");
  const ProfilePage = useMatch("/profile");
  const isLoggedIn = useRecoilValue(isLoggedInState);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", scrollY);
    if (latest > 0) {
      navAnimation.start(NavVariants.scroll);
    } else {
      navAnimation.start(NavVariants.top);
    }
    // console.log("Page scroll: ", latest);
  });

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
            <Item>
              <Link to="/about">About</Link>
            </Item>
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
    font-weight: bold;
  }
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
