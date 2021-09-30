<script>
  import { createEventDispatcher } from "svelte";
  export let key;
  export let value;
  const dispatch = createEventDispatcher();
  function dataUpdated() {
    dispatch("message", {
      type: "update",
    });
  }
</script>

<td>{key}</td>
<td contenteditable="true" bind:innerHTML={value} on:input={dataUpdated} />
