import Image from "next/image";

import SubMenu from "./SubMenu";

import { MenuItemType } from "@/app/data/data";

type MenuItemPropsType = {
  label: string;
  subMenu: MenuItemType[] | null;
};

const MenuItem: React.FC<MenuItemPropsType> = ({ label, subMenu }) => {
  return (
    <div className="group relative w-full md:w-auto">
      <a
        href="#"
        className="flex gap-x-1 px-4 py-5 "
        style={{ cursor: "url(/assets/icons/hand.svg), auto" }}
      >
        {label}
        {!!subMenu?.length && (
          <Image
            className="pt-[2px]"
            src="/assets/icons/arrow_bottom.svg"
            width={10}
            height={6}
            alt="arrow"
          />
        )}
      </a>
      {!!subMenu?.length && <SubMenu items={subMenu} />}
    </div>
  );
};

export default MenuItem;
