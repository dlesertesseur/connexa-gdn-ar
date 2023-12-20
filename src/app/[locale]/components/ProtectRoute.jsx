"use client";
import { useUserContext } from "@/app/context/UserContext";

const ProtectRoute = ({ dashboard, signin }) => {
  const { user } = useUserContext();
  const ret = user ? dashboard : signin;
  return (ret);
};

export default ProtectRoute;
