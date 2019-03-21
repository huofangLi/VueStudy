
<template>
	<div class="container">
		您的班课号是:{{course.courseId}}
		<div class="course" >
			<div class="course-cover">
				<img :src="course.cover" />
			</div>
			
			<div class="course-name">
				<p class="title">{{ course.courseName }}</p>
			</div>
			
			<div class="course-class">
				<p class="title">{{ course.courseClass }}</p>
			</div>
			
			<div class="course-code" v-if="loginUserId === course.userId">
				{{ course.courseCode }}
				<div class="delete">
					<button @click="deleteCourse(course.courseId,index)" class="btn">删除</button>
				</div>
			</div>
			<div class="update">
				<button @click="updateCourse(course.courseId,index)" class="btn">结束班课</button>
			</div>
		</div>	
	</div>
</template>

<script>
export default {
	name: 'CourseDetail',
	data() {
		return {
			id: this.$route.params.id,
			course: {},
			loginUserId:1
		};
	},
	created() {
		var _this = this;
		this.$http.get('http://localhost:8080/api/courses/' + this.id).then(function(response) {
			_this.course = response.data;
		});
	},
	methods: {
		deleteCourse: function(courseId,index) {
			var _this = this;
			this.$http({
				method: 'delete',
				url: 'http://localhost:8080/api/courses/' + courseId
			}).then(function() {
				alert('班课删除成功');
				 _this.courses.splice(index,1);//删除id为index的1条数据
			});
		},
		updateCourse:function(courseId,index){
			var _this = this;
			this.$http({
				method: 'put',
				url: 'http://localhost:8080/api/courses',
				data: {
					courseId:_this.course.courseId,
					courseName:_this.course.courseName,
					userId: _this.loginUserId,
					courseClass:_this.course.courseClass,
					cover: _this.course.cover,
					courseCode:_this.course.courseCode,
					finished: 1
				}
			}).then(function() {
				alert('班课修改成功');
				 _this.courses.splice(index,1);//修改id为index的1条数据
			})
		}
	}
};
</script>
<style scoped>
	.container{
		margin-top: 20px;
	}
	
	.course{
		padding: px;
		width: 260px;
		height: 400px;
		margin-right: 20px;
		margin-bottom: 30px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		padding-bottom: 10px;
	}
	.course-cover img {
		width: 100%;
		height: 280px;
	}
	.title {
		font-size: 16px;
		color: #333;
	}
	.btn {
		width: 120px;
		height: 40px;
		border: 1px solid #fff;
		background-color: rgb(0, 187, 221);
		border-radius: 20px;
		outline: none;
		color: #fff;
		font-size: 16px;
	}
	.course-code {
		color: rgb(0, 187, 221);
		display: flex;
		justify-content: space-between;
		margin-top: -5px;
	}
	
	.course-class{
		margin-top: -20px;
	}
</style>