import { TBlogs } from "@/app/Types";
import BlogDetails from "@/components/ui/BlogDetails";

interface TBlogsId{
    params:{
        blogId:string
    }
}

export const generateStaticParams=async()=>{

    
    const res=await fetch('http://localhost:5000/blogs/')
    const blogs=await res.json()

    return blogs.slice(0,3).map((blog:TBlogs)=>({
        blogId:blog?.id
    }))
}

const BlogDetailPage = async({params}:TBlogsId) => {
    const res=await fetch (`http://localhost:5000/blogs/${params?.blogId}`,{
        cache:"no-store"
    });
    const blog =await res.json();
    console.log(blog);
    return (
        <div className="my-10">
            <BlogDetails blog={blog}></BlogDetails>
        </div>
    );
};

export default BlogDetailPage;