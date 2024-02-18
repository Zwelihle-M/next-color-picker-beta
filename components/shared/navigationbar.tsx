import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";
import { LogOut } from "lucide-react";
import Logo from "@/components/ui/logo";
import ThemeSwitcher from "@/components/ui/theme-switcher";

const Navigationbar = () => {
  return (
    <Navbar    maxWidth="xl"
    height="5rem">

<NavbarBrand>
        <Logo />
      </NavbarBrand>
     

      <NavbarContent justify="end" className='flex items-center gap-1'>

        <div className='block md:hidden'>
        <SignedIn>
          <SignOutButton>
            <div className="flex cursor-pointer">
              <LogOut />
            </div>
          </SignOutButton>
        </SignedIn>
        </div>
     

        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4 text-black dark:text-white ",
            },
          }}
        />

<NavbarMenuItem>
          <ThemeSwitcher />
        </NavbarMenuItem>
      </NavbarContent>

    </Navbar>
  );
};

export default Navigationbar;
