<template>
	<view>
		<view>
			<u-row  class="avagar1">
				<u-icon @click="sezhi" name="setting" size="60" color="#FFFFFF"></u-icon>
			</u-row>
			<u-row class="avagar">
				<u-col span="2">
					<u-avatar size="110" :src="src">
					</u-avatar>
				</u-col>
				<u-col span="10">
					<view>
						<view>{{title}}</view>
						<view>关注 {{guanzhu}} 粉丝 {{fenshi}}</view>
					</view>
				</u-col>
			</u-row>
		</view>
		<view class="money">
			<u-row>
				<u-col span="4" @click="qianbao">
					<view class="demo-layout bg-purple-light">
						<view>钱包</view>
						<view>￥{{money}}</view>
					</view>
				</u-col>
				<u-col span="4" @click="neijisouyi">
					<view>
						<view>累计收益</view>
						<view>￥{{neijimoney}}</view>
					</view>
				</u-col>
				<u-col span="4" @click="jifenneiji">
					<view>
						<view>积分</view>
						<view>{{jifen}}</view>
					</view>
				</u-col>
			</u-row>
		</view>
		<view class="center">
			<u-row>
				<u-col span="2" @click="daijiaoyi">
					<view class="demo-layout bg-purple-light">
						<image class="padding"
							src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerDaijiaoyi.png">
							<view class="padding">待交易</view>
					</view>
				</u-col>
				<u-col span="2" @click="daicaozhuo">
					<view class="demo-layout bg-purple">
						<image class="kefu"
							src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerDaicaozhuo.png">
							<view class="kefu">待操作</view>
					</view>
				</u-col>
				<u-col span="2" @click="daisouhuo">
					<view class="demo-layout bg-purple-light">
						<image class="kefu"
							src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerDaisoushuo.png">
							<view class="kefu">待收货</view>
					</view>
				</u-col>
				<u-col span="2" @click="yiwancen">
					<view class="demo-layout bg-purple-light">
						<image class="kefu"
							src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerYiwanceng.png">
							<view class="kefu">已完成</view>
					</view>
				</u-col>
				<u-col span="2" @click="kefu">
					<view class="demo-layout bg-purple-light">
						<image class="kefu"
							src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerKefu.png">
							<view class="kefu"><text>&nbsp; 客服</text></view>
					</view>
				</u-col>
			</u-row>
		</view>
		<view class="zongBottom">
			<u-row customStyle="margin-bottom: 10px" class="bottom bottom-top" @click="wodetudi()">
				<u-col span="2">
					<view class="demo-layout bg-purple-light">
						<image src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerTudi.png">
					</view>
				</u-col>
				<u-col span="8">
					<view class="demo-layout bg-purple tudi">
						<view class="tudi">我的土地</view>
					</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple">
						<view class="jiantou">></view>
					</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px" class="bottom" @click="canku">
				<u-col span="2">
					<view class="demo-layout bg-purple-light">
						<image src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerCanku.png">
					</view>
				</u-col>
				<u-col span="8">
					<view class="demo-layout bg-purple tudi">
						<view class="tudi">我的仓库</view>
					</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple">
						<view class="jiantou">></view>
					</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px" class="bottom" @click="wodyouhui">
				<u-col span="2">
					<view class="demo-layout bg-purple-light">
						<image src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerYouhuiquang.png">
					</view>
				</u-col>
				<u-col span="8">
					<view class="demo-layout bg-purple tudi">
						<view class="tudi">我的优惠</view>
					</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple">
						<view class="jiantou">></view>
					</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px" class="bottom" @click="souhuodizhi">
				<u-col span="2">
					<view class="demo-layout bg-purple-light">
						<image src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerSouhuodizhi.png">
					</view>
				</u-col>
				<u-col span="8">
					<view class="demo-layout bg-purple tudi">
						<view class="tudi">收货地址</view>
					</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple">
						<view class="jiantou">></view>
					</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px" class="bottom" @click="xiaoqihezhuo">
				<u-col span="2">
					<view class="demo-layout bg-purple-light">
						<image src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerSchool.png">
					</view>
				</u-col>
				<u-col span="8">
					<view class="demo-layout bg-purple tudi">
						<view class="tudi">校企合作</view>
					</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple">
						<view class="jiantou">></view>
					</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px" class="bottom" @click="canjianweiti">
				<u-col span="2">
					<view class="demo-layout bg-purple-light">
						<image
							src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerCanjianwenti.png">
					</view>
				</u-col>
				<u-col span="8">
					<view class="demo-layout bg-purple tudi">
						<view class="tudi">常见问题</view>
					</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple">
						<view class="jiantou">></view>
					</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px" class="bottom" @click="nianxiwomen">
				<u-col span="2">
					<view class="demo-layout bg-purple-light">
						<image src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerPhone.png">
					</view>
				</u-col>
				<u-col span="8">
					<view class="demo-layout bg-purple tudi">
						<view class="tudi">联系我们</view>
					</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple">
						<view class="jiantou">></view>
					</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px" class="bottom" @click="zhenxinfupin">
				<u-col span="2">
					<view class="demo-layout bg-purple-light">
						<image src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerFupin.png">
					</view>
				</u-col>
				<u-col span="8">
					<view class="demo-layout bg-purple tudi">
						<view class="tudi">振兴扶贫</view>
					</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple">
						<view class="jiantou">></view>
					</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px" class="bottom" @click="xianxianhuodong">
				<u-col span="2">
					<view class="demo-layout bg-purple-light">
						<image
							src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerXianxianhuodong.png">
					</view>
				</u-col>
				<u-col span="8">
					<view class="demo-layout bg-purple tudi">
						<view class="tudi">线下活动</view>
					</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple">
						<view class="jiantou">></view>
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
				src: "",
				title: "",
				guanzhu: "",
				fenshi: "",
				money: "",
				neijimoney: "",
				jifen: ""
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
				that.guanzhu = res.data.guanzhu
				that.fenshi = res.data.fenshi
				that.money = res.data.money
				that.neijimoney = res.data.neijimoney
				that.jifen = res.data.jifen
			});
		},
		methods: {
			xianxianhuodong(){
				uni.navigateTo({
					url:"/pages/gerenzongxin/xianxiahetong/xianxiahetong"
				})
			},
			zhenxinfupin(){
				uni.navigateTo({
					url:"pages/gerenzongxin/zhenxinfupin/zhenxinfupin"
				})
			},
			nianxiwomen(){
				uni.navigateTo({
					url:"pages/gerenzongxin/nianxiwomen/nianxiwomen"
				})
			},
			xiaoqihezhuo(){
				uni.navigateTo({
					url:"pages/gerenzongxin/xiaoqihezhuo/xiaoqihezhuo"
				})
			},
			souhuodizhi(){
				uni.navigateTo({
					url:"pages/gerenzongxin/souhuodizhi/souhuodizhi"
				})
			},
			wodyouhui(){
				uni.navigateTo({
					url:"/pages/gerenzongxin/jifen/jifen"
				})
			},
			canku(){
				uni.navigateTo({
					url:"/pages/gerenzongxin/canku/canku"
				})
			},
			wodetudi(){
				uni.navigateTo({
					url:"/pages/gerenzongxin/sexiantou/sexiantou?isMe=true"
				})
			},
			canjianweiti(){
				uni.navigateTo({
					url: "/pages/gerenzongxin/souhuo/kefu/kefu"
				})
			},
			kefu(){
				uni.navigateTo({
					url: "/pages/gerenzongxin/souhuo/kefu/kefu"
				})
			},
			yiwancen(){
				uni.navigateTo({
					url: "pages/gerenzongxin/souhuo/souhuo?id=" + "4"
				})
			},
			daisouhuo(){
				uni.navigateTo({
					url: "pages/gerenzongxin/souhuo/souhuo?id=" + "3"
				})
			},
			daijiaoyi(){
				uni.navigateTo({
					url: "pages/gerenzongxin/souhuo/souhuo?id=" + "1"
				})
			},
			daicaozhuo(){
				uni.navigateTo({
					url:"pages/gerenzongxin/souhuo/souhuo?id=" + "2"
				})
			},
			jifenneiji(){
				uni.navigateTo({
					url:"/pages/gerenzongxin/jifen/jifen"
				})
			},
			neijisouyi(){
				uni.navigateTo({
					url:"/pages/gerenzongxin/neijisouyi/neijisouyi"
				})
			},
			qianbao(){
				uni.navigateTo({
				    url: '/pages/gerenzongxin/yuer/yuer'
				});
			},
			sezhi(){
				uni.navigateTo({
				    url: '/pages/gerenzongxin/sezhi/sezhi'
				});
			}
		}
	}
</script>

<style>
	body {
		background-image: url(https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/centerBackerager.png);
		background-size: cover;
		background-repeat: no-repeat;
	}

	.zongBottom {
		box-shadow: 1px 1px 5px #c1c1c1;
		margin-left: 3vw;
		margin-right: 3vw;
		margin-bottom: 30vw;
	}

	.bottom-top {
		margin-top: 5vw;
		padding-top: 3vw;
	}

	.tudi {
		margin-right: -20vw;
	}

	.jiantou {
		text-align: right;
		padding-right: 3vw;
	}

	.bottom {
		background-color: #FFFFFF;
		padding-top: 5vw;

	}

	.bottom image {
		width: 14vw;
		height: 12vw;
	}

	.kefu {
		padding-left: 2vw;
	}

	.padding {
		margin-right: 3vw;
	}

	.center .demo-layout {
		margin-right: 1vw;
		width: 30vw;
	}

	.center {
		margin-top: 6vw;
		margin-left: 12vw;
	}

	.center image {
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
</style>
