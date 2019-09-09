import React , {useState, useEffect} from 'react';
import PokemonList from './PokemonList'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon]=useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState( )
  const [prevPageUrl, setPrevPageUrl] = useState( )
  const [loading, setLoading]= useState(true)

  useEffect(()=>{
    setLoading(true)
    axios.get(currentPageUrl).then(
      res=>{
       setLoading(false)
       setNextPageUrl(res.data.results.next)
       setPrevPageUrl(res.data.results.previous)
       setPokemon( res.data.results.map(  p => p.name))
      }
    )
  },[currentPageUrl])

  if(loading) return "The page is currently loading ..."
  

  return (
    <PokemonList pokemon={pokemon}/>
  );
}

export default App;
