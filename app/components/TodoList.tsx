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


export default function TodoList() {


  const [confirm, setConfirm] = useState(false)


  console.log(confirm);



  const todos = [
    { id: 1, name: 'Buy Milk', completed: false },
    { id: 2, name: 'Buy Eggs', completed: false },
    { id: 3, name: 'Buy Bread', completed: false },
    { id: 3, name: 'Buy Bread', completed: false },
    { id: 3, name: 'Buy Bread', completed: false },

  ]

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Favorite Color</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => (
            <tr

              key={todo.id}>
              <td>{todo.name}</td>
              <td>{todo.completed}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )

}