import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Welcome } from "~/integrations/vue";

export default component$(() => {

  return (
    <>
      <h1>Qwik/Vue demo</h1>
      <Welcome client:hover />
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik Vue",
};
