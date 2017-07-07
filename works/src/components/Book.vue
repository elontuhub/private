<template>
	<div class="book">

		<broadcast-item-wrap itemWrapName="新书速递">
			<div slot="itemCont">
				<broadcast-item itemName="外婆的道歉信" itemScore="9.1">
				<img src="../assets/images/book/book_pic1.jpg" slot="itemImg">
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
				<img src="../assets/images/rating_star_xsmall_half.png" slot="star5">
			</broadcast-item>
			<broadcast-item itemName="与火同行" itemScore="9.2">
				<img src="../assets/images/book/book_pic2.jpg" slot="itemImg">
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
				<img src="../assets/images/rating_star_xsmall_half.png" slot="star5">
			</broadcast-item>
			<broadcast-item itemName="封闭式车库" itemScore="8.6">
				<img src="../assets/images/book/book_pic3.jpg" slot="itemImg">
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
				<img src="../assets/images/rating_star_xsmall_half.png" slot="star5">
			</broadcast-item>
			</div>
		</broadcast-item-wrap>
		
		<broadcast-item-wrap itemWrapName="最受关注的虚构类图书">
			<div slot="itemCont">
				<broadcast-item itemName="百鬼夜行 阳" itemScore="8.1">
				<img src="../assets/images/book/book_pic4.jpg" slot="itemImg">
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
				<img src="../assets/images/rating_star_xsmall_half.png" slot="star5">
			</broadcast-item>
			<broadcast-item itemName="恋情的终结" itemScore="8.3">
				<img src="../assets/images/book/book_pic5.jpg" slot="itemImg">
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
				<img src="../assets/images/rating_star_xsmall_half.png" slot="star5">
			</broadcast-item>
			<broadcast-item itemName="新名字的故事" itemScore="9.2">
				<img src="../assets/images/book/book_pic6.jpg" slot="itemImg">
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
				<img src="../assets/images/rating_star_xsmall_half.png" slot="star5">
			</broadcast-item>
			</div>
		</broadcast-item-wrap>

		<broadcast-item-wrap itemWrapName="最受关注的非虚构类图书">
			<div slot="itemCont">
				<broadcast-item itemName="被仰望与被遗忘的" itemScore="8.5">
				<img src="../assets/images/book/book_pic7.jpg" slot="itemImg">
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
				<img src="../assets/images/rating_star_xsmall_half.png" slot="star5">
			</broadcast-item>
			<broadcast-item itemName="故事思维" itemScore="8.0">
				<img src="../assets/images/book/book_pic8.jpg" slot="itemImg">
				<img src="../assets/images/rating_star_small_on.png" slot="star1">
				<img src="../assets/images/rating_star_small_on.png" slot="star2">
				<img src="../assets/images/rating_star_small_on.png" slot="star3">
				<img src="../assets/images/rating_star_small_on.png" slot="star4">
				<img src="../assets/images/rating_star_small_off.png" slot="star5">
			</broadcast-item>
			<broadcast-item itemName="杂草记" itemScore="9.0">
				<img src="../assets/images/book/book_pic9.jpg" slot="itemImg">
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
	.book{padding-bottom: 65px;}
</style>
