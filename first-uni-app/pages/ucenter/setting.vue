<template>
	<view class="content">
		<view>
			<text class="title">{{ title }}</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: '设置'
		};
	},
	onLoad() {},
	methods: {}
};
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
</style>
