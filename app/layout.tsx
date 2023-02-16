import Image from "next/image";
import Link from "next/link";

import "./globals.css";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Skills",
    href: "",
  },
  {
    title: "Work/Experience",
    href: "",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          {navLinks.map(({ title, href }) => (
            <Link key={title} href={href}>
              {title}
            </Link>
          ))}
        </header>
        <div>{children}</div>
        <footer>
          <div>
            <div>Powered by</div>
            <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} />
          </div>
        </footer>
      </body>
    </html>
  );
}
