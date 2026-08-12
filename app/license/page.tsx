"use client"

import Link from "next/link"

import { useTranslations } from "next-intl";

import { Footer } from "@/src/components/ui/footer";
import { NavBar } from "@/src/components/ui/navbar";



export default function License() {
  const t = useTranslations('LicensePage')
  return (
    <>
      <NavBar/>
      <main>
        <section className="flex min-h-[10vh] sm:min-h-[40vh] md:min-h-[30vh] lg:min-h-[20vh] flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-4xl font-bold md:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
        </section>
        <hr className='border-neutral-800'/>
        <section className="flex min-h-[30vh] flex-col items-center justify-center p-6">
          <div className='text-center'>
            <p className="max-w-2xl text-lg md:text-xl">
              {t("explanation")}<br /><br />
              {t("explanationQuestion")}<br /><br />
            </p>
          </div>
          <p className="max-w-2xl text-lg md:text-xl space-y-6">
            {t.rich("softwareQuestions.1", {
              strong: (chunks) => <strong>{chunks}</strong>
            })}<br />
            {t.rich("softwareQuestions.2", {
              strong: (chunks) => <strong>{chunks}</strong>
            })}<br />
            {t.rich("softwareQuestions.3", {
              strong: (chunks) => <strong>{chunks}</strong>
            })}<br />
          </p>
          <div className='text-center'>
            <p className="max-w-2xl text-lg md:text-xl pt-6">
              <mark className='dark:bg-white dark:text-white bg-black text-white'>{t("alternatively")}</mark><br/><br/>
            </p>
          </div>
          <p className="max-w-2xl text-lg md:text-xl space-y-6">
            {t("resourcesQuestions.1")}<br />
            {t.rich("resourcesQuestions.2", {
              strong: (chunks) => <strong>{chunks}</strong>
            })}            
          </p>
        </section>
        <hr className='border-neutral-800'/>
        <section className="flex sm:min-h-[30vh] md:min-h-[20vh] lg:min-h-[10vh] xl:min-h-[0vh] flex-col items-center justify-center p-6 px-23">
          <p>{t("disclaimer")}&nbsp;
          <Link href="https://choosealicense.com/licenses/cc-by-4.0/">CC BY-SA 4.0</Link>, {t("and")}&nbsp;
          <Link href="https://choosealicense.com/licenses/agpl-3.0/">AGPL-3.0</Link>
          </p>
        </section>
        <Footer/>
      </main>
    </>
  )
}