<script>
  export let centsInput = "";
  export let tax = 0;

  $: cents = Number(centsInput) || 0;
  $: dollars = ((cents * (1 + tax)) / 100).toFixed(2);
</script>

<div>
  ${dollars}
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    background-color: #000;
    color: #fff;
  }
</style>
