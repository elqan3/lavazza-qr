"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";


export default function CreatePost(){

const router = useRouter();


const [image,setImage] = useState<File | null>(null);
const [preview,setPreview] = useState("");

const [content,setContent] = useState("");

const [loading,setLoading] = useState(false);



function handleImage(e: React.ChangeEvent<HTMLInputElement>){

const file = e.target.files?.[0];

if(file){

setImage(file);
setPreview(URL.createObjectURL(file));

}

}




async function publishPost(){


if(!image || !content){

alert("أضف صورة ووصف");
return;

}


setLoading(true);



const {
data:{user}
}=await supabase.auth.getUser();



if(!user){

router.push("/auth");
return;

}



// رفع الصورة

const fileName =
`${user.id}-${Date.now()}.jpg`;



const {error:uploadError}=await supabase
.storage
.from("mood-images")
.upload(
fileName,
image,
{
upsert:false
}
);



if(uploadError){

console.log(uploadError);
alert(uploadError.message);
setLoading(false);
return;

}




// الحصول على الرابط

const {
data:urlData
}=supabase
.storage
.from("mood-images")
.getPublicUrl(fileName);



const imageUrl =
urlData.publicUrl;




// إنشاء المنشور


const {error:postError}=await supabase

.from("posts")

.insert({

user_id:user.id,

image_url:imageUrl,

content:content

});



if(postError){

console.log(postError);
alert(postError.message);

setLoading(false);
return;

}



router.push("/mood-space");

}



return (

<main className="
min-h-screen
bg-[#1a2a4a]
text-white
px-4
py-8
flex
justify-center
">


<div className="
w-full
max-w-md
bg-white/10
backdrop-blur
rounded-3xl
p-6
">


<h1 className="
text-3xl
font-bold
text-center
mb-8
">

شارك لحظتك ☕

</h1>




<label className="
cursor-pointer
block
">


<div className="
w-full
h-72
rounded-3xl
bg-white/10
flex
items-center
justify-center
overflow-hidden
border
border-white/20
">


{
preview ?

<img

src={preview}

className="
w-full
h-full
object-cover
"

/>

:

<div className="text-center">

<div className="text-5xl">
📸
</div>

<p className="mt-3 text-gray-300">
اختر صورة
</p>

</div>

}


</div>



<input

type="file"

accept="image/*"

onChange={handleImage}

className="hidden"

/>


</label>




<textarea

placeholder="اكتب وصف اللحظة..."

value={content}

onChange={(e)=>setContent(e.target.value)}

className="
mt-6
w-full
h-32
rounded-2xl
bg-white/20
p-4
outline-none
resize-none
"

/>




<button

onClick={publishPost}

disabled={loading}

className="
mt-6
w-full
bg-[#d4af37]
text-black
py-4
rounded-full
font-bold
text-lg
"

>

{
loading
?
"جاري النشر..."
:
"نشر اللحظة ☕"
}


</button>



</div>


</main>

)

}