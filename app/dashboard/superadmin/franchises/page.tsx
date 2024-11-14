"use client";
// Had to be marked as client component or vercel would not work

import { examplePendingFranchises } from "@/lib/data";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EyeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function ExampleDashboardPage() {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Franchise Applications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {examplePendingFranchises.map((franchise, idx) => {
          return (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>{franchise.applicant_name}</CardTitle>
                <CardDescription>{franchise.applicant_email}</CardDescription>
              </CardHeader>
              <CardContent className="line-clamp-3">
                {franchise.franchise_desired_location_city},{" "}
                {franchise.franchise_desired_location_country}
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
                      Franchising Application{" "}
                      <span className="text-muted-foreground pl-2">
                        {`${franchise.application_date.getUTCDate()}/${
                          franchise.application_date.getUTCMonth() + 1
                        }/${franchise.application_date.getFullYear()}`}
                      </span>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui">
                      <div className="text-muted-foreground">Name</div>
                      <div>{franchise.applicant_name}</div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui">
                      <div className="text-muted-foreground">Email</div>
                      <div>{franchise.applicant_email}</div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui">
                      <div className="text-muted-foreground">Whatsapp</div>
                      <div>{franchise.applicant_whatsapp}</div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui">
                      <div className="text-muted-foreground">Address</div>
                      <div>{franchise.applicant_address}</div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui">
                      <div className="text-muted-foreground">
                        Employment status
                      </div>
                      <div>{franchise.applicant_employment_status}</div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui">
                      <div className="text-muted-foreground">
                        Investment budget
                      </div>
                      <div>{franchise.applicant_investment_budget}</div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui">
                      <div className="text-muted-foreground">Has financing</div>
                      <div>
                        {franchise.applicant_has_financing ? "Yes" : "No"}
                      </div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui">
                      <div className="text-muted-foreground">
                        Planned location
                      </div>
                      <div>
                        {franchise.franchise_desired_location_city},{" "}
                        {franchise.franchise_desired_location_country}
                      </div>
                    </div>
                    {/* Additional info */}
                    <div className="col-span-1 md:col-span-2 text-large pt-4 border-t-border border-t-[1px]">
                      Additional information
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui col-span-1 md:col-span-2">
                      <div className="text-muted-foreground">
                        General business experience
                      </div>
                      <div>
                        {franchise.applicant_business_history
                          ? franchise.applicant_business_history_description
                          : "None provided"}
                      </div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui col-span-1 md:col-span-2">
                      <div className="text-muted-foreground">
                        Education business experience
                      </div>
                      <div>
                        {franchise.applicant_education_business_history
                          ? franchise.applicant_education_business_history_description
                          : "None provided"}
                      </div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui col-span-1 md:col-span-2">
                      <div className="text-muted-foreground">
                        Familiarity with competition in desired location
                      </div>
                      <div>
                        {franchise.applicant_knows_competition_in_location
                          ? franchise.applicant_knows_competition_in_location_description
                          : "None provided"}
                      </div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui col-span-1 md:col-span-2">
                      <div className="text-muted-foreground">
                        Reason for choosing PES
                      </div>
                      <div>{franchise.applicant_why_pes}</div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui col-span-1 md:col-span-2">
                      <div className="text-muted-foreground">
                        Applicant bankruptcy history
                      </div>
                      <div>
                        {franchise.applicant_was_bankrupt
                          ? franchise.applicant_was_bankrupt_description
                          : "None provided"}
                      </div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui col-span-1 md:col-span-2">
                      <div className="text-muted-foreground">
                        Applicant lawsuit involvement
                      </div>
                      <div>
                        {franchise.applicant_was_in_lawsuit
                          ? franchise.applicant_was_in_lawsuit_description
                          : "None provided"}
                      </div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui col-span-1 md:col-span-2">
                      <div className="text-muted-foreground">
                        Applicant was the necessary documents to start a
                        business
                      </div>
                      <div>
                        {franchise.applicant_has_necessary_documents
                          ? "Yes"
                          : "No"}
                      </div>
                    </div>
                    {/* Cell */}
                    <div className="flex flex-col gap-1 items-start text-start text-p_ui col-span-1 md:col-span-2">
                      <div className="text-muted-foreground">
                        Message from applicant
                      </div>
                      <div>
                        {franchise.applicant_message
                          ? franchise.applicant_message
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
