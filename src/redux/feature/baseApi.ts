import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi=createApi({
    reducerPath:'baseApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000'}),
    endpoints:(builder)=>({
        getBlogData:builder.query({
            query:()=>({
                url:'/blogs'
            })
        })
    })
})

export const{useGetBlogDataQuery}=baseApi