import React,{ useState,useRef,useEffect,useMemo } from "react";
import Usetodo from "./Usetodo";
import './App.css'
function App(){
    const[data,setdata]=useState("all")
  const {todos,addtodo,toggletodo,removetodo}=Usetodo();
  const inputref=useRef();
    useEffect(()=>{
        inputref.current.focus()
    },[])
    function submittogo(){
      const value=inputref.current.value.trim();
      if (!value) return;
      addtodo(value)
      inputref.current.value=""
      inputref.current.focus()
    }


    const filtereddata=useMemo(()=>{
      if(data==="completed"){
        return todos.filter(todo=>todo.completed);
      }
      if(data==="pending"){
        return todos.filter(todo=>!todo.completed);
      }
      return todos
    },[todos,data])

    const completed=todos.filter(t=>t.completed).length;
    const pending=todos.length-completed

  return(
    <div id="con">
      <h1>Todo App</h1>
        <input type="text" name="" id="" placeholder="enter todo" ref={inputref}/>
        <button onClick={submittogo}>submit</button>
        <hr />

        <button onClick={()=>setdata("all")}>All</button>
        <button onClick={()=>setdata("completed")}>completed</button>
        <button onClick={()=>setdata("pending")}>pending</button>
        <ul>
        {
          filtereddata.map(todo=>(
            
            <li key={todo.id}>
              <span>{todo.title}</span>
              <button onClick={()=>toggletodo(todo.id)}>completed</button>
              <button onClick={()=>removetodo(todo.id)}>delete</button>
              </li>
            
          ))
        }
        </ul>
        

        <h2>Total Tasks:{todos.length}</h2>
        <h2>completed Tasks:{completed}</h2>
        <h2>pending:{pending}</h2>
    </div>
  )

}
export default App
