"use client"
import BlogCard from "@/components/ui/BlogCard";
import React from "react";
import { TBlogs } from "../Types";
import { useGetBlogDataQuery } from "@/redux/feature/baseApi";

const Blogs =  () => {
  

const {data:blogs}=useGetBlogDataQuery("")

  

  return (
    <div>
      <h1 className="text-4xl text-center my-5">
        All Blogs From <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-gray-400 mt-3 w-[40%] text-center mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-5 w-[90%] mx-auto my-5">
        {blogs?.map((blog:TBlogs) => {
            return(
                <BlogCard key={blog?.id} blog={blog} />
            )
        })}
      </div>
    </div>
  );
};

export default Blogs;
