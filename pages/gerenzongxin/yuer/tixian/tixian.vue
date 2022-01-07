<template>
	<view>
		<view class="waiweitop">
			<view class="ketixianjine">可提现金额(元)</view>
			<view class="yuer">{{tixianjiner01}}</view>
		</view>
		<view class="center">
			<view class="tixianjiner">提款金额</view>
			<view>
				<u-row gutter="16">
					<u-col span="1">
						<view class="demo-layout bg-purple">￥</view>
					</u-col>
					<u-col span="8">
						<view class="demo-layout bg-purple-light">
							<u-input v-model="tixianjiner" placeholder="请输入提现金额" />
						</view>
					</u-col>
					<u-col span="3">
						<view class="demo-layout bg-purple-dark" @click="quanbutixian">
							全部提现
						</view>
					</u-col>
				</u-row>
			</view>
			<view class="center02" @click="show = true">
				<u-row gutter="16">
					<u-col span="8">
						<view class="demo-layout bg-purple">提款至</view>
					</u-col>
					<u-col span="3">

						<view class="demo-layout bg-purple-light" v-show="tikuanyinhan==1">
							<u-icon :name="iconsouyename" color="#28C445"></u-icon>{{souyeyinhankaname}}
						</view>
						<view class="demo-layout bg-purple-light" v-show="tikuanyinhan==2">
							<u-icon name="weixin-circle-fill" color="#28C445"></u-icon><text class="weixintixian">微信</text>
						</view>
					</u-col>
					<u-col span="1">
						<view class="demo-layout bg-purple-dark">
							<u-icon name="arrow-right"></u-icon>
						</view>
					</u-col>
				</u-row>
			</view>
			<view class="center03">
				<u-button type="success" shape="circle" @click="shenqintixian">申请提现</u-button>
			</view>
		</view>
		<u-popup v-model="show" mode="bottom" border-radius="14">
			<view class="popup">
				<u-row gutter="16" class="row">
					<u-col span="3">
						<view class="demo-layout bg-purple">
							<u-icon name="close"></u-icon>
						</view>
					</u-col>
					<u-col span="6">
						<view class="demo-layout bg-purple-light tixianfansi">
							<view class="title01">选择提现方式</view>
							<view class="title02">请留意到账时间</view>
						</view>
					</u-col>
					<u-col span="3">
						<view class="demo-layout bg-purple-dark"></view>
					</u-col>
				</u-row>
				<u-line color="#878787" />
				<u-row gutter="16" class="tixianfansi01" v-for="(bandink,index) in bandinka" @click="tixianfansi(index)">
					<u-col span="2">
						<view class="demo-layout bg-purple">
							<u-icon :name="bandink.icon" size="80" color="#28C445"></u-icon>
						</view>
					</u-col>
					<u-col span="8">
						<view class="demo-layout bg-purple-light">
							<view>{{bandink.name}}</view>
							<view>两小时内到账</view>
						</view>
					</u-col>
					<u-col span="2">
						<view class="demo-layout bg-purple-dark">
							<u-icon v-if=" checkbox == index" name="checkmark" size="50" color="#28C445"></u-icon>
						</view>
					</u-col>
				</u-row>
				<u-row gutter="16" class="tixianfansi01" @click="xinkatixian">
					<u-col span="2">
						<view class="demo-layout bg-purple">
							<u-icon name="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/tixian-xinka.png" size="80" color="#28C445"></u-icon>
						</view>
					</u-col>
					<u-col span="8">
						<view class="demo-layout bg-purple-light">
							<view>使用新卡提现</view>
						</view>
					</u-col>
					<u-col span="2">
						<view class="demo-layout bg-purple-dark">
							<u-icon name="arrow-right" size="50"></u-icon>
						</view>
					</u-col>
				</u-row>
			</view>
		</u-popup>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tixianjiner: "",
				show: false,
				tixianjiner01: "",
				tikuanyinhan: 1,
				bandinka:"",
				souyeyinhankaname:"",
				iconsouyename:"rmb-circle",
				checkbox: 0
			}
		},
		onLoad() {
			console.log(22)
			const value = uni.getStorageSync('token');
			let that = this;
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/tixianjiekou', {}, {
				token: value
			}).then(res => {
				console.log(res);
				if(res.states == "200"){
					that.tixianjiner01 = res.data.tixianjiner
					that.bandinka = res.data.bandinka
					that.souyeyinhankaname = res.data.bandinka[0].name
					that.iconsouyename = res.data.bandinka[0].icon
				}
			});
		},
		methods: {
			shenqintixian(){
				console.log(22)
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/shenqintixian', {}, {
					token: value
				}).then(res => {
					console.log(res);
					if(res.states == "200"){
						that.$refs.uToast.show({
											title: '申请提现成功',
											type: 'success',
											url: "/pages/gerenzongxin/yuer/yuer"
										})
					}
				});
				
			},
			quanbutixian(){
				this.tixianjiner = this.tixianjiner01
			},
			xinkatixian(){
				uni.navigateTo({
					url:"/pages/gerenzongxin/yuer/tianjiayinhanka/tianjiayinhanka"
				})
			},
			tixianfansi(e){
				console.log(e)
				this.checkbox = e
				this.souyeyinhankaname = this.bandinka[e].name
				this.iconsouyename = this.bandinka[e].icon
				this.show = false
			}
		}
	}
</script>

<style>
	body {
		background-image: url(https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/tixiangerengzongxin.png);
		background-size: cover;
		background-repeat: no-repeat;
	}
	.weixintixian{
		margin-left: 6vw;
	}
	.tixianfansi01{
		margin-top: 5vw;
	}
	.row {
		margin-bottom: 5vw;
	}

	.title02 {
		font-size: 3vw;
		color: #868483;
	}

	.title01 {
		font-size: 5vw;
	}

	.tixianfansi {
		text-align: center;
	}

	.popup {
		padding: 5vw;
	}

	.center03 {
		padding-top: 10vw;
		padding-bottom: 10vw;
	}

	.center02 {
		padding-top: 5vw;
	}

	.tixianjiner {
		margin-top: 2vw;
		margin-bottom: 5vw;
	}

	.center {
		background-color: #FFFFFF;
		margin-left: 5vw;
		margin-right: 5vw;
		margin-top: 5vw;
		padding: 5vw;
		border-radius: 5vw;
	}

	.waiweitop {
		color: #FFFFFF;
		margin-top: 15vw;
		margin-left: 10vw;
	}

	.ketixianjine {
		font-size: 5vw;
	}

	.yuer {
		font-size: 12vw;
	}
</style>
