<template>
	<div>
		<my-header>
			<p>书影音</p>
			<img src="../../assets/images/ic_group_search.png" slot="centerImg" class="h_center_img">
			<img src="../../assets/images/ic_chat_green.png" slot="rightImg" class="h_right_img">
		</my-header>
		<broadcast-cont></broadcast-cont>
	</div>
</template>

<script>
import MyHeader from '../../components/MyHeader'
import BroadcastCont from '../../components/BroadcastCont'

	export default{
		components:{
			MyHeader,
			BroadcastCont,
		}
	}
</script>