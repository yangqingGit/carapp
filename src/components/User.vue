<template>
  <div id="user">
     <div class="page">
         <mu-paper class="demo-menu">
        <mu-row gutter>
            <mu-col width="100" tablet="100" desktop="100" class="asd">
                 <mu-card-header title="半空清风送十里桃花红" subTitle="那些不能相信的事情 请让我来证明" titleClass="nametitle">
                    <mu-avatar src="http://www.muse-ui.org/images/uicon.jpg" slot="avatar" size="60" />
                </mu-card-header>
            </mu-col>
        </mu-row>
        </mu-paper>
        <br >
        <mu-paper class="demo-menu">
            <mu-menu-item title="我的钱包" rightIcon="keyboard_arrow_right"/>
            <mu-divider />
            <mu-menu-item title="我的收藏" rightIcon="keyboard_arrow_right"/>
            <mu-divider />
            </mu-menu>
        </mu-paper>
        <br>
        <mu-paper class="demo-menu">
            <mu-divider />
            <mu-menu-item title="附近的人" rightIcon="keyboard_arrow_right"/>
            <mu-divider />
             <mu-menu-item title="漂流瓶" rightIcon="keyboard_arrow_right"/>
            <mu-divider />
            <mu-menu-item title="摇一摇" rightIcon="keyboard_arrow_right"/>
            <mu-divider />
            
            </mu-menu>
        </mu-paper>
        <br>
        <mu-paper class="demo-menu">
            <mu-divider />
            <mu-menu-item title="设置" rightIcon="keyboard_arrow_right"/>
            <mu-divider />
            </mu-menu>
        </mu-paper>
        <br>
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
  padding: 8px;
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
.nametitle{
    margin-top: .8rem;
    font-weight: bold;
}
</style>
