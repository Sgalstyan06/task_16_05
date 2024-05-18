"use client";

import React, { useEffect, useState } from "react";

import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import Search, { SearchProps } from "../Search/Search";

const Header: React.FC<SearchProps> = ({ filterText, onFilterTextChange }) => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`sticky bg-white top-0 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : ""
      }`}
    >
      <div className="relative max-w-[23.75rem] md:max-w-[45.75rem] lg:max-w-[47.5rem] xl:max-w-[72.5rem] mx-auto">
      <div className="grid justify-center pt-8 md:pt-7 pb-6">
        <Logo />
      </div>
        <Search
          filterText={filterText}
          onFilterTextChange={onFilterTextChange}
        />
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
