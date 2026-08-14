import TypeTheTextServer from '@/src/components/questionTypes/typeTheTextServer'
import TypeTheText from '@/src/components/questionTypes/typeTheText'

export default async function typeTheText({ searchParams }: any) {
  const data = await TypeTheTextServer({ searchParams })

  return <TypeTheText data={data}/>
}