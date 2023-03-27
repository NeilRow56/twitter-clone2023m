"use client";
import axios from "axios";
import { useState } from "react";
import PostList2 from "../../components/postListComponents/PostList2";
import PostList1 from "../../components/postListComponents/PostList1";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Avatar from "@/components/Avatar";
import UserDetails from "../../components/postListComponents/UserDetails";

export default function AboutPage() {
  const [currentPage, setCurrentPage] = useState(<PostList1 />);

  return (
    <div className="w-full ">
      <h1 className=" pt-2 text-5xl font-bold text-sky-500">Tanstack Query</h1>
      <div className="flex items-center justify-between gap-4">
        <div className="items-center">
          <button
            className="bg-dky-blue-500 border p-1 text-white"
            onClick={() => setCurrentPage(<PostList1 />)}
          >
            Posts List 1
          </button>
        </div>
        <div className="items-center">
          <button
            className="bg-dky-blue-500 border p-1 text-white"
            onClick={() => setCurrentPage(<PostList2 />)}
          >
            Posts List 2
          </button>
        </div>
        <div className="items-center">
          <button
            className="bg-dky-blue-500 border p-1 text-white"
            onClick={() => setCurrentPage(<UserDetails />)}
          >
            User Details
          </button>
        </div>
      </div>
      <br />
      {currentPage}
    </div>
  );

  function wait(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration));
  }
}
