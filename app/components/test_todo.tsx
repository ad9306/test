"use client"

import { useState,useTransition } from "react";
import { getTodo,delLine } from "@/lib/gettodo";
import { createTodo, updateComp } from "@/lib/createtodo";
import {useRouter} from "next/navigation"


export default function TestList(props:any) {

  const router = useRouter()


  const listdata = props.data

  const [ispending,setTransition] = useTransition() //지우기
  const [ispending2,setTransition2] = useTransition() //추가하기
  const [ispending3,setTransition3] = useTransition() //완료값 변경

  const [Ldata, setLdata] = useState([] as any)


  const [name, setName] = useState('')

/*
  //내용불러오기 -> 자동이기 때문에 필요없어짐
  const getData = async () => {

    try {
        const res = await getTodo();
        setLdata(res)
    }

    catch (error) {
        console.log(error);
        return (
            alert("서버에러")
        )
    }

};
*/

//내용추가하기
const plusData = (name:any) => {

  try {
    setTransition2(()=>{
      createTodo(name)
    })
      
    
  }

  catch (error) {
      console.log(error);
      return (
          alert("서버에러")
      )
  }
  finally{
    setName("")
    router.refresh()
  }

};

//내용지우기
async function deleteLine(id:any){
  setTransition(()=>{
    delLine(id);
    //  window.location.reload()
    router.refresh()

  })

}

//완료 상태 변화
const changeCompleted = (iddata: number, completeddata: boolean) => {
  setTransition3(()=>{
    const updatacompleted = completeddata ? false : true
    
    updateComp(iddata, updatacompleted)
    router.refresh()
  })

}


  return (
    <div>

  <div className="w-full">
  <button className="ondata p-2 border rounded-md mt-2 w-full" onClick={() => {
        location.replace(location.href);

      }}>새로고침</button>
  </div>
  <div className="w-1/3">
  <button className="ondata p-2 border rounded-md mt-2 w-full" onClick={() => {
        plusData(name)
      }}>내용추가하기</button>
  </div>
  <input
    value={name}
    type="text" onChange={(e) => {
      setName(e.target.value)
    }} />

    <div id="지우는상태"
    className={
      ispending ? "" : "hidden"
    }
    >
    
지우는중...
    </div>
    <div id="지우는상태"
    className={
      ispending2 ? "" : "hidden"
    }
    >
    
추가하는중...
    </div>
    <div id="상태변경"
    className={
      ispending3 ? "" : "hidden"
    }
    >
    
상태변경중...
    </div>

<div className="mt-2">
  <thead className="grid grid-cols-4 gap-3 py-2">
          <tr>id</tr>
          <tr>description</tr>
          <tr>completed</tr>
          <tr>button</tr>
  </thead>
{
listdata?.map((keys:any)=>(
    <div key={keys.id}>
      <div className="grid grid-cols-4 gap-3 py-2"> 

      <div>
        {keys.id} 
      </div>

      <div>
        {keys.description} 
      </div>

      <div>
        <button className="p-2 border rounded-md mt-2 w-full"
        onClick={()=>{
          changeCompleted(keys.id, keys.completed)
        }}>
        {keys.completed ? "완료" : "안됨" }
        </button>
      </div>
      <div>
       <button className="p-2 border rounded-md mt-2 w-full"
       onClick={()=>{
        deleteLine(keys.id)
       }}
       >
        Del
       </button>
      </div>

      </div>
    </div>


  ))
}
</div>



</div>
  )
}