"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";
import { sidebarNavigationlinks } from "@/lib/data";
import { LogOut } from 'lucide-react';

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { userId } = useAuth();

  return (
    <section className='custom-scrollbar sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto   border-r  pb-5 pt-28 max-md:hidden'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
        {sidebarNavigationlinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          if (link.route === "/profile") link.route = `${link.route}/${userId}`;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`relative flex justify-start gap-4 rounded-lg p-4${isActive && "bg-razzmatazz"}`}
            >
              {/* <div
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              /> */}
              <p>{link.imgURL}</p>

              <p className='text-light-1 max-lg:hidden'>{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className='mt-10 px-6'>
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push("/sign-in")}>
            <div className='flex cursor-pointer gap-4 p-4'>
              <LogOut
              />

              <p className='text-light-2 max-lg:hidden'>Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSidebar;
