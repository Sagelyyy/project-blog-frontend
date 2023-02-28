<script>
  import { userStore } from "./store";
  let email = "";
  let password = "";
  let error = ""

  async function handleLogin() {
    try {
      const res = await fetch(
        "https://project-blog-production.up.railway.app/api/users",
        {
          method: "POST",
          withCredentials: true,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      let data = await res.json();
      if(res.status == 200){
      userStore.set(data);
      }else{
        error = data.message
      }
    } catch (err) {
      console.log(err);
    }
  }
</script>

<h1>Login:</h1>
{#if error}
  <h2 class="error">{error}</h2>
{/if}
<form
  method="POST"
  action="https://project-blog-production.up.railway.app/api/users"
>
  <input type="text" name="email" bind:value={email} />
  <input type="password" name="password" bind:value={password} />
  <button on:click|preventDefault={() => handleLogin()}>Submit</button>
</form>
