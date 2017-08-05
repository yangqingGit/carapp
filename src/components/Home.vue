<template>
  <div id="home">
     
     <div class="page">
      <mu-row style="padding:0">
        <mu-col width="100" class="adimg" style="width: 100%;">
          <img style="width:100%" src="./../assets/lunbo.jpg">
        </mu-col>
      </mu-row>
      <div class="demo-grid">
        <mu-row gutter>
         
          <mu-col width="25" tablet="30" desktop="25">
             <router-link to="/exam" style="width:100%;height:100%;display: block;">
            顺序练习
            </router-link>
          </mu-col>
          
          <mu-col width="25" tablet="30" desktop="25">
            随机练习
          </mu-col>
          <mu-col width="25" tablet="20" desktop="25">
            专项练习
          </mu-col>
          <mu-col width="25" tablet="20" desktop="25">
            未做题
          </mu-col>
          <mu-col width="25" tablet="30" desktop="25">
            模拟考试
          </mu-col>
          <mu-col width="25" tablet="30" desktop="25">
            名师题库
          </mu-col>
          <mu-col width="25" tablet="20" desktop="25">
            排行榜
          </mu-col>
          <mu-col width="25" tablet="20" desktop="25">
            考试记录
          </mu-col>
        </mu-row>
        <mu-row>
          <mu-col width="50" tablet="30" desktop="25">
            我的错题
          </mu-col>
          <mu-col width="50" tablet="30" desktop="25">col-50
            我的收藏
          </mu-col>
          <mu-col width="50" tablet="20" desktop="25">
            交通错题
          </mu-col>
          <mu-col width="50" tablet="20" desktop="25">
            法规技巧
          </mu-col>
        </mu-row>
      </div>
     </div>
  </div>
</template>

<script>
import headercomponent from './../components/header.vue'
export default {
 components: { headercomponent },
  beforeCreate: function () {
      console.log(' home :beforeCreate is triggered.')
   

  },
  created: function () {
      //  this.$http.get('//jptest4.xuechebu.com/bbsapi/classify/getclassifylist', []).then(function(response){
      //     var o = 1;
      // }, function(response){
      // });
      // this.$http.get('//jptest4.xuechebu.com/bbsapi/classify/getclassifylist', []).then((response) => {
      // }, (response) => {
      // });

      // this.$http.put('//jptest4.xuechebu.com/bbsapi/classify/getclassifylist', []).then((response) => {
      //   }, (response) => {
      // });
      // this.$http.delete('//jptest4.xuechebu.com/bbsapi/classify/getclassifylist', []).then((response) => {
      //   }, (response) => {
      // });
      // this.$http.post('//jptest4.xuechebu.com/bbsapi/classify/getclassifylist', []).then((response) => {
      //   }, (response) => {
      // });

      this.$http.jsonp('//jptest4.xuechebu.com/bbsapi/classify/getclassifylist?&ISJSONP=true').then(
      (response) => {
        var o =1;
        // debugger;
        },
      (response) => {
        
        });

      console.log(' home :created is triggered.')
  },
  beforeMount: function () {
      console.log(' home :beforeMount is triggered.')
  },
  mounted: function () {
      console.log(' home :mounted is triggered.')

  },
  beforeUpdate: function () {
      console.log(' home :beforeUpdate is triggered.')
  },
  updated: function () {
      console.log(' home :updated is triggered.')
  },
  beforeDestroy: function () {
      console.log(' home :beforeDestroy is triggered.')
  },
  destroyed: function () {
      console.log(' home :destroyed is triggered.')
  }
}
</script>

<style>
.demo-grid div[class*="col-"] {
  background: #fff;
  text-align: center;
  color: #000;
  border: 1px solid #ddd;
  /* padding: 8px; */
  margin-bottom: 8px;
}
.demo-grid .col{
  height: 3.8rem;
}
.adimg{
  margin: 0;
}
.adimg img{
  width: 100%;
  height: 100%;
}
a{
	color: black;
}
</style>
