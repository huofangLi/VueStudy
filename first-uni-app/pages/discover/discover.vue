<template>
	<view class="content">
		<view class="item" v-for="(item,index) in items" :key="index">
			<view class="option">
				<view class="option_left">
					<view class="option_left_picture">
						<image :src="item.url"></image>
					</view>
					<view class="option_left_character">
						<text  class="tex">{{item.name}}</text>
					</view>
				</view>
				<view class="option_right">
					<image class="picture" :src="item.pic"></image>
				</view>
			</view>
			<!-- <view class="left">
				<image :src="item.url"></image>
				<text  class="tex">{{item.name}}</text>
				<image class="picture" :src="item.pic"></image>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return { 
				items:[
					{
					name:'朋友圈',
					url:'../../static/cricle_of_friends.png',
					pic:'../../static/jiantou.png'
				},
				{
					name:'扫一扫',
					url:'../../static/scan.png',
					pic:'../../static/jiantou.png'
				},
				{
					name:'摇一摇',
					url:'../../static/shark_it_off.png',
					pic:'../../static/jiantou.png'
				},
				{
					name:'看一看',
					url:'../../static/take_a_look.png',
					pic:'../../static/jiantou.png'
				},
				{
					name:'搜一搜',
					url:'../../static/take_a_look.png',
					pic:'../../static/jiantou.png'
				},
				{
					name:'附近的人',
					url:'../../static/nearby.png',
					pic:'../../static/jiantou.png'
				},
				{
					name:'购      物',
					url:'../../static/shopping.png',
					pic:'../../static/jiantou.png'
				},
				{
					name:'游       戏',
					url:'../../static/game.png',
					pic:'../../static/jiantou.png'
				},
				{
					name:'小程序',
					url:'../../static/small_routine.png',
					pic:'../../static/jiantou.png'
				}
			]}
		}
		}
</script>

<style>
	image{
		
		width: 45upx;
		height: 45upx;
	}
	/* .tex{
		margin-left: 20upx;
	} */
	
	.content{
		height: 1400upx;
	    background: #EEEEEE;
	}
	.option{
	    display: flex;
	    justify-content:space-between;
	    height: 120upx;
	    align-items: center;
	    background: #FFFFFF;
	    margin-top: 1upx;
	    margin-bottom: 1upx;
	}
	.option_left_character{
		margin-left:20upx ;
	}
	.option_left{
		display: flex;
		padding-left: 20upx;
	}
	.option_right{
		margin-right: 20upx;
	}
	
</style>
