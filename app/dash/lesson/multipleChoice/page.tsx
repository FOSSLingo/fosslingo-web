import multipleChoiceServer from '@/src/components/questionTypes/multipleChoiceServer'
import MultipleChoice from '@/src/components/questionTypes/multipleChoice'

import { parse, stringify } from 'yaml'
import YAML from 'yaml'

export default async function multipleChoice({ searchParams }: any) {
  const data = await multipleChoiceServer({ searchParams })

  return <MultipleChoice data={data}/>
}