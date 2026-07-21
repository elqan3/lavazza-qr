import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default async function Me() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth");
  }

  redirect(`/profile/${user.id}`);
}