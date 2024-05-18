"use client";

import Post, { PostPropsType } from "../Post/Post";

const Posts = ({ posts }: { posts: PostPropsType[] }) => {
  return (
    <div className="flex flex-wrap mt-12 justify-center gap-x-3 gap-y-12 lg:gap-12 ">
      {posts?.map((post, i: number) => (
        <Post key={post.title + i} {...post} />
      ))}
    </div>
  );
};

export default Posts;
