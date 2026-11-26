import { useContext } from "react";
import { CarContext } from "../context/CarContext";

export function useCarContext(){
    const context = useContext(CarContext)

    if (!context){
        throw new Error("Le context n'est pas disponible sur cette page");     
    }

    return context
}