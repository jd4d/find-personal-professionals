"use client";

import Link from "next/link";
import { AlignRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      aria-label="NavbarWrapper"
      className="mb-12 flex min-h-28 items-stretch border-b-4 border-gray-200 py-4 sm:mb-32"
    >
      <div
        aria-label="NavbarContainer"
        className="container mx-auto flex items-center justify-between"
      >
        <Link href="/">
          <h1 className="text-xl font-bold">Find Personal Professionals</h1>
        </Link>
        <div className="hidden items-center space-x-6 sm:flex">
          <Link href="/">Looking for Professionals</Link>
          <Link href="/professionals">Looking for Clients</Link>
        </div>
        <div className="sm:hidden">
          <Sheet open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <AlignRight />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="mt-4 text-left">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <SheetTitle>Looking for Professionals</SheetTitle>
                </Link>
                <Link href="/professionals" onClick={() => setIsOpen(false)}>
                  <SheetTitle>Looking for Clients</SheetTitle>
                </Link>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
