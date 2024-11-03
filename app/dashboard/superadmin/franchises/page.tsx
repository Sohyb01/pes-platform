async function getData(): Promise<null> {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return null;
}

export default async function ExampleDashboardPage() {
  const data = await getData();

  console.log(data);

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Franchises</h3>
    </div>
  );
}
