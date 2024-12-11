import { redirect } from "next/navigation";

const ParentDashboard = () => {
    return redirect("/dashboard/parent/home");
};

export default ParentDashboard;
