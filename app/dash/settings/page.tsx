"use client"

import { LightDarkModeToggle } from "@/src/components/ui/lightDarkModeToggle"
import { Sidebar } from "@/src/components/ui/sidebar"
import Cookie from "js-cookie"


function setIsAiFeaturesEnabledUser(input: string) {
  Cookie.set('IsAiFeaturesEnabledUser', input, {expires: 365});
}

export default function Settings() {
  const userSetting = Cookie.get("IsAiFeaturesEnabledUser");
  return (
    <div className="flex">
      <Sidebar highlitedIcon="settings"/>
      <main className="flex-1">
        <div className="flex flex-row justify-center py-10 lg:py-20 xl:py-20">
          <h1 className="font-bold text-4xl">Settings</h1>
        </div>
        
        <hr className='border-neutral-800'/>

        <div className="flex items-center gap-4 pl-6 pt-6">
          <p className="font-bold">Theme:</p>
          <LightDarkModeToggle/>
        </div>
        <div className="flex items-center gap-4 pl-6 pt-6">
          <p className="font-bold">AI Features:</p>
          <select 
            name="IsAiFeaturesEnabledUserDropdown" 
            className="border-1 rounded-lg p-2"
            defaultValue={userSetting}
            onChange={(e) => setIsAiFeaturesEnabledUser(e.target.value)}
          >
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
            <option value="server">Let Server decide</option>
          </select>
        </div>
      </main>
    </div>
  )
}