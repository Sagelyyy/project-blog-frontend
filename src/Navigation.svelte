<script>
  import { userStore } from "./store";
  import Login from "./Login.svelte";
  import { links, Router } from "svelte-routing";
</script>

{#if $userStore}
  <div class="control-panel">
    <h1 class="capitalize">Welcome, {$userStore.user.username}</h1>
    <a
      href="https://chriscancodecms.up.railway.app/"
      target="_blank"
      rel="noreferrer">Go to Dashboard</a
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
