"use client";
import LikeButton from "./LikeButton";
import Image from "next/image";
import Link from "next/link";
type Props = {
  post: any;
};

export default function MoodPost({ post }: Props) {
  return (
    <article
      className="
      overflow-hidden
      rounded-3xl
      bg-white/10
      backdrop-blur-xl
      border
      border-white/10
      mb-6
      shadow-xl
      "
    >
      {/* Header */}

      <div className="flex items-center gap-3 p-4">

        <Link
  href={`/profile/${post.user_id}`}
  className="flex items-center gap-3 flex-1"
>

  <Image
    src={post.profiles?.avatar_url || "/avatar.png"}
    alt=""
    width={46}
    height={46}
    className="
      rounded-full
      object-cover
      border
      border-[#d4af37]
    "
  />

  <div>

    <h3 className="font-bold text-white">
      {post.profiles?.full_name || "Lavaza Member"}
    </h3>

    <p className="text-xs text-gray-400">
      {new Date(post.created_at).toLocaleDateString("ar-LY")}
    </p>

  </div>

</Link>

      </div>

      {/* Image */}

      {post.image_url && (

        <Image
          src={post.image_url}
          alt=""
          width={700}
          height={700}
          className="
          w-full
          object-cover
          max-h-[550px]
          "
        />

      )}

      {/* Caption */}

      <div className="p-4">

        <p
          className="
          text-white
          leading-8
          text-[15px]
          "
        >
          {post.content}
        </p>

        {/* Footer */}

        <div className="mt-5">
    <LikeButton postId={post.id} />
</div>

      </div>

    </article>
  );
}