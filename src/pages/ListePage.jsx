import { useCarContext } from "../hooksPerso/useCarContext";


export default function ListePage(){
    const {cars,deleteCar} = useCarContext()


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
                                <button>Details</button>
                                <button>Update</button>
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