import { MoonIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <div className="w-full flex justify-between">
      <p className="text-2xl font-semibold">Devfinder</p>
      <Button
    variant={'secondary'}
      >
        <MoonIcon />
      </Button>
    </div>
  );
};
