<template>
	<div class="container">
		<h2>任务中心</h2>
		<div class="preview">
			<img :src="imgUrl" ></image>
		</div>
		<form>
			<div class="upload">
				选择文件
				<input type="file" @change="getFile($event)"/>
			</div>
			<br />
			<button @click="submit($event)" class="sub-btn">提交</button>
		</form>
	</div>
</template>

<script>
	export default{
		name:'Task',
		data(){
			return {
				imgUrl:'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2019/02/b3a3af29306688d7a9919bf5b4e8be69.jpg?x-oss-process=style/s200x200',
				file:''
			}
		},
		methods:{
			//图片预览
			getFile:function(event){
				this.file=event.target.files[0];
				var windowUrl=window.URL || window.webkitURL;
				this.imgUrl=windowUrl.createObjectURL(this.file);
			},
			submit:function(event){
				//阻止元素发生默认的行为
				event.preventDefault();
				let formData = new FormData();
				formData.append('file',this.file);
				this.$http.post("http://localhost:8080/upload",formData)
					.then(function(response){
						alert(response.data);
						this.imgUrl = response.data;
					})
			}
		}
		
	}
</script>

<style scoped>
	/* scoped:样式只对本页面管用 */
	.preview{
		width: 300px;
		height: 300px;
	}
	.preview img{
		width: 100%;
		height: 100%;
	}
	.sub-btn{
		width: 120px;
		height: 35px;
		border-radius: 10px;
		outline: none;
		background-color: #333333;
		color: #FFFFFF;
	}
	.upload{
		margin-top: 10px;
		display: inline-block;
		width: 120px;
		height: 35px;
		border: 1px solid #99d3f5;
		border-radius: 4px;
		background-color: #d0eeff;
		color: #000;
		text-align: center;
		cursor: pointer;
	}
	.upload input{
		width: 100%;
		height: 100%;
		opacity: 0;
	}
	.upload:hover{
		background: #aadffd;
		border-color: #78c3f3;
		color: #004974;
		text-decoration: none;
	}
</style>
