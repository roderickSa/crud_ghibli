<template>
  <Home />
</template>

<script>
import Home from '@/components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  },
  created() {
    window.addEventListener('resize', this.resizeWindow)
  },
  unmounted() {
    window.removeEventListener('resize', this.resizeWindow)
  },
  methods: {
    resizeWindow() {
      const scrollY = window.scrollY
      document.getElementById('modal').style.marginTop = scrollY + 'px'
    }
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap');

:root{
    --crema: #EFF6A5;
    --mostaza: #FFCF68;
    --purpura: #CD5A5A;
    --violeta: #6A2E2E;
    --morado: #563761;
}
*{
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
    text-transform: capitalize;
    transition: .2s linear;
}
html::-webkit-scrollbar{
    width: .8rem;
}
html::-webkit-scrollbar-track{
    background: transparent;
}
html::-webkit-scrollbar-thumb{
    background: var(--crema);
    border-radius: 5rem;
}
/* html::-webkit-scrollbar-thumb{
    background: #2196f3;
    border-radius: 5rem;
}*/
/*.box-container::-webkit-scrollbar {
  background: #2196f3;
  color: #fff;
  width: .8rem;
  border-radius: 5rem;
}*/
*::selection{
    background-color: var(--violeta);
    color: #fff;
}
html{
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scroll-padding-top: 6rem;
}
.hiddenscrolly{
  overflow-y: hidden;
}
body{
    background: var(--violeta);
}
ul{
  list-style: none;
}
.boton{
  width: 100px;
  height: 35px;
  background: var(--mostaza);
  cursor: pointer;
  border: 0.1rem solid rgba(0,0,0,.1);
  color: #fff;
  font-size: 1.6rem;
}
</style>
