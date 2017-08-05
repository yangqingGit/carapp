<template>
  <div class="exam">
		<div class="page">

		<div class="examcontent">
		 <mu-row gutter>
			 
			<mu-col width="30" tablet="50" desktop="33" class="flex-demo">交卷</mu-col>
			<mu-col width="40" tablet="50" desktop="33" class="flex-demo">正确：10 错误：10</mu-col>
			<mu-col width="30" tablet="50" desktop="33" class="flex-demo" > <div @click="open('bottom')">1/100</div> </mu-col>
		</mu-row>
			<mu-col width="100"style="padding:1rem 0">
				驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？
			</mu-col>
			<mu-col width="100">
				<img src="http://file.open.jiakaobaodian.com/tiku/res/802800.jpg" width="100%">
			</mu-col>
		</mu-row>
		<mu-row gutter>
			<mu-list>
				<mu-list-item title="违章行为">
					<mu-avatar icon="A" slot="leftAvatar"/>
				</mu-list-item>
				<mu-list-item title="违规行为">
					<mu-avatar icon="B" slot="leftAvatar"/>
				</mu-list-item>
				<mu-list-item title="违法行为">
					<mu-avatar icon="C" slot="leftAvatar"/>
				</mu-list-item>
				<mu-list-item title="犯罪行为">
					<mu-avatar icon="D" slot="leftAvatar"/>
				</mu-list-item>
			</mu-list>
				<mu-col width="100" tablet="30" desktop="25" style="font-size:.9rem;padding-top:1rem;" v-if = "!exms">
							试题详解 :<br>
						《道路交通安全法》第十一条： 机动车号牌应当按照规定悬挂并保持清晰、完整，不得故意遮挡、污损。 违反《交通安全法》，所以是违法行为。 《道路交通安全法》第十一条： 机动车号牌应当按照规定悬挂并保持清晰、完整，不得故意遮挡、污损。 违反《交通安全法》，所以是违法行为。 《道路交通安全法》第十一条： 机动车号牌应当按照规定悬挂并保持清晰、完整，不得故意遮挡、污损。 违反《交通安全法》，所以是违法行为。 违反《交通安全法》，所以是违法行为。 《道路交通安全法》第十一条： 机动车号牌应当按照规定悬挂并保持清晰、完整，不得故意遮挡、污损。 违反《交通安全法》，所以是违法行为。 《道路交通安全法》第十一条： 机动车号牌应当按照规定悬挂并保持清晰、完整，不得故意遮挡、污损。 违反《交通安全法》，所以是违法行为。 《道路交通安全法》第十一条： 机动车号牌应当按照规定悬挂并保持清晰、完整，不得故意遮挡、污损。 违反《交通安全法》，所以是违法行为。 违反《交通安全法》，所以是违法行为。
					</mu-col>
				</mu-row>
			</div>
		</div>
		<mu-popup position="bottom" popupClass="popup-bottom" :open="bottomPopup" @close="close('bottom')" style ="width:100%">
		<mu-appbar title="">
			<mu-flat-button slot="right" label="关闭" color="white" @click="close('bottom')"/>
		</mu-appbar>
		<mu-content-block>
			<div class="thcon">
					<ul>
						<li v-for="tile, index in list" :key="index">
							<div class="xhsl"><span>{{index+1}}</span></div>
						</li>
					</ul>
			</div>
		</mu-content-block>
	</mu-popup>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'exam',
  data () {
    return {
			bottomPopup: false,
			list: [],//[{id:1,state:'1'},{id:2,state:'1'},{id:2,state:'1'},{id:3,state:'1'}],
		}
	},
	 methods: {
    open (position) {
      this[position + 'Popup'] = true
    },
    close (position) {
      this[position + 'Popup'] = false
		},
		adddata:function(){
			for(var i =0;i<100;i++){
				this.list[i] = {id:i,state:'1'}
			}
		}
  },
	computed: mapState({
    exms: state => state.exms
	}),
	created: function () {
    	for(var i =0;i<100;i++){
				this.list[i] = {id:i,state:'1'}
			}
			console.log('创建数据')
	}
}
</script>

<style scoped>
.examcontent{
	padding: 10px;
	font-size: 1.1rem;
}

.mu-popup {
  width: 100%;
}

.item-user{
	border-radius: 50%;
  background-color: #e6e6e6;
	display: flex;
	align-items: center;
	position: absolute;
	width: 40px;
	height: 40px;
	font-size: 20px;
	line-height: 40px;
	text-align: center;
}

.item-user i{
	width: 40px;
}

.flex-demo {
  height: 32px;
  background-color: #e0e0e0;
  text-align: center;
  line-height: 32px;
	font-size: .7rem;
}
.thcon{
	height: 300px;
	overflow:auto;
	
}
.thcon ul{
	list-style-type: none;
	padding: 0;
    margin: 0;
}
.thcon ul li{
	float: left;
	list-style-type: none;
	margin: 5px;
}
.xhsl{
 width:40px; height:40px; background-color:#bdbdbd; border-radius:25px;
}
.xhsl span{
 height:40px; line-height:40px; display:block; color:#FFF; text-align:center;
 font-size: 1.2rem;
 
}
</style>
