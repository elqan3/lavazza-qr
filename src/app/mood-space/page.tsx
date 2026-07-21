import MoodHeader from "@/components/mood/MoodHeader";
import { supabase } from "@/lib/supabase";
import MoodPost from "@/components/mood/MoodPost";
import MoodHeaderButton from "@/components/mood/MoodHeaderButton";

export default async function MoodSpace(){

const {data:posts}=await supabase
.from("posts")
.select(`
*,
profiles(
full_name,
avatar_url
)
`)
.order("created_at", {
ascending:false
});


return (

<main className="
min-h-screen
bg-[#1a2a4a]
text-white
">

<MoodHeader />



<section className="
max-w-3xl
mx-auto
px-6
py-10
">


<div className="
text-center
mb-12
">


<h2 className="
text-5xl
font-bold
mb-5
">

Lavaza Mood Space 

</h2>


<p className="
text-gray-300
text-lg
">
 شارك لحظاتك مع مجتمع لافازا مود
</p>



<MoodHeaderButton />


</div>




<div>

{
posts && posts.length > 0 ? (

posts.map(post=>(

<MoodPost
key={post.id}
post={post}
/>

))

)

:

(

<div className="
text-center
text-gray-400
py-10
">

لا توجد لحظات بعد...
كن أول من يشارك 

</div>

)

}


</div>



</section>



</main>

)

}