"use client";

import React, { useCallback } from "react";
import { useRouter } from "next/navigation";

import useLoginModal from "@/hooks/useLoginModal";

const SidebarItem = ({ label, href, icon: Icon, onClick, auth }) => {
  //Created an alias for icon so that it could be used as a component

  const router = useRouter();
  const loginModal = useLoginModal();

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }

    if (auth && !currentUser) {
      loginModal.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [router, href, auth, loginModal, onClick]);

  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div
        className="relative
        flex 
        h-14
        w-14
        cursor-pointer
        items-center
        justify-center 
        rounded-full
        p-4 
        hover:bg-slate-300 
        hover:bg-opacity-10 
        lg:hidden
      "
      >
        <Icon size={28} color="white" />
      </div>
      <div
        className="
        
        relative 
        hidden 
        cursor-pointer 
        items-center 
        gap-4 
        rounded-full 
        p-4 
        hover:bg-slate-300 
        hover:bg-opacity-10
        lg:flex
      "
      >
        <Icon size={24} color="white" />
        <p className="hidden text-xl text-white lg:block">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
