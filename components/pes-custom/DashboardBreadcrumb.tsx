"use client";

import Link from "next/link";
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
          <BreadcrumbLink>
            <Link className="capitalize" href={`/${URLSegments[0]}`}>
              {URLSegments[0]}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link className="capitalize" href={`/${URLSegments[2]}`}>
              {URLSegments[URLSegments.length - 1]}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
