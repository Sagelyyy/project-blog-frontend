<script>
  import { userStore } from "./store";
  import { blur } from "svelte/transition";
  let commentText = "";
  let commentUser = "";
  let postError = "";
  let currentBlog;

  export function updateBlog(id) {
    currentBlog = id;
  }

  async function handlePost(id) {
    if (commentText !== "") {
      console.log(currentBlog);
      fetch(`http://localhost:3000/api/blogs/${id}/comments`, {
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
      })
        .then((res) => {
          commentText = "";
          commentUser = "";
        })
        .catch((e) => console.log(e));
      postError = "";
    } else {
      postError = "Please enter a comment";
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
    <input
      bind:value={commentUser}
      type="text"
      name="pubName"
      placeholder="Username"
    />
    <textarea required bind:value={commentText} name="text" />
    <button on:click|preventDefault={() => handlePost(currentBlog)}
      >Submit</button
    >
  </form>
</div>

<style>
  .form-wrapper {
    position: relative;
    padding-top: 10px;
    width: 400px;
    margin: 0 auto;
    background-color: white;
    padding: 10px;
  }

  .form-wrapper > form {
    display: flex;
    flex-direction: column;
  }
</style>
