import FormAddExam from "@/components/pes-custom/forms/FormAddExam";

export default async function AddExamPage() {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Create a exam</h3>
      <FormAddExam />
    </div>
  );
}
