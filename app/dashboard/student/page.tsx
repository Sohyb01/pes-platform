import { redirect } from "next/navigation";

export default async function Student() {
  redirect("/dashboard/student/home");
}
