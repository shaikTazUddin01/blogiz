import BlogDetails from "@/components/ui/BlogDetails";

interface TBlogsId{
    params:{
        blogId:string
    }
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