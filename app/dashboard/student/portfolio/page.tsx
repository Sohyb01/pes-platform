import PESCertificateCard from "@/components/pes-custom/platform-components/PESCertificateCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { exampleCertificates, exampleStudents } from "@/lib/data";
import { format } from "date-fns";
import { Award, CalendarFold, Globe, Mail, Phone, User } from "lucide-react";
import Image from "next/image";
import PortfolioAbout from "./PortfolioAbout";
import PortfolioProjects from "./PortfolioProjects";
import DownloadAsPdfButton from "./DownloadAsPdfButton";

const Portfolio = () => {
  const student = exampleStudents[0];

  return (
    <section className="flex flex-col gap-8" id="portfolio">
      {/* Hero */}
      <div className="flex items-center justify-between">
        <h2 className="text-h2">Portfolio</h2>
        <DownloadAsPdfButton />
      </div>
      <Card className="overflow-hidden relative bg-background/60 p-4 flex flex-col md:flex-row items-center gap-4">
        <CardHeader>
          <div className="p-4 size-32 rounded-full bg-background">
            <User className="size-full object-center" />
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <div>
            <h3 className="text-h3">Student Name</h3>
            <p className="text-p text-muted-foreground">
              {student.student_name}
            </p>
          </div>
          <div>
            <h3 className="text-h3">Student Info</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <p className="text-p inline-flex items-center gap-2">
                <Mail size={16} />
                Email:{" "}
                <span className="text-muted-foreground">
                  {student.student_email}
                </span>
              </p>
              <p className="text-p inline-flex items-center gap-2">
                <CalendarFold size={16} />
                Date of Birth:{" "}
                <span className="text-muted-foreground">
                  {format(
                    student.student_dateofbirth as Date,
                    "yyyy - MM - dd"
                  )}
                </span>
              </p>
              <p className="text-p inline-flex items-center gap-2">
                <Phone size={16} />
                Phone Number:{" "}
                <span className="text-muted-foreground">
                  {student.student_whatsappnum}
                </span>
              </p>
              <p className="text-p inline-flex items-center gap-2">
                <Globe size={16} />
                Timezone:{" "}
                <span className="text-muted-foreground">
                  {student.timezone}
                </span>
              </p>
            </div>
          </div>
        </CardContent>

        <div className="absolute inset-0 -z-10">
          <Image
            src="/backgrounds/grain.jpg"
            alt="Grain Background"
            width={0}
            height={0}
            sizes="100vw"
            className="size-full object-cover"
          />
        </div>
      </Card>

      {/* About */}
      <PortfolioAbout />

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

            <div className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
