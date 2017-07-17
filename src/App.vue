<template>
  <div>
      <div class="content">
        <headercomponent></headercomponent>
          <router-view class="view"></router-view>
      </div>
      <div class="navigation">
        <navcomponent></navcomponent>
      </div>
  </div>
</template>

<script>
//import navcomponent from 'component/Nav.vue'
import navcomponent from './components/Nav.vue'
import homecomponent from './components/home.vue'
import headercomponent from './components/header.vue'

export default {
  name: 'app',
  components: { navcomponent,homecomponent,headercomponent },
    data () {
    return {
      open: false,
      docked: true
    }
  },
  methods: {
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    }
  }
}
</script>

<style>


</style>
