"use client";
import { NAVITEMS } from "@/constants/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menubar = () => {
  const path = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="menu menu-vertical md:menu-horizontal"
    >
      {NAVITEMS.map((item) => (
        <li className={`${path === item.href ? "active" : ""}`} key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </motion.nav>
  );
};

export default Menubar;
