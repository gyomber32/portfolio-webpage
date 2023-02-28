import { Footer, Header, QuickReach } from "@/app/components";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QuickReach />
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
