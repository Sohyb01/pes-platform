import FormAddClass from "@/components/pes-custom/forms/FormAddClass";

export default async function AddClassPage() {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Create a class</h3>
      <FormAddClass />
    </div>
  );
}
