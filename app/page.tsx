"use client";
import { useUsers } from "@/hooks/use-user-github";
import { useState } from "react";



export default function Home() {
  const [userName, setUserName] = useState("octocat");

  const { data, isLoading, refetch } = useUsers("Yanuarprayoga9");
 
  return (
    <div className="w-full min-h-screen flex flex-col items-center  gap-y-6">
      <div className="">searcher</div>
      {
        isLoading ?
        <h1>loading...</h1>
        : data?.login
      }
    </div>
  );
}
