import { redirect } from "next/navigation";

export default function SuperAdminPage() {
  // Redirect to the 'finances' subpage
  redirect("/dashboard/student/schedule");
}
