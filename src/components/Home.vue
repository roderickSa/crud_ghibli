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
  created() {
    this.getFilms()
  },
  methods: {
    ...mapActions([
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
