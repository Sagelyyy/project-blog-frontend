<script>
  import { blur } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let comments;
  let currentBlog;
  export let id;

  export function setComments(id) {
    currentBlog = id;
    getBlogComments(id).then((data) => {
      comments = data;
    });
  }

  export async function getBlogComments(id) {
    try {
      const res = await fetch(
        `http://localhost:3000/api/blogs/${id}/comments`,
        {
          method: "GET",
          withCredentials: true,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        const comments = await res.json();
        return comments;
      }
    } catch (err) {
      console.log(err);
    }
  }

  // TODO: Handle comment deletion
  async function handleDelete(id) {
    try {
      const res = await fetch(`http://localhost:3000/api/comments/${id}`, {
        method: "DELETE",
        withCredentials: true,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  setComments(id);
</script>

{#if comments}
  <div
    out:blur={{ duration: 400 }}
    in:blur={{ duration: 350 }}
    class="comments"
  >
    <h3>Comments</h3>
    <div class="separator" />
    {#await comments}
      ...loading
    {:then data}
      {#each data.result.comments as item}
        {#if item.user}
          <h3>{item.user.username}</h3>
        {:else}
          <h3>{item.public_username}</h3>
        {/if}
        <p>{item.text}</p>
        <div class="separator" />
      {/each}
    {/await}
  </div>
{/if}

<style>
  .comments {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    height: 45vh;
    background-color: var(--accent);
    padding: 10px;
    overflow-y: auto;
  }
</style>
