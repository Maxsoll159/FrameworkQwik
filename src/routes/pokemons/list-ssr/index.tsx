import { component$ } from "@builder.io/qwik"
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(()=>{
    return(
        <div class="flex flex-col">
          <span class="my-5 text-5xl">Status</span>
          <span>Current offset: xxxx</span>
          <span>Is navigating</span>
        </div>
    )
})

export const head: DocumentHead = {
    title: 'LIST - SSR',
    meta: [
      {
        name: 'description',
        content: 'Qwik site description',
      },
    ],
  };
  