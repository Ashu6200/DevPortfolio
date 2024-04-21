"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const AdminProtected = ({ children }) => {
  const { data: session } = useSession();
  const pass = session
  if (pass) {
    const isAdmin = pass.user.isAdmin;
    return isAdmin ? children : redirect("/");
  }
};
export const Protected = ({ children }) => {
  const { data: session } = useSession();
  const pass = session
  return pass ? children : redirect("/authentication");
};
