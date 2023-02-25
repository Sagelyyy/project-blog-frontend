<script>
  import { Router, Link, Route } from "svelte-routing";
  import Blog from "./Blog.svelte";
  import Navigation from "./Navigation.svelte";
  import PostDetail from "./Post_Detail.svelte";

  export let url = "";
</script>

<main>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
  />
</main>
<div class="svg-bg">
  <svg
    width="1000"
    height="1000"
    xmlns="http://www.w3.org/2000/svg"
    fill-rule="evenodd"
    stroke-linejoin="round"
    stroke-miterlimit="1.414"
    clip-rule="evenodd"
    viewBox="0 0 90 90"
  >
    <path
      fill-rule="nonzero"
      d="M40.405.96a48.73 48.73 0 0 0-7.575 1.445C23.199 5.052 14.282 11.39 8.605 19.61L7.56 21.143h4.615c4.667 0 5.347.07 5.783.662.382.488.296 1.394-.192 1.863l-.417.436H5.819l-.959 1.985c-.522 1.098-.94 2.073-.94 2.177 0 .14 2.613.192 8.708.192 9.543 0 9.613 0 9.874 1.01.191.713.087 1.132-.4 1.55l-.436.4H2.753l-.366 1.289c-.21.714-.383 1.375-.383 1.48 0 .14 2.073.191 6.967.191 6.705 0 6.983.017 7.314.348.749.749.592 1.916-.348 2.387-.33.174-2.194.226-7.506.226H1.343l-.105.557c-.175.993-.453 3.674-.453 4.44v.75h4.18v2.962H.786v.731c0 .784.28 3.466.453 4.44l.105.575 11.633.035 11.633.052.453.417c.609.575.609 1.446.017 2.02l-.418.436H13.324c-8.028 0-11.32.052-11.32.192 0 .105.175.766.383 1.48l.366 1.289h17.555l.418.435c.644.627.592 1.499-.105 2.073l-.54.452H12c-5.643 0-8.08.052-8.08.192 0 .104.417 1.08.94 2.177l.957 1.985h8.673c8.498 0 8.708 0 9.074.348.8.749.644 1.898-.313 2.386-.331.175-2.317.227-8.063.227h-7.63l.923 1.358.923 1.34 10.606.088 10.589.086.418.488c.452.54.522.993.209 1.567-.436.818-.244.801-9.927.818-5.329 0-9.195.07-9.195.157s.94 1.062 2.107 2.177l2.107 2.02h6.914c5.172 0 7.001.052 7.332.226.958.488 1.114 1.637.313 2.387-.366.33-.592.348-5.347.348-4.267 0-4.928.034-4.72.244.14.14 1.168.766 2.264 1.393 4.58 2.595 9.944 4.424 15.5 5.277 2.804.418 9.23.418 12.016 0 5.016-.766 9.247-2.125 13.584-4.319 1.29-.645 2.821-1.48 3.396-1.846l1.045-.662-6.496-.087-6.513-.086-.418-.488c-.522-.627-.522-1.184 0-1.81l.418-.488 8.638-.087 8.655-.087 2.072-1.967c1.15-1.098 2.09-2.056 2.09-2.143 0-.086-2.838-.156-7-.156-7.385-.017-7.35 0-7.768-.818-.313-.576-.244-1.028.21-1.567l.417-.488 8.412-.087 8.394-.086.94-1.359.959-1.34H69.697c-12.295 0-12.817-.036-13.183-.697-.348-.627-.21-1.515.279-1.898.453-.366.575-.366 13.514-.366h13.044l.836-1.794c.47-.975.906-1.95.958-2.16l.122-.382-8.97-.052-8.968-.052-.4-.383c-.576-.574-.523-1.55.104-2.072l.47-.418h18.913l.366-1.375c.21-.75.383-1.41.383-1.48 0-.053-3.135-.105-6.966-.105h-6.983l-.418-.436c-.557-.54-.557-1.305-.017-1.95l.418-.488 7.314-.052 7.314-.051.192-1.341c.104-.732.226-2.02.296-2.856l.122-1.515-2.247-.052-2.247-.052-.052-1.445-.052-1.428h4.598l-.122-1.533a63.667 63.667 0 0 0-.296-2.873l-.192-1.34h-6.251c-6.844 0-7.298-.053-7.646-.959-.26-.679-.226-.871.28-1.463l.452-.54h6.252c3.43 0 6.252-.052 6.252-.105 0-.07-.175-.732-.383-1.48l-.366-1.376H68.862l-.418-.435c-.47-.47-.574-1.376-.21-1.846.506-.662.784-.68 9.005-.68h8.028l-.122-.4c-.052-.21-.487-1.184-.958-2.177l-.836-1.776h-6.496c-6.305 0-6.53-.017-6.897-.348-.801-.749-.644-1.898.313-2.386.314-.157 1.881-.226 5.886-.226h5.452l-.557-.837C73.946 9.876 63.202 3.102 50.767 1.203 48.573.874 42.599.734 40.405.96zm2.49 9.404l-.052 3.692-.731.21c-.401.121-1.254.505-1.898.87l-1.168.628-2.507-2.49c-1.359-1.359-2.49-2.543-2.49-2.613 0-.244 2.125-1.724 3.309-2.316a18.206 18.206 0 0 1 4.005-1.41c1.741-.385 1.585-.733 1.532 3.43zm5.92-3.135c2.178.575 4.494 1.777 6.026 3.117l.644.575-2.56 2.578-2.56 2.56-.644-.453c-.766-.575-2.09-1.184-3.082-1.428l-.749-.192V6.654l.837.105c.452.07 1.392.279 2.089.47zM36.714 18.845c-.226.452-.505 1.149-.61 1.55l-.174.748h-7.332l.122-.992c.226-1.951 1.219-4.459 2.612-6.531l.54-.837 2.63 2.63 2.63 2.612-.418.82zm22.239-3.187c.784 1.585 1.567 4.11 1.567 5.085v.401h-7.262l-.47-1.41-.488-1.429 2.577-2.577 2.595-2.595.313.383c.175.226.698 1.184 1.168 2.142zm-11.93 1.724c1.185.54 2.264 1.62 2.856 2.874.383.818.453 1.202.453 2.456-.017 1.271-.087 1.62-.522 2.49-2.16 4.336-8.36 4.319-10.484-.017-.418-.871-.488-1.202-.488-2.56 0-1.463.035-1.654.592-2.664 1.498-2.77 4.772-3.885 7.594-2.579zM36.19 25.097c.156.558.609 1.55 1.01 2.212l.713 1.202-2.49 2.49c-1.376 1.376-2.56 2.508-2.63 2.508-.278 0-1.968-2.456-2.682-3.918-.732-1.515-1.464-4.005-1.464-5.016v-.47h7.263l.28.992zm24.26 0c-.262 2.212-1.882 5.87-3.397 7.663l-.47.557-2.56-2.56-2.578-2.578.61-.992c.313-.558.732-1.464.906-2.038l.313-1.044h7.298l-.123.992zm-8.586 7.68l2.578 2.577-.923.627c-2.16 1.429-5.277 2.56-7.054 2.578h-.574v-7.263l.662-.121c.348-.052 1.045-.296 1.515-.523.488-.244.958-.435 1.045-.435.104-.017 1.34 1.15 2.751 2.56zM41.85 30.93l1.08.4v7.228h-.488c-1.428 0-4.893-1.289-6.565-2.438l-.819-.575 2.578-2.595c1.655-1.655 2.682-2.56 2.856-2.508.14.053.748.261 1.358.488zm37.652 13.636v1.48H9.319v-2.96h70.183v1.48z"
    />
  </svg>
