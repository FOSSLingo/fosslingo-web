import Image from "next/image"
import Link from "next/link";
import { cookies } from "next/headers";

interface CourseIconProps {
  courseID: string;
  alt: string;
}

const serverUrl = process.env.NEXT_PUBLIC_BACKEND_URL
const response = await fetch(serverUrl!);
const index = await response.json()

export const CourseIcon = async ({ courseID, alt }: CourseIconProps) => {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value || 'light';
  return (
    <div className={`flex flex-col gap-2 items-center justify-center w-32 sm:w-32 md:w-36 lg:w-40 xl:w-48 h-32 sm:h-32 md:h-36 lg:h-40 xl:h-48 rounded-3xl border-2 dark:bg-[#0f0f0f] dark:text-white dark:border-[#1f1f1f] bg-[#e3e3e3] text-black border-[#cccccc]`}>
      <div className="relative w-18 aspect-[4/3] sm:w-18 md:w-22 lg:w-26 xl:w-30">
        <Image
          src={serverUrl + "/resources" + index[courseID].courseFlag}
          alt={alt}
          fill
          className="w-full h-auto rounded-xl"
          loading="eager"
        />
      </div>
      <p className="font-bold text-sm">{index[courseID].name}</p>
      <div className="flex items-center justify-center bg-teal-400 w-15 h-5 rounded-lg">
      <Link href={"/dash" + index[courseID].courseHrefTag}>
          <p className="font-bold text-black">Learn!</p>
        </Link>
      </div>
    </div>
  )
}