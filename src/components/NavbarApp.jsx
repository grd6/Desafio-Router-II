import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import imgNabar from "../assets/pokemon-23.svg";

const NavbarApp = () => {
  const setActiveClass = ({ isActive }) =>
    isActive
      ? "text-danger mt-2 pe-2 text-decoration-none"
      : "text-white mt-2 pe-2 text-decoration-none";
  return (
    <>
      <Navbar expand="lg" className="bg-dark">
        <Container className="f-flex">
          <Navbar.Brand href="#home" className="text-white">
            <img src={imgNabar} className="imgNabar"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Nav>
            <NavLink to="/" className={setActiveClass} flex>
              Home
            </NavLink>
            <NavLink to="/Pokemones" className={setActiveClass}>
              Pokemones
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarApp;
