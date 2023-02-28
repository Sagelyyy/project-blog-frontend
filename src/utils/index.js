export async function handleLogin() {
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