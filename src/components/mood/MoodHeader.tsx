"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function MoodHeader() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);

      if (!user) return;

      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      setProfile(data);
    }

    loadUser();
  }, []);


  async function logout() {
    await supabase.auth.signOut();
    location.reload();
  }


  return (
    <header
      className="
      w-full
      px-4
      py-3
      "
    >

      <div
        className="
        max-w-xl
        mx-auto
        flex
        items-center
        justify-between
        "
      >

        {/* Logo */}
        <Link href="/mood">
          <Image
            src="/menu/logo.png"
            alt="Lavaza Mood"
            width={105}
            height={40}
            priority
            className="
            object-contain
            "
          />
        </Link>


        {!user ? (

          <Link
            href="/auth"
            className="
            bg-[#d4af37]
            text-black
            px-4
            py-1.5
            rounded-full
            text-sm
            font-bold
            "
          >
            دخول
          </Link>

        ) : (

          <div
            className="
            flex
            items-center
            gap-2
            "
          >

            <Link
              href="/create-post"
              className="
              bg-[#d4af37]
              text-black
              px-3
              py-1.5
              rounded-full
              text-xs
              font-bold
              "
            >
              + مشاركة
            </Link>


            <Image
              src={profile?.avatar_url || "/avatar.png"}
              alt="avatar"
              width={34}
              height={34}
              className="
              rounded-full
              object-cover
              border
              border-[#d4af37]
              "
            />


            <button
              onClick={logout}
              className="
              text-xs
              text-red-300
              "
            >
              خروج
            </button>


          </div>

        )}

      </div>

    </header>
  );
}