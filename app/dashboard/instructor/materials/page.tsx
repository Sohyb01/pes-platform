import { exampleMaterials } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import {
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { PenIcon } from "@/components/pes-custom/icons/PenIcon";
import { DownloadIcon, PlusIcon } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { BadgeLink } from "@/components/pes-custom/platform-components/BadgeLink";
import { Separator } from "@/components/ui/separator";

async function getData() {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return exampleMaterials;
}

export default async function EmployeesPage() {
  const data = await getData();
  console.log(data);

  return (
    <div className="dashboard-tab-wrapper">
      <div className="flex w-full justify-between">
        <h3 className="text-h3">Materials</h3>
        <Link
          href="/dashboard/instructor/materials/new"
          className={`${buttonVariants({
            variant: "outline",
            size: "sm",
          })} flex gap-1 items-center w-fit`}
        >
          <PlusIcon size={16} />
          Add
        </Link>
      </div>
      {/* Tabs */}
      <Tabs defaultValue="Your Materials" className="w-full">
        <TabsList className="flex gap-4 bg-background border-b-[1px] border-b-muted rounded-none mb-4 justify-start flex-wrap h-fit">
          <TabsTrigger className="tab-trigger" value="Your Materials">
            Your Materials
          </TabsTrigger>
          <TabsTrigger className="tab-trigger" value="Other Materials">
            Other Materials
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Your Materials">
          <div className="flex gap-4 flex-wrap">
            {exampleMaterials.map((material, idx) => {
              return (
                <M_Card
                  variants={VariantSlideInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: idx * 0.05 }} // Custom delay for each item
                  key={idx}
                  className="w-full max-w-[250px]"
                >
                  <CardHeader>
                    <CardTitle className="flex justify-between">
                      Material Name 📝
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {material.class_field}
                    </p>
                  </CardHeader>
                  <CardContent className="text-subtle text-muted-foreground flex flex-col gap-2">
                    {material.attachment ? (
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <BadgeLink href="#" className="w-fit">
                            Attachments 📂
                          </BadgeLink>
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
                  </CardContent>
                  <CardFooter className="flex flex-col text-subtle text-muted-foreground w-full">
                    <div className="flex flex-col pt-4 pb-2 w-full">
                      <div>1082 downloads</div>
                    </div>
                    <Link
                      href={`/dashboard/instructor/materials/${material.id}`}
                      className={`${buttonVariants({
                        variant: "outline",
                        size: "sm",
                      })} w-full`}
                    >
                      <PenIcon />
                      View / Edit
                    </Link>
                  </CardFooter>
                </M_Card>
              );
            })}
          </div>
        </TabsContent>
        <TabsContent value="Other Materials">
          <div className="flex gap-4 flex-wrap">
            {exampleMaterials.map((material, idx) => {
              return (
                <M_Card
                  variants={VariantSlideInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: idx * 0.05 }} // Custom delay for each item
                  key={idx}
                  className="w-full max-w-[250px]"
                >
                  <CardHeader>
                    <CardTitle className="flex justify-between">
                      Material Name 📝
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {material.class_field}
                    </p>
                  </CardHeader>
                  <CardContent className="text-subtle text-muted-foreground flex flex-col gap-2">
                    {material.attachment ? (
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <BadgeLink href="#" className="w-fit">
                            Attachments 📂
                          </BadgeLink>
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
                  </CardContent>
                  <CardFooter className="flex flex-col text-subtle text-muted-foreground w-full">
                    1082 downloads
                  </CardFooter>
                </M_Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
