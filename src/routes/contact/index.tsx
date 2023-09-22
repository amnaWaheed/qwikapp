import { component$, useSignal, useStore, useStyles$ } from "@builder.io/qwik";
import styles from "./contact.css?inline";

export default component$(() => {
  useStyles$(styles);
  const show = useSignal(false);
  const formState = useStore({ name: "", email: "", message: "" });
  return (
    <article>
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
        expedita, soluta saepe molestiae sunt labore ab veniam ipsa numquam odit
        commodi est voluptates excepturi aspernatur enim aliquam quis.
        Obcaecati, fuga?
      </p>
      <button onClick$={() => (show.value = true)}>Contact us</button>
      {show.value && (
        <form
          preventdefault:submit
          onSubmit$={() => {
            formState.name = "";
            formState.email = "";
            formState.message = "";
          }}
        >
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formState.name}
            name="name"
            onInput$={(e) =>
              (formState.name = (e.target as HTMLInputElement).value)
            }
            required
          />

          <label for="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formState.email}
            onInput$={(e) =>
              (formState.email = (e.target as HTMLInputElement).value)
            }
            required
          />

          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            required
            onInput$={(e) =>
              (formState.message = (e.target as HTMLInputElement).value)
            }
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      )}
    </article>
  );
});
