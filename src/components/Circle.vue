<template>
  <div id="circle">
           
             <div class="page">
<div class="gridlist-demo-container">
  <mu-grid-list class="gridlist-demo">
    <mu-grid-tile v-for="tile, index in list" key="index" :rows="tile.featured ? 1 : 1" :cols="tile.featured ? 2 : 1">
      <img class="qzimg" :src="tile.image">
      <span slot="title">{{tile.title}}</span>
      <span slot="subTitle">{{tile.author}}</span>
      <mu-icon-button icon="star_border" slot="action"></mu-icon-button>
    </mu-grid-tile>
  </mu-grid-list>
</div>
</div>
  </div>
</template>

<script>
import headercomponent from './../components/header.vue'
export default {
  data () {
    return {
      list: [{
        image: 'http://www.muse-ui.org/images/breakfast.jpg',
        title: '驾考圈',
        author: '分享您的考试经验！',
         featured: true
      }, {
        image: 'http://www.muse-ui.org/images/burger.jpg',
        title: '学车趣事',
        author: '分享您的学车趣事！'
      }, {
        image: 'http://www.muse-ui.org/images/camera.jpg',
        title: '学车问答',
        author: '解答下学弟学妹的疑惑吧！'
      }, {
        image: 'http://www.muse-ui.org/images/hats.jpg',
        title: '学车技巧',
        author: '炫耀下您的学车技巧吧！',
         featured: true
      }, {
        image: 'http://www.muse-ui.org/images/honey.jpg',
        title: '晒驾照',
        author: '恭喜您学车成功！不要忘了小考哦！'
      }, {
        image: 'http://www.muse-ui.org/images/morning.jpg',
        title: '建议',
        author: '您的每一条建议我们都会认真看的！'
      }]
    }
  },
   components: { headercomponent }
}
</script>

<style>
.gridlist-demo-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.gridlist-demo{
    
  overflow-y: auto;
}
.qzimg{
    width: 100%;
}
</style>
