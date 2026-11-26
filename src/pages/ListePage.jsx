import { useCarContext } from "../hooksPerso/useCarContext";
import {Link , useNavigate} from 'react-router-dom'


export default function ListePage(){
    // récupération des methodes necessaires depuis le hookPerso
    const {cars,deleteCar} = useCarContext()

    // instance qui permet de déclencher la navigation
    const navigate = useNavigate()

    // methode qui declenche la navigation
    const redirectToDetails = (id) => {
            navigate(`/details/${id}`)
    }

    return(
        <>
            <h1>ListePage</h1>

            <ul>
                {cars.map((c) => (
                    <li key={c.id}>
                        <div>
                            <h2>{c.brand} - {c.model} - {c.color}</h2>
                            <p>{c.description}</p>
                            <p>{c.year}</p>
                            <p>{c.price}</p>
                            <p>{c.serialNumber}</p>
                            <div>
                                <button onClick={() => redirectToDetails(c.id)}>Details</button>
                                <Link to={`/details/${c.id}`} >Details</Link>
                                <button onClick={() => navigate(`/update/${c.id}`)}>Update</button>
                                <button onClick={() => deleteCar(c.id)}>Delete</button>
                            </div>
                        </div>
                        <img src={c.image} alt={c.model} />
                    </li>
                ))}
            </ul>
        </>
    )
}