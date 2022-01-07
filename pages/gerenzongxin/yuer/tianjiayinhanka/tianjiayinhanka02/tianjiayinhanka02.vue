<template>
	<view class="page flex-col">
		<view class="block1 flex-col">
			<view class="outer2 flex-row">
				<text class="word3">手机号</text>
				<text class="word4">{{phone}}</text>
			</view>
			<view class="outer3 flex-col"></view>
			<view class="outer4 flex-row">
				<text class="word5">验证码</text>
				<view style="width: 150%;margin-left: 3vw;">

					<u-row gutter="16">
						<u-col span="4">
							<view class="demo-layout bg-purple">
								<u-input v-model="yanzhenma" type="type" height="55" placeholder="填写验证码" />
							</view>
						</u-col>
						<u-col span="4">
							<view class="demo-layout bg-purple-light">
								<u-button size="mini" :disabled="huoquyanzhenma" @click="yanzhenma01">{{btntxt}}
								</u-button>

							</view>
						</u-col>
					</u-row>
				</view>
			</view>
			<view class="outer5 flex-col"></view>
			<text class="word8" @click="soubudaoyanzhenma">收不到验证码？</text>
			<view class="xiayibu">
				<u-button type="success" shape="circle" @click="xiayibu">下一步</u-button>
			</view>
			<u-toast ref="uToast" />
			<u-popup v-model="show" mode="center" border-radius="14">
				<view class="waiwei">
					<image class="images" src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/yinhankasuccess.png">
						<view class="tianjiacengon">添加成功</view>
						<view class="successod">
							<u-button shape="circle" @click="show = false">完成</u-button>
						</view>
				</view>
			</u-popup>
			<u-popup v-model="show01" mode="center" border-radius="14">
				<view class="waiwei01">
						<view class="waiweititle">收不到验证码</view>
						<view>1、查看是否误设了短信拦截。<br/>
2、若该号码欠费停机，建议您更换手机号码<br/>
或者缴费后第二天重新获取。<br/>
3、联系运营商取消黑名单。<br/>
4、如果是信号网络延迟，可稍后尝试重新获取。</view>
						<view class="successod01">
							<u-button type="success" shape="circle" @click="show01 = false">我知道啦！</u-button>
						</view>
				</view>
			</u-popup>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				constants: {},
				huoquyanzhenma: false,
				cikaren: "",
				kaneixinxuanzong: "",
				kahao: "",
				phone: "",
				timer: null,
				btntxt: "获取验证码",
				seconds: 60,
				yanzhenma: "",
				show: false,
				show01: false
			};
		},
		onLoad() {
			this.cikaren = uni.getStorageSync('cikaren');
			this.kaneixinxuanzong = uni.getStorageSync('kaneixinxuanzong');
			this.kahao = uni.getStorageSync('kahao');
			this.phone = uni.getStorageSync('phone');
			uni.setStorageSync('cikaren', "");
			uni.setStorageSync('kaneixinxuanzong', "");
			uni.setStorageSync('kahao', "");
			uni.setStorageSync('phone', "");
		},
		methods: {
			soubudaoyanzhenma(){
				this.show01 = !this.show01
			},
			xiayibu() {
				
				console.log(22)
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/tianjiayinhanka?cikaren=' + this.cikaren + "&kaneixinxuanzong=" + this.kaneixinxuanzong + "&kahao=" + this.kahao + "&phone=" + this.phone , {}, {
					token: value
				}).then(res => {
					console.log(res);
					if (res.states == "200") {
						that.show = true;
					}
				});
			},
			yanzhenma01() {
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
			}
		}
	};
</script>
<style>
	@import './common.css';
	@import './index.rpx.css';
	.waiweititle{
		text-align: center;
		font-size: 8vw;
		padding-bottom: 2vw;
	}
	.images{
		width: 20vw;
		height: 20vw;
	}
	.xiayibu {
		margin-left: 12vw;
		margin-right: 12vw;
		margin-top: 60vw;
	}
	.waiwei{
		padding-top: 10vw;
		padding-bottom: 10vw;
		padding-left: 10vw;
		padding-right: 10vw;
		text-align: center;
	}
	.waiwei01{
		padding-top: 10vw;
		padding-bottom: 10vw;
		padding-left: 6vw;
		padding-right: 6vw;
		text-align: left;
	}
	.tianjiacengon{
		text-align: center;
		font-size: 7vw;
	}
	.successod{
		width: 60vw;
		padding-top: 5vw;
	}
	.successod01{
		margin-left: 10vw;
		margin-right: 10vw;
		padding-top: 5vw;
	}
</style>
