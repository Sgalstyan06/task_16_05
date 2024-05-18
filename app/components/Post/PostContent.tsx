import Image from "next/image";
import React from "react";

import { PostPropsType } from "./Post";

const PostContent: React.FC<PostPropsType> = ({
  title,
  text,
  tags,
  autor,
  img,
  img_2x,
  date,
  views,
}) => {
  return (
    <>
      <picture>
        <source media="(max-width: 780px)" srcSet={img} />
        <img src={img_2x} alt={title} />
      </picture>
      <p className="text-[1.1rem] leading-none text-[#EB0028] font-bold">
        {tags}
      </p>
      <h2 className="text-2xl leading-[1.9rem] font-bold">{title}</h2>
      <p className="flex gap-x-[0.31rem] text-xs leading-none text-[#9B9B9B]">
        <span className="font-medium	text-black">{autor}</span>
        <Image src="/assets/icons/oval.svg" width={3} height={3} alt="dot" />
        <span>{date}</span>
        <Image src="/assets/icons/oval.svg" width={3} height={3} alt="dot" />
        <span>{views} Views</span>
      </p>
      <h3 className="text-sm text-[#9B9B9B]">{text}</h3>
    </>
  );
};

export default PostContent;
