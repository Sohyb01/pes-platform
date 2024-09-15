"use client";

import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function DashboadBreadcrumb() {
  // Get the current pathname
  const pathname = usePathname();
  // Split the pathname and get the last segment
  const URLSegments = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb className="py-1.5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="capitalize" href={`/${URLSegments[0]}`}>
            {URLSegments[0]}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink className="capitalize" href={`/${URLSegments[2]}`}>
            {URLSegments[URLSegments.length - 1]}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
