// mount app
import { useState } from 'react'

// creazione dei dati
const BlogArticles = [
  { id: 1, 
    title: "Props vs State: Clear Differences" },
  { id: 2, 
    title: "Handling Events in React" },
  { id: 3, 
    title: "JSX Basics: From HTML to Components" },
];

// definizione del componente principale
const App = () => {
  // inizializzazione dello stato con dati
  const [articles, setArticles] = useState(BlogArticles);
  // tracciamento del valore dell'input del nuovo titolo
  const [newTitle, setNewTitle] = useState("");
}



export default App
