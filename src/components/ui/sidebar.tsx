"use client"

// TODO Note!
// * The comments in this code 
// ? are best viewed with the 
// ! Better Comments Next VSCode extension

// ? is used for explanations
// * is used for notes
// ! is used for alerts!
// TODO is used for TODO's

import Link from "next/link"
import * as FeatherIcons from "react-feather"
import { useTheme } from "next-themes"

interface SidebarProps {
  highlitedIcon: string
}

// ? highlitedIcon only takes the following inputs:
// ? dash, courses, leaderboard, account, settings.


export const Sidebar = ({highlitedIcon}: SidebarProps) => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col p-5 gap-5">
        <Link href="/dash">
          <div className={`p-2 rounded-2xl
              ${highlitedIcon === "dash"
                ? 'dark:bg-[#1F1F1F] bg-[#e3e3e3]'
                : ""
              }
            `}>
            <FeatherIcons.Home className="sm:size-10 md:size-10"/>
          </div>
        </Link>
        <Link href="/dash/courses">
          <div className={`p-2 rounded-2xl
              ${highlitedIcon === "courses"
                ? 'dark:bg-[#1F1F1F] bg-[#e3e3e3]'
                : ""
              }
            `}>
            <FeatherIcons.Book className="sm:size-10 md:size-10"/>
          </div>
        </Link>
        <Link href="/dash/leaderboard">
          <div className={`p-2 rounded-2xl
              ${highlitedIcon === "leaderboard"
                ? 'dark:bg-[#1F1F1F] bg-[#e3e3e3]'
                : ""
              }
            `}>
            <FeatherIcons.Award className="sm:size-10 md:size-10"/>
          </div>
        </Link>
        <Link href="/dash/account">
          <div className={`p-2 rounded-2xl
              ${highlitedIcon === "account"
                ? 'dark:bg-[#1F1F1F] bg-[#e3e3e3]'
                : ""
              }
            `}>
            <FeatherIcons.User className="sm:size-10 md:size-10"/>
          </div>
        </Link>
        <Link href="/dash/settings">
          <div className={`p-2 rounded-2xl
              ${highlitedIcon === "settings"
                ? 'dark:bg-[#1F1F1F] bg-[#e3e3e3]'
                : ""
              }
            `}>
            <FeatherIcons.Settings className="sm:size-10 md:size-10"/>
          </div>
        </Link>
        <Link href="https://github.com/FOSSLingo" onClick={() => alert("Please leave some stars, and follow the GitHub organization!")}>
          <div className={`p-2 rounded-2xl`}>
            <FeatherIcons.GitHub className="sm:size-10 md:size-10"/>
          </div>
        </Link>
      </div>
      <div className="h-screen w-px bg-neutral-800"/>
    </div>
  )
}