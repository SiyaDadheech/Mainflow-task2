
import { useEffect } from 'react'
import {useState} from 'react'
import './App.css'
import SearchIcon from "./assets/search.svg"
import MovieCard from './MovieCard'
const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=2970e54c'
const movie= {
  
    "Title": "Golmaal: Fun Unlimited",
    "Year": "2006",
    "imdbID": "tt0495034",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmE3YmNiM2YtM2MxMi00ZDhmLTk1ZTQtODdjOWY4YjVkYThmXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  
 }
function App() {
  const [movies,setMovies] = useState([]) 
const [searchTerm,setSearchTerm] = useState("");


  const searchMovie = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
  const data=await response.json();
setMovies(data.Search);
  };
useEffect(()=>{
  searchMovie("golmaal")
},[])
  return (
    <>
      <div className="app">
        <h1>MovieX</h1>
      </div>
      <div className="search">
        <input placeholder="search for movies" value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
      
       <img src={SearchIcon} alt="search" onClick={() => searchMovie(searchTerm)} />
       </div>
     {movies?.length>0?(
      <div className="container">
        {movies.map((movie)=>(

<MovieCard movie={movie}/>
        ))}
      </div>
     ) : (
      <div className="empty">
        <h2>No Movies Found</h2>

      </div>
     )
     }
     
    </>
  )
}

export default App
