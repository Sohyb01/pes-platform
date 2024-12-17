import { redirect } from "next/navigation";

const Default = () => {
  return redirect("/dashboard/parent/quizzes");
};

export default Default;
