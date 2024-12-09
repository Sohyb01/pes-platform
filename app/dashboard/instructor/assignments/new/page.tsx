import FormAddAssignment from "@/components/pes-custom/forms/FormAddAssignment";

export default async function NewAssignmentPage() {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Add an assignment</h3>
      <FormAddAssignment />
    </div>
  );
}
