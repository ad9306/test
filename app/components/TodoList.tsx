// const TodoList = () => {
//     return <div className="overflow-x-auto">
//     <table className="table">
//       {/* head */}
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Favorite Color</th>
//         </tr>
//       </thead>
//       <tbody>
//         {/* row 1 */}
//         <tr>
//           <td>Cy Ganderton</td>
//           <td>Blue</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// }

// export default TodoList;
"use client"

import { useState } from "react"
import AddTask from "./addtask";
import { useRouter } from "next/navigation";


export default function TodoList() {


  //db
  const [todoArray, setTodoArray] = useState([
    { id: 0, name: '', completed: false },

  ])

  const todoarrayJson = JSON.stringify(todoArray)

  const [name, setName] = useState('')


  const addbtn = () => {
    setTodoArray([...todoArray, { id: Math.random(), name: name, completed: false }])
  }


  const deletebtn = (id: number) => {
    setTodoArray(todoArray.filter((todo) => todo.id !== id))
  }

  const setCompleted = (id: number) => {
    setTodoArray(todoArray.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  return (
    <div className="overflow-x-auto">

      <AddTask />

      <button className="pr-2" onClick={() => {
        addbtn()
        setName('')

      }}>add</button>

      <input
        value={name}
        type="text" onChange={(e) => {
          setName(e.target.value)
        }
        } />



      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Favorite Color</th>
          </tr>
        </thead>

        <tbody>
          {todoArray.map((todo) => (
            <tr

              key={todo.id}>
              <td>{todo.name}</td>
              <td>{todo.completed ? "O" : "X"}</td>
              <td>
                <button onClick={() => {
                  deletebtn(todo.id)
                }}>delete</button>
              </td>
              <td>
                <button onClick={() => {
                  setCompleted(todo.id)
                }}>

                  {todo.completed ? "완료됐어요" : "완료하기"}

                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

      가짜 DB 보기
      {todoarrayJson == "[]" ? <div>no data</div> : <div>{todoarrayJson}</div>}

    </div>
  )

}