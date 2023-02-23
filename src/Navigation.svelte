<script>
  import { userStore } from "./store";
  import Login from "./Login.svelte";
  import { links, Router } from "svelte-routing";
</script>

{#if $userStore}
  <div class="control-panel">
    <h1>Welcome, {$userStore.user.email.split("@")[0]}</h1>
    <a href="http://localhost:8080" target="_blank" rel="noreferrer"
      >Go to Dashboard</a
    >
    <div use:links>
      <Router>
        <a href="/">Home</a>
      </Router>
    </div>
  </div>
{:else}
  <div class="control-panel">
    <Login />
    <div use:links>
      <Router>
        <a href="/">Home</a>
      </Router>
    </div>
  </div>
{/if}

<style>
  h1 {
    text-transform: capitalize;
  }

  .control-panel {
    top: 0;
    position: sticky;
    width: 100%;
    text-align: center;
    background-color: var(--accent);
    padding: 0;
    border-bottom: 3px solid var(--darker-hlight);
  }
</style>
