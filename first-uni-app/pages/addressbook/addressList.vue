<template>
	<!-- 通讯录页面 -->
	<view class="content">
		<view class="top" v-for="(list,index) in lists" :key="index">
			<view class="text">
				<view class="left">
					<!-- <image src="../../static/addfriends.png"></image> -->
					<image :src="list.image" ></image>
				</view>
				<view class="right">
					{{list.describe}}
				</view>
			</view>
			<view class="hr">
			</view>
		</view>
		
		
		
		<view class="middle" >
			<view class="zimu">
				A
			</view>
			
			<view class="friends" v-for="(friendA,index) in friendsA" :key="index">
				<image :src="friendA.image" ></image>
				<view class="right" v-if="friendA.remarks.length==0">
					{{friendA.nickname}}
				</view>
				<view class="right" v-else>
					{{friendA.remarks}}
				</view>
			</view>
			<view class="zimu">
				B
			</view>
			<view class="friends" v-for="(friendB,index) in friendsB" :key="index">
				<image :src="friendB.image" ></image>
				<view class="right" v-if="friendB.remarks.length==0">
					{{friendB.nickname}}
				</view>
				<view class="right" v-else>
					{{friendB.remarks}}
				</view>
			</view>
			
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				lists:[
					{
						image:'../../static/addfriends.png',
						describe:'新的朋友'
					},
					{
						image:'../../static/qunliao.png',
						describe:'群聊'
					},
					{
						image:'../../static/biaoqian.png',
						describe:'标签'
					},
					{
						image:'../../static/gongzhonghao.png',
						describe:'公众号'
					}
				],
				friendsA:[
							{
								id:'A',
								image:'../../static/me.jpg',
								nickname:'啊-柠檬',
								remarks:''
							}
						],
				friendsB:[
							{
								id:'B',
								image:'../../static/me.jpg',
								nickname:'墨',
								remarks:'爸爸'
							},
							{
								id:'B',
								image:'../../static/me.jpg',
								nickname:'wxp',
								remarks:'班主任'
							}
						]
			}
		},
		onLoad() {},
		methods: {}
	};
</script>

<style>
	.left image,.middle image{
		margin-top: 15upx;
		height: 60upx;
		width: 60upx;
	}
	
	.text,.friends{
		display: flex;
		height: 80upx;
	}
	
	.right{
		display: flex;
		margin-left: 30upx;
		align-items: center;
		/* 前提是flex布局 垂直方向居中 */
		/* justify-content: center; */
		/* 水平方向居中 */
	}
	
	.hr{
		width: 100%;
		height: 1upx;
		background-color: #eee;
		margin-left: 90upx;
	}
	
	.zimu{
		background-color: #ededed;
		height: 60upx;
	}
	
	.content{
		margin-left: 20upx;
		margin-right: 20upx;
	}
</style>
