import FormAddStudent from "@/components/pes-custom/forms/FormAddStudent";

export default async function AddStudentPage() {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Add a new student</h3>
      <FormAddStudent />
    </div>
  );
}
