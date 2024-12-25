import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import CopyReferralCard from "./CopyReferralCard";
import { Coins } from "lucide-react";
import PointsDropdown from "./PointsDropdown";

const InviteAndEarn = () => {
  return (
    <section className="dashboard-tab-wrapper">
      <div className="flex justify-between items-center gap-4">
        <h2 className="text-h2">Invite & Earn 🪙</h2>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 pr-4 overflow-hidden rounded-lg bg-background border border-primary">
            <div
              className="inline-flex items-center bg-primary text-white pl-3 pr-6 py-1 gap-2"
              style={{
                clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
              }}
            >
              <span className="font-medium">0</span>
            </div>
            <Coins size={16} />
          </div>
          <PointsDropdown />
        </div>
      </div>
      <div className="flex gap-4">
        <CopyReferralCard className="flex-1" />

        <div className="flex flex-col gap-4">
          <div className="flex-1 relative bg-background border-primary/50 duration-100 hover:border-primary border-[2px] p-4 w-full text-center rounded-[1rem] flex flex-col justify-center items-center">
            <span className="text-h3 lg:text-h2">10</span>
            <span className="text-detail">Total Referred</span>
            <div className="absolute inset-0 opacity-5">
              <Image
                src="/backgrounds/grain.jpg"
                alt="card bg"
                width={0}
                height={0}
                sizes="100vw"
                className="size-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 relative bg-background border-secondary/50 duration-100 hover:border-secondary border-[2px] p-4 w-full text-center rounded-[1rem] flex flex-col justify-center items-center">
            <span className="text-h3 lg:text-h2">8</span>
            <span className="text-detail">Total Joined</span>
            <div className="absolute inset-0 opacity-5">
              <Image
                src="/backgrounds/grain.jpg"
                alt="card bg"
                width={0}
                height={0}
                sizes="100vw"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Card className="border-primary">
        <CardHeader>
          <CardTitle className="text-h3">Note</CardTitle>
          <CardDescription>
            Applicable only if your friends purchase at least the basic level.
          </CardDescription>
        </CardHeader>
      </Card>
    </section>
  );
};

export default InviteAndEarn;
