<template>
	<view class="content">
		<view class="top">
			
			<view class="option">
				<view class="name">
					<text>头像</text>
				</view>
				 <view class="arrows_a">
					<view class="head_portrait">
						<image :src="head_portrait" class="head_portrait_a"></image>
					</view>
					 <view class="arrows_b">
					 	<image src="../../static/jiantou.png" ></image>
					 </view>
					
			    </view>
			</view>
			<view class="option">
				<view class="name">
					<text>昵称</text>
				</view>
				 <view class="arrows">
					<image src="../../static/jiantou.png" ></image>
			    </view>
			</view>
			<view class="option">
				<view class="name">
					<text>微信号</text>
				</view>
				 <view class="arrows">
					{{Wechat_ID}}
			    </view>
			</view>
			<view class="option">
				<view class="name">
					<text>二维码名片</text>
				</view>
				 <view class="arrows">
					<image src="../../static/jiantou.png" ></image>
			    </view>
			</view>
			<view class="option">
				<view class="name">
					<text>更多</text>
				</view>
				 <view class="arrows">
					<image src="../../static/jiantou.png" ></image>
			    </view>
			</view>
			
		</view>
		
		<view class="end">
			<view class="option">
				<view class="name">
					<text>我的地址</text>
				</view>
				 <view class="arrows">
					<image src="../../static/jiantou.png" ></image>
			    </view>
			</view>
			<view class="option">
				<view class="name">
					<text>我的发票抬头</text>
				</view>
				 <view class="arrows">
					<image src="../../static/jiantou.png" ></image>
			    </view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		
		data(){
			return{
				head_portrait: '../../static/head_portrait.jpg',
				Wechat_ID: '1234567'
			};
		},
	onLoad() {},
	methods: {}
};

</script>

<style>
.content{
	height: 1400upx;
	background: #EEEEEE;
}	
image{
	height: 45upx;
	width: 45upx;
}
.option{
	display: flex;
	justify-content:space-between;
	height: 100upx;
	align-items: center;
	background: #FFFFFF;
	margin-top: 1upx;
	margin-bottom: 1upx;
}

.name{
	margin-left: 20upx;
}
.arrows{
	margin-right: 20upx;
}
.arrows_a{
	margin-right: 20upx;
	display: flex;
}

.head_portrait{
	width: 45upx;
	height: 45upx;
}
.head_portrait_a{
	width: 100%;
	height: 100%;
}
.end{
	margin-top: 20upx;
}

</style>
