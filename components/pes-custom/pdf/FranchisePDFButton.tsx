"use client";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Loader2, DownloadIcon } from "lucide-react";
import { useState, useEffect } from "react";
import PendingFranchisePDF from "./PendingFranchisePDF";
import { Button } from "@/components/ui/button";

import React from "react";
import { examplePendingFranchises } from "@/lib/data";

const FranchisePDFButton = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <PDFDownloadLink
      fileName="Test"
      document={<PendingFranchisePDF {...examplePendingFranchises[0]} />}
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

export default FranchisePDFButton;
