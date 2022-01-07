<template>
	<view class="block">
		<view @click="zhifujin(redian.id)" v-for="redian in redianList">
			<u-row gutter="16">
				<u-col span="2">
					<image class="logo"
						src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/redianLogo.png">
				</u-col>
				<u-col span="10" class="logo-text2">
					<view class="logo-text">智慧农业</view>
				</u-col>
			</u-row>
			<u-row gutter="16">
				<image class="zhifujin"
					:src="redian.image" />
				
			</u-row>
			<u-row  gutter="16" class="zhihuiText">
				{{redian.title}}
			</u-row>
			<u-row  gutter="16" class="u-line">
				<u-line color="black"/>
			</u-row>
			<view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				redianList:[]
			}
		},
		onLoad() {
			const value = uni.getStorageSync('token');
			let that = this;
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/redianwenzanList', {}, {
				token: value
			}).then(res => {
				console.log(res);
				that.redianList = res.data
			});
		},
		methods: {
			zhifujin(e){
				uni.navigateTo({
				    url: '/pages/redian/zhifujin/zhifujin?id=' + e
				});
			},
			shencaiyoudao(){
				uni.navigateTo({
				    url: '/pages/redian/zhifujin/zhifujin?id=2'
				});
			},
			noncanbaodian(){
				uni.navigateTo({
				    url: '/pages/redian/zhifujin/zhifujin?id=3'
				});
			}
		}
	}
</script>

<style>
	body {
		background-image: url(https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/redianbeijin.png);
		background-size: cover;
		background-repeat:no-repeat;
	}

	.block {
		background-color: #FFFFFF;
		margin-left: 7vw;
		margin-top: 23vw;
		margin-right: 7vw;
		padding: 5vw;
		box-shadow: 1px 1px 6px 2px #888888;
	}

	.logo {
		width: 10vw;
		height: 10vw;

	}

	.logo-text {
		font-size: 4vw;
		padding-bottom: 2vw;
	}

	.logo-text2 {
		padding: 30vw;
	}

	.zhifujin {
		height: 35vw;
		margin-top: 2vw;
	}
	.u-line {
		margin-top: 3vw;
		margin-bottom: 3vw;
	}
	.zhihuiText{
		margin-top: 2vw;
	}
</style>
