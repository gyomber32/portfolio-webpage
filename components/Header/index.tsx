import React from "react";
import { Navigation } from "@/components/Navigation";
import { navItems } from "@/constants";

export const Header = (): JSX.Element => {
  return (
    <header>
      <Navigation navItems={navItems} />
    </header>
  );
};
