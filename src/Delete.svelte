<script>
      import { userStore } from "./store";

      export let routeID
      export let itemID
      export let blogID

        // TODO: Handle comment deletion
  async function handleDelete(id, routeID) {
    try {
      const res = await fetch(
        `https://project-blog-production.up.railway.app/api/${routeID}/${id}`,
        {
          method: "DELETE",
          withCredentials: true,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            blog: blogID
          }),
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
</script>


{#if $userStore !== null && $userStore.user.admin}
  <input name="id" value={itemID} hidden required />
  <button
    on:click|preventDefault={() => handleDelete(itemID, routeID)}
  >
    <span class="material-symbols-outlined trash">
      delete
    </span>
  </button>
{/if}

<style>
  button{
    width: 40px;
    height: 40px;
  }
</style>