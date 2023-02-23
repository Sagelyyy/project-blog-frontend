<script>
  import { userStore } from "./store";
  import { blur } from "svelte/transition";
  let commentText = "";
  let commentUser = "";
  let postError = "";
  let currentBlog;
  export let id;

  export function updateBlog(id) {
    currentBlog = id;
  }

  async function handlePost(id) {
    try {
      if (commentText !== "") {
        fetch(
          `https://project-blog-production.up.railway.app/api/blogs/${id}/comments`,
          {
            method: "POST",
            withCredentials: true,
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              text: commentText,
              public_username: commentUser == "" ? "Anonymous" : commentUser,
              user: $userStore ? $userStore.user.id : null,
            }),
          }
        )
          .then((res) => {
            commentText = "";
            commentUser = "";
          })
          .catch((e) => console.log(e));
        postError = "";
      } else {
        postError = "Please enter a comment";
      }
    } catch (e) {
      console.log(e);
    } finally {
      location.reload();
    }
  }
</script>

<div
  out:blur={{ duration: 400 }}
  in:blur={{ duration: 350 }}
  class="form-wrapper"
>
  <h3>Leave a comment</h3>
  <p class="error">{postError}</p>
  <form>
    {#if !$userStore}
      <input
        bind:value={commentUser}
        type="text"
        name="pubName"
        placeholder="Username"
      />
    {/if}
    <textarea required bind:value={commentText} name="text" />
    <button on:click|preventDefault={() => handlePost(id)}>Submit</button>
  </form>
</div>

<style>
  .form-wrapper {
    padding-top: 10px;
    max-width: 595px;
    background-color: var(--accent);
    padding: 10px;
    position: sticky;
    bottom: 0;
  }

  .form-wrapper > form {
    display: flex;
    flex-direction: column;
  }
</style>
