<template>
	<div id="app">
		<div class="header">
			<router-link to="/" class="nav-item">
				<!-- <image src="../build/logo.png"	></image> -->
				<img src="./assets/banke.png"/>
			</router-link>
			<router-link to="/task" class="nav-item" id="nav-item">任务中心</router-link>
			<router-link to="b" class="nav-item">库管理</router-link>
			<router-link to="/ucenter" class="nav-item">李漷方</router-link>
		</div>
		<div class="container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data(){
			return{
				url:'../../assets/banke.png'
			}
		}
	};
</script>

<style>
	#app {
		background-color: rgb(244, 244, 244);
	}

	.header {
		display: flex;
		height: 100px;
		background-color: #fff;
		font-size: 20px;
		padding-left: 320px;
		align-items: center;
	}

	.nav-item {
		width: 100px;
		margin-left: 20px;
	}
	
	#nav-item{
		margin-left: 60px;
	}
	
	.nav-item img{
		width: 125px;
		margin-top: 9px;
	}

	.container {
		width: 80%;
		margin: 0 auto;
		height: 1000%;
	}

	a {
		text-decoration: none;
		color: #aaa;
	}

	a:hover {
		text-decoration: none;
		color: rgb(2, 165, 218);
	}
</style>
