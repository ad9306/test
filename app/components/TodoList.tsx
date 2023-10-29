"use client"

import { useState } from "react"
import AddTask from "./addtask";
import { useRouter } from "next/navigation";
import { prisma } from "@/lib/prisma";

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

  const [check, setCheck] = useState(0)

  const updateCheck = () => {
    setCheck(check + 1);
  }

  async function getTest() {

    try {
      await fetch("/api/gettodo/", { method: "GET" })

        .then((response) => //response.status === 404 ? alert("서버에러") : 
        console.log(response.json()))
        //response.json())
        .then((result) => result)//alert(result))
      //return setTodoArray([...todoArray, { id: result.id, name: result.name, completed: result.completed }])
    } catch (error) {
      throw (alert("서버에러"));
    }

  }



  return (
    <div className="overflow-x-auto">

      <AddTask />
      addtask안으로 내용 옮기기
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

      <button className="checkbtn" onClick={() => {
        updateCheck()
      }}>check</button>

      완료개수
      {check}

      <button className="ondata p-2 border rounded-md mt-2" onClick={() => {
        getTest()
      }}>내용불러오기</button>



      <table className="table">
        table 번호 업로드시간 완료시간 내용 지우기 완료하기
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