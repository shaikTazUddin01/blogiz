import LoadingCard from "@/components/ui/LoadingCard";
import { useGetBlogDataQuery } from "@/redux/feature/baseApi";
import { TBlogs } from "../Types";

const loading = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return (
    <div className="grid grid-cols-3 gap-10">
      {blogs?.map((blog: TBlogs) => (
        <LoadingCard key={blog.id} />
      ))}
    </div>
  );
};

export default loading;
