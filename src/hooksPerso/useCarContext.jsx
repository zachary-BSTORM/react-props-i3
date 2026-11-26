import { useContext } from "react";
import { CarContext } from "../context/CarContext";

export function useCarContext(){
    // récupération du context
    const context = useContext(CarContext)

    // on renvoie une erreur si le context n'est pas accessible
    if (!context){
        throw new Error("Le context n'est pas disponible sur cette page");     
    }
    // si le context est disponible on le renvoie à qui le demande
    return context
}