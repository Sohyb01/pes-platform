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
import PESMaterialCard from "@/components/pes-custom/platform-components/PESMaterialCard";

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
          href="materials/new"
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
      <Tabs defaultValue="PES Materials" className="w-full">
        <TabsList className="flex gap-4 bg-background border-b-[1px] border-b-muted rounded-none mb-4 justify-start flex-wrap h-fit">
          <TabsTrigger className="tab-trigger" value="PES Materials">
            PES Materials
          </TabsTrigger>
          <TabsTrigger className="tab-trigger" value="Your Materials">
            Your Materials
          </TabsTrigger>
        </TabsList>
        <TabsContent value="PES Materials">
          <div className="flex gap-4 flex-wrap">
            {exampleMaterials.map((material, idx) => {
              return <PESMaterialCard material={material} key={idx} />;
            })}
          </div>
        </TabsContent>
        <TabsContent value="Your Materials">
          <div className="flex gap-4 flex-wrap">
            {exampleMaterials.map((material, idx) => {
              return <PESMaterialCard material={material} key={idx} />;
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
