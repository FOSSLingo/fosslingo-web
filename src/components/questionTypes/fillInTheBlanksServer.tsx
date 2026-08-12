// TODO Note!
// * The comments in this code 
// ? are best viewed with the 
// ! Better Comments Next VSCode extension

// ? is used for explanations
// * is used for notes
// ! is used for alerts!
// TODO is used for TODO's

import { parse, stringify } from 'yaml'
import YAML from 'yaml'

export default async function fillInTheBlanksServer({ searchParams }: { searchParams: Promise<{ courseId?: string, lesson?: string, section?: string }>}) {

  const { courseId } = await searchParams;
  const { lesson } = await searchParams;
  const { section } = await searchParams;
  const sectionButANumber = Number(section); // ! please don't do -1 because the id's are
  const lessonButANumber = Number(lesson);   // ! starting from zero (0) now
  const serverUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const response = await fetch(serverUrl!, { cache: "no-store" });

  const courses = await response.json(); //? turn raw courses into proper json
  const course = courses.find((c: any) => c.courseID === Number(courseId)); 

  // * ofcourse cache: can be changed / removed if you want no caching for faster loading, but i reccomend no caching
  const courseResponse = await fetch(`${serverUrl}/resources${course.courseFolder}/index.json`, {cache: "no-store"});  
  const courseIndex = await courseResponse.json();

  const lessonFileResponse = await fetch(`${serverUrl}/resources${courseIndex.Sections[sectionButANumber].sectionFolder}/${courseIndex.Sections[sectionButANumber].lessons[lessonButANumber].lessonFile}`, { cache: "no-store" })
  const lessonText = await lessonFileResponse.text()
  const file = YAML.parse(lessonText)
  return {
    courseIndex,
    file,
    sectionButANumber,
    lessonButANumber,
  }  
}