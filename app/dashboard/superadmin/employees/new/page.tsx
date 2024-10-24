import AddEmployeeForm from "@/components/pes-custom/forms/FormAddEmployee";

export default async function EmployeesPage() {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Add a new employee</h3>
      <AddEmployeeForm />
      {/* <FormAddInstructor /> */}
    </div>
  );
}
