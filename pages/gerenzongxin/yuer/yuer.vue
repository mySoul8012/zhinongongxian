<template>
	<view>
		<view class="yuer">
			<view class="yuer01">账户余额(元)</view>
			<view class="yuer02">{{yuer}}</view>
		</view>
		<view class="tixianxianqin">
			<u-row customStyle="margin-bottom: 10px">
				<u-col span="1">
					<view class="demo-layout bg-purple-light">
						<view class="logo"></view>
					</view>
				</u-col>
				<u-col span="8">
					<view class="demo-layout bg-purple">
						<view>提现详情</view>
					</view>
				</u-col>
				<u-col span="3">
					<view class="demo-layout bg-purple">
						<view>提现说明<u-icon class="tubiao" name="info-circle"></u-icon></view>
					</view>
				</u-col>
			</u-row>
			<view>
				<u-row customStyle="margin-bottom: 10px" class="tixianzong">
					<u-col span="9">
						<view class="demo-layout bg-purple-light">
							<view>提现中</view>
						</view>
					</u-col>
					<u-col span="3">
						<view class="demo-layout bg-purple">
							<view class="jiner">￥{{tixianzong}}</view>
						</view>
					</u-col>
					<u-line color="#b6b6b6" margin="2vw"/>
				</u-row>
				<u-row customStyle="margin-bottom: 10px" class="tixianzong1">
					<u-col span="9">
						<view class="demo-layout bg-purple-light">
							<view>已提现</view>
						</view>
					</u-col>
					<u-col span="3">
						<view class="demo-layout bg-purple">
							<view class="jiner">￥{{yitixian}}</view>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
		<view class="anniou">
			<u-button type="success" shape="circle" @click="success">提现</u-button>
		</view>
				<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				yuer: "",
				tixianzong: "",
				yitixian: ""
			}
		},
		onNavigationBarButtonTap() {  
		        console.log("点击了自定义按钮");  
				uni.navigateTo({
					url:"/pages/gerenzongxin/yuer/mingxi/mingxi"
				})
		    },
			onLoad() {
				console.log(22)
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/meyuer', {}, {
					token: value
				}).then(res => {
					console.log(res);
					if(res.states == "200"){
						that.yuer = res.data.yuer
						that.tixianzong = res.data.tixianzong
						that.yitixian = res.data.yitixian
					}
				});
			},
		methods: {
			success(){
				console.log(2)
				uni.navigateTo({
					url:"/pages/gerenzongxin/yuer/tixian/tixian"
				})
			}
		}
	}
</script>

<style>
	.anniou{
		margin-top: 40vw;
		margin-left: 10vw;
		margin-right: 10vw;
	}
	.tixianzong1{
		margin-left:7vw;
		margin-top: 2vw;
	}
	.jiner{
		color: #19BE6B;
	}
	.tixianzong{
		margin-left: 7vw;
		margin-top: 5vw;
	}
	.tixianxianqin{
		border-radius: 5vw;
		box-shadow: 5px 5px 5px #cccccc38;
		background-color: #FFFFFf;
		padding: 4vw;
		margin-top: 5vw;
		margin-left: 2vw;
		margin-right: 2vw;
	}
	.tixianxianqin1{
		border-radius: 5vw;
		box-shadow: 5px 5px 5px #cccccc38;
		background-color: #FFFFFf;
		padding: 4vw;
		margin-top: 5vw;
		margin-left: 2vw;
		margin-right: 2vw;
	}
	.yuer{
		padding: 10vw;
		color:#FFFFFF;
		margin-top: 5vw;
		border-radius: 3vw;
		margin-left: 2vw;
		margin-right: 2vw;
		height: 50vw;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url(https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/yuer-beijintu.png);
	}
	.yuer01{
		font-size: 4vw;
	}
	.yuer02{
		font-size: 12vw;
	}
	.logo {
		width: 3vw;
		height: 8vw;
		background: #0BC477;
		border-radius: 3vw;
	}
	body{
		background: #F7F7F7;
	}
</style>
