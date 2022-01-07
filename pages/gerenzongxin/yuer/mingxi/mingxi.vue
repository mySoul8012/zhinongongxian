<template>
	<view>
		<view>
			<u-row gutter="16" class="title">
				<u-col span="2">
					<view class="demo-layout bg-purple">
						<u-avatar size="110" :src="src" />
					</view>
				</u-col>
				<u-col span="5">
					<view class="demo-layout bg-purple-light">小小</view>
				</u-col>
				<u-col span="5">
					<view class="demo-layout bg-purple-dark">
						<view class="anniou">
							<u-button type="success" shape="circle" @click="success">{{year}}{{month}} ∨</u-button>
						</view>
					</view>
				</u-col>
			</u-row>
		</view>
		<view class="zongzhicanwaiwei">
			<view class="zongzhican">总资产</view>
			<view class="qianshu">{{zongzhican}}</view>
			<u-row gutter="16" class="sekuai">
				<u-col span="4">
					<view class="congzhi">
						<view>充值(元)</view>
						<u-line color="#FFFFFF" />
						<view>{{congzhijiner}}</view>
					</view>
				</u-col>
				<u-col span="4">
					<view class="souyi">
						<view>收益(元)</view>
						<u-line color="#FFFFFF" />
						<view>{{souyijiner}}</view>
					</view>
				</u-col>
				<u-col span="4">
					<view class="tixian">
						<view>提现(元)</view>
						<u-line color="#FFFFFF" />
						<view>{{tixianjiner}}</view>
					</view>
				</u-col>
			</u-row>
		</view>
		<view class="center">
			<u-row gutter="16">
				<u-col span="3">
					<view class="annuio">
						<u-button type="warning" shape="circle" @click="quanbuBottom">全部</u-button>
					</view>
				</u-col>
				<u-col span="3">
					<view class="annuio">
						<u-button type="warning" shape="circle" @click="congzhiBottom">充值</u-button>
					</view>
				</u-col>
				<u-col span="3">
					<view class="annuio">
						<u-button type="warning" shape="circle" @click="souyiBottom">收益</u-button>
					</view>
				</u-col>
				<u-col span="3">
					<view class="annuio">
						<u-button type="warning" shape="circle" @click="tixianBottom">提现</u-button>
					</view>
				</u-col>
			</u-row>
		</view>
		<view class="bottom01">
			<view>
				<u-row gutter="16" v-for="bottom in bottoms" class="bottom0-999">
					<u-col span="10">
						<view class="demo-layout bg-purple">
							<view class="jiesuan">{{bottom.title}}</view>
							<view class="riqi1">{{bottom.time}}</view>
						</view>
					</u-col>
					<u-col span="2">
						<view class="jiner05">{{bottom.jiner}}</view>
					</u-col>
						<u-line color="#9c9c9c" margin="4vw 4vw 0 0 "/>

				</u-row>
			</view>
		</view>
		<u-select v-model="show" mode="mutil-column" :list="list" @confirm="confirm"></u-select>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: "https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/avatar.png",
				year: "",
				month: "",
				zongzhican:"",
				congzhijiner: "",
				souyijiner:"",
				tixianjiner:"",
				show: false,
				bottoms: [
					[
						"结算","2021年12月12日12:12","+3000"
					],
					[
						"结算","2021年12月12日12:12","+3000"
					]
				],
				quanbu: [
					[
						"结算0","2021年12月12日12:12","+3000"
					],
					[
						"结算0","2021年12月12日12:12","+3000"
					]
				],
				congzhi: [
					[
						"结算1","2021年12月12日12:12","+3000"
					],
					[
						"结算1","2021年12月12日12:12","+3000"
					]
				],
				souyi: [
					[
						"结算2","2021年12月12日12:12","+3000"
					],
					[
						"结算2","2021年12月12日12:12","+3000"
					]
				],
				tixian: [
					[
						"结算3","2021年12月12日12:12","+3000"
					],
					[
						"结算3","2021年12月12日12:12","+3000"
					]
				],
				list: ""
			}
		},
		onLoad() {
			console.log(22)
			const value = uni.getStorageSync('token');
			let that = this;
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/yuermingxi', {}, {
				token: value
			}).then(res => {
				console.log(res);
				if(res.states == "200"){
					that.list = res.data.time
					that.year = res.data.time[0][0].value
					that.month = res.data.time[1][0].value
					that.zongzhican = res.data.zongzhican
					that.congzhijiner = res.data.congzhijiner
					that.souyijiner = res.data.souyijiner
					that.tixianjiner = res.data.tixianjiner
					that.bottoms = res.data.quanbu
					that.quanbu = res.data.quanbu
					that.congzhi = res.data.congzhi
					that.souyi = res.data.souyi
					that.tixian = res.data.tixian
				}
			});
		},
		methods: {
			quanbuBottom(){
				console.log(1)
				this.bottoms = this.quanbu
			},
			congzhiBottom(){
				console.log(1)
				this.bottoms = this.congzhi
			},
			souyiBottom(){
				console.log(1)
				this.bottoms = this.souyi
			},
			tixianBottom(){
				console.log(1)
				this.bottoms = this.tixian;
			},
			// 回调参数为包含多个元素的数组，每个元素分别反应每一列的选择情况
			confirm(e) {
				console.log(e);
				console.log(e)
				this.year = e[0].value;
				this.month = e[1].value;
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/yuermingxi?year=' + this.year + "&month=" + this.month, {}, {
					token: value
				}).then(res => {
					console.log(res);
					if(res.states == "200"){
						that.list = res.data.time
						that.year = res.data.time[0][0].value
						that.month = res.data.time[1][0].value
						that.zongzhican = res.data.zongzhican
						that.congzhijiner = res.data.congzhijiner
						that.souyijiner = res.data.souyijiner
						that.tixianjiner = res.data.tixianjiner
						that.bottoms = res.data.quanbu
						that.quanbu = res.data.quanbu
						that.congzhi = res.data.congzhi
						that.souyi = res.data.souyi
						that.tixian = res.data.tixian
					}
				});
			},
			success() {
				console.log(2)
				this.show = true
			}
		}
	}
