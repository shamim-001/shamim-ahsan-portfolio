"use client";
import { NAVITEMS } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useId } from "react";

const Menubar = () => {
  const path = usePathname();
  const layoutId = useId();

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="menu menu-vertical md:menu-horizontal"
    >
      {NAVITEMS.map((item) => (
        <motion.li
          layoutId={layoutId}
          className={`${path === item.href && "active"}`}
          key={item.href}
        >
          <Link href={item.href}>{item.label}</Link>
        </motion.li>
      ))}
    </motion.nav>
  );
};

export default Menubar;
