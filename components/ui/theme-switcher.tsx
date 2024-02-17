"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import SunIcon from "@/components/icons/sun-icon";
import MoonIcon from "@/components/icons/moon-icon";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      radius="full"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      isIconOnly
      size="sm"
      className="bg-transparent "
    >
      <SunIcon />
      <MoonIcon />
    </Button>
  );
};

export default ThemeSwitcher;
