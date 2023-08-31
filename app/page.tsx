import TodoList from './components/TodoList'
import AddTask from './components/addtask'

export default function Home() {
/*
daisyUI는 어떻게 대체한다고 해도 계속 이상한걸 가져온다..
다른 영상들도 마찬가지인데... 
1. 일단 완성을 해보고 그 경험을 토대로 따로 만들어본다
2. 필요없다 맨땅에 해딩각
*/
  return (
    <>
      <main className='max-w-4xl mx-auto mt-4'>
        <title>Slow and steady wins the race</title>
          <div className='text-center my-5 flex flex-col gap-4'>
            <h1 className='text-2xl font-bold'>Todo App</h1>
            <AddTask />
          </div>
      </main>
      <TodoList />
    </>
  )
}
