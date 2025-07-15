import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import type { RootState } from "../../Store";
import type { MenuItem } from "../../Type/Type";
import { AuthMenu, menus, ROUTES } from "../../Utility/CommonContant";
import { Messages } from "../../Utility/CommonMessages";
import { logout } from "../SiginComponent/SiginSlice";

const TopNavbar = () => {
  const location = useLocation().pathname;
  const user = useSelector((state: RootState) => state.Auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = (link: string, e: React.MouseEvent) => {
    if (link === "/logout") {
      e.preventDefault();
      dispatch(logout());
      navigate(ROUTES.login);
    }
  };
  const renderLinks = (menu: MenuItem, index: number) => {
    return (
      <Navbar.Text className="ms-4 me-3" key={index}>
        <Nav.Link
          as={Link}
          to={menu.link}
          onClick={(e) => handleLogout(menu.link, e)}
        >
          {menu.name}
        </Nav.Link>
      </Navbar.Text>
    );
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Travel Explorer</Navbar.Brand>
        <Nav className="me-auto">
          {menus.map((menuItems, index) => {
            const isActive = location === menuItems.link;
            return (
              <Nav.Link
                as={Link}
                key={index}
                to={menuItems.link}
                className={isActive ? "active" : ""}
              >
                {menuItems.name}
              </Nav.Link>
            );
          })}
        </Nav>
      </Container>

      <Navbar.Collapse className="justify-content-end">
        {user && (
          <Navbar.Text>
            {Messages.menu.Hi.value}{" "}
            <a
              onClick={() => {
                navigate(ROUTES.profile, { state: { user } });
              }}
            >
              {user?.username}
            </a>
          </Navbar.Text>
        )}
        {AuthMenu.map((menuItems, index) => {
          if (menuItems.link === "/login" && !user) {
            return renderLinks(menuItems, index);
          }
          if (menuItems.link !== "/login" && user) {
            return renderLinks(menuItems, index);
          }
        })}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
