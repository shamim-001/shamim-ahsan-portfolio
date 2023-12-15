import Image from "next/image";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import NavItems from "./NavItems";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b py-2 shadow-xl backdrop-blur-3xl">
      <div className="flex items-center justify-between pl-3 pr-8">
        <div>
          <Link href="/">
            <Image src="/logo.png" height={72} width={72} priority alt="Logo" />
          </Link>
        </div>

        <div className="hidden md:flex">
          <NavItems />
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
              <SheetContent>
                <NavItems />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
