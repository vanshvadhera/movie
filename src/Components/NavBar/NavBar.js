import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const Logininfo = JSON.parse(localStorage.getItem("LoginInfo"));
  const logoutHandler = () => {
    localStorage.removeItem("LoginInfo");
    if(localStorage.getItem("MovieInfo"))
    {
      localStorage.removeItem("MovieInfo");
    }
    if(localStorage.getItem("bookings"))
    {
      localStorage.removeItem("bookings");
    }
    window.location.reload();
  };
  console.log(Logininfo);
  return (
    <div>
      <Navbar  collapseOnSelect expand='sm' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MovieTime</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {Logininfo && (
              <Navbar.Text>
                Signed in as:{Logininfo.email}
                <Link to='/'>
                <Button
                  className="ms-3"
                  variant="outline-danger"
                  onClick={logoutHandler}
                >
                  Logout
                </Button>
                </Link>
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
