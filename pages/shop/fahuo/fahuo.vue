<template>
	<view class="page flex-col">
		<view class="layer1 flex-col">
			<view v-if="!xuyaofahuo">
				<view class="waiwei">
					<image referrerpolicy="no-referrer"
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb34207023495353d3946e8fbcbc3aa52d6c20ec50f076b8152933ec16bcc8097" />
					<text>提醒：此件商品不需发货，将直接用于线下土地</text>
				</view>
			</view>
			<view class="mod2 flex-col" v-if="xuyaofahuo">
				<view class="block1 flex-row" v-show="address" v-if="xuyaofahuo" style="padding-bottom: 15vw;"
					@click="xiougaisouhuodizhi">
					<view style="width: 100%;padding-bottom: 20vw;">
						<u-row gutter="16">
							<u-col span="2">
								<view class="demo-layout bg-purple">

									<u-avatar :text="morendizhi.name"></u-avatar>
								</view>
							</u-col>
							<u-col span="9">
								<view class="demo-layout bg-purple-light">
									<view>{{morendizhi.name}} {{morendizhi.phone}}</view>
									<view class="yicu">{{morendizhi.address}}</view>
								</view>
							</u-col>
							<u-col span="1">
								<view class="demo-layout bg-purple-dark">
									<u-icon name="arrow-right" size="50" color="#acacac"></u-icon>
								</view>
							</u-col>
						</u-row>

					</view>
				</view>
				<view class="block1 flex-row" v-show="!address" v-if="xuyaofahuo" @click="tianxiedizhi">
					<image class="label2" referrerpolicy="no-referrer"
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5525a79f0f4ab2d9da8fb679a906313f43460186f23503821143059c4b2c63f4" />
					<text class="word4">请填写地址</text>
					<image class="label3" referrerpolicy="no-referrer"
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng38215268ff387ace6091d27b56bbceb5726a260c085c383876a884b898d86861" />
				</view>
			</view>
			<view class="mod3 flex-col">
				<view class="layer2 flex-col">
					<view class="outer1 flex-row">
						<view class="block2 flex-col">
							<image class="pic1" referrerpolicy="no-referrer" :src="images" />
						</view>
						<view class="block3 flex-col">
							<text class="infoBox1">
								{{title}}
							</text>
							<text class="txt1">¥{{jiage}}</text>
						</view>
					</view>
					<view class="outer2 flex-row">
						<text class="word5">购买数量</text>
						<view class="main1 flex-col">
							<view class="box1 flex-row">
								<view class="main2 flex-col" @click="jiansao()"></view>
								<view class="main3 flex-col"></view>
								<text class="word6">{{muqianjianshu}}</text>
								<view class="main4 flex-col" @click="zhenjia()"></view>
								<image class="icon2" referrerpolicy="no-referrer"
									src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1109f8f9be8c6ab96a6350f5fb457c7f04287cef44bdfdabe07b054bfa3340b8" />
							</view>
						</view>
					</view>
					<view class="outer3 flex-row">
						<text class="info1">配送方式</text>
						<text class="word7">{{peisongfansi}}</text>
					</view>
					<view class="outer4 flex-row" style="width: 100%;">
						<text class="info2">备注</text>
						<u-input v-model="beizhu" height="35" style="margin-left: 2vw;" />
					</view>
					<view class="outer5">
						<text class="info4">共{{muqianjianshu}}件，共计：</text>
						<text class="info5">¥{{muqianjianshu * jiage +peisongfei }}</text>
					</view>
				</view>
			</view>
			<view class="mod4 flex-col">
				<view class="main5 flex-row">
					<text class="info6" style="margin-right: 5vw;">合计：¥{{muqianjianshu * jiage +peisongfei}}</text>
					<button class="bd7 flex-col" @click="show = true" style="margin-right: 5vw;">
						<text class="word8">提交订单</text>

					</button>
				</view>
			</view>
		</view>
		<u-action-sheet :list="list"  @click="click" v-model="show"></u-action-sheet>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				constants: {},
				address: true,
				xuyaofahuo: true,
				id: "",
				morendizhi: "",
				images: "",
				title: "",
				jiage: "",
				peisongfansi: "免配送费",
				peisongfei: "",
				muqianjianshu: 1,
				jianshu: 23,
				beizhu: "",
				reFresh: "",
				show: false,
				list: [{
					text: '支付宝支付'
				}, {
					text: '微信支付'
				}],
			};
		},
		watch: {
			//监听reFresh,如果有修改就执行监听器
			reFresh: function() {
				// 调初始化页面的接口
				this.morendizhi = uni.getStorageSync("morensouhuodizhi")
				console.log("页面已重新加载");
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://api.wkkin.cn/index.php/shop/fahuo?id=' +
					this.id, {}, {
						token: value
					}).then(res => {
					console.log(res);
					this.address = res.data.address
					this.xuyaofahuo = res.data.xuyaofahuo
					this.morendizhi = res.data.morendizhi
					this.images = res.data.images
					this.title = res.data.title
					this.jiage = res.data.jiage
					this.peisongfei = res.data.peisongfei
					if (this.peisongfei == 0) {
						this.peisongfansi = "免配送费"
					} else {
						this.peisongfansi = "配送费" + this.peisongfei + "元"
					}
					this.jianshu = res.data.jianshu
					console.log("333333333333333333")
					this.$forceUpdate()
				});
				
			}
		},
		onLoad(option) {
			this.id = option.id;
			const value = uni.getStorageSync('token');
			let that = this;
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('https://api.wkkin.cn/index.php/shop/fahuo?id=' + this
			.id, {}, {
				token: value
			}).then(res => {
				console.log(res);
				this.address = res.data.address
				this.xuyaofahuo = res.data.xuyaofahuo
				this.morendizhi = res.data.morendizhi
				this.images = res.data.images
				this.title = res.data.title
				this.jiage = res.data.jiage
				this.peisongfei = res.data.peisongfei
				if (this.peisongfei == 0) {
					this.peisongfansi = "免配送费"
				} else {
					this.peisongfansi = "配送费" + this.peisongfei + "元"
				}
				this.jianshu = res.data.jianshu
			});
		},
		methods: {
			tianxiedizhi() {
				uni.navigateTo({
					url: "/pages/gerenzongxin/souhuodizhi/xiougaisouhuodizhi/xiougaisouhuodizhi?id=-1"
				})
			},
			xiougaisouhuodizhi() {
				uni.navigateTo({
					url: "/pages/shop/fahuo/souhuodizhi/souhuodizhi"
				})
			},
			jiansao() {
				console.log(33)
				if (this.muqianjianshu <= 1) {

				} else {
					this.muqianjianshu--
				}
			},
			zhenjia() {
				if (this.muqianjianshu >= this.jianshu) {

				} else {
					this.muqianjianshu++
				}
			},
			click(index){
				console.log(`点击了第${index + 1}项，内容为：${this.list[index].text}`)
				if(index == 0){
					uni.requestPayment({
						provider: 'alipay',
						orderInfo: 'orderInfo', //微信、支付宝订单数据 【注意微信的订单信息，键值应该全部是小写，不能采用驼峰命名】
						success: function(res) {
							console.log('success:' + JSON.stringify(res));
						},
						fail: function(err) {
							console.log('fail:' + JSON.stringify(err));
						}
					});
				}
				if(index == 1){
					uni.requestPayment({
						provider: 'wxpay',
						orderInfo: 'orderInfo', //微信、支付宝订单数据 【注意微信的订单信息，键值应该全部是小写，不能采用驼峰命名】
						success: function(res) {
							console.log('success:' + JSON.stringify(res));
						},
						fail: function(err) {
							console.log('fail:' + JSON.stringify(err));
						}
					});
				}
			},
			onClick_1() {
				uni.requestPayment({
					provider: 'alipay',
					orderInfo: 'orderInfo', //微信、支付宝订单数据 【注意微信的订单信息，键值应该全部是小写，不能采用驼峰命名】
					success: function(res) {
						console.log('success:' + JSON.stringify(res));
					},
					fail: function(err) {
						console.log('fail:' + JSON.stringify(err));
					}
				});
			}
		}
	};
</script>
<style>
	@import './common.css';
	@import './index.rpx.css';

	.yicu {
		// 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
		display: -webkit-box;
		// 设置或检索伸缩盒对象的子元素的排列方式 。
		-webkit-box-orient: vertical;
		// 用省略号“…”隐藏超出范围的文本 。
		text-overflow: ellipsis;
		overflow: hidden;
		//用来限制在一个块元素显示的文本的行数。
		-webkit-line-clamp: 3;
		line-height: 50upx;

	}

	.waiwei {
		margin-top: 2vw;
		text-align: center;
		background: #98bc88;
		border-radius: 6px;
		padding: 2vw;
		margin-left: 2vw;
		margin-right: 2vw;
	}

	.waiwei image {
		width: 5vw;
		height: 5vw;
		margin-bottom: -1vw;
	}

	.waiwei text {
		margin-bottom: 2vw;
	}
</style>
