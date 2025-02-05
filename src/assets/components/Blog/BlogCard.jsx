import React from 'react'

const BlogCard = ({ title, description,src }) => {
  return (
    <>
      <div className=" p-2 hover:shadow-2xl rounded-xl">
        <div className="w-[100%] mx-auto">
          <div>
            <img src={src} alt="" />
          </div>
          <p className="mt-4 text-2xl font-medium">{title}</p>
          <p className="mt-3 text-[18px]">{description}</p>
        </div>
      </div>
    </>
  )
}

export default BlogCard
