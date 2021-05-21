<script>
  export let centsInput = "";

  const clear = (e) => (centsInput = "");
  const top = (e) => window.scrollTo(0, 0);
</script>

<div>
  <input type="tel" bind:value={centsInput} on:focus={clear} on:blur={top} />
</div>

<style>
  input {
    width: 100%;
    height: 100%;
    text-align: center;
    outline: none;
    background-color: #ded;
    position: relative;
    border-radius: 0;
    border: none;
  }

  div,
  input {
    position: relative;
    font-size: 3rem;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
  }

  div::before {
    content: "¢";
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.6;
    transform: rotate(-20deg);
    font-size: 8rem;
    line-height: 8rem;
    z-index: 1;
  }
</style>
