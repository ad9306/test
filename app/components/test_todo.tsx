"use client"

import { FindTodo } from "@/lib/gettodo";
import { useState } from "react";


export default function TestList() {


  const [Ldata, setLdata] = useState([])
  console.log(Ldata);
    const getData = async () => {



    try {
        const res = await FindTodo();

        setLdata(res);


    }


    catch (error) {
        console.log(error);
        return (
            alert("서버에러")
        )
    }

};

  return (
    <div>
  <div className="w-full">
  <button className="ondata p-2 border rounded-md mt-2 w-full" onClick={() => {
        getData()
      }}>내용불러오기</button>
  </div>
<div className="mt-2">
  <thead className="grid grid-cols-4 gap-3 py-2">
          <tr>id</tr>
          <tr>description</tr>
          <tr>completed</tr>
          <tr>button</tr>
  </thead>
{
  Ldata?.map((keys:any,i)=>(
    <div key={keys.id}>
      <div className="grid grid-cols-4 gap-3 py-2"> 

      <div>
        {keys.id} 
      </div>

      <div>
        {keys.description} 
      </div>

      <div>
        {keys.completed ? "완료" : "안됨" }
      </div>
      <div>
       <button className="p-2 border rounded-md mt-2 w-full"
       >
        버튼
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