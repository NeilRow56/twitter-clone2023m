"use client";

import Header from "@/components/Header";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import UserHero from "../../../components/userComponents/UserHero";
import UserBio from "../../../components/userComponents/UserBio";

//Fetch user
const fetchUserDetails = async (userId) => {
  const response = await axios.get(`/api/users/${userId}`);

  return response.data;
};

export default function UserDetail(url) {
  const { data, isLoading } = useQuery({
    queryKey: ["detail-user"],
    queryFn: () => fetchUserDetails(url.params.userId),
  });

  if (isLoading)
    return (
      <div className="flex h-full items-center justify-center">
        <ClipLoader color="lightblue" size={80} />
      </div>
    );

  return (
    <>
      <Header showBackArrow label={data?.name} />

      <UserHero
        id={data?.id}
        name={data?.name}
        email={data?.email}
        coverImage={data.coverImage}
      />
      <UserBio
        id={data?.id}
        name={data?.name}
        username={data?.username}
        bio={data.bio}
        followingIds={data.followingIds}
        followersCount={data.followersCount}
        createdAt={data.createdAt}
      />
    </>
  );
}
