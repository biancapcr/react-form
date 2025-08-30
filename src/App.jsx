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

// definizione della componente principale
const App = () => {
  // inizializzazione dello stato mediante con dati
  const [articles, setArticles] = useState(BlogArticles);

  // tracciamento del valore dell'input del nuovo titolo
  const [newTitle, setNewTitle] = useState("");

  // gestione submit del form
  const handleSubmit = (e) => {
    // blocco il refresh della pagina
    e.preventDefault();

    // validazione dell'input
    if (newTitle.trim() === "") return;

    // costruzione nuovo articolo
    const newArticle = {
      // generazione di un id
      id: articles.length + 1,
      title: newTitle,
    };

    // aggiornamento della lista
    setArticles([...articles, newArticle]);

    // svuotamento campo input
    setNewTitle("");
  };

 // renderizzazione UI
  return (
    <div className="container">
      <h2 className="title">Lista Articoli Blog</h2>
      <ul className="list">
        {articles.map((article) => (
          <li key={article.id} className="item">
            {article.title}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="input"
          placeholder="Nuovo articolo..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          aria-label="Titolo del nuovo articolo"
        />

        <button type="submit" className="button">
          Aggiungi
        </button>
      </form>
    </div>
  );
  };
  
export default App
