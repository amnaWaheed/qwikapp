import { component$, useSignal, useStyles$,$ } from "@builder.io/qwik";
import AboutStyles from "./about.css?inline";
import Modal from "~/components/modal/modal";

export default component$(() => {
  useStyles$(AboutStyles);
  const open = useSignal(false);
  const closeModalHandler = $(() => {
    open.value = false;
  })
  console.log("about page is");
  return (
    <article>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
        expedita, soluta saepe molestiae sunt labore ab veniam ipsa numquam odit
        commodi est voluptates excepturi aspernatur enim aliquam quis.
        Obcaecati, fuga?
      </p>
      <button onClick$={() => (open.value = true)}>Open Modal</button>
      {open.value && (
        <Modal size="sm" frosted={true} closeFunc {closeModalHandler} >
          <div q:slot="content">
            <h1>Great New!!</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              magnam sapiente debitis consectetur dolores mollitia explicabo
              cupiditate placeat natus ea animi, quasi voluptatum sunt, rerum
              iusto modi, earum excepturi fuga?
            </p>
          </div>
          <div q:slot="footer">
            <button>Sign Up now</button>
          </div>
        </Modal>
      )}
    </article>
  );
});
