<template>
  <div class="container">
      <h1>Login</h1>
      <form action="">
          <div>
              <label for="email">Email</label>
              <input type="email" name="email" placeholder="email"> 
          </div>
          <div>
              <label for="pass">Password</label>
              <input type="password" name="pass" placeholder="password">
          </div>
          <div>
              <button>Login</button>
          </div>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
}


form {
    margin: 10px;
}

form > div {
    margin: 10px;
}

</style>