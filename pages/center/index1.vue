<template>
	<view>
		<view>
			<view class="uAvatar">
				<u-avatar size="170" :src="src"></u-avatar>
			</view>
			<view class="niceng">{{title}}</view>
			<view class="gexinqianming">{{gexinqianming}}</view>
			<view class="guanzhu">关注{{guanzhu}} | 粉丝{{fenshi}}</view>
		</view>
		<view>
			<view class="weixianzong03"  @click="weixiaoquang()">
				<view class="weixiaoquang">
					<u-row gutter="16">
						<u-col span="2">
							<view>
								<image class="image"
									src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/weixiaoquang.png" />
							</view>
						</u-col>
						<u-col span="5">
							<view class="weixiaoquang01">微小圈</view>
						</u-col>
						<u-col span="5">
							<view class="weixiaoquang02">查看好友动态 ></view>
						</u-col>
					</u-row>
				</view>
			</view>
			<view class="order">
				<u-row gutter="16">
					<u-col span="6">
						<view class="meOrder">我的订单</view>
					</u-col>
					<u-col span="6">
						<view class="shuoyoudindang">查看所有订单 ></view>
					</u-col>
				</u-row>
				<u-row gutter="16" class="iconImage">
					<u-col span="3">
						<view class="demo-layout bg-purple">
							<image class="imageIco" src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/mequangbu.png"/><br/>全部
						</view>
					</u-col>
					<u-col span="3">
						<view class="demo-layout bg-purple-light">
							<image class="imageIco" src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/medaifukuan.png"><br/>待付款
						</view>
					</u-col>
					<u-col span="3">
						<view class="demo-layout bg-purple-dark">
							<image class="imageIco" src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/medaifuhuo.png"><br/>待发货
						</view>
					</u-col>
					<u-col span="3">
						<view class="demo-layout bg-purple-dark">
							<image class="imageIco" src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/medaisouhuo.png"><br/>待收货
						</view>
					</u-col>
				</u-row>
			</view>
			<view class="bottom">
				<view class="wenzhi">投诉</view>
				<view >	
					<u-line color="#bdbdbd" />
				</view>
				<view class="wenzhi">
					设置
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/avatar.png',
				title: "",
				gexinqianming: "",
				guanzhu:"",
				fenshi: ""
				
			}
		},
		onLoad() {
			 const value = uni.getStorageSync('token');
						 let that = this;
						 // 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
						this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/me', {}, {
							token: value
						}).then(res => {
							console.log(res);
							that.src = res.data.image
							that.title = res.data.title
							that.gexinqianming = res.data.gexinqianming
							that.guanzhu = res.data.guanzhu
							that.fenshi = res.data.fenshi
						});
		},
		methods: {
			weixiaoquang(){
				console.log(2222)
				uni.navigateTo({
				    url: '/pages/center/weixiaoquang/weixiaoquang'
				});
			}
		}
	}
</script>

<style>
	.wenzhi{
		font-size: 6vw;
		padding: 1vw;
	}
	.iconImage{
		padding-left: 2vw;
		padding-top: 5vw;
		padding-bottom: 3vw;
	}
	.imageIco{
		width: 8vw;
		height: 8vw;
	}
	.shuoyoudindang {
		text-align: right;
	}

	.meOrder {
		font-size: 6vw;
	}

	body {
		background-image: url(https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/me.png);
		background-size: cover;
		background-repeat: no-repeat;
	}

	.order {
		position: absolute;
		top: 58%;
		border-style: solid;
		border-width: 2px;
		border-color: #18B566;
		border-radius: 3vw;
		width: 92%;
		margin-left: 4%;
		padding: 2vw;
	}
	.bottom{
		position: absolute;
		top: 80%;
		border-style: solid;
		border-width: 2px;
		border-color: #18B566;
		border-radius: 3vw;
		width: 92%;
		margin-left: 4%;
		padding: 2vw;
	}
	.weixiaoquang02 {
		font-size: 4vw;
		margin-bottom: 2vw;
		text-align: right;
	}

	.weixianzong03 {}

	.weixiaoquang01 {
		font-size: 5vw;
		margin-bottom: 2vw;
	}

	.weixiaoquang {
		position: absolute;
		top: 47%;
		border-style: solid;
		border-width: 2px;
		border-color: #18B566;
		border-radius: 3vw;
		width: 92%;
		margin-left: 4%;
		padding: 2vw;
	}

	.image {
		width: 12vw;
		height: 10vw;
	}

	.uAvatar {
		position: absolute;
		top: 9%;
		left: 38%;
		border: #000000;

	}

	.niceng {
		position: absolute;
		top: 18%;
		left: 41.5%;
		padding: 1vw;
		color: #FFFFFF;
		border-radius: 30vw;
		text-align: center;
		padding-left: 5vw;
		padding-right: 5vw;
		background-color: #FFC544;
	}

	.guanzhu {
		position: absolute;
		top: 28%;
		left: 39%;
		color: #FFFFFF;
	}

	.gexinqianming {
		position: absolute;
		top: 23.5%;
		left: 42%;
		color: #FFFFFF;
	}
</style>
