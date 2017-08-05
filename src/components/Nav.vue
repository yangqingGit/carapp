<template >
  <div id="nav">
    <mu-paper>
        <mu-bottom-nav :value="bottomNav" shift  @change="handleChange">
        <mu-bottom-nav-item value="做题" title="做题" icon="content_copy" to="/home"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="圈子" title="圈子" icon="remove_red_eye" to="/circle"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="我的" title="我的" icon="home" to="/user"></mu-bottom-nav-item>
        </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: '做题',
      bottomNavColor: '做题'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>

<style>
.mu-bottom-nav-shift{
  /*background-color:  #2196f3;*/
  /*font-weight:bold; */
}
.mu-bottom-nav-shift{
  background-color: #7595ff;
}
</style>
