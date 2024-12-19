import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VariantSlideInUp } from "@/lib/motion-constants";
import Link from "next/link";

const SESSION_TYPES = [
  {
    type: "Quick Call",
    description:
      "Perfect for quick questions, homework help, or concept checks. Get immediate assistance from an available instructor.",
    duration: "15 mins",
    url: "quick-call",
  },
];

const BookASession = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {SESSION_TYPES.map((session, idx) => (
        <Link key={idx} href={session.url}>
          <M_Card
            variants={VariantSlideInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: idx * 0.05 }} // Custom delay for each item
            className="bg-background border-primary/50 hover:border-primary duration-100 rounded-[1rem]"
          >
            <CardHeader>
              <CardTitle className="text-h3">{session.type}</CardTitle>
              <p className="text-muted-foreground">{session.duration}</p>
            </CardHeader>
            <CardContent>{session.description}</CardContent>
          </M_Card>
        </Link>
      ))}
    </div>
  );
};

export default BookASession;
