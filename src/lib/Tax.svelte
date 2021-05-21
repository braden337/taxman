<script>
  export let tax = 0;

  let PST = JSON.parse(localStorage.getItem("PST")) ?? false;
  let GST = JSON.parse(localStorage.getItem("GST")) ?? false;

  $: localStorage.setItem("PST", JSON.stringify(PST));
  $: localStorage.setItem("GST", JSON.stringify(GST));

  $: {
    tax = 0;
    tax += PST ? 0.07 : 0;
    tax += GST ? 0.05 : 0;
  }

  const togglePST = () => (PST = !PST);
  const toggleGST = () => (GST = !GST);
</script>

<div>
  <h1 on:click={togglePST} class:PST>PST</h1>
  <h1 on:click={toggleGST} class:GST>GST</h1>
</div>

<style>
  div {
    background-color: black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-family: sans-serif;
    grid-gap: 1rem;
    padding: 1rem;
  }

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
  }

  .PST,
  .GST {
    background-color: lightgreen;
  }
</style>
