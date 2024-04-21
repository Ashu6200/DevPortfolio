"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const AdminProtected = ({ children }) => {
  const { data: session } = useSession();
  const userSession = localStorage.getItem("protofolio")
    ? JSON.parse(localStorage.getItem("protofolio"))
    : null;
  const pass = userSession || session
  if (pass) {
    const isAdmin = pass.user.isAdmin;
    return isAdmin ? children : redirect("/");
  }
};
export const Protected = ({ children }) => {
  const userSession = localStorage.getItem("protofolio")
    ? JSON.parse(localStorage.getItem("protofolio"))
    : null;
  const { data: session } = useSession();
  const pass = userSession || session
  return pass ? children : redirect("/authentication");
};
