<template>
	<div class="wrap">
		<div class="login">
			<div class="card">
				<div class="title">
					<img class="logo" src="../assets/image/badges-2.png" alt="">
					<div>中山市沙溪镇人脸识别乡村安防公安系统</div>
				</div>
				<el-form class="login-form">
					<el-form-item>
						<el-input placeholder="账号" v-model="loginForm.username"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input placeholder="密码" type="password" v-model="loginForm.password"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
					</el-form-item>
				</el-form>
				<div class="footer"><span>中山市公安局沙溪分局联合研发</span> </div>
			</div>
		</div>
	</div>
</template>

<script>
import API from "@/api/login.js";

	export default {
		name: "login",
		data() {
			return {
				loginForm: {
					username: "",
					password: ""
				}
			};
		},
		methods: {
			submitForm() {
				var self = this;
				API.login(self.loginForm).then(res => {
					localStorage.setItem('username', self.loginForm.username)
					self.$router.replace("/desktop");
				}).catch(err => {
					self.$message.error(err.response.data.msg)
				})
				// localStorage.setItem('username', 'admin')
				// self.$router.replace("/overview");
			}
		}
	};
</script>

<style scoped lang="scss">
	.wrap {
		width: 100%;
		height: 100%;
		background-color: #000066 !important;
	}

	.login {
		display: flex;
		justify-content: center;
		padding: 3rem;

		.card {
			display: flex;
			flex-direction: column;
			padding: 2.25rem;
			border-radius: .25rem;
			background-color: #fff !important;
			
			.title {
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 1.5rem;
				font-weight: 600;
				
				.logo {
					width: 50px;
					height: 50px;
				}
			}
			
			.login-form {
				margin-top: 1rem;
				
				.el-button {
					width: 100%;
				}
			}
			
		}
	}

	.footer {
		margin-top: 1rem;
		display: flex;
		justify-content: center;
		font-size: 20px;
	}
</style>
