"use client";
// Had to be marked as client component or vercel would not work

import { examplePendingPartnerships } from "@/lib/data";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { EyeIcon } from "lucide-react";

export default function ExampleDashboardPage() {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Partnership Applications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {examplePendingPartnerships.map((partnership, idx) => {
          return (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>{partnership.applicant_organization}</CardTitle>
                <CardDescription>{partnership.applicant_name}</CardDescription>
              </CardHeader>
              <CardContent className="line-clamp-3">
                {partnership.partnership_description}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="flex gap-2 items-center"
                      size="sm"
                      variant="outline"
                    >
                      <EyeIcon size={16} /> View Details
                    </Button>
                  </DialogTrigger>
                  {/* Dialogue content start */}
                  <DialogContent className="grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-[80vw] lg:max-w-screen-md gap-y-6 max-h-[90vh] overflow-y-scroll md:p-8">
                    <div className="text-large col-span-1 md:col-span-2">
                      Partnership Application{" "}
                      <span className="text-muted-foreground pl-2">
                        {`${partnership.application_date.getUTCDate()}/${
                          partnership.application_date.getUTCMonth() + 1
                        }/${partnership.application_date.getFullYear()}`}
                      </span>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui">
                      <div className="text-muted-foreground">Organization</div>
                      <div>{partnership.applicant_organization}</div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui">
                      <div className="text-muted-foreground">Position</div>
                      <div>{partnership.applicant_position}</div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui">
                      <div className="text-muted-foreground">Name</div>
                      <div>{partnership.applicant_name}</div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui">
                      <div className="text-muted-foreground">Email</div>
                      <div>{partnership.applicant_email}</div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui">
                      <div className="text-muted-foreground">Whatsapp</div>
                      <div>{partnership.applicant_whatsapp}</div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui">
                      <div className="text-muted-foreground">Address</div>
                      <div>{partnership.applicant_address}</div>
                    </div>
                    {/* Additional info */}
                    <div className="col-span-1 md:col-span-2 text-large pt-4 border-t-border border-t-[1px]">
                      Partnership details
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui">
                      <div className="text-muted-foreground">
                        Proposed start date
                      </div>
                      <div>{`${partnership.partnership_start_date.getDay()}/${partnership.partnership_start_date.getMonth()}/${partnership.partnership_start_date.getFullYear()}`}</div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui">
                      <div className="text-muted-foreground">
                        Proposed duration
                      </div>
                      <div>{partnership.partnership_duration}</div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui">
                      <div className="text-muted-foreground">
                        Partnership type
                      </div>
                      <div>{partnership.partnership_type}</div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui col-span-1 md:col-span-2">
                      <div className="text-muted-foreground">Description</div>
                      <div>{partnership.partnership_description}</div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui col-span-1 md:col-span-2">
                      <div className="text-muted-foreground">Goals</div>
                      <div>{partnership.partnership_goals}</div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui col-span-1 md:col-span-2">
                      <div className="text-muted-foreground">
                        Requirements from PES
                      </div>
                      <div>{partnership.partnership_requirements}</div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui col-span-1 md:col-span-2">
                      <div className="text-muted-foreground">
                        Message from applicant
                      </div>
                      <div>
                        {partnership.applicant_message
                          ? partnership.applicant_message
                          : "None provided"}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
