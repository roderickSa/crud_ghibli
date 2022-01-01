<template>
    <div id="modal" class="modal" :class="{'active': visible}" ref="modal" >
        <div class="content-modal">
            <div class="header-modal">
                <h2>{{detailFilm.title}}</h2>
                <img :src="detailFilm.movie_banner" :alt="detailFilm.movie_banner">
            </div>
            <div class="body-modal">
                <h3>Descripción</h3>
                <p>{{detailFilm.description}}</p>
                <strong>director: </strong><span>{{detailFilm.director}}</span><br>
                <strong>titulo original: </strong><span>{{detailFilm.original_title}}</span><br>
                <strong>titulo original romanisado: </strong><span>{{detailFilm.original_title_romanised}}</span><br>
            </div>
            <div class="footer-modal">
                <button
                    type="button"
                    class="boton"
                    @click="close_modal"
                >Cerrar</button>
            </div>
        </div>
    </div>
</template>
<script>
// import { mapMutations } from 'vuex'
export default {
    name: 'Modal',
    data() {
        return {
            // visible: this.$store.state.modalActive
        }
    },
    methods: {
        close_modal() {
            return this.$store.commit('setInactiveModal')
        }
    },
    computed: {
        visible() {
            return this.$store.state.modalActive
        },
        detailFilm() {
            return this.$store.state.film
        },
    },
    mutations: {

    },
    watch: {
        visible: function() {
            // cuando le puse la clase 100vw y 100vh por defecto el modal se situa arriba en el top
            //con las 2 lineas siguientes lo que hacemos es hacer un margin top a el alto de la pantalla que estemos actualemente
            const scrollY = window.scrollY
            this.$refs.modal.style.marginTop = scrollY + 'px'
            if( this.visible === true ) {
                document.querySelector('html').classList.add('hiddenscrolly')
                return
            }
            document.querySelector('html').classList.remove('hiddenscrolly')
        }
    }
}
</script>
<style scoped>
    .modal{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1000;
        background: rgba(0,0,0,0.4);
        display: none;
    }
    .modal.active{
        display: block!important;
    }
    .content-modal{
        width: 80vw;
        height: 95vh;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        background: #fff;
        border-radius: 0.4rem;
        box-shadow: 0.2rem 0.2rem 1rem var(--mostaza);
        overflow-y: auto;
    }
    .header-modal,
    .body-modal,
    .footer-modal{
        width: 100%;
    }
    .header-modal{
        overflow: hidden;
        border-radius: 0.4rem;
        position: relative;
    }
    .header-modal h2{
        position: absolute;
        bottom: 0;
        margin-bottom: 1.5rem;
        font-size: 2.4rem;
        margin-left: 1rem;
        color: #fff;
        background: var(--violeta);
    }
    .header-modal img{
        width: 100%;
        max-width: 100%;
        height: 45rem;
        max-height: 45rem;
        object-fit: fill;
    }
    .body-modal{
        padding: 0 0.8rem;
    }
    .body-modal h3, .body-modal p{
        margin-bottom: 0.5rem;
    }
    .footer-modal{
        display: flex;
        justify-content: center;
        position: sticky;
        bottom: 0;
    }
</style>