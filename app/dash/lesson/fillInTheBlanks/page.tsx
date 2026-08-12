import fillInTheBlanksServer from '@/src/components/questionTypes/fillInTheBlanksServer'
import FillInTheBlanks from '@/src/components/questionTypes/fillInTheBlanks'

import { parse, stringify } from 'yaml'
import YAML from 'yaml'

export default async function fillInTheBlanks({ searchParams }: any) {
  const data = await fillInTheBlanksServer({ searchParams })

  return <FillInTheBlanks data={data}/>
}