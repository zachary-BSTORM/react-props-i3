
import { useParams,useNavigate } from 'react-router-dom';
import { useCarContext } from './../hooksPerso/useCarContext';
import { useState } from 'react';

export default function UpdatePage() {
// récupération des methodes necessaires depuis le hookPerso
    const {getCarById,updateCar,deleteCar} = useCarContext()

    // useParams : permet de récupérer un paramètre dans la route ("update/:id")
    // Attention le paramètre récupérer depuis la route est de type "String"
    const {id} = useParams()

    // appel du contexte pour la récupération d'un véhicule
    const [car,SetCar] = useState(() => getCarById(id))

// methode qui permet de gérer les cas d'erreur avant d'effectuer la soumission
    const updateCarPage = () => {
        if(car.model.length > 3){
            updateCar(id,car)
            navigate('/liste')
        }
    }

    const navigate = useNavigate()

    return (
        <>
            <h1>UpdatePage</h1>

            <div>

                <div>
                    <label>Brand</label>
                    <input type="text" value={car.brand} onChange={(e) => SetCar((prev) => ({ ...prev, brand: e.target.value }))} />
                </div>

                <div>
                    <label>Model</label>
                    <input type="text" value={car.model} onChange={(e) => SetCar((prev) => ({ ...prev, model: e.target.value }))} />
                </div>

                <div>
                    <label>year</label>
                    <input type="number" value={car.year} onChange={(e) => SetCar((prev) => ({ ...prev, year: e.target.value }))} />
                </div>
                
                <div>
                    <label>color</label>
                    <input type="text" value={car.color} onChange={(e) => SetCar((prev) => ({ ...prev, color: e.target.value }))} />
                </div>
                
                <div>
                    <label>price</label>
                    <input type="number" value={car.price} onChange={(e) => SetCar((prev) => ({ ...prev, price: e.target.value }))} />
                </div>
                
                <div>
                    <label>serialNumber</label>
                    <input type="text" value={car.serialNumber} onChange={(e) => SetCar((prev) => ({ ...prev, serialNumber: e.target.value }))} />
                </div>
                
                <div>
                    <label>image</label>
                    <input type="text" value={car.image} onChange={(e) => SetCar((prev) => ({ ...prev, image: e.target.value }))} />
                </div>
                
                {car.image.length > 0 ? <img src={car.image} alt="" width="200px" /> : null}

                <button onClick={() => updateCarPage()}>Update</button>
                <button onClick={() => deleteCar(car.id)}>Delete</button>

                <button onClick={() => navigate('/liste')}>retour</button>

            </div>
        </>
    )
}