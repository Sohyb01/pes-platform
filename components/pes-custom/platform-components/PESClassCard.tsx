import { TFormSchemaAddClass } from "@/lib/types-forms";
import React from "react";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { VariantSlideInUp } from "@/lib/motion-constants";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

const PESClassCard = ({ pesClass }: { pesClass: TFormSchemaAddClass }) => {
  return (
    <Link
      className="flex-1 min-w-[340px] max-w-[480px]"
      href={`classes/${pesClass.id}`}
    >
      <M_Card
        variants={VariantSlideInUp}
        initial="initial"
        animate="animate"
        className="items-center border-primary/50 hover:border-primary duration-100 p-4"
      >
        <div>{pesClass.class_name}</div>
        <div className="flex gap-2 items-center stroke-muted-foreground text-muted-foreground pb-2">
          Mon 18:00, Thurs 15:00 📆
        </div>
        <div className="text-muted-foreground text-subtle w-full pt-2">
          <div>ENG. Ahmed Reda 👨‍🏫</div>
          <div>Creative Geniuses Program</div>
        </div>

        <div className="flex flex-col pt-4">
          <div className="text-muted-foreground text-subtle">Assignments</div>
          <div className="flex flex-wrap gap-2 gap-y-1 py-1">
            <Badge className="flex items-center gap-2 bg-success hover:bg-success w-fit">
              <CheckCircle size={16} className="stroke-success-foreground" />7
              Submitted
            </Badge>
            <Badge className="flex items-center gap-2 bg-destructive hover:bg-destructive w-fit">
              <X size={16} className="stroke-destructive-foreground" />3 Missed
            </Badge>
          </div>
        </div>
        {pesClass.classenddate < new Date() ? (
          <div className="pt-4">
            <Link
              href="#"
              className={`${buttonVariants({
                variant: "outline",
                size: "sm",
              })}`}
            >
              <ArrowLeft size={16} /> Certificate
            </Link>
          </div>
        ) : (
          <div className="pt-4">
            <Button disabled variant="outline" size="sm">
              Certificate unavailable
            </Button>
          </div>
        )}
        {/* Progress & Dates & Class level*/}
        <div className="pt-6">
          <div
            className={`text-center text-subtle ${
              pesClass.class_level == "Beginner"
                ? `text-muted-foreground`
                : pesClass.class_level == "Intermediate"
                ? `text-secondary`
                : `text-primary`
            }`}
          >
            Level: {pesClass.class_level}
          </div>
          <div className="flex justify-between px-0 text-muted-foreground text-detail">
            <span>
              {" Started " +
                pesClass.classbegindate.getUTCDate() +
                "/" +
                (pesClass.classbegindate.getMonth() + 1)}
            </span>
            <span>
              {" Ends " +
                pesClass.classenddate.getUTCDate() +
                "/" +
                (pesClass.classenddate.getMonth() + 1)}
            </span>
          </div>
          <Progress
            className="bg-muted mt-2 h-1"
            value={
              pesClass.classenddate < new Date() ? 100 : Math.random() * 100
            }
          />
        </div>
      </M_Card>
    </Link>
  );
};

export default PESClassCard;
