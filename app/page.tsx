import TestList from './components/test_todo'
import { getTodo } from '@/lib/gettodo'
import CalendarPart from './components/calendar'

export default async function Home() {

const resdata = await getTodo()

  return (
    <>
      <main className='max-w-4xl mx-auto mt-4'>
        <title>Slow and steady wins the race</title>
        <div className='text-center my-5 flex flex-col gap-4'>
          <h1 className='text-2xl font-bold'>Todo App</h1>
        </div>
      </main>
      <TestList data={resdata} />

    </>
  )
}

export const revalidate = 0


