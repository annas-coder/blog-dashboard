import { IBlogPost } from '@/Interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getBlogCount : builder.query<IBlogPost[] , void>({
      query: ()=> `list`
    }),
    getBlogList: builder.query<IBlogPost[], {page:number,limit:number}>({
      query: ({page,limit}) => `list?page=${page}&limit=${limit}`
    }),
    getBlogById : builder.query<IBlogPost,number>({
        query:(id)=>`/list/${id}`
    }),
    createBlogPost: builder.mutation<IBlogPost, Partial<IBlogPost>>({
      query: (newPost) => ({
        url: 'list',
        method: 'POST',
        body: newPost,
      }),
    }),
  }),
});

export const { useGetBlogCountQuery, useGetBlogListQuery , useGetBlogByIdQuery , useCreateBlogPostMutation } = blogApi;
