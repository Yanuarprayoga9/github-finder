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
    <form action={() => onSubmit} className="w-full flex items-center dark:bg-mainDark bg-white p-2 rounded-md">
      <input type="text" onChange={onChange} value={value} className="w-full outline-none p-2" />
      <Button type="submit" variant={"default"}>
        <MagnifyingGlassIcon className="w-4 h-4 " />
      </Button>
    </form>
  );
};
