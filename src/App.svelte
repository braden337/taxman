<script>
  let cents = "";
  let dollars = "$0.00";

  let PST = JSON.parse(localStorage.getItem("pst")) ?? false;
  let GST = JSON.parse(localStorage.getItem("gst")) ?? true;

  $: {
    localStorage.setItem("pst", JSON.stringify(PST));
    localStorage.setItem("gst", JSON.stringify(GST));
  }

  let togglePST = (e) => (PST = !PST);
  let toggleGST = (e) => (GST = !GST);

  $: {
    let total = cents / 100;
    dollars = total;
    dollars += PST ? total * 0.07 : 0;
    dollars += GST ? total * 0.05 : 0;
    dollars = `$${dollars.toFixed(2)}`;
  }
</script>

<main>
  <h1>{dollars}</h1>

  <h3 contenteditable bind:innerHTML={cents} inputmode="tel" />

  <aside>
    <button class:PST on:click={togglePST}>PST</button>
    <button class:GST on:click={toggleGST}>GST</button>
  </aside>
</main>

<style>
  main {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  h3 {
    font-size: 2rem;
    padding: 0 2rem;
    background-color: lightgray;
  }

  .PST,
  .GST {
    background-color: lightseagreen;
  }
</style>
