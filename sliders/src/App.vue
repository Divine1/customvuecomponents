<template>
  <div>
    <div id="navslidertoggle" @click="navSliderToggle=true">Slide</div>
    <NavigationSlider :navSliderToggle= "navSliderToggle" @navSliderToggle="navSliderToggle = $event"/>
    <Navigation1 />
    <Header />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import NavigationSlider from './components/navigationslider';
import Navigation1 from './components/navigation1';
import Header from './components/Header.vue';
export default {
  components:{
    Header,Navigation1,NavigationSlider
  },
  data () {
    return {
      msg: '',
      navSliderToggle : false 
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

#navslidertoggle{
  position: fixed;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  background-color: brown;
  font-weight: bold;
  line-height: 5rem;
  text-align: center;
  cursor: pointer;
}
</style>
