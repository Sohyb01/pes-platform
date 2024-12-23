"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DownloadAsPdfButton = ({ className }: { className?: string }) => {
  const handleOnClick = () => {
    const portfolio = document.getElementById("portfolio");
  };

  return (
    <Button onClick={handleOnClick} className={className}>
      <Download />
      Download as a PDF
    </Button>
  );
};

export default DownloadAsPdfButton;
