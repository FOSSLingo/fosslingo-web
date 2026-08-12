import { CourseIcon } from "@/src/components/ui/courseIcon";
import { Sidebar } from "@/src/components/ui/sidebar";

export default async function Dash() {
  const serverUrl = process.env.NEXT_PUBLIC_BACKEND_URL
  const response = await fetch(serverUrl!, { cache: "no-store" });
  const index = await response.json()

  return (
    <div className="flex">
      <Sidebar highlitedIcon="courses"/>
      <main className="flex-1">
        <div className="flex flex-row justify-center py-10 lg:py-20 xl:py-20">
          <h1 className="font-bold text-4xl">Courses</h1>
        </div>
        <hr className='border-neutral-800'/>
        <div className="flex gap-4 p-6">
          {index.map((course: any, i: number) => (
            <CourseIcon
              key={i}
              courseID={i.toString()}
              alt={'Course Flag'}
            />
          ))}
        </div>
      </main>
    </div>
  )
}