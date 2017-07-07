<template>
	<div class="home">
		<my-header bcol="#42bd56" txtcol="#fff">
			<input type="text" placeholder="影视 图书 唱片 小组等" class="header_search">
			<img src="../../assets/images/ic_search_gray.png" slot="leftImg"  class="h_left_img">
			<img src="../../assets/images/ic_scan_gray.png" slot="centerImg" class="h_center_img">
			<img src="../../assets/images/ic_chat_white.png" slot="rightImg" class="h_right_img">
		</my-header>
		<home-focus-pic otherName="swiper-cont" >
			
			<div class="swiper-slide"><img src="../../assets/images/banner/01.jpg"></div>
			<div class="swiper-slide"><img src="../../assets/images/banner/02.jpg"></div>
			<div class="swiper-slide"><img src="../../assets/images/banner/03.jpg"></div>

		</home-focus-pic>
		<home-content></home-content>
	</div>
</template>

<script>
import MyHeader from '../../components/MyHeader'
import HomeFocusPic from '../../components/HomeFocusPic'
import HomeContent from '../../components/HomeContent'

	export default{
		components:{
			MyHeader,
			HomeFocusPic,
			HomeContent,
		}
	}
</script>


<style>
	.home{padding-top: 61px;}
	.header_search{border-radius: 5px;width: 90%;height: 30px;text-indent: 3em;}
</style>

