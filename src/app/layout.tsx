import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "~/components/ui/sheet";
import { AlignRight } from "lucide-react";
import React from "react";
import Navbar from "~/components/layout/Navbar";

export const metadata = {
  title: "Find Personal Professionals",
  description:
    "Simplify Studios Waitlist for a Personal Professionals Finder application",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <main className="flex min-h-screen flex-col">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

const Footer = () => (
  <div aria-label="Footer" className="border-t-4 border-gray-200 py-4">
    <div className="container flex flex-wrap">
      <div>
        <a href="https://www.freepik.com/free-vector/business-people-group_5595780.htm#fromView=search&page=1&position=8&uuid=b48e4250-b8b5-4bb0-8280-9a8fcc98ee86">
          Image by gstudioimagen on Freepik
        </a>
      </div>
      <div>
        <a href="https://www.freepik.com/free-photo/collage-customer-experience-concept_25053703.htm#fromView=search&page=1&position=0&uuid=c0a627c7-24b6-47d7-8a02-10c2b051899e">
          Image by freepik
        </a>
      </div>

      <div>
        <a href="https://www.freepik.com/free-photo/man-woman-interchanging-paper_1128108.htm#fromView=search&page=1&position=0&uuid=65bb1df7-987e-4896-aa4d-092277ade51c">
          Image by freepik
        </a>
      </div>
      <div>
        <a href="https://www.freepik.com/free-vector/online-job-interview_9285637.htm#fromView=search&page=1&position=7&uuid=23e11ec2-b054-4318-ae2e-5023a16ea7b5">
          Image by freepik
        </a>
      </div>
      <div>
        <a href="https://www.freepik.com/free-vector/appointment-booking-with-calendar_8356272.htm#fromView=search&page=1&position=8&uuid=0d04f3f9-5b7c-4fc5-ab80-0b854d447658">
          Image by freepik
        </a>
      </div>

      <div>
        <a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=meeting+a+new+client&query=meeting+a+new+client&selection=1">
          Image by freepik
        </a>
      </div>
    </div>
  </div>
);
