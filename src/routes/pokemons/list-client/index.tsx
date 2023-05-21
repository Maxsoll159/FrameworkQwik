import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return <div>Xk</div>
});

export const head: DocumentHead = {
    title: 'CLIENT - SSR',
    meta: [
        {
            name: 'description',
            content: 'Qwik site description',
        },
    ],
};