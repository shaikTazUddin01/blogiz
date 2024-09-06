import { TBlogs } from "@/app/Types";

export const createBlog=async(data:TBlogs)=>{

const res=await fetch("http://localhost:5000/blogs",{
    method:"Post",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data),
    cache:"no-store"
})
   const blogInFo=await res.json();
   return blogInFo
}