</script>

<style>
	.bottom0-999{
		margin-bottom: 3vw;
	}
	.jiner05{
		color: #19BE6B;
	}
	.riqi1{
		font-size: 3vw;
		color:#707071;
	}
	.jiesuan{
		font-size: 5vw;
	}
	.bottom01{
		background-color: #FFFFFF;
		margin-left: 4vw;
		margin-right: 4vw;
		margin-top: 7vw;
		padding: 2vw;
	}
	.annuio {
		margin-left: 2vw;
		margin-right: 2vw;
	}

	.center {
		margin-top: 7vw;
		margin-left: 4vw;
		margin-right: 4vw;
	}

	.souyi {
		margin-right: 2vw;
		background-color: #FF5991;
		color: #FFFFFF;
		border-radius: 3vw;
		padding: 1vw;
		box-shadow: 5px 5px 5px #cccccc38;
	}

	.congzhi {
		margin-right: 2vw;
		background-color: #756BFF;
		color: #FFFFFF;
		border-radius: 3vw;
		padding: 1vw;
		box-shadow: 5px 5px 5px #cccccc38;
	}

	.tixian {
		margin-right: 2vw;
		background-color: #FCBF61;
		color: #FFFFFF;
		border-radius: 3vw;
		padding: 1vw;
		box-shadow: 5px 5px 5px #cccccc38;
	}

	.sekuai {
		margin-top: 3vw;
	}

	body {
		background: #F7F7F7;
	}

	.qianshu {
		font-size: 12vw;
	}

	.zongzhican {
		margin-bottom: 1vw;
	}

	.zongzhicanwaiwei {
		margin-top: 5vw;
		padding: 5vw;
		margin-left: 5vw;
		margin-right: 5vw;
		background-color: #FFFFFF;
	}

	.title {
		margin-top: 8vw;
		margin-left: 5vw;
		margin-right: 5vw;
	}
</style>
