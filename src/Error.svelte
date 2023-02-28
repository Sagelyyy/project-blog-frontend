<script>
    export let errors
</script>

{#if errors}
<div class="error-container">
  <h3 class="error">Error:</h3>
  <ul>
  {#each errors as error}
      <li class="error">{error.msg}</li>
  {/each}
</ul>
</div>
{/if}

<style>

  .error-container {
    border: 1px solid rgb(110, 23, 23);
    background-color: rgba(233, 93, 93, 0.3);
    width: 200px;
    margin: 0 auto;
    text-align: left;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 5px;
  }

  .error-container > h3{
    text-align: center;
  }

  ul{
    list-style: none;
  }

  
</style>