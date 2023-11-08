import Todolist from './components/calltodolist'
import AddTask from './components/addtask'
import TestList from './components/test_todo'


export default function Home() {
  return (
    <>
      <main className='max-w-4xl mx-auto mt-4'>
        <title>Slow and steady wins the race</title>
        <div className='text-center my-5 flex flex-col gap-4'>
          <h1 className='text-2xl font-bold'>Todo App</h1>
        </div>
      </main>

      <TestList />
    </>
  )
}
