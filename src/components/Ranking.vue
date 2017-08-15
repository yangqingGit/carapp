<template >
<div class="page">

    <mu-tabs :value="activeTab" @change="handleTabChange" class="tbs">
        <mu-tab value="tab1" title="今日"/>
        <mu-tab value="tab2" title="本周"/>
        <mu-tab value="tab3" title="本月"/>
    </mu-tabs>
    
    <div v-if="activeTab === 'tab1'" style="margin-top: 50px;height:100%;width:100%">
        <mu-list>
            <div v-for="item, index in list" v-bind:key="index">
                <mu-list-item v-bind:title="item.username">
                <mu-avatar src="http://www.muse-ui.org/images/uicon.jpg" slot="leftAvatar"/>
                <span class="fs">
                    {{item.fenshu}}
                </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                    {{item.sj}}
                </span>
                <span class="ph">
                    <span>{{index + 1 }}</span>
                </span>
                <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                    <mu-menu-item title="PK" />
                    <mu-menu-item title="关注" />
                    <mu-menu-item title="私信" />
                </mu-icon-menu>
                </mu-list-item>
                <mu-divider inset/>
            </div>
        </mu-list>
  
    </div>
    <div v-if="activeTab === 'tab2'" style="margin-top: 50px;">
    <mu-list>
        <div v-for="item, index in list" >
            <mu-list-item v-bind:title="item.username" >
            <mu-avatar src="http://www.muse-ui.org/images/uicon.jpg" slot="leftAvatar"/>
            <span class="fs">
                {{item.fenshu}}
            </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>
                {{item.sj}}
            </span>
            <span class="ph">
                <span>{{index + 1 }}</span>
            </span>
            <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                <mu-menu-item title="PK" />
                <mu-menu-item title="关注" />
                <mu-menu-item title="私信" />
            </mu-icon-menu>
            </mu-list-item>
            <mu-divider inset/>
        </div>
    </mu-list>
    </div>
    <div v-if="activeTab === 'tab3'" style="margin-top: 50px;">
    <mu-list>
        <div v-for="item, index in list" >
            <mu-list-item v-bind:title="item.username" >
            <mu-avatar src="http://www.muse-ui.org/images/uicon.jpg" slot="leftAvatar"/>
            <span class="fs">
                {{item.fenshu}}
            </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>
                {{item.sj}}
            </span>
            <span class="ph">
                <span>{{index + 1 }}</span>
            </span>
            <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                <mu-menu-item title="PK" />
                <mu-menu-item title="关注" />
                <mu-menu-item title="私信" />
            </mu-icon-menu>
            </mu-list-item>
            <mu-divider inset/>
        </div>
    </mu-list>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
         activeTab: 'tab1',
         list:[
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'3分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
             {id:1,username:'半空清风送十里桃花红',fenshu:'100',sj:'5分26秒'},
            ]
    }
  },
  methods: {
       handleTabChange (val) {
      this.activeTab = val
    },
    handleActive () {
        
    }
  }
}
</script>

<style>
.fs{
    font-size: 1.5rem;
    color: #ec3838;
}
.tbs{
    background: #657cc7;
    position: fixed;
    
    left: 0;
    right: 0;
}
.ph{
    font-size: 1.3rem;
    color: #ec3838;
    margin-top: -3rem;
    position: absolute;
    /* margin-left: 13rem; */
    right: 4rem;
    width: 2.8rem;
    height: 2.8rem;
    background-color:#e8e2e2;
    border-radius:25px;
    display: block;
}
.ph span{
    width: 2.8rem;
    height: 2.8rem;
    line-height: 2.8rem;
    text-align: center;
    display:block;
}
</style>
