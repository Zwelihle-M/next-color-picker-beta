"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

interface Props {
  routeType: string;
}

function Searchbar({ routeType }: Props) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // query after 0.3s of no input
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        router.push(`/${routeType}?q=` + search);
      } else {
        router.push(`/${routeType}`);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, routeType]);

  return (
    <div className="flex gap-1 rounded-lg  px-4 py-2">
      <div >
        <Search className="object-contain"/>
      </div>

      <Input
        id="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={`${
          routeType !== "/search" ? "Search communities" : "Search creators"
        }`}
        className="no-focus border-none  outline-none"
      />
    </div>
  );
}

export default Searchbar;
