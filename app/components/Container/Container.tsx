"use client";

import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import Posts from "../Posts/Posts";

import { PostPropsType } from "../Post/Post";

const Container = ({ posts }: { posts: PostPropsType[] }) => {
  const [filterText, setFilterText] = useState("");
  const [renderPosts, setRenderPosts] = useState(posts);

  useEffect(() => {

    if (filterText === "") {
      setRenderPosts(posts);
    } else {
      setRenderPosts(posts.filter((item) => item.title.includes(filterText)));
    }
  }, [filterText]);

  return (
    <>
      <Header filterText={filterText} onFilterTextChange={setFilterText} />
      <main className="max-w-[1220px] mx-auto px-5 lg:px-1">
        <Posts posts={renderPosts} />
      </main>
    </>
  );
};

export default Container;
