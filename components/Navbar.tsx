import Image from "next/image";
import Link from "next/link";
import ModeToggle from "./ModeToggle";

import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { NAVITEMS } from "@/constants/constants";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-secondary py-2 shadow-xl">
      <div className="container flex items-center justify-between">
        <div>
          <Link href="/">
            <Image
              className="md:hidden"
              src="/logo.png"
              height={40}
              width={40}
              priority
              alt="Logo"
            />
            <Image
              className="hidden md:block"
              src="/logo.png"
              height={66}
              width={66}
              priority
              alt="Logo"
            />
          </Link>
        </div>

        <div className="hidden md:flex">
          {NAVITEMS.map((item) => (
            <nav className=" flex flex-col gap-3 md:flex-row" key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "text-lg justify-start"
                )}
              >
                {item.label}
              </Link>
            </nav>
          ))}
        </div>

        <div className="flex justify-end gap-5">
          <div className=" cursor-pointer">
            <ModeToggle />
          </div>

          <div className=" cursor-pointer md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetClose>
                <SheetContent side="left">
                  {NAVITEMS.map((item) => (
                    <nav className=" flex flex-col gap-3" key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          buttonVariants({ variant: "ghost" }),
                          "text-lg justify-start w-full"
                        )}
                      >
                        {item.label}
                      </Link>
                    </nav>
                  ))}
                </SheetContent>
              </SheetClose>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
