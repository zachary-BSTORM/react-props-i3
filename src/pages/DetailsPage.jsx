import {useParams} from 'react-router-dom'
import { useCarContext } from './../hooksPerso/useCarContext';

export default function DetailsPAge(){

    const {getCarById} = useCarContext()

    // useParams : permet de récupérer un paramètre dans la route ("update/:id")
    // Attention le paramètre récupérer depuis la route est de type "String"
    const {id} = useParams()

    // appel du contexte pour la récupération d'un véhicule
    const car = getCarById(id)

    

    return(
        <>
            <h1>DetailsPage</h1>

            <div>
                <p>{car.model}</p>
                <p>{car.marque}</p>
                <img src={car.image} alt={car.marque} width="200"/>
            </div>
        </>
    )
}