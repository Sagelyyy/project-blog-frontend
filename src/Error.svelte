<script>
    export let errors
</script>

{#if errors}
<div class="error-container">
  <ul>
  {#each errors as error}
      <li class="error">{error.msg}</li>
  {/each}
</ul>
</div>
{/if}

<style>

  .error-container{
	border: 1px solid rgb(110, 23, 23);
	background-color: rgba(233, 93, 93, 0.3);
	width: 30%;
	margin: 0 auto;
  }

  ul{
    list-style: none;
  }

  
</style>