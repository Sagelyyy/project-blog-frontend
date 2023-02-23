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
      const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
        method: "GET",
        withCredentials: true,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
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
              ><span class="material-symbols-outlined comment-wrapper">
                forum <p>
                  {data.blog.comments.length > 0
                    ? data.blog.comments.length
                    : ""}
                </p>
              </span></button
            >
            {#if $userStore !== null && $userStore.user.admin}
              <form method="POST" action="http://localhost:3000/api/blogs">
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
    width: fit-content;
    padding: 10px;
  }
  .card {
    padding: 5px;
    font-family: "Roboto", sans-serif;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 605px;
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
    max-width: 595px;
  }
</style>
