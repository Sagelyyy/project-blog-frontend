<script>
  import { userStore } from "./store";
  import { blur } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let comments;

  export function setComments(id) {
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
</script>

{#if comments}
  <div
    out:blur={{ duration: 400 }}
    in:blur={{ duration: 350 }}
    class="comment-wrapper"
  >
    <button on:click={() => dispatch("close")}>
      <span class="material-symbols-outlined close"> cancel </span>
    </button>
    {#await comments}
      ...loading
    {:then data}
      {#each data.result.comments as item}
        {#if item.public_username}
          <h3>{item.public_username}</h3>
        {:else}
          <h3>{item.user.username}</h3>
        {/if}
        <p>{item.text}</p>
      {/each}
    {/await}
  </div>
{/if}

<style>
  .comment-wrapper {
    display: flex;
    flex-direction: column;
    width: 300px;
    background-color: white;
  }

  .comment-wrapper > h3 {
    text-transform: capitalize;
  }

  button:hover > * {
    transition: all 0.5s;
  }

  .close {
    padding: 2px;
    color: var(--dark);
    border-radius: 5px;
    transition: all 0.5s;
  }

  .close:hover {
    scale: 1.2;
    background-color: var(--error);
  }
</style>
