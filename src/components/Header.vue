<template>
<div>
  <div class="header">
  <mu-appbar title="驾考题库" titleClass="commcolor">
    <mu-icon-button icon="menu" slot="left" @click="toggle(true)" titleClass="commcolor"/>
    <mu-icon-button icon="" slot="right" titleClass="commcolor"/>
  </mu-appbar>
  </div>
  <div>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
        <mobile-tear-sheet name="abc">
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
        </mobile-tear-sheet>
      </mu-drawer>
  </div>
</div>
</template>

<script>
export default {
  name: 'header',
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
.mu-appbar-title{
  text-align: center;
}
.mu-appbar{
    background-color: #7595ff;
}

</style>
