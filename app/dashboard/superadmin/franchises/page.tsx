"use client";

import { examplePendingFranchises } from "@/lib/data";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FranchisePDFButton from "@/components/pes-custom/pdf/FranchisePDFButton";

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
                {franchise.franchise_desired_location_city},
                {franchise.franchise_desired_location_country}
              </CardContent>
              <CardFooter className="flex justify-between">
                <FranchisePDFButton />
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
