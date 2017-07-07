<template>
	<div class="home_content">
		<wrap>
			<home-plate-container contTitle="热点" pcCol="#f38849" pcBorderCol="#f38849">
				<home-article-cont>
					<h3 slot="articleTitle">预告片精选｜颜好腿长超能打！她以一己之力拯救DC电影口碑</h3>
					<p slot="articleCont">《神奇女侠》口碑炸裂！DC翻身仗，全靠女侠扛！</p>
					<img src="../assets/images/001.jpg" slot="articleImg">
					<div slot="articleAuthor">作者:<span>豆瓣</span></div>
				</home-article-cont>
				<home-article-cont>
					<h3 slot="articleTitle">视频精选 | 好想做点什么，来保护这个世界所有的温柔</h3>
					<p slot="articleCont">还有些，结束之际的敞亮话</p>
					<img src="../assets/images/002.jpg" slot="articleImg">
					<div slot="articleAuthor">作者:<span>豆瓣</span></div>
				</home-article-cont>
			</home-plate-container>
			<home-plate-container contTitle="周末">
				<home-article-cont>
					<h3 slot="articleTitle">本周影院在映｜6月2日-6月8日</h3>
					<p slot="articleCont">盖尔·加朵主演的《神奇女侠》将与广大观众见面。 查理·汉纳姆与罗伯特·帕丁森主演的《迷失Z城》亦值得关注。</p>
					<img src="../assets/images/003.jpg" slot="articleImg">
					<div slot="articleAuthor">作者:<span>豆瓣</span></div>
				</home-article-cont>
				<home-article-cont>
					<h3 slot="articleTitle">周末去哪儿·北京丨在夏日出行的列车上，一切丧气都会被迎风吹散！</h3>
					<p slot="articleCont">六月北京正式开启高温模式，24℃三级冷风模式的空调+100％的手机电量+满格的wifi+冰冰凉凉大西瓜才是幸福夏日吗？</p>
					<img src="../assets/images/004.jpg" slot="articleImg">
					<div slot="articleAuthor">作者:<span>豆瓣</span></div>
				</home-article-cont>
			</home-plate-container>
			<home-plate-container contTitle="一刻">
				<home-article-cont>
					<h3 slot="articleTitle">广播精选｜觉得这个世界好危险</h3>
					<p slot="articleCont">路过小区，一个老头在路灯底下喂野猫，边喂边讲：夏天唻，能自己找吃的唻……</p>
					<img src="../assets/images/005.jpg" slot="articleImg">
					<div slot="articleAuthor">作者:<span>豆瓣</span></div>
				</home-article-cont>


				<home-article-cont v-for="item in arr"  :itemUrl="item.target.uri">
					<h3 slot="articleTitle">{{ item.title }}</h3>
					<p slot="articleCont">{{ item.target.desc }}</p>
					<img :src="item.target.cover_url" slot="articleImg">
					<div slot="articleAuthor">作者:<span>{{ item.target.author.name }}</span></div>
					
				</home-article-cont>


			</home-plate-container>
		</wrap>
	</div>
</template>

<script>
import HomePlateContainer from './HomePlateContainer'
import HomeArticleCont from './HomeArticleCont'
import Wrap from './Wrap'

export default{
	components:{
		HomePlateContainer,
		Wrap,
		HomeArticleCont
	},
	data:function(){
		return {
			arr:[]
		}
	},
	mounted:function(){
		this.search()
	},
	methods:{
		search:function(){
			this.axios.get('/api/homeData').then(response => {
      			this.arr = response.data.data.recommend_feeds;
      			console.log(this.arr)
    	})
		}
	}
}
</script>

<style>
	.home_content{padding-bottom: 57px;background-color: #f2f2f2;}
</style>