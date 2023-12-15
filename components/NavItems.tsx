import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const NavItems = () => {
  return (
    <div>
      <nav className=" flex flex-col items-center  justify-center gap-3 md:flex-row">
        <Link
          href="/skills"
          className={cn(buttonVariants({ variant: "ghost" }), "text-lg")}
        >
          Skills
        </Link>
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "ghost" }), "text-lg")}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={cn(buttonVariants({ variant: "ghost" }), "text-lg")}
        >
          Contact Me
        </Link>
      </nav>
    </div>
  );
};

export default NavItems;
