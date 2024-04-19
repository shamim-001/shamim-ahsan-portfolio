"use client";
import Image from "next/image";
import Link from "next/link";
import ModeToggle from "./ModeToggle";

import { SOCIAL_LINKS } from "@/constants/constants";
import { Menu } from "lucide-react";
import Menubar from "./Menubar";

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
          <div className="flex gap-5">
            <div className="flex items-center gap-5">
              {SOCIAL_LINKS.map((item) => (
                <div key={item.title}>
                  <Link className="text-xl" href={item.url} target="_blank">
                    {item.logo}
                  </Link>
                </div>
              ))}
            </div>
            <div className=" cursor-pointer">
              <ModeToggle />
            </div>
          </div>
          {/* Mobile Menu */}
          <div className=" cursor-pointer md:hidden">
            <div className="drawer">
              <input
                id="mobile-menu"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label
                  htmlFor="mobile-menu"
                  className="drawer-button cursor-pointer"
                >
                  <Menu />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="mobile-menu"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
                  {/* Sidebar content here */}
                  <Menubar />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
