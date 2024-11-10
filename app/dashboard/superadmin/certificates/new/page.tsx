import FormAddCertificate from "@/components/pes-custom/forms/FormAddCertificate";

export default async function NewAssignmentPage() {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Generate a Certificate</h3>
      <FormAddCertificate />
    </div>
  );
}
