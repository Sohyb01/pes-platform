import FormBookCall from "@/components/pes-custom/forms/FormBookACall";

export default async function BookACallPage() {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Fill out call information</h3>
      <FormBookCall />
    </div>
  );
}
