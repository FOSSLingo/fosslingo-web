import typeTheTextServer from '@/src/components/questionTypes/typeTheTextServer'
import TypeTheText from '@/src/components/questionTypes/typeTheText'

import { parse, stringify } from 'yaml'
import YAML from 'yaml'

export default async function typeTheText({ searchParams }: any) {
  const data = await typeTheTextServer({ searchParams })

  return <TypeTheText data={data}/>
}