<template>
  <div id="user">
     <div class="page">
          <mu-paper class="demo-menu">
                <mu-card-header title="半空清风送十里桃花红" subTitle="那些不能相信的事情 请让我来证明" titleClass="nametitle">
                    <mu-avatar src="http://www.muse-ui.org/images/uicon.jpg" slot="avatar" class="userphoto" />
                </mu-card-header>
        </mu-paper>
        <br >

        <mu-paper class="demo-menu">
            <mu-list-item title="我的钱包">
            <mu-icon slot="right" value="keyboard_arrow_right"/>
            </mu-list-item>
            <mu-divider />
            <mu-list-item title="我的收藏">
            <mu-icon slot="right" value="keyboard_arrow_right"/>
            </mu-list-item>
        </mu-paper>
        <br>
         <mu-paper class="demo-menu">
            <mu-list-item title="附近的人">
            <mu-icon slot="right" value="keyboard_arrow_right"/>
            </mu-list-item>
            <mu-divider />
            <mu-list-item title="漂流瓶">
            <mu-icon slot="right" value="keyboard_arrow_right"/>
            </mu-list-item>
             <mu-list-item title="摇一摇">
            <mu-icon slot="right" value="keyboard_arrow_right"/>
            </mu-list-item>
        </mu-paper>
         <br>
          <mu-paper class="demo-menu">
            <mu-list-item title="设置">
            <mu-icon slot="right" value="keyboard_arrow_right"/>
            </mu-list-item>
        </mu-paper>
     </div>
  </div>
</template>

<script>
import headercomponent from './../components/header.vue'
export default {
    methods: {
        abc () {
            alert(123)
        }
  },
 components: { headercomponent }
}
</script>

<style>
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
.userphoto{
    width: 4rem;
    height: 4rem;
}
.user-item{
    height: 100%;
}
</style>
