import FormAddSchedule from "@/components/pes-custom/forms/FormAddSchedule";

export default async function AddStudentPage() {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Schedule a new event</h3>
      <FormAddSchedule />
    </div>
  );
}
