import FillInTheBlanksServer from '@/src/components/questionTypes/fillInTheBlanksServer'
import FillInTheBlanks from '@/src/components/questionTypes/fillInTheBlanks'

export default async function fillInTheBlanks({ searchParams }: any) {
  const data = await FillInTheBlanksServer({ searchParams })

  return <FillInTheBlanks data={data}/>
}