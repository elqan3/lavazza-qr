"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";


export default function AuthPage(){

const router = useRouter();


const [name,setName] = useState("");
const [phone,setPhone] = useState("");
const [password,setPassword] = useState("");

const [avatar,setAvatar] = useState<File | null>(null);

const [loading,setLoading] = useState(false);

const [preview,setPreview] = useState("");



function handleImage(e: React.ChangeEvent<HTMLInputElement>){

const file = e.target.files?.[0];

if(file){

setAvatar(file);
setPreview(URL.createObjectURL(file));

}

}




async function handleRegister(){

if(!avatar || !name || !phone || !password){

alert("أكمل جميع البيانات");
return;

}


setLoading(true);



const fakeEmail = `user_${phone}@lavaza.app`;


const {data:existingUser}=await supabase
.from("profiles")
.select("id")
.eq("phone", phone)
.single();


if(existingUser){

alert("رقم الهاتف مستخدم مسبقاً");
setLoading(false);
return;

}
// إنشاء الحساب

const {data,error}=await supabase.auth.signUp({

email:fakeEmail,

password,

options:{

data:{
full_name:name,
phone:phone
}

}

});



if(error){

console.log(error);
alert(error.message);
setLoading(false);
return;

}



const user=data.user;



if(!user){

setLoading(false);
return;

}



// رفع الصورة الشخصية


const fileName = `${user.id}.jpg`;


const {error:uploadError}=await supabase
.storage
.from("avatars")
.upload(
fileName,
avatar,
{
upsert:true
}
);



if(uploadError){

console.log(uploadError);
alert(uploadError.message);

setLoading(false);
return;

}




const {
data:urlData
}=supabase
.storage
.from("avatars")
.getPublicUrl(fileName);



const avatarUrl=urlData.publicUrl;




// تحديث البروفايل


const {error:profileError}=await supabase

.from("profiles")

.update({

avatar_url:avatarUrl

})

.eq(
"id",
user.id
);



if(profileError){

console.log(profileError);

}




router.push("/create-post");

setLoading(false);


}





return (

<main className="
min-h-screen
bg-[#1a2a4a]
flex
items-center
justify-center
px-4
py-8
text-white
">


<div className="
w-full
max-w-md
bg-white/10
backdrop-blur
rounded-3xl
p-6
shadow-xl
">


<h1 className="
text-3xl
font-bold
text-center
mb-8
">

انضم إلى Lavaza Mood ☕

</h1>



<div className="
flex
flex-col
items-center
mb-6
">


<label className="
cursor-pointer
">


<div className="
w-28
h-28
rounded-full
overflow-hidden
bg-white/20
flex
items-center
justify-center
border-2
border-[#d4af37]
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

<span className="
text-4xl
">
📷
</span>

}


</div>


<input

type="file"

accept="image/*"

onChange={handleImage}

className="hidden"

/>


</label>


<p className="
text-sm
text-gray-300
mt-3
">

اختر صورتك الشخصية

</p>


</div>





<input

placeholder="الاسم"

value={name}

onChange={(e)=>setName(e.target.value)}

className="
w-full
mb-4
p-4
rounded-2xl
bg-white/20
outline-none
"

/>





<input

placeholder="رقم الهاتف"

value={phone}

onChange={(e)=>setPhone(e.target.value)}

className="
w-full
mb-4
p-4
rounded-2xl
bg-white/20
outline-none
"

/>





<input

placeholder="كلمة المرور"

type="password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="
w-full
mb-6
p-4
rounded-2xl
bg-white/20
outline-none
"

/>





<button

onClick={handleRegister}

disabled={loading}

className="
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
"جاري إنشاء الحساب..."
:
"إنشاء حساب"
}


</button>



</div>


</main>

)

}