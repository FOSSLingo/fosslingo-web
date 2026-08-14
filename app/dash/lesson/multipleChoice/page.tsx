import multipleChoiceServer from '@/src/components/questionTypes/multipleChoiceServer'
import MultipleChoice from '@/src/components/questionTypes/multipleChoice'

export default async function multipleChoice({ searchParams }: any) {
  const data = await multipleChoiceServer({ searchParams })

  return <MultipleChoice data={data}/>
}