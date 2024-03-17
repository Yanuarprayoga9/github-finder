"use client";
import { useUsers } from "@/hooks/use-user-github";
import { useState } from "react";



export default function Home() {
  const [userName, setUserName] = useState("octocat");

  const { data, isLoading, refetch } = useUsers("Yanuarprayoga9");
  if(isLoading) return <h1>Loading.....</h1>
  console.log(data);
  return (
    <div className="w-full min-h-screen flex flex-col items-center  gap-y-6">
      <div className="">searcher</div>
      <div className=""></div>
    </div>
  );
}
