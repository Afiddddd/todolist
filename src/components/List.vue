<template>
  <div>
      <ul v-if="listNotes && listNotes.length > 0 ">
          <li v-for="list in listNotes" :key="list.id">
              <div> {{ list.note }} </div>
              <div> {{ list.isCompleted }} </div>

          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'List',
    mounted() {
        this.$store.dispatch('fetchNotes')
    },
    computed: {
        listNotes() {
            return this.$store.getters.getListNotes;
        }
    }
}
</script>

<style scoped>

div {
    
}
ul {
    margin : 50px;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
}



</style>