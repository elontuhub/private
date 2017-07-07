<template>
	<div class="broadcast_item">
		<div class="item_img">
			<slot name="itemImg"></slot>
		</div>
		<div>
			<p class="item_name">{{ itemName }}</p>
			<slot name="item_art"></slot>
			<div class="item_evaluation" v-if="itemScore>0">
				<div class="item_star">
					<slot name="star1"></slot>
					<slot name="star2"></slot>
					<slot name="star3"></slot>
					<slot name="star4"></slot>
					<slot name="star5"></slot>
				</div>
				<div class="item_score">
					<span>{{ itemScore }}</span>
				</div>
			</div>
			<div v-else-if="!itemNoScore" class="has_no_score"><span>暂无评分</span></div>
			<div class="has_want_num" v-else> <span>{{ itemWantNum }}人想看</span></div>
		</div>
		
		
	</div>
</template>

<script>
	export default{
		props:['itemName','itemScore','itemWantNum','itemNoScore']
	}
</script>
<style>
	.broadcast_item{width:90px;padding:0 13px;float: left;}
	.broadcast_item .item_name{font-size: 14px;padding: 4px 0;color: #333;overflow: hidden;height: 19px;line-height: 19px;}
	.item_img{width: 90px;height: 125px;}
	.broadcast_item img{width: 100%;height: 100%;float: left;}
	.item_evaluation{height: 16px;}
	.item_evaluation>div{height: 16px;float: left;}
	.item_star img{float: left;width: 12px;}
	.item_score{font-size: 12px;padding-left: 10px;float: left;line-height: 16px;color:#e09015;}
	.has_no_score{color:#9c9c9c;font-size: 12px;}
	.has_want_num{font-size: 12px;color: #888;}
	.broadcast_item .item_art{font-size: 12px;padding:0 0 5px 0;color: #a6a6a6;height: }
</style>