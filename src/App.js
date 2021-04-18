import './App.css';
import {useState} from 'react'
import moviesListData from './assets/movies';
import MoviesList from './Components/MoviesList';
import { Link, Route } from 'react-router-dom';
import { MovieDesc } from './Components/MovieDesc';

function App() {

  const [movies,setMovies] = useState(moviesListData);
  const [inputData,setInputData] = useState('');
  const [rating, setRating] = useState(0);

  return (

    <div className="App">
      <input type="text" onChange={(e)=>{setInputData(e.target.value)}} />

      <MoviesList 
        MoviesArray={
          inputData 
            ? movies.filter((movie) => 
                movie.nom.toLowerCase().includes(inputData.toLowerCase())
            ) 
            : rating > 1
            ? movies.filter((movie) => 
                movie.rate >= rating
            )
            : movies
        }   
      />

      <Route path="/details" component={MovieDesc}/>

      

    </div>

  );
}

export default App;
