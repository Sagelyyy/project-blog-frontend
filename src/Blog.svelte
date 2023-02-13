<script>
  import { userStore } from "./store";
  import Comments from "./Comments.svelte";
  import { tick } from "svelte";

  let showComments = false;

  let comments;

  async function commentHandler(id) {
    showComments == true ? (showComments = false) : (showComments = true);
    // Need to wait for the component to be visible to bind comments for setComments method
    if (showComments) {
      await tick;
      comments.setComments(id);
    }
  }

  async function getBlogs() {
    try {
      const res = await fetch("http://localhost:3000/api/blogs", {
        method: "GET",
        withCredentials: true,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const blogs = await res.json();
        return blogs;
      }
    } catch (err) {
      console.log(err);
    }
  }

  let blogs = getBlogs();

  async function handleDelete(id) {
    try {
      const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
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

<div class="content-wrapper">
  <div class="content">
    {#await blogs}
      ...loading
    {:then data}
      {#each data.blogs as item}
        <div class="card">
          <div class="roll">
            <h3><span>{item.user.username}</span> rolled a</h3>
            <h2>{item.number}</h2>
          </div>
          <div class="post">
            <h1>{item.title}</h1>
            <h2>{item.user.username}</h2>
            <div class="separator" />
            <p>{item.text}</p>
            <div class="footer">
              <p>Posted at {item.date}</p>
              <button on:click={() => commentHandler(item._id)}
                ><span class="material-symbols-outlined comment-wrapper">
                  forum <p>
                    {item.comments.length > 0 ? item.comments.length : ""}
                  </p>
                </span></button
              >
              {#if $userStore !== null && $userStore.user.admin}
                <form method="POST" action="http://localhost:3000/api/blogs">
                  <input name="id" value={item._id} hidden required />
                  <button
                    on:click|preventDefault={() => handleDelete(item._id)}
                  >
                    <span class="material-symbols-outlined trash">
                      delete
                    </span>
                  </button>
                </form>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    {/await}
  </div>
  {#if showComments}
    <div class="comment-container">
      <Comments on:close={() => commentHandler()} bind:this={comments} />
    </div>
  {/if}
</div>

<style>
  .content-wrapper {
    display: grid;
    grid-template-columns: 615px 310px;
    justify-content: center;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    width: fit-content;
  }
  .card {
    padding: 5px;
    font-family: "Roboto", sans-serif;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 600px;
    background-color: var(--accent);
    transition: all 0.5s;
  }

  .card:hover {
    cursor: pointer;
    box-shadow: -10px 10px 20px black;
  }

  .roll {
    text-align: center;
  }

  .roll > h2 {
    font-size: 8rem;
    text-shadow: -10px 10px 12px var(--dark);
  }

  .roll > h3 span {
    text-transform: capitalize;
  }
  .post {
    display: flex;
    flex-direction: column;
  }

  .post > h2 {
    align-self: flex-end;
    margin-right: 5px;
    text-align: center;
    text-transform: capitalize;
    font-size: 0.9rem;
    padding-top: 12px;
    background-color: #9ecaff;
    height: 30px;
    width: 50px;
    border-radius: 20px;
  }

  .post > p {
    color: var(--dark);
  }

  .separator {
    margin-top: 10px;
    border: 1px solid #c3c3c3;
  }

  .footer {
    display: flex;
    justify-content: space-around;
    font-size: 0.8rem;
    margin-top: auto;
    padding-top: 10px;
  }

  .trash {
    padding: 2px;
    color: var(--dark);
    transition: all 0.5s;
    border-radius: 5px;
  }

  .trash:hover {
    scale: 1.2;
    background-color: var(--error);
  }

  button {
    cursor: pointer;
  }

  .comment-wrapper {
    display: flex;
    gap: 5px;
    transition: all 0.5s;
    border-radius: 5px;
  }

  .comment-wrapper:hover {
    scale: 1.2;
    background-color: rgb(160, 224, 160);
  }

  .comment-container {
    width: 300px;
  }
</style>
