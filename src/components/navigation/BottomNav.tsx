"use client";

import Link from "next/link";
import { Home, PlusSquare, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";

export default function BottomNav() {
  const pathname = usePathname();
  const { user } = useAuth();

  if (!user) return null;

  return (
    <nav
      className="
      fixed
      bottom-0
      left-0
      right-0
      bg-[#1a2a4a]/95
      backdrop-blur-xl
      border-t
      border-white/10
      z-50
      "
    >
      <div
        className="
        max-w-md
        mx-auto
        h-16
        flex
        items-center
        justify-around
        "
      >
        <Link
          href="/mood-space"
          className={`flex flex-col items-center text-xs ${
            pathname === "/mood-space"
              ? "text-[#d4af37]"
              : "text-white"
          }`}
        >
          <Home size={22} />
          <span>الرئيسية</span>
        </Link>

        <Link
          href="/create-post"
          className="
          -mt-8
          w-16
          h-16
          rounded-full
          bg-[#d4af37]
          flex
          items-center
          justify-center
          shadow-xl
          "
        >
          <PlusSquare color="#1a2a4a" size={28} />
        </Link>

        <Link
          href={`/profile/${user.id}`}
          className={`flex flex-col items-center text-xs ${
            pathname.startsWith("/profile")
              ? "text-[#d4af37]"
              : "text-white"
          }`}
        >
          <User size={22} />
          <span>حسابي</span>
        </Link>
      </div>
    </nav>
  );
}