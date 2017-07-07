<template>
	<div class="film">

		<broadcast-item-wrap itemWrapName="影院热映">
			<div slot="itemCont" class="clear">
				<broadcast-item itemName="神奇女侠" itemScore="7.5">
				<img src="../assets/images/film/film_pic1.jpg" slot="itemImg">
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
				<img src="../assets/images/rating_star_small_off.png" slot="star5">
				</broadcast-item>
				<broadcast-item itemName="加勒比海岛5" itemScore="7.4">
					<img src="../assets/images/film/film_pic2.jpg" slot="itemImg">
					<img src="../assets/images/rating_star_small_on.png" slot="star1">
					<img src="../assets/images/rating_star_small_on.png" slot="star2">
					<img src="../assets/images/rating_star_small_on.png" slot="star3">
					<img src="../assets/images/rating_star_small_on.png" slot="star4">
					<img src="../assets/images/rating_star_small_off.png" slot="star5">
				</broadcast-item>
				<broadcast-item itemName="摔跤吧！爸爸" itemScore="9.2">
					<img src="../assets/images/film/film_pic3.jpg" slot="itemImg">
					<img src="../assets/images/rating_star_small_on.png" slot="star1">
					<img src="../assets/images/rating_star_small_on.png" slot="star2">
					<img src="../assets/images/rating_star_small_on.png" slot="star3">
					<img src="../assets/images/rating_star_small_on.png" slot="star4">
					<img src="../assets/images/rating_star_xsmall_half.png" slot="star5">
				</broadcast-item>
			</div>
		</broadcast-item-wrap>

		<broadcast-item-wrap itemWrapName="影院即将上映">
			<div slot="itemCont" class="clear">
				<broadcast-item itemName="新木乃伊" itemNoScore="true" itemWantNum="12604">
				<img src="../assets/images/film/film_pic4.jpg" slot="itemImg">
			</broadcast-item>
				<broadcast-item itemName="我心雀跃" itemNoScore="true" itemWantNum="2196">
					<img src="../assets/images/film/film_pic5.jpg" slot="itemImg">
				</broadcast-item>
				<broadcast-item itemName="异性：契约" itemNoScore="true" itemWantNum="25939">
					<img src="../assets/images/film/film_pic6.jpg" slot="itemImg">
				</broadcast-item>
			</div>
		</broadcast-item-wrap>

		<broadcast-item-wrap itemWrapName="你可能感兴趣">
			<div slot="itemCont" class="clear">
				<broadcast-item itemName="他们在岛屿写.." itemScore="8.5">
				<img src="../assets/images/film/film_pic7.jpg" slot="itemImg">
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
				<img src="../assets/images/rating_star_xsmall_half.png" slot="star5">
			</broadcast-item>
			<broadcast-item itemName="29+1" itemScore="7.5">
				<img src="../assets/images/film/film_pic8.jpg" slot="itemImg">
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
				<img src="../assets/images/rating_star_small_off.png" slot="star5">
			</broadcast-item>
			<broadcast-item itemName="战争天堂" itemScore="7.5">
				<img src="../assets/images/film/film_pic9.jpg" slot="itemImg">
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
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
	.film{padding-bottom: 65px;}
</style>
