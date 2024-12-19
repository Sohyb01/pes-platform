import FormAddBill from "@/components/pes-custom/forms/FormAddBill";
import { BILLS } from "../page";

interface EditBillProps {
  params: {
    billId: string;
  };
}

const getBillById = async (billId: string) => {
  const bill = BILLS.find((bill) => bill.chart_id === billId);
  return bill;
};

const EditBill = async ({ params: { billId } }: EditBillProps) => {
  const bill = await getBillById(billId);

  return (
    <section className="dashborad-tab-wrapper">
      <h2 className="text-h2">Edit Bill</h2>
      <FormAddBill editObj={bill} />
    </section>
  );
};

export default EditBill;
