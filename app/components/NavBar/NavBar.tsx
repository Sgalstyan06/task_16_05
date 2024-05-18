"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import MenuItem from "../Menu/MenuItem";
import Logo from "../Logo/Logo";

import { menuData } from "@/app/data/data";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Image
        src="/assets/icons/hamburger.svg"
        width={25}
        height={16}
        alt="hamburger"
        className={`absolute top-9 left-5 transition-transform duration-300 ${
          menuOpen ? "hidden" : "block"
        } md:hidden`}
        onClick={toggleMenu}
        style={{ cursor: "url(/assets/icons/hand.svg), auto" }}
      />

      <nav
        ref={modalRef}
        className={`fixed top-0 left-0 h-full w-[85%] bg-white z-50 border-r border-[#E9E9E9] md:border-r-0 transition-transform duration-300 transform
        
        ${menuOpen ? "translate-x-0 overflow-auto" : "-translate-x-full"}
          md:static md:translate-x-0 md:bg-none md:flex md:justify-center md:w-full md:border-[#E9E9E9] md:border-y`}
      >
        <div className="pt-8 pl-5 pb-6 border-[#E9E9E9] border-b md:hidden">
          <Logo />
        </div>
        <Image
          src="/assets/icons/close.svg"
          width={20}
          height={20}
          alt="close"
          className="absolute right-5 top-9 md:hidden transition-transform duration-300"
          onClick={toggleMenu}
          style={{ cursor: "url(/assets/icons/hand.svg), auto" }}
        />

        <ul className="pt-7 px-5 md:flex md:p-0 justify-center gap-x-8">
          {menuData.map((item, i) => (
            <li
              key={i}
              className=" py-4 border-b last:border-b-0 border-[#E9E9E9] md:border-b-0 md:p-0 flex items-center gap-x-1 text-[1rem] leading-none font-medium"
            >
              <MenuItem label={item.label} subMenu={item.subMenu} />
            </li>
          ))}
        </ul>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default NavBar;
