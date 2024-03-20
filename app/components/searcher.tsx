import React from "react";

import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface SearcherProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export const Searcher: React.FC<SearcherProps> = ({
  value,
  onChange,
  onSubmit,
}) => {
  return (
    <form action={() => onSubmit} className="w-full flex items-center dark:bg-darkCol bg-white p-2 focus-within:ring-2  dark:focus-within:ring-gray-200 focus-within:ring-slate-800  rounded-lg ">
      <input type="text" onChange={onChange} value={value} className="w-full outline-none p-2 dark:bg-darkCol bg-white" />
      <Button type="submit" variant={"default"}>
        <MagnifyingGlassIcon className="w-4 h-4 " />
      </Button>
    </form>
  );
};
