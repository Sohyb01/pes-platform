import {
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { certificatesData } from "@/lib/certificates";
import { examplePrograms } from "@/lib/data";
import { getNameById } from "@/lib/getNameById";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { TFormSchemaAddCertificate } from "@/lib/types-forms";
import { DownloadIcon } from "lucide-react";
import React from "react";
import { M_Card } from "../motion/Shadcn-Motion-Components";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const PESCertificateCard = ({
  certificate,
}: {
  certificate: TFormSchemaAddCertificate;
}) => {
  return (
    <M_Card
      variants={VariantSlideInUp}
      initial="initial"
      animate="animate"
      className="w-full md:max-w-[352px]"
    >
      <CardHeader>
        <div className="relative w-full aspect-video">
          <Image
            fill
            alt="Certificate"
            src={`/certificates/${certificatesData[0]?.id}.jpg`}
          />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>{getNameById(certificate.class_id, "Class")}</CardTitle>
        <CardDescription className="pt-2">
          {examplePrograms[0].program_name}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button variant="default" size="sm" className="w-full">
          <DownloadIcon />
          Download
        </Button>
      </CardFooter>
    </M_Card>
  );
};

export default PESCertificateCard;
