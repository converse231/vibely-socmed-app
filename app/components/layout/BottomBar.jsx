"use client";

import { sidebarLinks } from "@constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function BottomBar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="flex bottom-0 z-20 bg-dark-1 px-6 py-3 items-center justify-between md:hidden sticky">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <Link
            key={link.label}
            href={link.route}
            className={`flex flex-col gap-2 items-center rounded-lg py-2 px-4 ${
              isActive && "bg-purple-1"
            }`}
          >
            {link.icon}
            <p className="text-small-medium text-light-1 max-sm:hidden">
              {link.label}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default BottomBar;
