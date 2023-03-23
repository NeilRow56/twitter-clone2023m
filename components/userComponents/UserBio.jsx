"use client";

import { format } from "date-fns";
import { BiCalendar } from "react-icons/bi";
import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import { useMemo } from "react";
import Button from "../Button";

const UserBio = ({
  id,
  name,
  username,
  bio,
  createdAt,
  followingIds,
  followersCount,
}) => {
  const { data: currentUser } = useCurrentUser();

  const dateJoined = useMemo(() => {
    if (!createdAt) {
      return null;
    }

    return format(new Date(createdAt), "MMMM yyyy");
  }, [createdAt]);

  return (
    <div className="border-b-[1px] border-neutral-800 pb-4">
      <div className="flex justify-end p-2">
        {currentUser?.id === id ? (
          <Button onClick={() => {}} secondary label="Edit" />
        ) : (
          <Button onClick={() => {}} label="Follow" secondary />
        )}
      </div>
      <div className="mt-8 px-4">
        <div className="flex flex-col">
          <p className="text-2xl font-semibold text-white">{name}</p>
          <p className="text-md text-neutral-500">@{username}</p>
        </div>
        <div className="mt-4 flex flex-col">
          <p className="text-white">{bio}</p>
          <div
            className="
              mt-4 
              flex 
              flex-row 
              items-center 
              gap-2 
              text-neutral-500
          "
          >
            <BiCalendar size={24} />
            <p>Joined {dateJoined}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-row items-center gap-6">
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">{followingIds?.length}</p>
            <p className="text-neutral-500">Following</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">{followersCount || 0}</p>
            <p className="text-neutral-500">Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
