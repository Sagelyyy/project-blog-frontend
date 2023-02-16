<script>
  import { blur } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let comments;
  let currentBlog;

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
</script>

{#if comments}
  <div
    out:blur={{ duration: 400 }}
    in:blur={{ duration: 350 }}
    class="comment-wrapper"
  >
    <button class="btn-close" on:click={() => dispatch("close")}>
      <span class="material-symbols-outlined close"> cancel </span>
    </button>
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
  .comment-wrapper {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 738px;
    background-color: white;
    padding: 10px;
    overflow-y: auto;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .comment-wrapper::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .comment-wrapper {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .comment-wrapper > h3 {
    text-transform: capitalize;
  }

  .btn-close {
    width: fit-content;
    align-self: flex-end;
    margin: 5px;
  }

  .close {
    font-size: 1.2rem;
    cursor: pointer;
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
