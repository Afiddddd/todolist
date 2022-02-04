<template>
<div>
    <div>
        <h3>Todo List</h3>
         <p>10 Catatan Harianku</p> <!-- paragraf dinamis -->
    </div>
    <div class="container-box">
        <div>
            <router-link to="/login"><button>Login</button></router-link>
            
        </div>
        <div>
            <input type="searchbar" placeholder="Cari Catatan.."> 
        </div>
         
        
    </div>
</div>
  
</template>

<script>
export default {
    name : 'Header',

}
</script>

<style scoped>


.container-box {
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

button {
    border: 1px solid #fff;
    border-radius: 5px;
    margin-bottom: 16px;
    background: transparent;
    color: #fff;
}
input {
   border: 0;
    border-radius: 5px;
    height: 15px;
    padding: 5px 16px;
}

</style>