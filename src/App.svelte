<script>
  import Dollars from "./lib/Dollars.svelte";
  import Cents from "./lib/Cents.svelte";
  import Tax from "./lib/Tax.svelte";

  let centsInput = "";
  let tax = 0;
</script>

<main>
  <Dollars {centsInput} {tax} />
  <Cents bind:centsInput />
  <Tax bind:tax />
</main>

<style>
  main {
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
  }
</style>
