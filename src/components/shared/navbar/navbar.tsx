import { component$ } from "@builder.io/qwik"
import { QwikLogo } from '../../icons/qwik';
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <nav class="w-full bg-blue-950 text-white flex justify-between items-center py-2 px-10">
            <Link href="/"> <QwikLogo height={53} />
            </Link>
            <Link href="/pokemons/list-ssr/">SSR - LIST</Link>
            <Link href="/pokemons/list-client/">CLIENT - LIST</Link>
        </nav>
    )
})