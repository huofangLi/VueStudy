<template>
	<view class="content">
		<view class="top">
			<view class="camera">
				<image src="../../static/camera.png" ></image>
			</view>

			<view class="account">
				<view class="head_portrait">
					<image :src="head_portrait" class="head_portrait_a"></image>
				</view>
				<view class="account_right">
					<view class="name">
					    {{name}}
					</view>
					
					<navigator url="personal_information" hover-class="navigator-hover">
						<view class="account_right_ID">
						<view class="Wechat_ID">
							<navigator url="personal_details" hover-class="navigator-hover">
								<text class="ID">微信号：{{ Wechat_ID }}</text>
							</navigator>
						</view>
						<view class="two_dimension_code">
							<view >
								<image src="../../static/two_dimension_code.png" ></image>
							</view>
							<view class="arrows_a">
								<image src="../../static/jiantou.png" ></image>
							</view>
						</view>
					</view>
					</navigator>
				</view>
			</view>
		</view>
		
		
		
		<navigator url="pay" hover-class="navigator-hover">
			<view class="option_f">
				<view class="option_prcture">
					<image src="../../static/pay.png" >支付</image>
				</view>
				<view class="character_a">
					<view >
						<text class="words">支付</text>
					</view>
					<view class="arrows">
						<image src="../../static/jiantou.png" ></image>
					</view>
				</view>
			</view>
		</navigator>
		

		<view class="function">
			
			<navigator url="collect" hover-class="navigator-hover">
				<view class="option">
					<view class="option_prcture">
						<image src="../../static/collect.png" >收藏</image>
					</view>
					<view class="character">
						<view >
							<text class="words">收藏</text>
						</view>
						<view class="arrows">
							<image src="../../static/jiantou.png" ></image>
						</view>
					</view>
				</view>
			</navigator>
			
			<navigator url="photo_album" hover-class="navigator-hover">
				<view class="option">
					<view class="option_prcture">
						<image src="../../static/photo_album.png" >相册</image>
					</view>
					<view class="character">
						<view >
							<text class="words">相册</text>
						</view>
						<view class="arrows">
							<image src="../../static/jiantou.png" ></image>
						</view>
					</view>
				</view>
			</navigator>
			

			<navigator url="card_bag" hover-class="navigator-hover">
				<view class="option">
					<view class="option_prcture">
						<image src="../../static/card_bag.png" >卡包</image>
					</view>
					<view class="character">
						<view>
							<text class="words">卡包</text>
						</view>
						<view class="arrows">
							<image src="../../static/jiantou.png" ></image>
						</view>
					</view>
				</view>
			</navigator>

			<navigator url="expression" hover-class="navigator-hover">
				<view class="option">
					<view class="option_prcture">
						<image src="../../static/expression.png" >表情</image>
					</view>
					<view class="character_a">
						<view >
							<text class="words">表情</text>
						</view>
					    <view class="arrows">
					    	<image src="../../static/jiantou.png" ></image>
					    </view>
					</view>
				</view>
			</navigator>

			
		</view>
		
		<navigator url="set" hover-class="navigator-hover">
			<view class="option_end">
				<view class="option_prcture">
					<image src="../../static/set.png" >设置</image>
				</view>
				<view class="character_a">
					<view>
						<text class="words">设置</text>
					</view>
					<view class="arrows">
						<image src="../../static/jiantou.png" ></image>
					</view>
				</view>
			</view>
		</navigator>

		
		
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			head_portrait: '../../static/head_portrait.jpg',
			name: '暖栀',
			Wechat_ID: '1234567',
			option:[
				{
					option_prcture:'../../static/pay.png',
					option_character:'支付'
				},
				{
					option_prcture:'../../static/collect.png',
					option_character:'收藏'
				},
				{
					option_prcture:'../../static/photo_album.png',
					option_character:'相册'
				},
				{
					option_prcture:'../../static/card_bag.png',
					option_character:'卡包'
				},
				{
					option_prcture:'../../static/expression.png',
					option_character:'表情'
				},
				{
					option_prcture:'../../static/set.png',
					option_character:'设置'
				}
			]
			
		};
		
	},
	onLoad() {},
	methods: {}
};
</script>

<style>
.content {
	height: 1400upx;
	background: #EEEEEE;
}

.title {
	font-size: 36upx;
	color: #8f8f94;
}

.top{
	height: 300upx;
	width: 100%;
	margin-bottom: 20upx;
	background: #FFFFFF;
}

image{
	height: 45upx;
	width: 45upx;
}

.camera{
	float: right;
	padding-right: 20upx;
	margin-top: 20upx;
}

.account{
	padding-top:70upx;
	padding-left: 20upx;
	display: flex;
}

.head_portrait{
	width: 100upx;
	height: 100upx;
	padding-right: 30upx;
}
.head_portrait_a{
	width: 100%;
	height: 100%;
}

.account_right_ID{
	width: 500upx;
	display: flex;
	justify-content:space-between;
	
	
}
.two_dimension_code{
	display: flex;
}

.option{
	width:100%;
	height: 125upx;
	/* margin-left: 20upx; */
	display: flex;
	background: #FFFFFF;
}
.option_f{
	width:100%;
	height: 125upx;
	/* margin-left: 20upx; */
	display: flex;
	
	margin-bottom: 20upx;
	background: #FFFFFF;
}
.option_end{
	width:100%;
	height: 125upx;
	/* margin-left: 20upx; */
	display: flex;
	margin-top: 20upx;

	background: #FFFFFF;
}


.option_prcture{
	display: flex;
	justify-content:center;
	align-items: center;
	margin-right: 25upx;
	margin-left: 20upx;
}
.character{
	width: 90%;
	display: flex;
	/* justify-content:center; */
	align-items: center;
	justify-content:space-between;
	border-bottom: 3upx solid #8F8F94;
}
.character_a{
	width: 90%;
	display: flex;
	/* justify-content:center; */
	align-items: center;
	border-bottom: none;
	justify-content:space-between;
}
.arrows{
	align-items: center;
	margin-right: 20upx;
}
.arrows_a{
	align-items: center;
	
}


</style>
