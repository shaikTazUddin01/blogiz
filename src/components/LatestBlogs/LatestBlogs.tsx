import { TBlogs } from "@/app/Types";
import LatestBlogCard from "../ui/LatestBlogCard";

const LatestBlogs = ({blogs}:{blogs:TBlogs[]}) => {
    console.log(blogs);
  return (
    <div className="py-5 mt-5 px-5">
      <h1 className="text-4xl text-center ">Latest Blogs</h1>
      <p className="text-gray-400 mt-3 w-[40%] text-center mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-2 gap-5 px-10 mt-5">
      {blogs?.slice(0,2)?.map(blog=>{
        return(
            <LatestBlogCard key={blog?.id} blog={blog}/>
        )
      })}
      </div>
      <div className="grid grid-cols-3 gap-5 px-10 mt-10">
      {blogs?.slice(2,5)?.map(blog=>{
        return(
            <LatestBlogCard key={blog?.id} blog={blog}/>
        )
      })}
      </div>
    </div>
  );
};

export default LatestBlogs;
