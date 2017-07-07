<template>
	<div class="tv">

		<broadcast-item-wrap itemWrapName="今日更新">
			<div slot="itemCont">
				<broadcast-item itemName="白鹿原1" itemScore="9.0">
				<img src="../assets/images/tv/tv1.jpg" slot="itemImg">
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
				<img src="../assets/images/rating_star_xsmall_half.png" slot="star5">
				</broadcast-item>
			</div>
			<div slot="itemCont">
				<broadcast-item itemName="白鹿原2" itemScore="9.0">
				<img src="../assets/images/tv/tv1.jpg" slot="itemImg">
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
				<img src="../assets/images/rating_star_xsmall_half.png" slot="star5">
				</broadcast-item>
			</div>
			<div slot="itemCont">
				<broadcast-item itemName="白鹿原3" itemScore="9.0">
				<img src="../assets/images/tv/tv1.jpg" slot="itemImg">
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
				<img src="../assets/images/rating_star_xsmall_half.png" slot="star5">
				</broadcast-item>
			</div>
		</broadcast-item-wrap>
		
		<broadcast-item-wrap itemWrapName="近期值得看的日剧">
			<div slot="itemCont">
				<broadcast-item itemName="反转" itemScore="8.5">
					<img src="../assets/images/tv/tv4.jpg" slot="itemImg">
					<img src="../assets/images/rating_star_small_on.png" slot="star1">
					<img src="../assets/images/rating_star_small_on.png" slot="star2">
					<img src="../assets/images/rating_star_small_on.png" slot="star3">
					<img src="../assets/images/rating_star_small_on.png" slot="star4">
					<img src="../assets/images/rating_star_xsmall_half.png" slot="star5">
				</broadcast-item>
				<broadcast-item itemName="CRISIS 公安机动搜查队特搜组" itemScore="8.3">
					<img src="../assets/images/tv/tv5.jpg" slot="itemImg">
					<img src="../assets/images/rating_star_small_on.png" slot="star1">
					<img src="../assets/images/rating_star_small_on.png" slot="star2">
					<img src="../assets/images/rating_star_small_on.png" slot="star3">
					<img src="../assets/images/rating_star_small_on.png" slot="star4">
					<img src="../assets/images/rating_star_xsmall_half.png" slot="star5">
				</broadcast-item>
				<broadcast-item itemName="小小巨人" itemScore="8.5">
					<img src="../assets/images/tv/tv6.jpg" slot="itemImg">
					<img src="../assets/images/rating_star_small_on.png" slot="star1">
					<img src="../assets/images/rating_star_small_on.png" slot="star2">
					<img src="../assets/images/rating_star_small_on.png" slot="star3">
					<img src="../assets/images/rating_star_small_on.png" slot="star4">
					<img src="../assets/images/rating_star_xsmall_half.png" slot="star5">
				</broadcast-item>
			</div>
		</broadcast-item-wrap>

		<broadcast-item-wrap itemWrapName="近期值得看的美剧">
			<div slot="itemCont">
				<broadcast-item itemName="双峰" itemScore="8.7">
				<img src="../assets/images/tv/tv7.jpg" slot="itemImg">
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
			</broadcast-item>
			<broadcast-item itemName="风骚律师" itemScore="9.8">
				<img src="../assets/images/tv/tv8.jpg" slot="itemImg">
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
			</broadcast-item>
			<broadcast-item itemName="超感猎杀 第二季" itemScore="9.1">
				<img src="../assets/images/tv/tv9.jpg" slot="itemImg">
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
				<img src="../assets/images/rating_star_xsmall_half.png" slot="star5">
			</broadcast-item>
			</div>
		</broadcast-item-wrap>

	</div>
</template>

<script>
import BroadcastItem from './BroadcastItem'
import BroadcastItemWrap from  './BroadcastItemWrap'
	export default{
		components:{
			BroadcastItem,
			BroadcastItemWrap
		}	
	}
</script>

<style>
	.tv{padding-bottom: 65px;}
</style>
