<script>
  import { Router, Route } from "svelte-routing";
  import Blog from "./Blog.svelte";
  import Dstar from "./Dstar.svelte";
  import Login from "./Login.svelte";
  import Navigation from "./Navigation.svelte";
  import PostDetail from "./Post_Detail.svelte";
  import { userStore } from "./store";

  export let url = "";
</script>

<svelte:head>
  <title>LotJ Fates</title>
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
</svelte:head>
<Dstar />
<Navigation />
{#if !$userStore}
  <Login />
{/if}
<Router {url}>
  <div>
    <Route path="blog/:id" let:params><PostDetail id={params.id} /></Route>
    <Route path="/" component={Blog} />
  </div>
</Router>

<style>
  @media screen and (max-width: 800px) {
    :global(.card) {
      grid-template-rows: 177px 1fr;
      grid-template-columns: none !important;
    }
  }

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
    padding: 0;
  }

  :global(.error) {
    color: var(--error) !important;
  }

  :global(.capitalize) {
    text-transform: capitalize;
  }

  :global(.separator) {
    margin-top: 10px;
    border: 1px solid #c3c3c3;
  }

  :global(.card .roll > h2) {
    text-shadow: none;
    transition: text-shadow 0.3s ease-in-out;
  }

  :global(.card:hover .roll > h2) {
    text-shadow: -5px 5px 5px var(--dark);
  }

  :global(.card) {
    padding: 5px;
    font-family: "Roboto", sans-serif;
    display: grid;
    grid-template-columns: 177px 1fr;
    max-width: 605px;
    background-color: var(--accent);
    transition: all 0.5s ease;
  }

  :global(.card:hover) {
    cursor: pointer;
    box-shadow: -10px 10px 20px black;
  }

  :global(.roll) {
    text-align: center;
    text-shadow: none;
  }

  :global(.roll > h2) {
    font-size: 8rem;
  }

  :global(.roll > h3 span) {
    text-transform: capitalize;
  }
  :global(.post) {
    display: flex;
    flex-direction: column;
  }

  :global(.post > h2) {
    align-self: flex-end;
    margin-right: 5px;
    text-align: center;
    text-transform: capitalize;
    font-size: 0.9rem;
    padding-top: 12px;
    background-color: #9ecaff;
    height: 30px;
    width: 50px;
    border-radius: 20px;
  }

  :global(.post > p) {
    color: var(--dark);
  }

  :global(.footer) {
    display: flex;
    justify-content: space-around;
    font-size: 0.8rem;
    margin-top: auto;
    padding-top: 10px;
    gap: 5px;
  }

  :global(.trash) {
    padding: 2px;
    color: var(--dark);
    transition: all 0.5s;
    border-radius: 5px;
  }

  :global(.trash:hover) {
    scale: 1.2;
    background-color: var(--error);
  }

  :global(button) {
    cursor: pointer;
  }

  :global(.comment-btn) {
    display: flex;
    gap: 5px;
    transition: all 0.5s;
    border-radius: 5px;
  }

  :global(.comment-btn:hover) {
    scale: 1.2;
    background-color: rgb(160, 224, 160);
  }

  :global(.comment-container) {
    max-width: 600px;
  }

  :global(.material-symbols-outlined) {
    display: flex !important;
  }

  :global(.capitalize) {
    text-transform: capitalize;
  }
</style>
