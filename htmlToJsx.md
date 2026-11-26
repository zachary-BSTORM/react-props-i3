# Découper une interface en composants : la liste de tâches

## 1. Le HTML de départ

```html
<body>
  <div>
    <input type="text" />
    <button>Add</button>
  </div>

  <ul>
    <li>Tâche 1</li>
  </ul>
</body>
```

---

## 2. Analyser le HTML

| Partie | Rôle | Ce qu'il faut gérer |
|---|---|---|
| `<div>` avec `<input>` et `<button>` | Le formulaire d'ajout | La **valeur** de l'input et l'**action** du bouton |
| `<ul>` | La liste des tâches | Afficher **toutes** les tâches |
| `<li>` | Une tâche | Afficher **une** tâche |

---

## 3. Étape 1 : tout dans un seul composant

```jsx
function App() {
  return (
    <>
      <div>
        {/* valeur de l'input à gérer */}
        {/* action du bouton à gérer */}
        <input type="text" />
        <button>Add</button>
      </div>

      {/* liste des tâches */}
      <ul>
        <li>Tâche 1</li> {/* une tâche */}
      </ul>
    </>
  );
}
```

> Ça fonctionne, mais tout est mélangé : plus l'application grandit, plus ce composant devient difficile à lire.

---

## 4. Étape 2 : découper en composants

```
App                 → contient la liste des tâches (l'état)
├── Input           → l'input + le bouton Add
└── Liste           → le <ul>
    └── Tache       → un <li> (répété pour chaque tâche)
```

| Composant | Reçoit (props) | Rôle |
|---|---|---|
| `Input` | `onAjouter` : une fonction | Gère la valeur tapée et appelle `onAjouter` au clic |
| `Liste` | `taches` : un tableau | Parcourt le tableau avec `map` et affiche une `Tache` par élément |
| `Tache` | `tache` : un objet | Affiche une seule tâche |

---

## 5. Étape 3 : l'implémentation

### Composant `Input`

```jsx
import { useState } from "react";

function Input({ onAjouter }) {
  const [valeur, setValeur] = useState("");

  const ajouter = () => {
    if (valeur.trim() === "") return; // on n'ajoute pas une tâche vide
    onAjouter(valeur);                // on envoie la valeur au parent
    setValeur("");                    // on vide l'input
  };

  return (
    <div>
      <input
        type="text"
        value={valeur}
        onChange={(e) => setValeur(e.target.value)}
      />
      <button onClick={ajouter}>Add</button>
    </div>
  );
}

export default Input;
```

- `value={valeur}` : l'input affiche toujours la valeur de l'état.
- `onChange` : à chaque frappe, on met l'état à jour.
- `onAjouter` est une **fonction reçue du parent** : l'enfant ne modifie pas la liste lui-même, il prévient le parent.

### Composant `Liste`

```jsx
import Tache from "./Tache";

function Liste({ taches }) {
  return (
    <ul>
      {/* affichage de la liste avec map */}
      {taches.map((tache) => (
        <Tache key={tache.id} tache={tache} />
      ))}
    </ul>
  );
}

export default Liste;
```

- `map` transforme chaque tâche du tableau en un composant `<Tache />`.
- La `key` (unique) permet à React de reconnaître chaque élément de la liste.

### Composant `Tache`

```jsx
function Tache({ tache }) {
  return <li>{tache.titre}</li>;
}

export default Tache;
```

### Composant `App` : on assemble

```jsx
import { useState } from "react";
import Input from "./components/Input";
import Liste from "./components/Liste";

function App() {
  const [taches, setTaches] = useState([
    { id: 1, titre: "Tâche 1" },
  ]);

  const ajouterTache = (titre) => {
    const nouvelleTache = { id: Date.now(), titre };
    setTaches([...taches, nouvelleTache]); // nouveau tableau, pas de push
  };

  return (
    <>
      <Input onAjouter={ajouterTache} />
      <Liste taches={taches} />
    </>
  );
}

export default App;
```

---

## 6. À retenir

- On part du **HTML**, on repère les **parties** (formulaire, liste, élément), puis on crée **un composant par partie**.
- L'**état** (la liste des tâches) est placé dans le **parent commun** : `App`.
- Les données **descendent** par les props : `App` → `Liste` → `Tache`.
- Les actions **remontent** grâce à une fonction passée en prop : `Input` appelle `onAjouter`, qui met à jour l'état d'`App`.
- Pour ajouter un élément à l'état, on crée un **nouveau tableau** : `[...taches, nouvelleTache]`.