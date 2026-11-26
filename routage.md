#### Routage React

- react router dom

```bash
npm install --save react-router-dom
```

- Verifier dans le package.json la présence de la dépendances


---

### Confuguration du routage 

- Router : Englobe tous les éléments à afficher

- Routes : Contenir toutes les routes ( path : "homepage" - composant : Homepage)

- Route : Liens entre le path et le composant : <Route path="/" element={<Homepage />} />


```jsx
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"


export default function App(){


  return (
      <Router>

        <Routes>
            <Route path="" element={}  />

        </Routes>

      </Router>
  )
}
```