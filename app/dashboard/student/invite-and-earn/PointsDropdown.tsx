"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Bookmark,
  EllipsisVertical,
  HandHelping,
  Handshake,
  Mail,
} from "lucide-react";
import { useState } from "react";

const PointsDropdown = () => {
  const [howItWorksSheetOpen, setHowItWorksSheetOpen] = useState(false);
  const [termsSheetOpen, setTermsSheetOpen] = useState(false);

  return (
    <div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} size="icon">
            <EllipsisVertical size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => setHowItWorksSheetOpen(true)}
            className="cursor-pointer"
          >
            How it Works
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTermsSheetOpen(true)}
            className="cursor-pointer"
          >
            {"Terms & Conditions"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* How it works sheet */}
      <Sheet open={howItWorksSheetOpen} onOpenChange={setHowItWorksSheetOpen}>
        <SheetContent>
          <SheetHeader className="mb-8">
            <SheetTitle className="text-h3">
              How to <span className="text-primary">earn more points?</span>
            </SheetTitle>
          </SheetHeader>
          <ul className="space-y-8">
            <li className="flex items-center gap-4">
              <div className="relative rounded-lg p-4 bg-primary/20">
                <Mail className="text-primary" />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-primary w-0.5 h-8" />
              </div>
              <div>
                <h4 className="text-h4">Invite a friend</h4>
                <p className="text-small text-muted-foreground">
                  Share the invite and book a free demo for your friend.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className="relative rounded-lg p-4 bg-secondary/20">
                <Handshake className="text-secondary" />
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-secondary w-0.5 h-10" />
              </div>
              <div>
                <h4 className="text-h4">They Join the Demo</h4>
                <p className="text-small text-muted-foreground">
                  Ask your friend to join the demo and win 100 points. 🎯
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className="relative rounded-lg p-4 bg-success/20">
                <Bookmark className="text-success" />
              </div>
              <div>
                <h4 className="text-h4">They Enroll</h4>
                <p className="text-small text-muted-foreground">
                  {
                    "On each enrollment earn 9 gems & they get 20% discount on their enrollment."
                  }
                </p>
              </div>
            </li>
          </ul>
        </SheetContent>
      </Sheet>

      {/* Terms & Conditions sheet */}
      <Sheet open={termsSheetOpen} onOpenChange={setTermsSheetOpen}>
        <SheetContent>
          <SheetHeader className="mb-4">
            <SheetTitle className="text-h3">
              <HandHelping size={64} />
              Terms & Conditions
            </SheetTitle>
          </SheetHeader>
          <ul className="text-small mx-6 text-muted-foreground space-y-4 list-disc">
            <li>
              Only friends who have booked and attended a demo class and
              subsequently enrolled in BrightCHAMPS on or after October 6th,
              2023, will be considered as referrals for this program.
            </li>
            <li>
              Referrers will earn rewards in the form of &quot;points&quot; for
              successful referrals: 100 points for each friend&apos;s completion
              of a demo class.
            </li>
            <li>
              Accumulated gems can be redeemed for rewards as outlined in the
              Rewards Section of our program.
            </li>
            <li>
              For rewards involving physical gifts, PES reserves the right to
              either:
              <ol className="mx-8 text-small space-y-4 list-decimal">
                <li>
                  Ship the physical gift to the referrer&apos;s provided
                  address, contingent upon the feasibility and availability of
                  the delivery partner
                </li>
                <li>
                  Provide an equivalent monetary amount as compensation,
                  credited to the referrer&apos;s personal bank account, if
                  physical delivery is not feasible
                </li>
              </ol>
            </li>
            <li>
              Friends who have been successfully referred to PES through our
              referral program will receive a 20% discount on enrollment.
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default PointsDropdown;
