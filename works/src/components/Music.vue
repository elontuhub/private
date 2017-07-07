<template>
	<div class="music">

		<broadcast-item-wrap itemWrapName="华语新碟榜">
			<div slot="itemCont">
				<broadcast-item itemName="猎户星座" itemScore="8.2" >
				<img src="../assets/images/mpic1.jpg" slot="itemImg">
				<div class=" item_name item_art" slot="item_art">朴树</div>
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
				<img src="../assets/images/rating_star_xsmall_half.png" slot="star5">
				</broadcast-item>
			</div>
			<div slot="itemCont">
				<broadcast-item itemName="放 & 披风" itemScore="7" >
				<img src="../assets/images/mpic2.jpg" slot="itemImg">
				<div class=" item_name item_art" slot="item_art">陈奕迅</div>
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_xsmall_half.png" slot="star4">
				<img src="../assets/images/rating_star_small_off.png" slot="star5">
				</broadcast-item>
			</div>
			<div slot="itemCont">
				<broadcast-item itemName="来日方长" itemScore="7.6">
				<img src="../assets/images/mpic3.jpg" slot="itemImg">
				<div class=" item_name item_art" slot="item_art">黄龄</div>
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
				<img src="../assets/images/rating_star_xsmall_half.png" slot="star5">
				</broadcast-item>
			</div>
		</broadcast-item-wrap>
		
		<broadcast-item-wrap itemWrapName="欧美新碟榜">
			<div slot="itemCont">
				<broadcast-item itemName="Cigarettes After Sex" itemScore="8.6">
					<img src="../assets/images/mpic4.jpg" slot="itemImg">
					<div class=" item_name item_art" slot="item_art">Cigarettes After Sex</div>
					<img src="../assets/images/rating_star_small_on.png" slot="star1">
					<img src="../assets/images/rating_star_small_on.png" slot="star2">
					<img src="../assets/images/rating_star_small_on.png" slot="star3">
					<img src="../assets/images/rating_star_small_on.png" slot="star4">
					<img src="../assets/images/rating_star_xsmall_half.png" slot="star5">
				</broadcast-item>
				<broadcast-item itemName="One More Light" itemScore="5.9" >
					<img src="../assets/images/mpic5.jpg" slot="itemImg">
					<div class=" item_name item_art" slot="item_art">Linkin Park</div>
					<img src="../assets/images/rating_star_small_on.png" slot="star1">
					<img src="../assets/images/rating_star_small_on.png" slot="star2">
					<img src="../assets/images/rating_star_small_on.png" slot="star3">
					<img src="../assets/images/rating_star_small_off.png" slot="star4">
					<img src="../assets/images/rating_star_small_off.png" slot="star5">
				</broadcast-item>
				<broadcast-item itemName="Guardians of the Galaxy Vol. 2: Awesome Mix Vol. 2" itemScore="8.5">
					<img src="../assets/images/mpic6.jpg" slot="itemImg">
					<div class=" item_name item_art" slot="item_art">Various Artists</div>
					<img src="../assets/images/rating_star_small_on.png" slot="star1">
					<img src="../assets/images/rating_star_small_on.png" slot="star2">
					<img src="../assets/images/rating_star_small_on.png" slot="star3">
					<img src="../assets/images/rating_star_small_on.png" slot="star4">
					<img src="../assets/images/rating_star_xsmall_half.png" slot="star5">
				</broadcast-item>
			</div>
		</broadcast-item-wrap>

		<broadcast-item-wrap itemWrapName="热门单曲">
			<div slot="itemCont">
				<broadcast-item itemName="嗯" itemScore="4.5">
				<img src="../assets/images/mpic7.jpg" slot="itemImg">
				<div class=" item_name item_art" slot="item_art">李荣浩</div>
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_off.png" slot="star4">
				<img src="../assets/images/rating_star_small_off.png" slot="star5">
			</broadcast-item>
			<broadcast-item itemName="Swish Swish (feat. Nicki Minaj)" itemScore="5.9">
				<img src="../assets/images/mpic8.jpg" slot="itemImg">
				<div class=" item_name item_art" slot="item_art">Katy Perry</div>
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_off.png" slot="star4">
				<img src="../assets/images/rating_star_small_off.png" slot="star5">
			</broadcast-item>
			<broadcast-item itemName="我喜欢上你时的内心活动" itemScore="7.2">
				<img src="../assets/images/mpic9.jpg" slot="itemImg">
				<div class=" item_name item_art" slot="item_art">陈绮贞</div>
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_xsmall_half.png" slot="star4">
				<img src="../assets/images/rating_star_small_off.png" slot="star5">
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
	.music{padding-bottom: 65px;}
</style>
