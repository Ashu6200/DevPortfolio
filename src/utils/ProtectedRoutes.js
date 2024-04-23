"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const AdminProtected = ({ children }) => {
  const d = useSession();
  let data = null;
  if (d) {
    data = d.data;
  }
  if (data) {
    const isAdmin = data.user.isAdmin;
    return isAdmin ? children : redirect("/");
  }
};
export const Protected = ({ children }) => {
  const d = useSession();
  let data = null;
  if (d) {
    data = d.data;
  }
  return data ? children : redirect("/authentication");
};
