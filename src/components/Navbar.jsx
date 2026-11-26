import { Link } from 'react-router-dom'

export default function Navbar(){

    return (
        <>
            <h1>Navbar</h1>
            <Link to="">Homepage</Link>
            <Link to="Liste">Liste</Link>
            <Link to="add">Ajout</Link>

        </>
    )
}