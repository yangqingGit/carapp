<template>
<div>
  <div class="header">
    <div v-if="rout == 'exam'">
        <mu-appbar title="驾考题库" titleClass="commcolor">
          <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="$router.back(-1)" titleClass="commcolor"/>
          <mu-raised-button label="答题模式" class="headerbtn" @click="ifmsfunc(true)" primary/>
          <mu-raised-button label="背题模式" class="headerbtn" @click="ifmsfunc(false)" primary/> 
          <mu-icon-button icon="" slot="right" titleClass="commcolor"/>
        </mu-appbar>
    </div>
    <div v-else>
      <mu-appbar v-bind:title="title" titleClass="commcolor">
        <mu-icon-button v-if="showback" icon="keyboard_arrow_left" slot="left" @click="$router.back(-1)" titleClass="commcolor"/>
        <mu-icon-button v-if="showuser" icon="menu" slot="left" @click="toggle(true)" titleClass="commcolor"/>
        <mu-icon-button icon="" slot="right" titleClass="commcolor"/>
      </mu-appbar>
    </div>
  </div>
  <div>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
        <!-- <mobile-tear-sheet>
        </mobile-tear-sheet> -->
         <mu-list>
            <mu-card-header title="半空清风送十里桃花红">
            <mu-avatar src="http://www.muse-ui.org/images/uicon.jpg" slot="avatar"/>
          </mu-card-header>
            <mu-divider />
            <mu-list-item title="个人信息">
              <mu-icon slot="left" value="inbox"/>
            </mu-list-item>
            <mu-list-item title="我的收藏">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
            <mu-list-item title="我的考友">
              <mu-icon slot="left" value="chat_bubble"/>
            </mu-list-item>
            <mu-list-item title="我的消息">
              <mu-icon slot="left" value="drafts"/>
            </mu-list-item>
          </mu-list>
          <mu-divider />
          <mu-list>
            <mu-list-item title="总题数：3000道">
              <mu-icon slot="right" value="info"/>
            </mu-list-item>
            <mu-list-item title="单选题：1000道">
              <mu-icon slot="right" value="info"/>
            </mu-list-item>
            <mu-list-item title="判断题：1000道">
              <mu-icon slot="right" value="info"/>
            </mu-list-item>
            <mu-list-item title="多选题：1000道">
              <mu-icon slot="right" value="info"/>
            </mu-list-item>
          </mu-list>
      </mu-drawer>
  </div>
</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'header',
    data () {
    return {
      open: false,
      docked: true,
      title:'驾考题库',
      rout: this.$route.name,
      leftTop: {horizontal: 'left', vertical: 'top'},
      leftBottom: {horizontal: 'left', vertical: 'bottom'},
      showback:false,
      showuser:true
    }
  },
  methods: {
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    },
    ifmsfunc(fms){
     this.$store.commit('mutationName',fms)
      // alert(fms);
      // this.ifms = fms
    }
  },
  watch:{
    '$route' (to, from) {
      this.rout = this.$route.name
      if(this.$route.name == 'ranking'){
          this.title = '排行榜';
          this.showback  = true;
          this.showuser  = false;
      }
      else{
        this.showback  = false;
        this.showuser  = true;
        this.title = '驾考题库';
      }
    }
  },
  beforeCreate: function () {
      console.log('beforeCreate is triggered.')
  },
  created: function () {
      console.log('created is triggered.')
  },
  beforeMount: function () {
      console.log('beforeMount is triggered.')
  },
  mounted: function () {
      console.log('mounted is triggered.')
  },
  beforeUpdate: function () {
      console.log('beforeUpdate is triggered.')
  },
  updated: function () {
      console.log('updated is triggered.')
  },
  beforeDestroy: function () {
      console.log('beforeDestroy is triggered.')
  },
  destroyed: function () {
      console.log('destroyed is triggered.')
  }
}
</script>

<style>
.mu-appbar-title{
  text-align: center;
}
.mu-appbar{
    background-color: #7595ff;
}
.headerbtn{
  font-size: 1rem;
  background-color: #2962ff;
  
}
</style>
