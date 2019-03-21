<template>
	<!-- 根容器 -->
	<div class="container">
		<router-link to="/new_course">
			<button class="btn">新建班课</button>
		</router-link>
		
		<h3>{{ courses.length }}门班课</h3>
		
		<div class="course-conainer">
			<p class="item-ing">
				进行中的班课
			</p>
			<div class="course" v-for="(course, index) in courses" :key="index" v-if="course.finished === 0">
				<div class="course-cover">
					<router-link :to="'/course/' + course.courseId">
						<img :src="course.cover" />
					</router-link>
				</div>
				
				<div class="course-name">
					<p class="title">{{ course.courseName }}</p>
				</div>
				
				<div class="course-class">
					<p class="title">{{ course.courseClass }}</p>
				</div>
				
				<div class="course-code" v-if="loginUserId === course.userId">
					{{ course.courseCode }}
					<button @click="deleteCourse(course.courseId,index)" class="btn">删除</button>
				</div>
			</div>
			
			<p class="item-ed">
				已结束的班课
			</p>
			<div class="course" v-for="(course, index) in courses" :key="index" v-if="course.finished === 1">
				<div class="course-cover">
					<router-link :to="'/course/' + course.courseId">
						<img :src="course.cover" />
					</router-link>
				</div>
				
				<div class="course-name">
					<p class="title">{{ course.courseName }}</p>
				</div>
				
				<div class="course-class">
					<p class="title">{{ course.courseClass }}</p>
				</div>
				
				<div class="course-code" v-if="loginUserId === course.userId">
					{{ course.courseCode }}
					<button @click="deleteCourse(course.courseId,index)" class="btn">删除</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Index',
	data() {
		return {
			loginUserId:1,
			courses: []
		};
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
		}
	},
	created() {
		var _this = this;
		this.$http.get('http://localhost:8080/api/courses').then(function(response) {
			_this.courses = response.data;
		});
	}
};
</script>
<style scoped>
.container {
	padding-top: 20px;
}
.course-conainer {
	display: flex;
	flex-wrap: wrap;
}
.course {
	width: 260px;
	height: 430px;
	margin-right: 20px;
	margin-bottom: 30px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	padding-bottom: 10px;
	padding: 3px;
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
}
.item-ing,.item-ed{
	width: 100%;
}
.item-ed{
	margin-top: 40px;
}
</style>
