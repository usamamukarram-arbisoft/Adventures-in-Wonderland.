import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import type { RootState } from "../../Store";
import type { MenuItem } from "../../Type/Type";
import { AUTHMENU, MENUS, ROUTES } from "../../Utility/CommonContant";
import { Messages } from "../../Utility/CommonMessages";
import Search from "../Search/Search";
import { logout } from "../SiginComponent/SiginSlice";

const TopNavbar = () => {
  const location = useLocation().pathname;
  const user = useSelector((state: RootState) => state.Auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavClick = (link: string, event: React.MouseEvent) => {
    event.preventDefault();

    if (link === ROUTES.logout) {
      dispatch(logout());
      navigate(ROUTES.login);
      return;
    }

    navigate(link);
  };

  const renderLinks = (menu: MenuItem, index: number) => (
    <Nav.Link
      key={index}
      as={Link}
      to={menu.link}
      onClick={(event) => handleNavClick(menu.link, event)}
    >
      {menu.name}
    </Nav.Link>
  );

  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      className="py-2 position-relative"
    >
      <Container fluid className="position-relative">
        <Navbar.Brand as={Link} to={ROUTES.home}>
          {Messages.navbar.siteName.value}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {MENUS.map((menuItems, index) => {
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
          <Search />
          <Nav className="my-2 my-lg-0">
            {user && (
              <Nav.Link className="me-3 text-white">
                {Messages.menu.Hi.value}{" "}
                <a
                  style={{
                    cursor: "pointer",
                    color: "#fff",
                    textDecoration: "underline",
                  }}
                  onClick={() => navigate(ROUTES.profile, { state: { user } })}
                >
                  {user.username}
                </a>
              </Nav.Link>
            )}
            {AUTHMENU.map((menuItems, index) => {
              if (menuItems.link === "/login" && !user) {
                return renderLinks(menuItems, index);
              }
              if (menuItems.link !== "/login" && user) {
                return renderLinks(menuItems, index);
              }
              return null;
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
