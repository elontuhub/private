<template>
	<div class="tabbarWrap">
		<wrap :sel="selected">
			<item txt='首页' @change="getVal" id="home" >
				<img src="../assets/images/ic_tab_home_normal.png" slot='nomalImg' class="icon" />
				<img src="../assets/images/ic_tab_home_active.png" slot='activeImg' class="icon" />
			</item>
			<item txt='书影音' @change="getVal" id="audio" >
				<img src="../assets/images/ic_tab_subject_normal.png" slot='nomalImg' class="icon" />
				<img src="../assets/images/ic_tab_subject_active.png" slot='activeImg' class="icon" />
			</item>
			<item txt='广播' @change="getVal" id="broadcast" >
				<img src="../assets/images/ic_tab_status_normal.png" slot='nomalImg' class="icon" />
				<img src="../assets/images/ic_tab_status_active.png" slot='activeImg' class="icon" />
			</item>
			<item txt='小组' @change="getVal" id="group" >
				<img src="../assets/images/ic_tab_group_normal.png" slot='nomalImg' class="icon" />
				<img src="../assets/images/ic_tab_group_active.png" slot='activeImg' class="icon" />
			</item>
			<item txt='我的' @change="getVal" id="mine" >
				<img src="../assets/images/ic_tab_profile_normal.png" slot='nomalImg' class="icon" />
				<img src="../assets/images/ic_tab_profile_active.png" slot='activeImg' class="icon" />
			</item>
		</wrap>	
	</div>
</template>
<script>
import Wrap from './wrap'
import Item from './item'
export default{
	components:{
		Wrap,
		Item
	},
	data:function(){
		return {
			selected:'home'
		}
	},
	methods:{
		getVal:function(val){
			this.selected=val
		}
	}
}

</script>
<style>
	
</style>