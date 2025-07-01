import { useEffect, useState } from 'react';
import './App.scss';
import Card from './components/Card';
import Header from './components/Header';
import axios from 'axios';

function App() {
  const [news, setNews] = useState();
  const [isFetching, setFetching] = useState(true)

  useEffect(() => {
    return () => {
      axios.get('http://192.168.0.105:8080/api/news').then(
        (response) => {
          setNews(response.data)
          setFetching(false)
        }
      )
    };
  }, []);
  console.log(news);
  // 'https://vgr.by/wp-content/uploads/2025/04/fontany_2025_09.jpg'

  if (isFetching) return <p>Loading...</p>

  return (
    <div className="App">
      <Header />
      <div className="content_wrapper">
        {news.map((i, index) => {
          return (<Card key={index} imgUrl={i.image_url} />)
        })
        }

      </div>
    </div>
  );
}

export default App;
