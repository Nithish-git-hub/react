import React, { useEffect, useState ,useCallback} from 'react'

const Usetodo = () => {
    const[todos,settodos]=useState([])

    useEffect(()=>{
        const ls=JSON.parse(localStorage.getItem("todos"))
        if(ls){
            settodos(ls)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
    const addtodo = useCallback((t) => {
  settodos(p => [
    ...p,
    {
      id: Date.now(),
      title: t,
      completed: false
    }
  ]);
}, []);


    const toggletodo = useCallback((id) => {
  settodos(p =>
    p.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  );
}, []);


    const removetodo=useCallback((id)=>{
        settodos(p=>p.filter(todo=>todo.id!==id))
},[]);

  return {todos,addtodo,toggletodo,removetodo}
}

export default Usetodo