import FormAddMaterial from "@/components/pes-custom/forms/FormAddMaterial";

export default async function ExampleDashboardPage() {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Upload new material</h3>
      <FormAddMaterial />
    </div>
  );
}
