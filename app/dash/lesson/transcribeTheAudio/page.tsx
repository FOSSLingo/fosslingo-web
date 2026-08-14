import TranscribeTheAudioServer from '@/src/components/questionTypes/transcribeTheAudioServer'
import TranscribeTheAudio from '@/src/components/questionTypes/transcribeTheAudio'

export default async function fillInTheBlanks({ searchParams }: any) {
  const data = await TranscribeTheAudioServer({ searchParams })

  return <TranscribeTheAudio data={data}/>
}