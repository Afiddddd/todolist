<template>

<div>
  <nav class="menu">
   <router-link to="/" v-slot="{isActive}">
    <button class="btn-link" :class="{active: isActive}">Home</button>
      </router-link>
      <router-link to="/about" v-slot="{isActive}">
    <button class="btn-link" :class="{active: isActive}">About</button>
      </router-link>
  </nav>
  <router-view></router-view>
</div>
</template>


<script>

export default {
  name: 'App',
 
}
</script>

<style scoped>



.menu {
    width: 100%;
    padding: 16px;
    background: #2c3e50;
    color: #fff;
    display: flex;
    justify-content: center;
    gap: 32px;
}

.menu a {
  text-decoration: none;
  color : white;
}

.btn-link {
  border: 0px;
  color: white;
  padding: 10px;
  background: none;
  font-size: 15px;
}

.active {
  color: #00c180;
}



</style>
