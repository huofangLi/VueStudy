<template>
	<view class="content">
		<view class="item" v-for="(message, index) in messages" :key="index">
			<view class="item-left">
				<image :src="message.avatar"></image>
			</view>
			<view class="item-center">
				<text class="name">{{message.name}}</text>
				<text class="content">{{message.content}}</text>
			</view>
			<view class="item-right">
				<text class="time">{{message.time}}</text>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				messages:[
					{
						name:'软件1721大二下',
						avatar:'../../static/1.jpg',
						content:'许老师：[图片]',
						time:'10:31'
					},
					{
						name:'刘玉林',
						avatar:'../../static/2.jpg',
						content:'我问一下啊',
						time:'09:51'
					},
					{
						name:'微信团队',
						avatar:'../../static/5.jpg',
						content:'登录操作通知',
						time:'08:54'
					},
					{
						name:'软件1721',
						avatar:'../../static/3.jpg',
						content:'王萍老师：@孙嘉炜 给我回个电话',
						time:'06:50'
					},
					{
						name:'妈妈',
						avatar:'../../static/4.jpg',
						content:'[视频通话]',
						time:'昨 天'
					},
					{
						name:'一家人',
						avatar:'../../static/6.jpg',
						content:'小慧姐姐:[视频]',
						time:'昨 天'
					},
					{
						name:'刘宇',
						avatar:'../../static/7.jpg',
						content:'你已添加了yu，现在可以开始聊天...',
						time:'昨 天'
					},
					{
						name:'王萍老师',
						avatar:'../../static/1.jpg',
						content:'好的',
						time:'周 一'
					},
					{
						name:'张丽',
						avatar:'../../static/2.jpg',
						content:'[转账]朋友已确认收钱',
						time:'3月17日'
					},
					{
						name:'老娘舅',
						avatar:'../../static/3.jpg',
						content:'老娘舅要求使用你的地理位置',
						time:'3月17日'
					},
					{
						name:'纪念日百货',
						avatar:'../../static/4.jpg',
						content:'终于等到你，我的小可爱...',
						time:'3月15日'
					},
					{
						name:'微信支付',
						avatar:'../../static/5.jpg',
						content:'微信支付凭证',
						time:'3月15日'
					}
					
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	.item{
		display: flex;
		height: 120upx;
		padding-left: 20upx;
		padding-right: 20upx;
	}
	image{
		width: 100upx;
		height: 100upx;
	}
	.item-left{
		flex: 1 1 17%;
	}
	.item-center{
		flex:1 1 68%;
		display: flex;
		flex-direction: column;
		text-align: left;
		font-size: 30upx;
		padding-top: 10upx;
		border-bottom: 1upx solid #eee;
	}
	.item-right{
		flex: 1 1 15%;
		font-size: 30upx;
		padding-top: 10upx;
		border-bottom: 1upx solid #eee;
	}
	.content{
		text-align: left;
	}
</style>
