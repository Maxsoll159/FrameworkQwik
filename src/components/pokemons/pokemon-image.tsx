import { component$, useSignal, useTask$ } from "@builder.io/qwik";
interface Props {
    pokemonId: number,
    size?: number,
    backImage?: boolean,
    lookPoke?: boolean
}
export const PokemonImage = component$((props: Props) => {
    const { pokemonId, size = 200, backImage = false, lookPoke} = props
    console.log(pokemonId)
    const imageLoaded = useSignal<boolean>(false)
    useTask$(({ track }) => {
        track(() => pokemonId);
        imageLoaded.value = false
    })
    console.log(imageLoaded)
    return (
        <div class="flex items-center justify-center" style={{ width: `${size}px`, height: `${size}px` }}>

            {
                !imageLoaded.value && (<span>Cargandoo....</span>)
            }
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${backImage ? `back/${pokemonId}` : pokemonId}.png`} alt=""
                style={{ width: `${size}px` }}
                onLoad$={() => imageLoaded.value = true}
                class={[{'hidden': !imageLoaded.value, 'brightness-0' : lookPoke}, 'transition-all']}
            />
        </div>
    )
})