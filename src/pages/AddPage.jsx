import { useState } from "react";
import { useCarContext } from "../hooksPerso/useCarContext";

export default function AddPAge(){
const {addCar} = useCarContext()
const [newCar , setNewCar] = useState({
      brand: "",
      model: "",
      year: 0,
      color: "",
      price: 0,
      serialNumber: "",
      image: "",
}) 


const addCarToContext = () => {
    if(newCar === null){
            console.log();
            
    }else{
        addCar(newCar)
    }
}
    return(
        <>
            <h1>AddPage</h1>

            <div>

                <div>
                    <label>Brand</label>
                    <input type="text" onChange={(e) => setNewCar((prev) => ({...prev,brand:e.target.value})) } />
                </div>
                
                <input type="text" onChange={(e) => setNewCar((prev) => ({...prev,model:e.target.value}))  } />
                <input type="number" onChange={(e) => setNewCar((prev) => ({...prev,year:e.target.value})) } />
                <input type="text" onChange={(e) => setNewCar((prev) => ({...prev,color:e.target.value})) } />
                <input type="number" onChange={(e) => setNewCar((prev) => ({...prev,price:e.target.value})) } />
                <input type="text" onChange={(e) => setNewCar((prev) => ({...prev,serialNumber:e.target.value}))  } />
                <input type="text" onChange={(e) => setNewCar((prev) => ({...prev,image:e.target.value}))  } />

                <button onClick={() => addCarToContext()}>Add</button>
            </div>
        </>
    )
}