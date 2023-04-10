import { DesktopNavBar, PhoneNavBar } from "./component/AppNavbar";
import Home from "./pages/Home";
import { DesktopLogin, PhoneLogin } from "./pages/Login";
import { DesktopRegister, PhoneRegister } from "./pages/Register";
import Logout from "./pages/Logout";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./UserContext";
import { useMediaQuery } from "react-responsive";
export default function App() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 992px)",
  });

  const [user, setUser] = useState({
    email: localStorage.getItem("email"),
  });
  const unsetUser = () => {
    localStorage.clear();
  };

  return (
    <>
      <UserProvider value={(user, setUser, unsetUser)}>
        <Router>
          {isDesktop ? <DesktopNavBar /> : <PhoneNavBar />}
          <Container fluid>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/signin"
                element={isDesktop ? <DesktopLogin /> : <PhoneLogin />}
              ></Route>
              <Route
                path="/signup"
                element={isDesktop ? <DesktopRegister /> : <PhoneRegister />}
              ></Route>
              <Route path="/logout" element={<Logout />}></Route>
            </Routes>
          </Container>
        </Router>
      </UserProvider>
    </>
  );
}
