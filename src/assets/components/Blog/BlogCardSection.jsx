import React from 'react'
import { BlogCardArray } from './BlogCardArray';
import BlogCard from './BlogCard';
const BlogCardSection = () => {
  return (
    <>
      <div className="w-[100%] mx-auto mt-24  ">
        <div className=" grid grid-cols-3 gap-5">
          {BlogCardArray.map((val, index) => {
            return (
              <BlogCard
                title={val.title}
                src={val.img}
                description={val.description}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  )
}

export default BlogCardSection
