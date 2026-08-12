"use client"

import { LightDarkModeToggle } from "@/src/components/ui/lightDarkModeToggle"
import { Sidebar } from "@/src/components/ui/sidebar"
export default function Settings() {
  return (
    <div className="flex">
      <Sidebar highlitedIcon="settings"/>
      <main className="flex-1">
        
        <div className="flex flex-row justify-center py-10 lg:py-20 xl:py-20">
          <h1 className="font-bold text-4xl">Settings</h1>
        </div>
        <hr className='border-neutral-800'/>

        <div className="flex items-center gap-4 p-6">
          <p className="font-bold">Theme:</p><LightDarkModeToggle/>
        </div>
      </main>
    </div>
  )
}