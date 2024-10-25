import FormAddParent from "@/components/pes-custom/forms/FormAddParent";

export default async function NewParentPage() {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Add a new parent</h3>
      <FormAddParent />
    </div>
  );
}
