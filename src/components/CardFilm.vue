<template>
    <div class="film" @click="getFilm" >
        <h2>{{ film.title }}</h2>
        <img :src="film.image" :alt="film.title">
    </div>
</template>
<script>
// import { mapMutations } from 'vuex'

export default {
    name: 'CardFilm',
    props: ['film'],
    data() {
        return{
            // clear_input_active: false
        }
    },
    methods: {
        async getFilm() {
            await this.$store.commit('setActiveLoading')

            await this.$store.dispatch('getFilm', this.film.id)

            await this.$store.commit('setInactiveLoading')
            const film = await this.$store.state.film
            if(  film === undefined || !film ) {
                console.log("film no encontrado")
                await this.$store.commit('setInactiveModal')
                return
            }
            await this.$store.commit('setActiveModal')
        }
    },
    mutations: {
    }
}
</script>
<style scoped>
    .film{
        flex: 1 1 35rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
        cursor: pointer;
    }
    .film>h2{
        color: var(--mostaza);
    }
    .film>img{
        width: 30rem;
    }
</style>