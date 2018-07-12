<template>
  <div>
    <Navigation1 />
    <Header />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Navigation1 from './components/navigation1';
import Header from './components/Header.vue';
export default {
  components:{
    Header,Navigation1
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss">
html{
  box-sizing: border-box;
  font-size: 62.5%;
}
body{
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;
}
*{
  margin:0;
  padding:0; 
}
*::before,
*::after{
  box-sizing: inherit;
}
</style>
