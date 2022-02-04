<template>
  <div>
    <Dashboard>
        <template #header>
        <Header/>
      </template>

      <template #main>
        <button @click="changeTab(`list`)">List Note</button>
        <button @click="changeTab('add')">Add Note</button>
        <component :is="tab"></component>
      </template>

      <template #footer>
        <Footer/>
      </template>
    </Dashboard>

  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import List from '../components/List.vue'
import Dashboard from '../layouts/Dashboard.vue'
import AddNote from '../components/AddNote.vue'

export default {
    name: 'Home',
components: {
    Header,
    Footer,
    'list': List,
    Dashboard,
    'add': AddNote
  },
  data() {
    return {
      isActive: true,
      tab: 'list',
    }
  },
  methods: {
    changeTab(tabname) {
      this.tab = tabname;
    }
  }

}
</script>

<style>

</style>