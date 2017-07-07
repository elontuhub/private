<template>
	<div class="plate_cont">
		<h2 :style="{color:pcCol,borderColor:pcBorderCol}">{{ contTitle }}</h2>
		<slot></slot>
	</div>
</template>

<script>

export default {
	props:{
		contTitle:{
			default:'热点'
		},
		pcCol:{
			default:'#44bf56'
		},
		pcBorderCol:{
			default:'#44bf56'
		}

	}
}

</script>

<style>
	.plate_cont{padding-top: 15px;margin-bottom:10px;background-color: #fff;}
	.plate_cont h2{height: 30px;padding-left:16px;border-left: 4px solid #f38849;line-height: 30px;font-size: 18px;font-weight: normal;color: #f38849;}
</style>