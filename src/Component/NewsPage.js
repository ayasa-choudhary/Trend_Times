import React, { useEffect, useState } from 'react'
import Card from './Card'

const NewsPage = () => {
    const[search, setsearch] = useState("India");
    const [newsData, setnewsData]= useState(null);

    const API_KEY = "55450047bbba45dfa03a2b4e0b6330c0";

    const getData = async()=>{
     const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    console.log(jsonData.articles)
    setnewsData(jsonData.articles)
    }
    
    useEffect(() => {
        getData();
      },);

    const handleInput = (e)=>{
        console.log(e.target.value);
        setsearch(e.target.value)
    }
    const userInput = (e) =>{
        setsearch(e.target.value)
    }
    
     
  return (
    <div>
        <nav>
            <div>
                <h1>
                    Trend Times
                </h1>
            </div>
            <ul>
                
                <a href='/news'>All News</a>
                <a href='/trending'>Trending News</a>
            </ul>
            <div className='searchbar'>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <div>
            <p className='head'> Stay update with Trend Times!</p>
        </div>
        <div className='categorybtn'>
            <button onClick={userInput} value="sports">Sports</button>
            <button onClick={userInput} value="politics">Politics</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="technology">Technology</button>
        </div>
        <div>
            {newsData? <Card DATA1 = {newsData}/> : null}
            
        </div>
    </div>
  )
}

export default NewsPage