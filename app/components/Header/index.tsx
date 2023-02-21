import React from "react";
import { Navigation } from "@/app/components/Navigation";
import { navItems } from "@/app/constants";

export const Header = (): JSX.Element => {
  return (
    <header>
      <Navigation navItems={navItems} />
    </header>
  );
};
