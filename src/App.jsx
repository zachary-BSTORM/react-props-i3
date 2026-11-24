import { useState } from "react";
// composant "Parent" qui gère la logique et les valeurs
export default function App() {
  // valueParent sera transmis au premier enfant
  const [valueParent , setValueParent] = useState(0)

  // increment sera transmis au deuxième enfant
  const increment = () => {
    if(valueParent < 10){

      setValueParent((prev) => prev + 1)
    }else{
      setValueParent(0)
    }
  }

  return (
    <>
     <ShowValue valueChild={valueParent}/>
     <UpdateValue action={increment}/>
    </>
  )
}
// composant avec pour seul but d'afficher une valeur transmise par le parent
function ShowValue({valueChild}){

  return <h1>Hello {valueChild}</h1>
}

// composant avec pour seul but d'executer une action transmise par un parent
function UpdateValue({action}){

  return <button onClick={() => action()}>+</button>

}