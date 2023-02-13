<script>
  import { userStore } from "./store";
  import Login from "./Login.svelte";
  import Blog from "./Blog.svelte";
</script>

<main>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
  />
  {#if $userStore}
    <h1>Welcome, {$userStore.user.email.split("@")[0]}</h1>
    <a href="http://localhost:8080">Go to Dashboard</a>
  {:else}
    <Login />
  {/if}
  <Blog />
</main>

<style>
  :global(*) {
    padding: 0;
    margin: 0;
    font-family: "Roboto", "sans-serif";
  }

  :global(:root) {
    --primary-bg: #1d1e2c;
    --darker-hlight: #8a817c;
    --lighter-hlight: #bcb8b1;
    --dark: #2d3142;
    --error: #8e3b46;
    --accent: #eae8ff;
  }

  :global(body) {
    background-color: var(--primary-bg);
  }

  :global(.error) {
    color: var(--error) !important;
  }

  :global(.capitalize) {
    text-transform: capitalize;
  }
</style>
