import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './styling/App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';
import ShowMore from './Components/ShowMore';

const App = () => {
  const [articles, setArticles] = useState([])
  const artArray = []

  useEffect(() => {
    axios
    .get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
    .then(res => {setArticles(res.data)})
    .catch(err => console.log(err))
  }, [articles])

  for (let i = 0; i < articles.length; i++){
    artArray.push(`https://hacker-news.firebaseio.com/v0/item/${articles[i]}.json?print=pretty`)
  }
  let size = 12
  let newArtArr = artArray.slice(0,size)
  let newArtArr2 = artArray.slice(size, (size * 2))

  return (
    <div className="App">
      <Header />
      <Body newArtArr={newArtArr} newArtArr2={newArtArr2} showMore={ShowMore}/>
      <Footer />
    </div>
  );
}

export default App;
