"use client";

import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function SuperadminDashboadBreadcrumb() {
  // Get the current pathname
  const pathname = usePathname();
  // Split the pathname and get the last segment
  const URLSegments = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb className="py-1.5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="capitalize" href="/dashboard/superadmin">
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink
            className="capitalize"
            href={`/${URLSegments[0]}/${URLSegments[1]}/${URLSegments[2]}`}
          >
            {URLSegments[2]}
          </BreadcrumbLink>
        </BreadcrumbItem>
        {URLSegments[3] && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className="capitalize"
                href={`/${URLSegments[0]}/${URLSegments[1]}/${URLSegments[2]}/${URLSegments[3]}`}
              >
                {URLSegments[3]}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        {URLSegments[4] && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className="capitalize"
                href={`/${URLSegments[0]}/${URLSegments[1]}/${URLSegments[2]}/${URLSegments[3]}/${URLSegments[4]}`}
              >
                {URLSegments[4]}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        {URLSegments[5] && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className="capitalize"
                href={`/${URLSegments[0]}/${URLSegments[1]}/${URLSegments[2]}/${URLSegments[3]}/${URLSegments[4]}/${URLSegments[5]}`}
              >
                {URLSegments[5]}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
