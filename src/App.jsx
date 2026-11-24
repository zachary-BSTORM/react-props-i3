import { useState } from "react";

export default function App() {

  const [todos , setTodos] = useState([
    {
      id : 1,
      titre : "faire la vaisselle",
      completed : false
    }
  ])

  // ajout 
  const addTask = (task) => {
      setTodos([...todos,task])
  }



  // retirer
  const removeTask = (id) => {
      setTodos(todos.filter((t) => t.id !== id))
  }

  // modifier
const updateTask = (id) => {
  setTodos((prev) => prev.map((t) => t.id === id ? {...t,completed:false} : t))
}


  return (
    <>
      {/*avec un composant gérer l'ajout : input */}


      {/*avec un composant gérer l'affichage  , la modification et la suppression: <button onClick={}> */}

    </>

  )
}

function InputTodo(){
  // ajout

}

function ShowTodos(){
  // modifier
  // supprimer

}