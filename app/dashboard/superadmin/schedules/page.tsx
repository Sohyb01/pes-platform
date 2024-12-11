import PESCalendar from "@/components/pes-custom/platform-components/PESCalendar";

const page = async () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Students</h3>
      <PESCalendar />
    </div>
  );
};

export default page;
