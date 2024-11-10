import { TFormSchemaPendingFranchise } from "@/lib/types-forms";
import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";

const PartnershipDownloadPDFButton = (
  franchise: TFormSchemaPendingFranchise
) => {
  return (
    <Document>
      <Page>
        <View>
          <Text>{franchise.applicant_email}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PartnershipDownloadPDFButton;
