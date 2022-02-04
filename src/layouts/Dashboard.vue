<template>
  <div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot name="main"></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

header {
    width: 100%;
    color: #fff;
    background-color: #00c180;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
}

main {
  height: 50vh;
}

</style>