import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import CopyReferralCard from "./CopyReferralCard";

const INVITE_STEPS = [
  {
    title: "You Invite",
    description: "Send personalized invitations to friends and family",
  },
  {
    title: "They Join",
    description: "Simple registration process",
  },
  {
    title: "You Earn",
    description: "Receive points for each successful referral",
  },
  {
    title: "Your Friends Earn",
    description: "New members get welcome bonuses",
  },
  {
    title: "Mega Reward",
    description: "Access premium tier rewards",
  },
];

const InviteAndEarn = () => {
  return (
    <section className="dashboard-tab-wrapper">
      <h2 className="text-h2">Invite & Earn 🪙</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CopyReferralCard />
        <div className="relative bg-background border-primary/50 duration-100 hover:border-primary border-[2px] p-4 w-full text-center rounded-[1rem] flex flex-col justify-center items-center">
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

        <div className="relative bg-background border-secondary/50 duration-100 hover:border-secondary border-[2px] p-4 w-full text-center rounded-[1rem] flex flex-col justify-center items-center">
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

      {/* How it works */}
      <h2 className="text-center mt-8 text-h2">How It Works ❓</h2>
      <div className="grid gap-4 lg:grid-cols-5">
        {INVITE_STEPS.map((step, idx) => (
          <Card key={idx} className="text-center">
            <CardHeader>
              <CardTitle className="text-h1">{idx + 1}</CardTitle>
              <h3 className="text-h3">{step.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default InviteAndEarn;
