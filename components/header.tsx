import { MoonIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/theme-toggle";

export const Header = () => {
  return (
    <div className="w-full flex justify-between">
      <p className="text-2xl font-semibold">Devfinder</p>
        <ModeToggle />
    </div>
  );
};
