<script>
  import { userStore } from "./store";
  import {handleLogin} from "./utils/index"
  let email = "";
  let password = "";
  let error = ""
  let loginData


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
  <button on:click|preventDefault={() => handleLogin(email, password).then((data) => loginData = data)}>Submit</button>
</form>
