import React from "react";
import Image from "next/image";
import NextColorLogoLight from "@/public/svg/Next-Color-Pick-Light.svg";
import NextColorLogoDark from "@/public/svg/Next-Color-Pick-Dark.svg";

export default function Logo() {
  return (
    <div className="hidden md:flex items-center gap-x-2 transition-all duration-500">
      <Image
        src={NextColorLogoDark}
        height={40}
        width={50}
        quality={95}
        alt="Ethereal notes logo black"
        className="dark:hidden"
      />
      <Image
        src={NextColorLogoLight}
        height={40}
        width={50}
        quality={95}
        alt="Ethereal notes logo light"
        className="hidden dark:block"
      />
    </div>
  );
}
