import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Logo } from "./Home";
import Badge from "../component/Badge";
import { useState, useEffect } from "react";
import "../App.css";

export function DesktopLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (email !== "" && password !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [email, password]);

  const setLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    setEmail("");
    setPassword("");
  };
  return (
    <Container fluid>
      <h1 className="text-center mt-5">Login</h1>
      <p className="text-center mb-5">
        Don't have an Account? <a href="/signup">SignUp Here</a>
      </p>
      <form className="w-50 m-auto" onSubmit={setLogin}>
        <div className="border-bottom mb-5">
          <input
            type="email"
            placeholder="Email"
            className="w-100 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="border-bottom mb-2">
          <input
            type="password"
            placeholder="Password"
            className="w-100 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <a href="/signin" className="text-left">
          Forgot password?
        </a>
        <div className="w-100 text-center mt-5">
          {isActive ? (
            <Button type="submit" variant="secondary" className="w-25">
              Enter
            </Button>
          ) : (
            <Button
              type="submit"
              variant="outline-secondary"
              className="w-25"
              disabled
            >
              Enter
            </Button>
          )}
        </div>
      </form>
    </Container>
  );
}

export function PhoneLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (email !== "" && password !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [email, password]);

  const setLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    setEmail("");
    setPassword("");
  };
  return (
    <Container fluid>
      <Logo />
      <Badge />
      <h1 className="text-center">Login</h1>
      <p className="text-center">
        Don't have an Account? <a href="/signup">SignUp Here</a>
      </p>
      <form className="w-75 m-auto mb-5 pb-5">
        <div className="border-bottom mb-5">
          <input
            type="email"
            placeholder="Email"
            className="w-100 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="border-bottom mb-2">
          <input
            type="password"
            placeholder="Password"
            className="w-100 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <a href="/signin" className="text-left">
          Forgot password?
        </a>
        <div className="w-100 text-center mt-5">
          {isActive ? (
            <Button type="submit" variant="secondary" className="w-25 mb-5">
              Enter
            </Button>
          ) : (
            <Button
              type="submit"
              variant="outline-secondary"
              className="w-25 mb-5"
              disabled
            >
              Enter
            </Button>
          )}
        </div>
      </form>
    </Container>
  );
}
