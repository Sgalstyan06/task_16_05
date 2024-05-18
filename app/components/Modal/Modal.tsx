"use client";

import React, { ReactNode, useEffect, useRef } from "react";

const Modal = ({
  children,
  isModalOpened,
  closeModal,
}: {
  children: ReactNode;
  isModalOpened: boolean;
  closeModal: () => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isModalOpened) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isModalOpened &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpened, closeModal]);

  return (
    <>
      {isModalOpened && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="grid gap-y-4 max-w-sm shadow-md bg-white rounded-2xl	  md:max-w-3xl w-full mx-4 p-6 max-h-[80vh] overflow-auto"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
            <button
              className="mt-4 p-2 bg-red-500 text-white rounded"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
