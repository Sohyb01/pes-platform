import Footer from "@/components/pes-custom/website-components/Footer";
import WebsiteNavbar from "@/components/pes-custom/WebsiteNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full">
      <WebsiteNavbar />
      {children}
      <Footer />
    </main>
  );
}
