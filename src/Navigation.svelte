<script>
  import { userStore } from "./store";
  import Login from "./Login.svelte";
</script>

{#if $userStore}
  <div class="control-panel">
    <h1>Welcome, {$userStore.user.email.split("@")[0]}</h1>
    <a href="http://localhost:8080" target="_blank" rel="noreferrer"
      >Go to Dashboard</a
    >
  </div>
{:else}
  <div class="control-panel">
    <Login />
  </div>
{/if}

<style>
  h1 {
    text-transform: capitalize;
  }

  .control-panel {
    text-align: center;
    background-color: var(--accent);
    padding: 0;
    border-bottom: 3px solid var(--darker-hlight);
  }
</style>
