import React, {useState} from 'react'
import axios from 'axios';

const FetchComponents = () => {

  const[pokemon,setPokemon] = useState();
  // const FetchPokemon1 = () => {
  //   // api call // because api call takes time we need a .then() and .catch()
  //   fetch('https://pokeapi.co/api/v2/pokemon/ditto') 
  //     .then(res => {
  //       // status:ok response 
  //       console.log(res); 
  //       // json is another async func / this takes time and we are going to get another response from it so we need another.then()
  //       return res.json()
  //     })
  //     .then(jsonResponse => {
  //       console.log(jsonResponse)
  //       setPokemon(jsonResponse)
  //     })
  //     .catch(err => console.log(err))

  // }

  // this is the await 
  // const FetchPokemon2 = async() => {
  //   const response = await fetch ('https://pokeapi.co/api/v2/pokemon/charizard')
  //   const jsonResponse = await response.json()
  //   setPokemon(jsonResponse)
  // }

  // const Fetch807Pokemon = async() => {
  //   const response = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
  //   const jsonResponse = await response.json();
  //   setPokemon(jsonResponse.results);
  //   console.log(jsonResponse.results);
  // }

  // in axios the difference is you go into data instead of results 
  const axiosPokemon = () => {
    axios.get ('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(res => {
        console.log(res)
        setPokemon(res.data.results)
      })
      .catch(err => console.log(err))
  }


  return (
    <div>
      <h1>Fetching Pokemon</h1>
      {/* <button onClick={ FetchPokemon1 }> Fetch Pokemon</button>

      <button onClick={FetchPokemon2}> Fetch Pokemon with await </button> */}
      {/* <button onClick={Fetch807Pokemon}> Fetch Pokemon with await </button> */}
      <button onClick={axiosPokemon}> Fetch Pokemon with axios</button>


{/* we need to have this ternary operator because if not the code will break because the api has not been called yet  */}
    {
      pokemon?
    <div>
  
      {pokemon.map((poke,index) => {
        return (
          <div key={index} >
            {poke.name}
          </div>
        )
      })
    }
    </div> :
    <h3> please fetch a pokemon</h3>
    }
    </div>
  )
}

export default FetchComponents