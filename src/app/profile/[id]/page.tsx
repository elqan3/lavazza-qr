import Image from "next/image";
import { supabase } from "@/lib/supabase";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Profile({ params }: Props) {

  const { id } = await params;

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();

  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .eq("user_id", id)
    .order("created_at", {
      ascending: false,
    });

  return (
    <main className="
      min-h-screen
      bg-[#1a2a4a]
      text-white
    ">

      <section className="
        max-w-md
        mx-auto
        px-5
        py-8
      ">

        <div className="text-center">

          <Image
            src={profile.avatar_url}
            alt=""
            width={120}
            height={120}
            className="
              mx-auto
              rounded-full
              object-cover
              border-4
              border-[#d4af37]
            "
          />

          <h1 className="mt-5 text-2xl font-bold">
            {profile.full_name}
          </h1>

          
          <div className="
            mt-6
            bg-white/10
            rounded-2xl
            py-4
          ">

            <h2 className="text-3xl font-bold">
              {posts?.length || 0}
            </h2>

            <p className="text-gray-300">
              منشور
            </p>

          </div>

        </div>

        <div className="
          grid
          grid-cols-2
          gap-3
          mt-8
        ">

          {posts?.map((post) => (

            <Image
              key={post.id}
              src={post.image_url}
              alt=""
              width={300}
              height={300}
              className="
                rounded-2xl
                object-cover
                aspect-square
                w-full
              "
            />

          ))}

        </div>

      </section>

    </main>
  );
}