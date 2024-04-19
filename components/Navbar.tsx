"use client";
import Image from "next/image";
import Link from "next/link";
import ModeToggle from "./ModeToggle";

import { SOCIAL_LINKS } from "@/constants/constants";
import { IoShareSocialSharp } from "react-icons/io5";
import Menubar from "./Menubar";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="navbar sticky top-0 z-50 border-b border-base-100 bg-base-100  py-2 shadow-xl">
      <div className="container  flex items-center justify-between">
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

        <div className="hidden md:block">
          <Menubar />
        </div>

        <div className="flex justify-end gap-5">
          {/* social links */}
          <div className=" flex gap-5">
            <div className="hidden items-center gap-5 md:flex">
              {SOCIAL_LINKS.map((item) => (
                <div key={item.title}>
                  <Link className="text-xl" href={item.url} target="_blank">
                    {item.logo}
                  </Link>
                </div>
              ))}
            </div>
            <div className="dropdown dropdown-bottom md:hidden">
              <div role="button" tabIndex={0} className="m-1">
                <IoShareSocialSharp size={22} />
              </div>
              <ul className="menu dropdown-content z-[1] w-16 justify-center gap-3 rounded-box bg-base-100 p-2 shadow">
                {SOCIAL_LINKS.map((item) => (
                  <div className="flex justify-center" key={item.title}>
                    <Link className="text-xl" href={item.url} target="_blank">
                      {item.logo}
                    </Link>
                  </div>
                ))}
              </ul>
            </div>

            <div className=" cursor-pointer">
              <ModeToggle />
            </div>
          </div>

          {/* Mobile Menu */}
          <div className=" cursor-pointer md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
