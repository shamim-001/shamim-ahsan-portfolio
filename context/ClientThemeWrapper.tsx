"use client";
import React from "react";
import { useThemeContext } from "./ThemeProvider";

const ClientThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useThemeContext();

  return <div data-theme={isDarkMode ? "dark" : "light"}>{children}</div>;
};

export default ClientThemeWrapper;
