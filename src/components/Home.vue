<template>
  <Header />
  <Body />
  <Modal/>
  <Loading/>
</template>

<script>
import Header from '@/components/Header.vue'
import Body from '@/components/Body.vue'
import Modal from '@/components/Modal.vue'
import Loading from '@/components/Loading.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Header,
    Body,
    Modal,
    Loading
  },
  async created() {
    const _token = localStorage.getItem('token');
    if(_token) {
      await this.$store.commit('setToken', _token)
      await this.getFilms()
      return
    }
    await this.getToken()
    await this.getFilms()
  },
  methods: {
    ...mapActions([
      'getToken',
      'getFilms'
    ])
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
