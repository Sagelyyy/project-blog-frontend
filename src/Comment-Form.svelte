<script>
  import { userStore } from "./store";
  import { blur } from "svelte/transition";
  import Error from "./Error.svelte";
  let commentText = "";
  let commentUser = "";
  let errors = "";
  let currentBlog;
  export let id;

  export function updateBlog(id) {
    currentBlog = id;
  }

  async function handlePost(id) {
    try {
        const res = await fetch(
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
        let data = await res.json()
        if(res.status == 200){
          location.assign(`https://chriscancode.up.railway.app/blog/${id}`)
        }else{
          errors = data.message
        }
    } catch (e) {
      console.log(e);
    }
  }
</script>

<div
  out:blur={{ duration: 400 }}
  in:blur={{ duration: 350 }}
  class="form-wrapper"
>
  <h3>Leave a comment</h3>
  <Error errors = {errors} />
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
