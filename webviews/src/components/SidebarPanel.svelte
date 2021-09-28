<script lang="ts">
  import { onMount } from "svelte";

  let data: any = null;
  let page: "todos" | "contact" = tsvscode.getState()?.page || "todos";

  $: {
    tsvscode.setState({ page });
  }

  let id = "Sidebar Panel";

  onMount(async () => {
    window.addEventListener("message", async (event) => {
      const message = event.data;
      switch (message.type) {
        case "data-retrieved":
          data = message.value;
      }
    });
    tsvscode.postMessage({ type: "get-data", value: undefined });
  });
</script>

<h1>This is a {id}</h1>

<pre>{data != null? data: "no data yet"}</pre>

{#if page === "todos"}
  <h2>TODOs</h2>
  <button
    on:click={() => {
      page = "contact";
    }}>go to contact</button
  >
{:else}
  <h2>Contact</h2>
  <button
    on:click={() => {
      page = "todos";
    }}>go back</button
  >
{/if}

<style>
  h1 {
    color: tomato;
  }
</style>
