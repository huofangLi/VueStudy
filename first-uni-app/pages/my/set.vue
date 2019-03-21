<template>
	<view class="content">
		<view class="option_f">
			<view class="name">
				<text>账号与安全</text>
			</view>
			 <view class="arrows">
				<image src="../../static/jiantou.png" ></image>
		    </view>
		</view>
		
		<view class="second">
			
			<view class="option">
				<view class="name">
					<text>新消息提醒</text>
				</view>
				 <view class="arrows">
					<image src="../../static/jiantou.png" ></image>
			    </view>
			</view>
			<view class="option">
				<view class="name">
					<text>勿扰模式</text>
				</view>
				 <view class="arrows">
					<image src="../../static/jiantou.png" ></image>
			    </view>
			</view>
			<view class="option">
				<view class="name">
					<text>聊天</text>
				</view>
				 <view class="arrows">
					<image src="../../static/jiantou.png" ></image>
			    </view>
			</view>
			<view class="option">
				<view class="name">
					<text>隐私</text>
				</view>
				 <view class="arrows">
					<image src="../../static/jiantou.png" ></image>
			    </view>
			</view>
			<view class="option">
				<view class="name">
					<text>通用</text>
				</view>
				 <view class="arrows">
					<image src="../../static/jiantou.png" ></image>
			    </view>
			</view>
		</view>
		
		
		<view class="thridly">
			<view class="option">
				<view class="name">
					<text>关于微信</text>
				</view>
				 <view class="arrows">
					<image src="../../static/jiantou.png" ></image>
			    </view>
			</view>
			<view class="option">
				<view class="name">
					<text>帮助与反馈</text>
				</view>
				 <view class="arrows">
					<image src="../../static/jiantou.png" ></image>
			    </view>
			</view>
		</view>
		
		<view class="option">
			<view class="name">
				<text>插件</text>
			</view>
			 <view class="arrows">
				<image src="../../static/jiantou.png" ></image>
		    </view>
		</view>
		
		<view class="end">
			<view class="option">
				
					<view class="name">
						<text>切换账号</text>
					</view>
					 <view class="arrows">
						<image src="../../static/jiantou.png" ></image>
					</view>
				
				
			</view>
			<view class="option">
				<view class="name">
					<text>退出</text>
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
.option_f{
	display: flex;
	justify-content:space-between;
	height: 100upx;
	align-items: center;
	background: #FFFFFF;
	margin-bottom: 20upx;
}
.thridly{
	margin-top: 20upx;
	margin-bottom: 20upx;
}
.end{
	margin-top: 20upx;
}

.name{
	margin-left: 20upx;
}
.arrows{
	margin-right: 20upx;
}

</style>
