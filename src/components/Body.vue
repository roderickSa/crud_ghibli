<template>
    <div class="body">
        <h1>Listado de peliculas Ghibli</h1>
        <div class="box_films">
            <CardFilm
                v-for="film in films"
                :key="film.id"
                :film="film"
            />
        </div>
    </div>
</template>
<script>
import CardFilm from '@/components/CardFilm.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'Body',
    components: {
        CardFilm
    },
    computed: {
        ...mapGetters([
            'films'
        ])
    }
}
</script>
<style scoped>
    h1{
        text-align: center;
        margin-top: 2rem;
        color: var(--mostaza);
    }
    .box_films{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
</style>