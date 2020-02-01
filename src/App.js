import React, {useEffect, useState} from 'react';
import API from './util';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${API}`).then(response => response.json()).then(data => console.log(data))
  })
  return (
    <div className="App">
    <h1>Something is happening</h1>
    </div>
  );
}

export default App;
