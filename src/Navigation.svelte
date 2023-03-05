<script>
  import { userStore } from "./store";
  import Login from "./Login.svelte";
  import { links, Router } from "svelte-routing";
  import RollTable from "./Roll-Table.svelte";

  let toggleModal;
</script>

<div class="control-panel">
  <h1>LoTJ Fates</h1>
  <div>
    {#if $userStore}
      <h2 class="capitalize">Welcome, {$userStore.user.username}</h2>
    {/if}
    <nav use:links>
      <Router>
        <a href="/">Home</a>
        {#if $userStore}
          <a
            href="https://chriscancodecms.up.railway.app/"
            target="_blank"
            rel="noreferrer">Go to Dashboard</a
          >
        {/if}
        <p on:click={toggleModal}>Toggle Roll Table</p>
      </Router>
    </nav>
  </div>
</div>
<RollTable bind:toggleModal />

<style>
  .control-panel {
    top: 0;
    display: flex;
    justify-content: space-between;
    position: sticky;
    width: 100%;
    text-align: center;
    background-color: var(--accent);
    padding: 0;
    border-bottom: 3px solid var(--darker-hlight);
  }

  .control-panel > div {
    display: flex;
    flex-direction: column;
    max-width: 350px;
    flex-grow: 2;
    margin-top: auto;
  }

  .control-panel > div > nav {
    display: flex;
    justify-content: space-around;
  }

  .control-panel > h1 {
    margin-top: auto;
  }

  a {
    color: black;
    transition: all 0.5s;
    cursor: pointer;
  }

  .control-panel > div > nav > a:hover {
    text-decoration: underline;
  }

  p {
    margin: 0;
    cursor: pointer;
  }

  p:hover {
    text-decoration: underline;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
</style>
