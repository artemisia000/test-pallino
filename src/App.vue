<template>
  <div id="app">
    <div class="container-fluid">
      <NavMenu/>
  
      <HeaderWwf/>
  
      <ProgressBarNumbers/>
  
      <MainWwf/>
  
  
      <FooterWwf/>
    </div>

  </div>
</template>

<script>
import NavMenu from './components/NavMenu.vue';
import HeaderWwf from "./components/HeaderWwf.vue";
import FooterWwf from "./components/FooterWwf.vue";
import ProgressBarNumbers from "./components/ProgressBarNumbers.vue";
import MainWwf from "./components/MainWwf.vue";


export default {
  name: 'App',
  components: {
    NavMenu,
    HeaderWwf,
    FooterWwf,
    ProgressBarNumbers,
    MainWwf,
  },
};

</script>

<style lang="scss">

@import '@/styles/globals';


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
