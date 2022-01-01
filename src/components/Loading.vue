<template>
    <div id="loading" class="loading" :class="{'active': visible}" ref="loading" >
        <div class="content-loading">
            <img :src="require(`@/assets/loading.gif`)" alt="loading">
        </div>
    </div>
</template>
<script>
// import { mapMutations } from 'vuex'
export default {
    name: 'Loading',
    data() {
        return {
            // visible: this.$store.state.modalActive
        }
    },
    methods: {
        close_loading() {
            return this.$store.commit('setInactiveLoading')
        }
    },
    computed: {
        visible() {
            return this.$store.state.loadingActive
        }
    },
    mutations: {

    },
    watch: {
        visible: function() {
            const scrollY = window.scrollY
            this.$refs.loading.style.marginTop = scrollY + 'px'
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
    .loading{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1000;
        background: rgba(0,0,0,0.4);
        display: none;
    }
    .loading.active{
        display: block!important;
    }
    .content-loading{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }
    .loading img{
        object-fit: cover;
    }
</style>