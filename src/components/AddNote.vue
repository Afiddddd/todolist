<template>
  <div>
      <input type="text" v-model="note">
      <button @click="addNote()">Add Note</button>
  </div>
</template>

<script>
export default {
    name: 'AddNote',
    data(){
        return {
            note : ''
        }
    },

    methods: {
        async addNote() {
            const payload = {
                id: this.$store.getters.getCountNotes + 1,
                note: this.capitalizeWords(this.note),
                isCompleted: false
            }
            const res = await this.$store.dispatch('addNote', payload);
            if (res) {
                this.$moshaToast('Berhasil Menambahkan !!', {
                position: 'top-center',
                type: 'success',
                transition: 'zoom',
                hideProgressBar: true,
            });
            this.note = '';
            }
        }
    }

}
</script>

<style>

</style>