"use client";

import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";

export type SearchProps = {
  filterText: string;
  onFilterTextChange: (newFilterText: string) => void;
};

const Search: React.FC<SearchProps> = ({ filterText, onFilterTextChange }) => {
  const [isSearchFieldVisible, setIsSearchFieldVisible] =
    useState<boolean>(false);
  const [mobileSize, setMobileSize] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      setMobileSize(true);
    }
    if (isSearchFieldVisible) {
      ref?.current?.focus();
    }
  }, [isSearchFieldVisible]);

  const handleFilterTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    onFilterTextChange(event.target.value);
  };

  const showSearchField = () => {
    setIsSearchFieldVisible(true);
  };

  const hideSearchField = () => {
    setIsSearchFieldVisible(false);
  };

  return (
    <div className={`absolute mr-5 md:mr-0 top-[2.125rem] right-0 z-50`}>
      {isSearchFieldVisible ? (
        <input
          type="search"
          value={filterText}
          onChange={handleFilterTextChange}
          className={`border rounded-md px-2 py-1 ${
            mobileSize
              ? `fixed top-8 left-1/2 transform -translate-x-1/2 transition-transform duration-300  ${
                  isSearchFieldVisible
                    ? "translate-y-[50px] "
                    : "-translate-y-[-150px]"
                }`
              : "translate-y-[-10px]"
          }  `}
          ref={ref}
          onBlur={hideSearchField}
        />
      ) : (
        <Image
          src="/assets/icons/search.svg"
          width={18}
          height={18}
          alt="search"
          onClick={showSearchField}
        />
      )}
    </div>
  );
};

export default Search;
