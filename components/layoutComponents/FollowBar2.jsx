"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Avatar from "../Avatar";

//Fetch all users

const fetchAllUsers = async () => {
  const response = await axios.get("/api/users/getUsers");

  return response.data;
};

const FollowBar2 = () => {
  const { data, error, isLoading } = useQuery({
    queryFn: fetchAllUsers,
    queryKey: ["users"],
  });
  if (error) return error;
  if (isLoading) return <h1>Users are loading...</h1>;

  if (data.length === 0) {
    return null;
  }

  return (
    <div className="hidden px-6 py-4 lg:block">
      <div className="rounded-xl bg-neutral-800 p-4">
        <h2 className="text-xl font-semibold text-white">Who to follow</h2>
        <h2 className="text-xl font-semibold text-white">Follow Bar 2</h2>
        <div className="mt-4 flex flex-col gap-6">
          {/*User List */}
          {data.map((user) => (
            <div key={user.id} className="flex flex-row gap-4">
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-white">{user.name}</p>
                <p className="text-sm text-neutral-400">@{user.username}</p>
                <p className="text-sm text-neutral-400">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar2;
