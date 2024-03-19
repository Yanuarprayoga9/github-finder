import { GitHubUser } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({user}:{user:GitHubUser | undefined}) => {
    if(!user) return ""
  return (
    <main className="w-full flex flex-column bg-white dark:bg-mainDark">
      <div className="flex justify-between p-8">
        <div className="flex space-x-3">
          <Image src={user.avatar_url} alt="profil" className="rounded-full  border-2" width={89} height={100}/>
          <div className="">
            <p className="text-1xl">{user.name}</p>
            <Link href={user.html_url} className="text-blue-400">@{user.login}</Link>
          </div>
        </div>
        <div className=""></div>
      </div>
    </main>
  );
};

export default Card;
