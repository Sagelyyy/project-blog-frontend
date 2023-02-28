<script>
    export let errors
</script>

{#if errors}
  {#each errors as error}
  <div>
    <ul>
      <li class="error">{error.msg}</li>
    </ul>
  </div>
  {/each}
{/if}