"use server";
import { redirect } from "next/navigation";

// Redirect on server
export const redirectOnServer = (path: string) => {
  redirect(path);
};
