<script>
    export let errors
</script>

{#if errors}
  {#each errors as error}
  <div class="error-container">
    <ul>
      <li class="error">{error.msg}</li>
    </ul>
  </div>
  {/each}
{/if}

<style>

  .error-container{
    border-radius: 1px solid rgb(110, 23, 23);
    background-color: rgba(233, 93, 93, 0.3);
  }

  ul{
    list-style: none;
  }

  
</style>