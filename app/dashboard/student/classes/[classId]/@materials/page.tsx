import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button, buttonVariants } from "@/components/ui/button";
import { exampleMaterials } from "@/lib/data";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { getNameById } from "@/lib/getNameById";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@radix-ui/react-separator";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";

const getMaterials = async () => {
  return exampleMaterials;
};

const Materials = async () => {
  const materials = await getMaterials();

  return (
    <div className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Card */}
      {materials.map((material, idx) => {
        return (
          <M_Card
            variants={VariantSlideInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: idx * 0.05 }} // Custom delay for each item
            key={idx}
            className="bg-background"
          >
            <CardHeader>
              <CardTitle>{material.name}</CardTitle>
              <CardDescription className="gap-2 pt-2">
                <span>{getNameById(material.class_field, "Class")}</span>
                <br />
                <span>
                  {getNameById(material.instructor_id, "Employee")} 👨‍🏫
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                {material.attachment ? (
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="w-fit py-2 px-4 border-secondary/50 hover:border-secondary duration-100 border-[1px] rounded-[0.5rem] text-detail cursor-pointer">
                        Attachments 📂
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-60 text-subtle flex flex-col gap-2">
                      {material.attachment.map(
                        (
                          attachment: { name: string; size: number },
                          idx: number
                        ) => {
                          return (
                            <Link
                              key={idx}
                              href="#"
                              className={`flex items-center w-full gap-2 !justify-start ${buttonVariants(
                                { variant: "outline", size: "sm" }
                              )}`}
                            >
                              {attachment.name} 📁
                              <DownloadIcon className="ml-auto" size={16} />
                            </Link>
                          );
                        }
                      )}
                      {material.attachment.length > 1 && (
                        <>
                          <Separator className="my-1" />
                          <Link
                            key={idx}
                            href="#"
                            className={`flex items-center w-full gap-2 ${buttonVariants(
                              { variant: "outline", size: "sm" }
                            )}`}
                          >
                            Download all ({material.attachment.length})
                          </Link>
                        </>
                      )}
                    </HoverCardContent>
                  </HoverCard>
                ) : (
                  <div className="w-fit focus:outline-none flex gap-2 items-center stroke-foreground rounded-[3px] border p-2 text-badge font-semibold transition-colors border-border bg-shade opacity-50">
                    No attachments
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button variant="default" size="sm" className="w-full">
                <DownloadIcon />
                Download
              </Button>
            </CardFooter>
          </M_Card>
        );
      })}
    </div>
  );
};

export default Materials;
