import { useEffect, useState } from 'react';
import './App.scss';
import Card from './components/Card';
import Header from './components/Header';
import axios from 'axios';

function App() {
  const [news, setNews] = useState();
  
  useEffect(() => {    
    return () => {
      axios.get('http://localhost:8080/api/news/').then(
        (response) => {
          setNews(response.data)
        }     
      )
    };
  }, []);
console.log(news);

  return (
    <div className="App">
      <Header />
      <div className="content_wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
