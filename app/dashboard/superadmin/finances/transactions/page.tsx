import { transactionsColumns } from "@/components/pes-custom/table-columns/transactionsColumns";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Calendar, Coins, User } from "lucide-react";

interface Transaction {
  transaction_id: string;
  date: Date;
  type: "Expense";
  amount: number;
  description: string;
  chart_id: string;
}

export const TRANSACTIONS = [
  {
    transaction_id: "1",
    date: new Date(),
    type: "Expense",
    amount: 400,
    description: "Gas Bill",
    chart_id: "1",
  },
] as Transaction[];

const Transactions = () => {
  return (
    <section className="dashboard-tab-wrapper gap-4">
      <Card>
        <CardHeader className="text-h3">Latest Transactions</CardHeader>
        <CardContent className="max-h-[16rem] overflow-y-scroll divide-y-2 flex flex-col gap-4">
          {[...new Array(4)].fill(0).map((_, idx) => (
            <div
              key={idx}
              className="p-4 flex flex-col md:flex-row items-center gap-4"
            >
              <div className="rounded-full bg-black p-2 size-12">
                <User className="size-full object-contain" />
              </div>
              <div className="space-y-2">
                <h4 className="text-h4">Transaction Description</h4>
                <p className="text-muted-foreground">Transaction Type</p>
                <div className="grid md:grid-cols-2 gap-2">
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Calendar size={16} /> Transaction Date: 2024-12-30
                  </p>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Coins size={16} /> Amount: 150$
                  </p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <DataTable columns={transactionsColumns} data={TRANSACTIONS} />
    </section>
  );
};

export default Transactions;
