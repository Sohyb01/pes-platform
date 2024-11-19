import FormAddCertificate from "@/components/pes-custom/forms/FormAddCertificate";
import { exampleCertificates } from "@/lib/data";
import React from "react";

const EditPage = ({ params }: { params: { editId: string } }) => {
  const certificate = exampleCertificates.find(
    (certificate) => certificate.certificate_id === params.editId
  );
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Editing certificate</h3>
      <FormAddCertificate editObj={certificate} />
    </div>
  );
};

export default EditPage;
