import Image from "next/image";

import { MenuItemType } from "@/app/data/data";

const SubMenu = ({ items }: { items: MenuItemType[] }) => {
  return (
    <ul className=" relative  px-5 py-3 min-w-44 md:absolute hidden  md:top-[3.5rem] left-4  group-hover:block bg-white transition-transform duration-500  md:border border-gray-200">
      {items.map((item, index) => (
        <li
          key={index}
          className="group/subMenu py-2 w-full flex justify-between  border-b last:border-b-0 border-[#E9E9E9]"
        >
          <a
            href="#"
            style={{ cursor: "url(/assets/icons/hand.svg), auto" }}
            className="  group-hover/subMenu:translate-x-2 whitespace-nowrap transition-transform duration-300 group-hover/subMenu:text-[#969696] text-[0.8rem] "
          >
            {item.label}
          </a>
          <Image
            className="pt-[2px]"
            src="/assets/icons/arrow_right.svg"
            width={6}
            height={3}
            alt="arrow"
          />
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
