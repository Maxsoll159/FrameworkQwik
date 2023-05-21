import { component$ } from "@builder.io/qwik";
import { useLocation, routeLoader$ } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";
//se ejecuta antes que se arme el componente
export const usePokemonId = routeLoader$<number>(({params, redirect})=>{
  const id = Number(params.id)
  if(isNaN(id)){
    redirect(301, "/")
  }
  if(id <= 0 || id > 1000){
    redirect(301, "/")
  }
  return id
})

export default component$((props) => {
  //const { params } = useLocation();
  let pokemon = usePokemonId()
  return (
    <div>
      <h1>{pokemon}</h1>
      <PokemonImage pokemonId={pokemon.value}/>
    </div>
  )
});