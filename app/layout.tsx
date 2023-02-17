import { CustomHead, Footer, Header } from "@/components";
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
        <Header />
        <div style={{ marginTop: "5%" }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
