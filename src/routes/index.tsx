import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div>Home page</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Mario Life",
  meta: [
    {
      name: "description",
      content: "A blog site everything about mario",
    },
  ],
  links: [
    {
      rel: "stylesheet",
      href: "somestylesheet.com/styles.css",
    },
  ],
};
