"use client"

import { useTheme } from 'next-themes';

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import * as FeatherIcons from "react-feather"

export const LightDarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex h-9 w-9 items-center justify-center rounded-lg border">
        {/* <Button variant="outline" size="icon"> */}
          <FeatherIcons.Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <FeatherIcons.Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        {/* </Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}