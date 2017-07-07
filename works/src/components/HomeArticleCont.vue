<template>
	<div class="article_cont clear">
		<a :href="itemUrl" class="item_url" target="_self">
			<div class="article_cont_left">
				
					<slot name="articleTitle"></slot>
					<slot name="articleCont"></slot>
					<div class="line"></div>
					<slot name="articleAuthor"></slot>
							
			</div>
			<div class="article_cont_right">
				<slot name="articleImg"></slot>
			</div>
		</a>
	</div>
</template>

<script>
	export default{
		props:['itemUrl']
	}
</script>

<style>
	.article_cont{padding: 15px;border-bottom: 1px solid #f2f2f2;font-family: sans-serif;}
	.article_cont:last-child{border: none;}
	.article_cont h3{line-height: 28px;font-size: 17px;padding-bottom: 5px;color: #333;}
	.article_cont p{line-height:18px;font-size: 12px;color: #8c8c8c;}
	.article_cont_left{width: 65%;float: left;}
	.article_cont_left div{font-size: 12px;color: #b9b9b9;}
	.line{width: 30px;background-color: #ececec;height: 1px;margin: 15px 0;}
	.article_cont_right{float: right;}
	.article_cont_right img{width: 85px;}
	.item_url{display: block;}
</style>