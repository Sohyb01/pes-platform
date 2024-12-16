import { redirect } from "next/navigation";

export default function InstructorPage() {
  // Redirect to the 'finances' subpage
  redirect("/dashboard/instructor/home");
}
