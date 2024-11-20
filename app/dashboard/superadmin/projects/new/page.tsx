import FormAddProject from "@/components/pes-custom/forms/FormAddProject";

export default async function AddExamPage() {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Add a project</h3>
      <FormAddProject />
    </div>
  );
}
