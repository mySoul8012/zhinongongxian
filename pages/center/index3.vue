<template>
	<view>
		<view>
			<u-row class="avagar1">
				<u-icon name="setting" size="60" color="#FFFFFF"></u-icon>
			</u-row>
			<u-row class="avagar">
				<u-col span="2">
					<u-avatar size="110" src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/avatar.png">
					</u-avatar>
				</u-col>
				<u-col span="10">
					<view>
						<view>昵称</view>
						<view>关注 1 粉丝 10</view>
					</view>
				</u-col>
			</u-row>
		</view>
		<view class="money">
			<u-row>
				<u-col span="4">
					<view class="demo-layout bg-purple-light">
						<view>钱包</view>
						<view>￥0.00</view>
					</view>
				</u-col>
				<u-col span="4">
					<view>
						<view>累计收益</view>
						<view>￥0.00</view>
					</view>
				</u-col>
				<u-col span="4">
					<view>
						<view>积分</view>
						<view>0</view>
					</view>
				</u-col>
			</u-row>
		</view>
		<view class="center">
			<u-row>
				<u-col span="2">
					<view class="demo-layout bg-purple-light">
						<image src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerDaijiaoyi.png">
						<view>待交易</view>
					</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple">
						<image src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerDaicaozhuo.png">
						<view>待操作</view>
					</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple-light">
						<image src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerDaicaozhuo.png">
						<view>待操作</view>
					</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple-light">
						<image src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerDaicaozhuo.png">
						<view>待操作</view>
					</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple-light">
						<image src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerDaicaozhuo.png">
						<view>待操作</view>
					</view>
				</u-col>
			</u-row>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.center{
		padding-top: 3vw;
		margin-top: 2vw;
	}
	.center image{
		width: 10vw;
		height: 10vw;
	}
	.money {
		text-align: center;
		margin-top: 3vw;
		margin-left: 4vw;
		margin-right: 4vw;
		background-color: #FFFFFF;
		padding: 4vw;
		border-radius: 3vw;
		box-shadow: 1px 1px 5px #c1c1c1;
	}

	.avagar1 {
		margin-top: 15vw;
		text-align: center;
		padding-right: 0vw;
		padding-left: 85vw;
	}

	.avagar {
		margin-top: 10vw;
		padding-left: 5vw;
		color: #FFFFFF;
	}

	body {
		background-image: url(https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerBackerager.png);
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
