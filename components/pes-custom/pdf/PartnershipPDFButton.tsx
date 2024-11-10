"use client";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Loader2, DownloadIcon } from "lucide-react";
import { useState, useEffect } from "react";
import PendingPartnershipPDF from "./PendingPartnershipPDF";
import { Button } from "@/components/ui/button";

import React from "react";
import { examplePendingPartnerships } from "@/lib/data";

const PartnershipPDFButton = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <PDFDownloadLink
      fileName="Test"
      document={<PendingPartnershipPDF {...examplePendingPartnerships[0]} />}
    >
      <Button className="gap-2 items-center" variant="default" size="sm">
        <DownloadIcon size={16} />
        Download application
      </Button>
    </PDFDownloadLink>
  ) : (
    <Loader2 className="animate-spin" />
  );
};

export default PartnershipPDFButton;
