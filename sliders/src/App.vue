<template>
  <div>
    <Header />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components:{
    Header
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
}
</style>
