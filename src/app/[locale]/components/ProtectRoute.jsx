"use client";
import { useUserContext } from "@/app/context/UserContext";

const ProtectRoute = ({ children, signin }) => {
  const { user } = useUserContext();
  const ret = user ? children : signin;
  return (ret);
};

export default ProtectRoute;
