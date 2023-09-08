import TodoList from './components/TodoList'
import AddTask from './components/addtask'

export default function Home() {
  return (
    <>
      <main className='max-w-4xl mx-auto mt-4'>
        <title>Slow and steady wins the race</title>
        <div className='text-center my-5 flex flex-col gap-4'>
          <h1 className='text-2xl font-bold'>Todo App</h1>
        </div>
      </main>
      체크박스로 변환하기
      <TodoList />
      완료개수 옮기기
    </>
  )
}
