import FormAddTransaction from "@/components/pes-custom/forms/FormAddTransaction";
import { TRANSACTIONS } from "../page";

interface EditBillProps {
  params: {
    transactionId: string;
  };
}

const getTransactionById = async (transactionId: string) => {
  const transaction = TRANSACTIONS.find(
    (curTransaction) => curTransaction.transaction_id === transactionId
  );
  return transaction;
};

const EditTransaction = async ({
  params: { transactionId },
}: EditBillProps) => {
  const transaction = await getTransactionById(transactionId);

  return (
    <section className="dashborad-tab-wrapper">
      <h2 className="text-h2">Edit Transaction</h2>
      <FormAddTransaction editObj={transaction} />
    </section>
  );
};

export default EditTransaction;
