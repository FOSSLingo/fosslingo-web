"use client";

import { useTheme } from "next-themes";

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  const calculatedProgress = Math.min(Math.max(progress, 0), 100);
  const { resolvedTheme } = useTheme()
  return (
    <div className="w-100 sm:w-150 md:w-190 lg:w-250 xl:w-300 2xl:w-350 h-6 rounded-xl border-2 dark:bg-black dark:border-[#2A2A2A] bg-white border-[#e3e3e3]">
      <div 
        className={`h-full bg-teal-400 rounded-xl`} 
        style={{ width: `${calculatedProgress}%` }} // ? doing w-${calculatedProgress} doesn't work ¯\_(ツ)_/¯
      />
    </div>
  )
}