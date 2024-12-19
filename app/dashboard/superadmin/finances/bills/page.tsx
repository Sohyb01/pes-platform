import ExpensesBarChart from "@/components/pes-custom/platform-components/ExpensesBarChart";
import { billsColumns } from "@/components/pes-custom/table-columns/billsColumns";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";

interface Bill {
  chart_id: string;
  name: string;
  type: "Expense";
}

export const BILLS: Bill[] = [
  {
    chart_id: "1",
    name: "Gas",
    type: "Expense",
  },
  {
    chart_id: "2",
    name: "AWS",
    type: "Expense",
  },
];

const Bills = () => {
  return (
    <section className="dashboard-tab-wrapper gap-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-4">
          <Card>
            <CardHeader className="text-h3">Total Expenses</CardHeader>
            <CardContent>
              <ExpensesBarChart />
            </CardContent>
          </Card>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <Card>
            <CardHeader className="text-h3">Expenses Report</CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div>
                <p className="text-muted-foreground">Total Expenses Amount</p>
                <h3 className="text-h3">5,200$</h3>
              </div>

              <div>
                <p className="text-muted-foreground">
                  Total Remaining Expenses
                </p>
                <h3 className="text-h3">1,200$</h3>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1">
            <CardHeader className="text-h3">Upcoming Bills</CardHeader>
            <CardContent className="divide-y-2 max-h-[8rem] overflow-y-scroll flex flex-col gap-4">
              <div className="p-2 flex justify-between items-center">
                <div>
                  <p className="text-muted-foreground">Gas Bill</p>
                  <h3 className="text-h3">70$</h3>
                </div>
                <Button>Mark as Paid</Button>
              </div>
              <div className="p-2 flex justify-between items-center">
                <div>
                  <p className="text-muted-foreground">Gas Bill</p>
                  <h3 className="text-h3">70$</h3>
                </div>
                <Button>Mark as Paid</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <DataTable columns={billsColumns} data={BILLS} />
    </section>
  );
};

export default Bills;
