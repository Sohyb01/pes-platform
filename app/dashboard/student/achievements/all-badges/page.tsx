import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Award, ChevronUp, CircleHelp } from "lucide-react";

const AllBadges = () => {
  return (
    <section className="dashboard-tab-wrapper">
      <h2 className="text-h2">All Badges</h2>
      {/* Class Badges */}
      <Collapsible defaultOpen>
        <div className="flex item-center justify-between mb-4">
          <h3 className="text-h3">
            Class Badges{" "}
            <span className="text-p font-normal text-muted-foreground">
              (6/12 Unlocked)
            </span>
          </h3>
          <CollapsibleTrigger asChild className="group">
            <Button size="icon">
              <ChevronUp
                className="group-data-[state=open]:rotate-180 transition-all"
                size={24}
              />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="flex gap-8 flex-wrap">
            {[...new Array(6)].fill(0).map((_, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center justify-center bg-shade border rounded-full px-7 py-4">
                  <Award size={64} />
                  <h4 className="text-h4 text-card-foreground">Badge</h4>
                </div>
              </div>
            ))}
            {[...new Array(6)].fill(0).map((_, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4">
                <div className="overflow-hidden relative flex flex-col items-center justify-center bg-shade border rounded-full px-7 py-4">
                  <Award size={64} />
                  <h4 className="text-h4 text-card-foreground">Badge</h4>
                  <div className="absolute inset-0 bg-background opacity-60"></div>
                  <div className="absolute inset-0 z-10">
                    <CircleHelp className="shadow shadow-black p-8 size-full object-center" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Exam Badges */}
      <Collapsible defaultOpen>
        <div className="flex item-center justify-between mb-4">
          <h3 className="text-h3">
            Exam Badges{" "}
            <span className="text-p font-normal text-muted-foreground">
              (6/12 Unlocked)
            </span>
          </h3>
          <CollapsibleTrigger asChild className="group">
            <Button size="icon">
              <ChevronUp
                className="group-data-[state=open]:rotate-180 transition-all"
                size={24}
              />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="flex gap-8 flex-wrap">
            {[...new Array(6)].fill(0).map((_, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center justify-center bg-shade border rounded-full px-7 py-4">
                  <Award size={64} />
                  <h4 className="text-h4 text-card-foreground">Badge</h4>
                </div>
              </div>
            ))}
            {[...new Array(6)].fill(0).map((_, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4">
                <div className="overflow-hidden relative flex flex-col items-center justify-center bg-shade border rounded-full px-7 py-4">
                  <Award size={64} />
                  <h4 className="text-h4 text-card-foreground">Badge</h4>
                  <div className="absolute inset-0 bg-background opacity-60"></div>
                  <div className="absolute inset-0 z-10">
                    <CircleHelp className="shadow shadow-black p-8 size-full object-center" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </section>
  );
};

export default AllBadges;
