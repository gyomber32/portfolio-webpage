import { CustomHead, Footer, Header, QuickReach } from "@/components";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CustomHead />
      <body>
        <QuickReach />
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
