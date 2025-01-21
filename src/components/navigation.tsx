'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/links", label: "Links" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center justify-between">
      <ul className="flex items-center space-x-6">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`hover:text-[#FF6B45] ${pathname === href ? "underline text-[#FF6B45]" : ""
                }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="w-full h-0.5 bg-gray-300 my-4 "></div>
    </nav>
  );
}