</div>
<Navigation />
<Router {url}>
  <div>
    <Route path="blog/:id" let:params><PostDetail id={params.id} /></Route>
    <Route path="/" component={Blog} />
  </div>
</Router>

<style>
  .svg-bg {
    position: fixed;
    fill: grey;
    top: 5%;
    left: -5%;
    z-index: -1;
    opacity: 0.2;
  }

  @media screen and (max-width: 800px) {
    .svg-bg {
      scale: 0.4;
      top: 10%;
      right: 90%;
      left: -80%;
    }
  }

  :global(*) {
    padding: 0;
    margin: 0;
    font-family: "Roboto", "sans-serif";
  }

  :global(:root) {
    --primary-bg: #1d1e2c;
    --darker-hlight: #8a817c;
    --lighter-hlight: #bcb8b1;
    --dark: #2d3142;
    --error: #8e3b46;
    --accent: #eae8ff;
  }

  :global(body) {
    background-color: var(--primary-bg);
    padding: 0;
  }

  :global(.error) {
    color: var(--error) !important;
  }

  :global(.capitalize) {
    text-transform: capitalize;
  }

  :global(.separator) {
    margin-top: 10px;
    border: 1px solid #c3c3c3;
  }

  :global(.card .roll > h2) {
    text-shadow: none;
    transition: text-shadow 0.3s ease-in-out;
  }

  :global(.card:hover .roll > h2) {
    text-shadow: -5px 5px 5px var(--dark);
  }

  :global(.card) {
    padding: 5px;
    font-family: "Roboto", sans-serif;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 605px;
    background-color: var(--accent);
    transition: all 0.5s ease;
  }

  :global(.card:hover) {
    cursor: pointer;
    box-shadow: -10px 10px 20px black;
  }

  :global(.roll) {
    text-align: center;
    text-shadow: none;
  }

  :global(.roll > h2) {
    font-size: 8rem;
  }

  :global(.roll > h3 span) {
    text-transform: capitalize;
  }
  :global(.post) {
    display: flex;
    flex-direction: column;
  }

  :global(.post > h2) {
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

  :global(.post > p) {
    color: var(--dark);
  }

  :global(.footer) {
    display: flex;
    justify-content: space-around;
    font-size: 0.8rem;
    margin-top: auto;
    padding-top: 10px;
    gap: 5px;
  }

  :global(.trash) {
    padding: 2px;
    color: var(--dark);
    transition: all 0.5s;
    border-radius: 5px;
  }

  :global(.trash:hover) {
    scale: 1.2;
    background-color: var(--error);
  }

  :global(button) {
    cursor: pointer;
  }

  :global(.comment-btn) {
    display: flex;
    gap: 5px;
    transition: all 0.5s;
    border-radius: 5px;
  }

  :global(.comment-btn:hover) {
    scale: 1.2;
    background-color: rgb(160, 224, 160);
  }

  :global(.comment-container) {
    max-width: 600px;
  }

  :global(.material-symbols-outlined) {
    display: flex !important;
  }
</style>
