import Navbar from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";

import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import AddPAge from './pages/AddPage';
import ListePage from './pages/ListePage';
import UpdatePage from './pages/UpdatePage';
import DetailsPAge from './pages/DetailsPage';


import { CarProvider } from "./context/CarContext.jsx";

export default function App(){

  return (
    <CarProvider>

      <Router>

        <Navbar/>

        <Routes>
            <Route path="" element={<Homepage/>}  />
            <Route path="add" element={<AddPAge/>} />
            <Route path="liste" element={<ListePage/>} />
            <Route path="update/:id" element={<UpdatePage/>} />
            <Route path="details/:id" element={<DetailsPAge/>} />


        </Routes>

      </Router>

    </CarProvider>
  )
}
