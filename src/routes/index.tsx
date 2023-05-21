import { component$, useSignal, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image';
import { Link } from '@builder.io/qwik-city';


export default component$(() => {
  const pokemonId = useSignal<number>(1);  //para primitivos boolean, string, numeros
  const voltearPoke = useSignal<boolean>(false)
  const mostrarPoke = useSignal<boolean>(true)
  const changePokemonIf = $((value: number) => {
    if (pokemonId.value + value <= 0) return;
    pokemonId.value += value
  })


  return (
    <>
      <div class="text-white">
        <span class="text-2xl block">Buscardor Simple</span>
        <span class="text-9xl">{pokemonId}</span>

        <Link href={`/pokemon/${pokemonId.value}`}>
          <PokemonImage pokemonId={pokemonId.value} size={200} backImage={voltearPoke.value} lookPoke={mostrarPoke.value} />
        </Link>

        <div class="mt-2">
          <button class="btn btn-primary mr-2" onClick$={() => changePokemonIf(-1)}>Anterior</button>
          <button class="btn btn-primary mr-2" onClick$={() => changePokemonIf(+1)}>Siguiente</button>
          <button class="btn btn-primary mr-2" onClick$={() => voltearPoke.value = !voltearPoke.value}>Voltear </button>
          <button class="btn btn-primary" onClick$={() => mostrarPoke.value = !mostrarPoke.value}>Revelar</button>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'PokeQuik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
