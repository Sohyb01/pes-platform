import { TFormSchemaPendingPartnership } from "@/lib/types-forms";
import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";

const PendingPartnershipPDF = (partnership: TFormSchemaPendingPartnership) => {
  return (
    <Document>
      <Page>
        <View>
          <Text>{partnership.applicant_email}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PendingPartnershipPDF;
