// import des éléments utilisés
import {createContext,useState} from 'react'


// implémentation

// création d'un context
export const CarContext = createContext(null)

// Provider : fournisseur d'informations et d'actions
export function CarProvider({children}){

// données
  const [cars, setCars] = useState([
    {
      id: 1,
      brand: "Peugeot",
      model: "208 GT Line",
      year: 2021,
      color: "Bleu Vertigo",
      price: 18490,
      serialNumber: "VF3UPHNSKMS041287",
      image: "https://placehold.co/600x400?text=Peugeot+208",
    },
    {
      id: 2,
      brand: "Renault",
      model: "Clio V Intens",
      year: 2019,
      color: "Rouge Flamme",
      price: 13900,
      serialNumber: "VF1RJA00563218745",
      image: "https://placehold.co/600x400?text=Renault+Clio",
    },
    {
      id: 3,
      brand: "Volkswagen",
      model: "Golf 8 Life",
      year: 2022,
      color: "Gris Lune",
      price: 24750,
      serialNumber: "WVWZZZCDZNW102934",
      image: "https://placehold.co/600x400?text=Volkswagen+Golf",
    },
    {
      id: 4,
      brand: "Toyota",
      model: "Yaris Hybride",
      year: 2020,
      color: "Blanc Nacré",
      price: 16200,
      serialNumber: "VNKKH3D3X0A215067",
      image: "https://placehold.co/600x400?text=Toyota+Yaris",
    },
  ]);

// actions

const addCar = (newCar) => {
    newCar.id = cars[cars.length - 1].id + 1
    setCars((prev) => [...prev,newCar])
}

const getCars = () => {
    return cars
}

const getCarById = (id) => {
    const index = cars.findIndex((c) => c.id === id)
    return cars[index]
}


const updateCar = (id,car) => {
    setCars((prev) => 
        prev.map((c) => c.id === id ? {...c,brand:car.band} : c))
}


const deleteCar = (id) => {
    setCars((prev) => prev.filter((c) => c.id !== id))
}


// renvoyer certains éléments

return(
    <CarContext.Provider value={{cars,addCar,getCars,getCarById,updateCar,deleteCar}}>
        {children}
    </CarContext.Provider>
)

}

// export des éléments