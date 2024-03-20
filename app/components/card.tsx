import { GitHubUser } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import dateFormte from "dateformat";
import { UserInfo } from "./user-info";
import { Link2Icon, Locate, Twitter } from "lucide-react";
export interface UserAdd {
  title: string;
  link: string;
  icon: React.ReactNode;
}
const Card = ({ user }: { user: GitHubUser | undefined }) => {
  const userAdd = [
    {
      title: user?.location,
      link: "",
      icon: <Locate />,
    },
    {
      title: user?.twitter_username,
      link: "",
      icon: <Twitter />,
    },
    {
      title: user?.url,
      link: user?.url,
      icon: <Link2Icon />,
    },
  ];
  if (!user) return "";
  return (
    <main className="w-full flex flex-col bg-white dark:bg-darkCol rounded-xl  space-y-6 shadow-md p-6">
      <div className="flex justify-between p-8 w-full">
        <div className="flex space-x-3">
          <Image
            src={user.avatar_url}
            alt="profil"
            className="rounded-full  border-2"
            width={89}
            height={100}
          />
          <div className="">
            <p className="text-1xl">{user.name}</p>
            <Link href={user.html_url} className="text-blue-400">
              @{user.login}
            </Link>
          </div>
        </div>
        <div className="">
          <p className="text-sm">
            <span>Joined </span>
            {dateFormte(user.created_at, "dd mmm yyyy")}
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-600">
        {user.bio ? user.bio : "This profile has no bio"}
      </p>
      <UserInfo
        repos={user.public_repos}
        followers={user.followers}
        following={user.following}
      />
      {userAdd.map((u) => (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 text-sm text-gray-600"
          key={u.title}
        >
          <div className=" flex items-center  gap-4">
            <div className="w-4 h-4">{u.icon}</div>
            <Link href={u.link ? u.link : ""}>
              {u.title ? u.title : "none"}
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Card;
