import {
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { certificatesData } from "@/lib/certificates";
import { examplePrograms } from "@/lib/data";
import { getNameById } from "@/lib/getNameById";
import { TFormSchemaAddCertificate } from "@/lib/types-forms";
import { DownloadIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PESCertificateCard = ({
  certificate,
}: {
  certificate: TFormSchemaAddCertificate;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:border-primary transition bg-background/80 relative overflow-hidden">
          <CardHeader></CardHeader>
          <CardContent className="pointer-events-none relative z-10">
            <CardTitle>{getNameById(certificate.class_id, "Class")}</CardTitle>
            <CardDescription className="pt-2">
              {examplePrograms[0].program_name}
            </CardDescription>
          </CardContent>
          <CardFooter className="relative z-10 flex flex-col gap-2">
            <Button variant="default" size="sm" className="w-full">
              <DownloadIcon />
              Download
            </Button>
          </CardFooter>

          {/* Background */}
          <div className="opacity-15 absolute inset-0 w-full min-h-[12rem]">
            <Image
              alt="Certificate"
              src={`/certificates/${certificatesData[0]?.id}.jpg`}
              height={0}
              width={0}
              sizes="100vw"
              className="size-full object-cover"
            />
          </div>
        </Card>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-h3">Certificate Preview 📜</DialogTitle>
        </DialogHeader>
        <div>
          <div className="ring rounded-lg overflow-hidden w-full min-h-[16rem]">
            <Image
              alt="Certificate"
              src={`/certificates/${certificatesData[0]?.id}.jpg`}
              height={0}
              width={0}
              sizes="100vw"
              className="size-full object-contain"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PESCertificateCard;
