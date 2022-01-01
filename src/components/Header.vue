<template>
    <nav class="header">
        <ul>
            <li><h1>Home</h1></li>
            <li>
                <input
                    type="text"
                    id="txt_filtro"
                    v-model="filtro"
                    @input="my_filteredFilms()"
                    />
                <span
                    id="clear_input"
                    @click="clear_input_filtro"
                    :class="{visible_clear_input: filtro.length > 0}"
                    >x</span>
            </li>
        </ul>
    </nav>
</template>
<script>
// import { mapMutations } from 'vuex'
export default {
    name: 'Header',
    data() {
        return{
            filtro: ''
        }
    },
    methods: {
        my_filteredFilms() {
            this.$store.commit('filteredFilms', this.filtro.toLowerCase());
        },
        clear_input_filtro() {
            document.getElementById('txt_filtro').value = ''
            this.filtro = ''
            this.my_filteredFilms()
        }
    },
    computed: {
        // ...mapMutations([
        //     'filteredFilms'
        // ])
    },
    mutations: {

    }
}
</script>
<style scoped>
    h1{
        font-size: 2.2rem;
        color: var(--violeta);
    }
    ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        height: 3.5rem;
        background: var(--mostaza);
    }
    ul>li:nth-child(1){
        flex: 1 1 20rem;
        text-align: left;
        padding-left: 1rem;
    }
    ul>li:nth-child(2){
        flex: 1 1 40rem;
        display: flex;
        align-items: center;
        justify-content: end;
        margin-right: 1rem;
        position: relative;
    }
    #txt_filtro{
        width: 50%;
        height: 2.5rem;
        border-radius: 0.4rem;
        height: 2.5rem;
        border-radius: 0.4rem;
        padding-left: 1rem;
        text-transform: none;
        font-size: 1.2rem;
    }
    #txt_filtro:focus{
        width: 100%;
        height: 3.2rem;
        /* border-radius: 0.4rem; */
        border: 0.2rem solid var(--violeta);
        padding-left: 1rem;
        /* text-transform: none; */
        font-size: 1.7rem;
    }
    #clear_input{
        position: absolute;
        top: 0;
        right: 0;
        height: 3.2rem;
        width: 2.3rem;
        margin: 0 auto;
        text-align: center;
        line-height: 3.2rem;
        font-size: 1.3rem;
        cursor: pointer;
        display: none;
    }
    .visible_clear_input{
        display: block!important;
    }
    /* #txt_filtro:focus + #clear_input{
        display: block;
    } */
    #clear_input:hover{
        /* font-size: 1.7rem; */
        width: 2.5rem;
    }
</style>