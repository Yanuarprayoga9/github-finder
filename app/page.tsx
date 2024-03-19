"use client";
import { useUsers } from "@/hooks/use-user-github";
import { useState } from "react";
import { Searcher } from "./components/searcher";
import { Loader } from "./components/loader";
import Card from "./components/card";



export default function Home() {
  const [userName, setUserName] = useState("Yanuarprayoga9");
  const { data, isLoading, refetch,isError } = useUsers(userName);
  console.log({data})
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    refetch();
    
  }
  if(isError) "Something went wrong"
  return (
    <div className="w-full min-h-screen flex flex-col items-center  gap-y-6">
        <Searcher value={userName} onChange={e=>setUserName(e.target.value)} onSubmit={handleSubmit}/>
        
      {
        
        isLoading ?
        <Loader/>
        : 
        <Card user={data}/>
      }

    </div>
  );
}
