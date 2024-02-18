"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { OrganizationSwitcher, SignOutButton, SignedIn, UserButton } from "@clerk/nextjs";
import Logo from "@/components/ui/logo";
import ThemeSwitcher from "@/components/ui/theme-switcher";
import { navigationbarLinks } from "@/lib/data";

const Navigationbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      maxWidth="xl"
      height="5rem"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-5" justify="end">
        {navigationbarLinks.map((link) => (
          <NavbarItem key={link.target}>
            <Link
              href={link.target}
              className="text-xl dark:text-white text-black"
            >
              {link.name}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>

        <NavbarItem>
          <UserButton afterSignOutUrl="/"/>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navigationbarLinks.map((link) => (
          <NavbarMenuItem key={link.target}>
            <Link href={link.target}  className="text-xl dark:text-white text-black">
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}

        <NavbarMenuItem>
          <ThemeSwitcher />
        </NavbarMenuItem>

        <NavbarItem>
          <UserButton afterSignOutUrl="/"/>
        </NavbarItem>
      </NavbarMenu>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
    </Navbar>
  );
};

export default Navigationbar;
