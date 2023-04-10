import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Badge from "../component/Badge";

// export default function Register() {
//   const [firstname, setFirsname] = useState("");
//   const [lastname, setLastName] = useState("");
//   const [username, setUsername] = useState("");
//   const [mobileNo, setMobileNo] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [password2, setPassword2] = useState("");
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     if (
//       firstname !== "" &&
//       lastname !== "" &&
//       username !== "" &&
//       mobileNo !== "" &&
//       email !== "" &&
//       password !== "" &&
//       password === password2
//     ) {
//       setIsActive(true);
//     } else {
//       setIsActive(false);
//     }
//   }, [firstname, lastname, username, mobileNo, email, password, password2]);

//   const setRegister = (e) => {
//     e.preventDefault();
//     localStorage.setItem("email", email);
//     setEmail("");
//     setPassword("");
//   };
//   return (
//     <Container className="w-lg-50 w-75 m-auto">
//       <Badge />
//       <h1 className=" text-center">Create Account</h1>
//       <p className="text-center">
//         Already have an account? <a href="/signin">Sign In Here</a>
//       </p>
//       <form className="w-75 m-auto" onSubmit={setRegister}>
//         <div className="border-bottom mb-5">
//           <input
//             type="text"
//             placeholder="Firstname"
//             className="w-100 outline-none"
//             value={firstname}
//             onChange={(e) => setFirsname(e.target.value)}
//           />
//         </div>
//         <div className="border-bottom mb-5">
//           <input
//             type="text"
//             placeholder="Lastname"
//             className="w-100 outline-none"
//             value={lastname}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </div>
//         <div className="border-bottom mb-5">
//           <input
//             type="text"
//             placeholder="Username"
//             className="w-100 outline-none"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="border-bottom mb-5">
//           <input
//             type="text"
//             placeholder="MobileNo"
//             className="w-100 outline-none"
//             value={mobileNo}
//             onChange={(e) => setMobileNo(e.target.value)}
//           />
//         </div>
//         <div className="border-bottom mb-5">
//           <input
//             type="Email"
//             placeholder="Email"
//             className="w-100 outline-none"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="border-bottom mb-5">
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-100 outline-none"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="border-bottom mb-2">
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="w-100 outline-none"
//             value={password2}
//             onChange={(e) => setPassword2(e.target.value)}
//           />
//         </div>
//         <div className="w-100 text-center mt-5">
//           {isActive ? (
//             <Button type="submit" variant="secondary" className="w-25">
//               Enter
//             </Button>
//           ) : (
//             <Button
//               type="submit"
//               variant="outline-secondary"
//               className="w-25"
//               disabled
//             >
//               Enter
//             </Button>
//           )}
//         </div>
//       </form>
//     </Container>
//   );
// }

export function DesktopRegister() {
  const [firstname, setFirsname] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (
      firstname !== "" &&
      lastname !== "" &&
      username !== "" &&
      mobileNo !== "" &&
      email !== "" &&
      password !== "" &&
      password === password2
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [firstname, lastname, username, mobileNo, email, password, password2]);

  const setRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    setEmail("");
    setPassword("");
  };
  return (
    <Container className="w-100 mx-auto mb-5">
      <Badge />
      <h1 className=" text-center">Create Account</h1>
      <p className="text-center mb-5">
        Already have an account? <a href="/signin">Sign In Here</a>
      </p>
      <form className="w-50 m-auto" onSubmit={setRegister}>
        <div className="border-bottom mb-5">
          <input
            type="text"
            placeholder="Firstname"
            className="w-100 outline-none"
            value={firstname}
            onChange={(e) => setFirsname(e.target.value)}
          />
        </div>
        <div className="border-bottom mb-5">
          <input
            type="text"
            placeholder="Lastname"
            className="w-100 outline-none"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="border-bottom mb-5">
          <input
            type="text"
            placeholder="Username"
            className="w-100 outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="border-bottom mb-5">
          <input
            type="text"
            placeholder="MobileNo"
            className="w-100 outline-none"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </div>
        <div className="border-bottom mb-5">
          <input
            type="Email"
            placeholder="Email"
            className="w-100 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="border-bottom mb-5">
          <input
            type="password"
            placeholder="Password"
            className="w-100 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="border-bottom mb-2">
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-100 outline-none"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
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

export function PhoneRegister() {
  const [firstname, setFirsname] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (
      firstname !== "" &&
      lastname !== "" &&
      username !== "" &&
      mobileNo !== "" &&
      email !== "" &&
      password !== "" &&
      password === password2
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [firstname, lastname, username, mobileNo, email, password, password2]);

  const setRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    setEmail("");
    setPassword("");
  };
  return (
    <Container className="100 mx-auto pb-5 mb-5">
      <Badge />
      <h1 className=" text-center">Create Account</h1>
      <p className="text-center">
        Already have an account? <a href="/signin">Sign In Here</a>
      </p>
      <form className="w-75 m-auto" onSubmit={setRegister}>
        <div className="border-bottom mb-5">
          <input
            type="text"
            placeholder="Firstname"
            className="w-100 outline-none"
            value={firstname}
            onChange={(e) => setFirsname(e.target.value)}
          />
        </div>
        <div className="border-bottom mb-5">
          <input
            type="text"
            placeholder="Lastname"
            className="w-100 outline-none"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="border-bottom mb-5">
          <input
            type="text"
            placeholder="Username"
            className="w-100 outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="border-bottom mb-5">
          <input
            type="text"
            placeholder="MobileNo"
            className="w-100 outline-none"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </div>
        <div className="border-bottom mb-5">
          <input
            type="Email"
            placeholder="Email"
            className="w-100 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="border-bottom mb-5">
          <input
            type="password"
            placeholder="Password"
            className="w-100 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="border-bottom mb-2">
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-100 outline-none"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
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
