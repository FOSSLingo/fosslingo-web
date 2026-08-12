// TODO Note!
// * The comments in this code 
// ? are best viewed with the 
// ! Better Comments Next VSCode extension

// ? is used for explanations
// * is used for notes
// ! is used for alerts!
// TODO is used for TODO's

import { VerticalBr } from "@/src/components/ui/verticalBr"
import { LessonCard } from "@/src/components/ui/lessonCard";
import Link from "next/link";
import Navigation, { redirect } from "next/navigation"
import * as FeatherIcons from 'react-feather';
import { Sidebar } from "@/src/components/ui/sidebar";

export default async function Dash({ searchParams }: { searchParams: Promise<{ courseId?: string }>}) {
  const { courseId } = await searchParams;
  const serverUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const response = await fetch(serverUrl!, { cache: "no-store" });

  if (!courseId) {
    redirect("/dash/courses")
  }

  const courses = await response.json();
  const course = courses.find((c: any) => c.courseID === Number(courseId));

  // * ofcourse cache: can be changed / removed if you want no caching for faster loading, but i reccomend no caching
  const courseResponse = await fetch(`${serverUrl}/resources${course.courseFolder}/index.json`, {cache: "no-store"});  
  const courseIndex = await courseResponse.json();

  return (
    <div className="flex">
      <Sidebar highlitedIcon="dash"/> {/* * See?! I turned it into a reuseable component! */}
      <main className="flex-1">
        <div className="flex flex-row justify-center py-10 lg:py-20 xl:py-20">

          <h1 className="font-bold text-4xl">Learn</h1>
        </div>
        <hr className='border-neutral-800'/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-6">
          {courseIndex.Sections.map((section: any) =>
            section.lessons.map((lesson: any, index: any) => (
              // TODO | inputting key, lesson, name, lessonFile,
              // TODO | and lessonType would probably be easier
              // TODO | to do in the actual lessonCard.tsx 
              // TODO | component but it's whatever
              <LessonCard
                key={lesson.id}
                lesson={lesson.lesson}
                name={lesson.name}
                lessonFile={lesson.lessonFile}
                lessonType={lesson.lessonType}
                courseHrefTag={course.courseHrefTag}
                lessonHrefTag={lesson.lessonHrefTag}
                sectionHrefTag={lesson.sectionHrefTag}
              />
            ))
          )}
        </div>
      </main>
    </div>
  )
}