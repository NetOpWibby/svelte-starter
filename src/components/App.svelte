<script lang="ts">
  import { writable } from "svelte/store";
  import Counter from "./Counter.svelte";

  const count = writable(100);
  export let name: string;
</script>

<style>
  h1 {
    color: red;
  }
</style>

<svelte:head>
  <title>Testing...</title>
</svelte:head>

<header>
  <h1>Hello {name}!</h1>
</header>

<main>
  <Counter/>
  <Counter value={1}>Counter 1</Counter>
  <Counter value={$count} step={3}>Counter 2</Counter>
</main>
