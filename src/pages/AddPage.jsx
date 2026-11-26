import { useState } from "react";
import { useCarContext } from "../hooksPerso/useCarContext";
import {useNavigate} from 'react-router-dom'

export default function AddPAge() {
// récupération d'une des methode du context grace au hookPerso
    const { addCar } = useCarContext()
    
    // instance pour la récupération des valeurs du formulaires
    const [newCar, setNewCar] = useState({
        brand: "",
        model: "",
        year: 0,
        color: "",
        price: 0,
        serialNumber: "",
        image: "",
    })

    // import et utilisation du useNavigate qui permet de rediriger l'utilisateur 
    const navigate = useNavigate()

    // methode qui appel l'ajout du context ce qui permet une gestion des erreurs avant la soumission
    const addCarToContext = () => {
        if (newCar === null) {
            console.log();

        } else {
            addCar(newCar)
            navigate('/liste')
        }
    }

    return (
        <>
            <h1>AddPage</h1>

            
            <div>

                <div>
                    <label>Brand</label>
                    <input type="text" onChange={(e) => setNewCar((prev) => ({ ...prev, brand: e.target.value }))} />
                </div>

                <div>
                    <label>Model</label>
                    <input type="text" onChange={(e) => setNewCar((prev) => ({ ...prev, model: e.target.value }))} />
                </div>
                <div>
                    <label>year</label>
                    <input type="number" onChange={(e) => setNewCar((prev) => ({ ...prev, year: e.target.value }))} />
                </div>
                <div>
                    <label>color</label>
                    <input type="text" onChange={(e) => setNewCar((prev) => ({ ...prev, color: e.target.value }))} />
                </div>
                <div>
                    <label>price</label>
                    <input type="number" onChange={(e) => setNewCar((prev) => ({ ...prev, price: e.target.value }))} />
                </div>
                <div>
                    <label>serialNumber</label>
                    <input type="text" onChange={(e) => setNewCar((prev) => ({ ...prev, serialNumber: e.target.value }))} />
                </div>
                <div>
                    <label>image</label>
                    <input type="text" onChange={(e) => setNewCar((prev) => ({ ...prev, image: e.target.value }))} />
                </div>
                {newCar.image.length > 0 ? (<img src={newCar.image} alt="" width="200px" />) : null }
                
                {/*ici on déclenche l'ajout */}
                <button onClick={() => addCarToContext()}>Add</button>

                {/*redirection avec le navigate ( instance de useNavigate )*/}
                <button onClick={() => navigate('liste')}>retour</button>
            </div>
        </>
    )
}