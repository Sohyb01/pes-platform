import { redirect } from "next/navigation";

const NotFound = () => redirect("/dashboard/parent/quizzes");

export default NotFound;
