"use client";

import React, { useState } from "react";

import Modal from "../Modal/Modal";
import PostContent from "./PostContent";

export type PostPropsType = {
  title: string;
  text: string;
  tags: string;
  autor: string;
  img: string;
  img_2x: string;
  date: string;
  views: string;
};

const Post: React.FC<PostPropsType> = (props) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <div
      className="grid gap-y-4 max-w-[22.5rem]"
      onClick={() => {
        setIsModalOpened(true);
        
      }}
      style={{ cursor: "url(/assets/icons/hand.svg), auto" }}
    >
      <Modal
        isModalOpened={isModalOpened}
        closeModal={() => {
          setIsModalOpened(false);
        }}
      >
        <PostContent {...props} />
      </Modal>
      <PostContent {...props} />
    </div>
  );
};

export default Post;
