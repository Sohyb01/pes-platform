import { TFormSchemaAddMaterial } from "@/lib/types-forms";
import React from "react";
import { M_Card } from "../motion/Shadcn-Motion-Components";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { exampleClasses, examplePrograms } from "@/lib/data";
import AttachmentsBadge from "./AttachmentsBadge";
import { getNameById } from "@/lib/getNameById";
import Link from "next/link";

const PESMaterialCard = ({
  material,
}: {
  material: TFormSchemaAddMaterial;
}) => {
  const pesClass = exampleClasses.find((c) => c.id == material.class_field);
  const program = examplePrograms.find(
    (p) => p.program_id == pesClass?.program_id
  );
  return (
    <Link href="#" className="w-full md:min-w-[300px] max-w-[480px]">
      <M_Card
        variants={VariantSlideInUp}
        initial="initial"
        animate="animate"
        className="w-full border-primary/50 hover:border-primary duration-100 rounded-[1rem]"
      >
        <CardHeader>
          <CardTitle className="flex justify-between text-h4">
            {material.name} 📝
          </CardTitle>
          <div className="text-muted-foreground">
            <p>
              {pesClass?.class_name} <br /> {pesClass?.class_times}
            </p>
            <div>Session: {getNameById(material.session_id, "Session")}</div>
          </div>
        </CardHeader>
        <CardContent className="text-subtle text-muted-foreground flex flex-col gap-2">
          {/* Attachments here */}
          <AttachmentsBadge attachment={material.attachment} />
          <div
            className={`text-center text-subtle pt-2 ${
              pesClass?.class_level == "Beginner"
                ? `text-muted-foreground`
                : pesClass?.class_level == "Intermediate"
                ? `text-secondary`
                : `text-primary`
            }`}
          >
            {program?.program_name} ({pesClass?.class_level})
          </div>
        </CardContent>
      </M_Card>
    </Link>
  );
};

export default PESMaterialCard;
