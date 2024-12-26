import PESCertificateCard from "@/components/pes-custom/platform-components/PESCertificateCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { exampleCertificates, exampleStudents } from "@/lib/data";
import { format } from "date-fns";
import {
  Award,
  CalendarFold,
  Download,
  Github,
  Globe,
  Linkedin,
  Mail,
  Phone,
  User,
} from "lucide-react";
import PortfolioAbout from "./PortfolioAbout";
import PortfolioProjects from "./PortfolioProjects";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Portfolio = () => {
  const student = exampleStudents[0];

  return (
    <section className="flex flex-col gap-8" id="portfolio">
      {/* Hero */}
      <div className="flex items-center justify-between">
        <h2 className="text-h2">Portfolio</h2>
        <Link href="/api/portfolio" className={buttonVariants({ size: "sm" })}>
          <Download size={16} />
          Download as PDF
        </Link>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 overflow-hidden relative bg-background p-4 flex flex-col md:flex-row items-center gap-4">
          <CardHeader className="shrink-0">
            <div className="p-4 size-32 rounded-full bg-background">
              <User className="size-full object-center" />
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-4 space-y-4">
            <div>
              <h3 className="text-h3">Student Name</h3>
              <p className="text-p text-muted-foreground">
                {student.student_name}
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-h3">Student Info</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-p inline-flex items-center gap-2">
                    <Mail size={16} />
                    Email
                  </p>
                  <p className="text-muted-foreground">
                    {student.student_email}
                  </p>
                </div>
                <div>
                  <p className="text-p inline-flex items-center gap-2">
                    <CalendarFold size={16} />
                    Date of Birth
                  </p>
                  <p className="text-muted-foreground">
                    {format(
                      student.student_dateofbirth as Date,
                      "yyyy - MM - dd"
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-p inline-flex items-center gap-2">
                    <Phone size={16} />
                    Phone Number
                  </p>
                  <p className="text-muted-foreground">
                    {student.student_whatsappnum}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-p inline-flex items-center gap-2">
                    <Globe size={16} />
                    Socials
                  </p>
                  <div className="flex items-center gap-2">
                    <Link
                      href="#"
                      className={cn(
                        buttonVariants({ variant: "reversed", size: "sm" })
                      )}
                    >
                      <Github size={16} />
                    </Link>
                    <Link
                      href="#"
                      className={cn(
                        buttonVariants({ variant: "reversed", size: "sm" })
                      )}
                    >
                      <Linkedin size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About */}
        <PortfolioAbout className="bg-background" />
      </div>

      {/* Achievements */}
      <div className="space-y-4">
        <h2 className="text-h2">Achievements 🏆</h2>
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-h3">Badges Earned 🏅</h3>
            <div className="flex flex-wrap gap-8">
              {[...new Array(6)].fill(0).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-background flex gap-2 flex-col items-center justify-center border rounded-[1rem] px-8 py-4"
                >
                  <Award size={64} />
                  <h3 className="text-h3 text-card-foreground">Badge</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-h3">Certificates 📜</h3>

            <div className="w-full flex gap-4 flex-wrap lg:flex-nowrap lg:overflow-x-scroll h-full pb-8">
              {exampleCertificates.map((certificate, idx) => {
                return (
                  <PESCertificateCard certificate={certificate} key={idx} />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <PortfolioProjects />
    </section>
  );
};

export default Portfolio;
