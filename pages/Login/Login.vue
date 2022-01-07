<template>
	<view>
		<u-toast ref="uToast" />
		<view class="login">
			<view class="table">
				<u-tabs :list="list" font-size="35" inactive-color="#00bf00" active-color="#00bf00" :is-scroll="false"
					:current="current" @change="change"></u-tabs>
			</view>
			<view v-show="!flag">
				<view class="userName">
					<u-field icon="account" label-width="30" v-model="userName" placeholder="请填写用户名">
					</u-field>
				</view>
				<view class="userName">
					<u-field icon="lock" label-width="30" password="true" v-model="password1" placeholder="请填写密码">
					</u-field>
				</view>
			</view>
			<view v-show="flag">
				<view class="userName">
					<u-field icon="account" label-width="30" v-model="phone" placeholder="请填写手机号">
					</u-field>
				</view>
				<view class="userName">
					<u-field icon="lock" label-width="30" password="true" v-model="yanzhengma" placeholder="请填写验证码">
						<u-button size="mini" slot="right" :disabled="huoquyanzhenma" type="success" @click="getCode">{{btntxt}}</u-button>
					</u-field>
				</view>
			</view>
			<u-row gutter="16">
				<u-col span="5">
					<view class="jizhumima01">
						<u-checkbox-group class="jizhumima">
							<u-checkbox v-model="jizhumima" active-color="#00bf00" /><text class="jizhumima">记住密码</text>
						</u-checkbox-group>
					</view>
				</u-col>
				<u-col span="7">
					<view class="wanjimima" @click="soujihaodennu">手机号登录</view>
				</u-col>
				<view class="buttom">
					<u-button type="success" @click="dennu()">登录</u-button>
				</view>
			</u-row>


		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag: false,
				list: [{
					name: '用户登录'
				}, {
					name: '管理员登录'
				}],
				current: 0,
				userName: "",
				password1: "",
				jizhumima: false,
				phone: "",
				yanzhengma: "",
				btntxt:"获取验证码",
				huoquyanzhenma:false,
				seconds:60
			}
		},
		onLoad() {
			uni.hideTabBar()
			this.userName = uni.getStorageSync("userName");
			console.log(this.userName)
			this.password1 = uni.getStorageSync("password");
		},
		methods: {
			change(index) {
				this.current = index;
			},
			getCode() {
				console.log("获取验证码")
				if (this.huoquyanzhenma == false) {
					this.$refs.uToast.show({
						title: '验证码发送成功',
						type: 'success'
					})
					this.huoquyanzhenma = true
					const timer = setInterval(() => {
						this.btntxt = this.seconds + '秒再试';
						this.seconds--;
						this.huoquyanzhenma = true;
						if (this.seconds === 0) {
							clearInterval(timer);
							this.btntxt = '发送验证码';
							this.seconds = 60;
							this.huoquyanzhenma = false
						}
					}, 1000);
				
				}

			},
			soujihaodennu() {
				this.flag = !this.flag
			},
			dennu() {
				if(this.flag == false){
					console.log(333)
					// 保存密码
					if (this.jizhumima) {
						uni.setStorageSync("userName", this.userName);
						uni.setStorageSync("password", this.password1)
					}
					// 登录
					let that = this;
					this.$u.get('https://api.wkkin.cn/index.php/login/login?username=' + this.userName + "&password=" + this
						.password1 + "&flag=" + this.flag, {}).then(res => {
						console.log(res);
						if (res.states == 200) {
							uni.setStorageSync("token", res.data.token)
							uni.switchTab({
								url: '/pages/index/index'
							});
						} else {
							that.$refs.uToast.show({
								title: '登录失败',
								type: 'error'
							})
						}
					});
				}
			}
		}
	}
</script>

<style>
	.buttom {
		width: 50%;
		margin-top: 5vw;
		margin-left: 23%;
	}

	.wanjimima {
		padding-top: 3vw;
		padding-left: 20vw;
	}

	.jizhumima01 {
		padding-left: 8vw;
		padding-top: 3vw;
	}

	.jizhumima {}

	.userName {
		margin-top: 7vw;
		margin-left: 8vw;
		margin-right: 8vw;
		border-style: solid;
		border-width: 2px;
		border-color: #19BE6B;
		border-radius: 5vw;
	}

	.table {
		padding-top: 6vw;
	}

	body {
		background-image: url(https://nye.oss-cn-beijing.aliyuncs.com/login.png);
		background-size: cover;
		background-repeat: no-repeat;
	}

	.login {
		width: 80%;
		height: 45%;
		background-color: #FFFFFF;
		position: absolute;
		top: 20%;
		left: 10%;
		border-radius: 5vw;
	}
</style>
