import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";

export default function Logout() {
  localStorage.clear();
  return <Navigate to="/" />;
}
