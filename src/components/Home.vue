<template>
  <div id="home">
     
     <div class="page">
        <mu-row style="padding:0">
          <mu-col width="100" tablet="50" desktop="33" class="adimg">
              <img src="./../assets/advertise.jpg">
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
 components: { headercomponent }
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
