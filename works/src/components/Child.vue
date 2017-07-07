<template>
	<div>
		<ul>
			<li :class="currentPage==1?'disabled':''"><a href="#" @click='turnPage(1)'>首页</a></li>
			<li :class="currentPage==1?'disabled':''"><a href="#" @click='turnPage(currentPage-1)'>上一页</a></li>
			<li v-if="currentPage-3>0" @click='turnPage(currentPage-3)'><a href="#" v-text="currentPage-3"></a></li>
			<li v-if="currentPage-2>0" @click='turnPage(currentPage-2)'><a href="#" v-text="currentPage-2"></a></li>
			<li v-if="currentPage-1>0" @click='turnPage(currentPage-1)'><a href="#" v-text="currentPage-1"></a></li>
			<li class='active'><a href="#" v-text="currentPage"></a></li>
			<li v-if="currentPage+1<totalPage" @click='turnPage(currentPage+1)'><a href="#" v-text="currentPage+1"></a></li>
			<li v-if="currentPage+2<totalPage" @click='turnPage(currentPage+2)'><a href="#" v-text="currentPage+2"></a></li>
			<li v-if="currentPage+3<totalPage" @click='turnPage(currentPage+3)'><a href="#" v-text="currentPage+3"></a></li>
			<li :class="currentPage==totalPage?'disabled':''" @click='turnPage(currentPage+1)'><a href="#" >下一页</a></li>
			<li :class="currentPage==totalPage?'disabled':''" @click='turnPage(totalPage)'><a href="#" >尾页</a></li>
		</ul>
		<div>
			<small>当前第<span>{{currentPage}}</span>,共有<span>{{totalPage}}</span></small>
			<input type="number" v-model='goToPge' :class='{err:bol}'/><button @click='turnPage(goToPge)'>Go</button>
		</div>
	</div>
</template>
<script>
export default{
	props:['change'],
	data:function(){
		return{
			currentPage:10,
			totalPage:100,
			goToPge:'',
			bol:false
		}
	},
	methods:{
		turnPage:function(num){
			var myNum=parseInt(num);
			if(myNum<1||myNum>100||!myNum){
				return;
				this.bol=true;
				this.goToPge='';
			}else{
				this.bol=false;
			}
			this.currentPage=myNum;
			this.change(num)
			this.goToPge='';
		}

	}
}
</script>


<style>
ul{display:inline-block;}
li{list-style-type:none;padding:5px;float:left;border:1px solid gray}
a{text-decoration:none}
.active{background:skyblue}
.disabled a{cursor: not-allowed;color: gray}
.err{border: 1px solid red}
</style>