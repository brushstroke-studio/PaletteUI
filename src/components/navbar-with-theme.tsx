import React from "react";
import { Navbar as NavbarComponent } from "./navbar";
import { ThemeProvider } from "./theme-provider";

export default function NavbarWithTheme() {
  return (
    <ThemeProvider defaultTheme="system">
      <NavbarComponent />
    </ThemeProvider>
  );
}
