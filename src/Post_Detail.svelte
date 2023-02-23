<script>
  import { userStore } from "./store";
  import Comments from "./Comments.svelte";
  import CommentForm from "./Comment-Form.svelte";

  let blog;

  export let id;

  export function setBlog(id) {
    getBlog(id).then((data) => {
      blog = data;
    });
  }

  export async function getBlog(id) {
    try {
      const res = await fetch(
        `https://project-blog-production.up.railway.app/api/blogs/${id}`,
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
      const res = await fetch(
        `https://project-blog-production.up.railway.app/api/blogs/${id}`,
        {
          method: "DELETE",
          withCredentials: true,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
          }),
        }
      );
    } catch (err) {
      console.log(err);
    } finally {
      location.replace("/");
    }
  }

  setBlog(id);
</script>

<div class="content">
  {#if blog}
    {#await blog}
      ....Loading
    {:then data}
      <div class="card">
        <div class="roll">
          <h3><span>{data.blog.user.username}</span> rolled a</h3>
          <h2>{data.blog.number}</h2>
        </div>
        <div class="post">
          <h1>{data.blog.title}</h1>
          <h2>{data.blog.user.username}</h2>
          <div class="separator" />
          <p>{data.blog.text}</p>
          <div class="footer">
            <p>Posted at {data.blog.date}</p>
            <button
              ><span class="comment-btn material-symbols-outlined">
                forum <p>
                  {data.blog.comments.length > 0
                    ? data.blog.comments.length
                    : ""}
                </p>
              </span></button
            >
            {#if $userStore !== null && $userStore.user.admin}
              <form
                method="POST"
                action="https://project-blog-production.up.railway.app/api/blogs"
              >
                <input name="id" value={data.blog._id} hidden required />
                <button
                  on:click|preventDefault={() => handleDelete(data.blog._id)}
                >
                  <span class="material-symbols-outlined trash"> delete </span>
                </button>
              </form>
            {/if}
          </div>
        </div>
      </div>
    {/await}
  {/if}

  <div class="comment-container">
    <Comments {id} />
  </div>

  <CommentForm {id} />
</div>

<style>
  .content {
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
    max-width: 600px;
    padding: 10px;
  }
</style>
