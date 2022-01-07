<template>
	<view>
		<view>
			<image class="image"
				:src="image" />
			<view class="body">
				<view class="jiage"><text class="xiaod">￥</text><text class="jiageshumu"> {{jiagex1ianmuxiao01}}</text> <text
						class="xiaod">元起</text></view>
				<view class="title">{{title}}</view>
				<view class="xuanzhedikuai">选择地块</view>
				<view class="sku">
					<u-row gutter="16" class="u-row">
						<u-col span="4">
							<view class="kexuan">
								<u-row gutter="16">
									<u-col span="3">
										<image
											src="https://nye.oss-cn-beijing.aliyuncs.com/kexuan.png" />
									</u-col>
									<u-col span="4">
										<view class="kexuan1">可选</view>
									</u-col>
								</u-row>
							</view>
						</u-col>
						<u-col span="4">
							<view class="kexuan">
								<u-row gutter="16">
									<u-col span="3">
										<image
											src="https://nye.oss-cn-beijing.aliyuncs.com/xuanzong.png" />
									</u-col>
									<u-col span="4">
										<view class="kexuan1">选中</view>
									</u-col>
								</u-row>
							</view>
						</u-col>
						<u-col span="4">
							<view class="kexuan">
								<u-row gutter="16">
									<u-col span="3">
										<image
											src="https://nye.oss-cn-beijing.aliyuncs.com/yizhu.png" />
									</u-col>
									<u-col span="4">
										<view class="kexuan1">已租</view>
									</u-col>
								</u-row>
							</view>
						</u-col>
					</u-row>
				</view>
				<u-row gutter="16" class="xiafan">
					<u-col span="1" class="weixianzong03">
						<view>
							<image class="weixuanzong01" :src="xuanzongImg01">
								<view>
									<u-checkbox-group class="group">
										<u-checkbox active-color="#55aa00" v-model="xuanzong01"  :disabled="xuanzongDisable01"
											@change="checkboxChange01()"></u-checkbox>
									</u-checkbox-group>
								</view>
						</view>
					</u-col>
					<u-col span="1" class="weixianzong03">
						<view>
							<image class="weixuanzong01" :src="xuanzongImg02">
								<u-checkbox-group class="group">
									<u-checkbox active-color="#55aa00" v-model="xuanzong02" :disabled="xuanzongDisable02"
										@change="checkboxChange02()"></u-checkbox>
								</u-checkbox-group>
						</view>
					</u-col>
					<u-col span="1" class="weixianzong03">
						<view>
							<image class="weixuanzong01" :src="xuanzongImg03">
								<u-checkbox-group class="group">
									<u-checkbox active-color="#55aa00" v-model="xuanzong03" :disabled="xuanzongDisable03"
										@change="checkboxChange03()"></u-checkbox>
								</u-checkbox-group>
						</view>
					</u-col>
					<u-col span="1" class="weixianzong03">
						<view>
							<image class="weixuanzong01" :src="xuanzongImg04">
								<u-checkbox-group class="group">
									<u-checkbox active-color="#55aa00" v-model="xuanzong04" :disabled="xuanzongDisable04"
										@change="checkboxChange04()"></u-checkbox>
								</u-checkbox-group>
						</view>
					</u-col>
					<u-col span="1" class="weixianzong03">
						<view>
							<image class="weixuanzong01" :src="xuanzongImg05">
								<u-checkbox-group class="group">
									<u-checkbox active-color="#55aa00" v-model="xuanzong05" :disabled="xuanzongDisable05"
										@change="checkboxChange05()"></u-checkbox>
								</u-checkbox-group>
						</view>
					</u-col>
					<u-col span="1" class="weixianzong03">
						<view>
							<image class="weixuanzong01" :src="xuanzongImg06">
								<u-checkbox-group class="group">
									<u-checkbox active-color="#55aa00" v-model="xuanzong06" :disabled="xuanzongDisable06"
										@change="checkboxChange06()"></u-checkbox>
								</u-checkbox-group>
						</view>
					</u-col>
					<u-col span="1" class="weixianzong03">
						<view>
							<image class="weixuanzong01" :src="xuanzongImg07">
								<u-checkbox-group class="group">
									<u-checkbox active-color="#55aa00" v-model="xuanzong07" :disabled="xuanzongDisable07"
										@change="checkboxChange07()"></u-checkbox>
								</u-checkbox-group>
						</view>
					</u-col>
					<u-col span="1" class="weixianzong03">
						<view>
							<image class="weixuanzong01" :src="xuanzongImg08">
								<u-checkbox-group class="group">
									<u-checkbox active-color="#55aa00" v-model="xuanzong08" :disabled="xuanzongDisable08"
										@change="checkboxChange08()"></u-checkbox>
								</u-checkbox-group>
						</view>
					</u-col>
				</u-row>
				<view class="success">
					<u-button type="success" @click="zhunin" size="medium">立即租赁</u-button>
					<u-top-tips ref="uTips"></u-top-tips>
				</view>
			</view>
		</view>
		<u-toast ref="uToast" />
		<u-action-sheet :list="list" @click="click" v-model="show"></u-action-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				xuanzong01: false,
				xuanzong02: false,
				xuanzong03: false,
				xuanzong04: false,
				xuanzong05: false,
				xuanzong06: false,
				xuanzong07: false,
				xuanzong08: false,
				xuanzongImg01: "https://nye.oss-cn-beijing.aliyuncs.com/shuweixuanzong.png",
				xuanzongImg02: "https://nye.oss-cn-beijing.aliyuncs.com/shuweixuanzong.png",
				xuanzongImg03: "https://nye.oss-cn-beijing.aliyuncs.com/shuweixuanzong.png",
				xuanzongImg04: "https://nye.oss-cn-beijing.aliyuncs.com/shuweixuanzong.png",
				xuanzongImg05: "https://nye.oss-cn-beijing.aliyuncs.com/shuweixuanzong.png",
				xuanzongImg06: "https://nye.oss-cn-beijing.aliyuncs.com/shuweixuanzong.png",
				xuanzongImg07: "https://nye.oss-cn-beijing.aliyuncs.com/shuweixuanzong.png",
				xuanzongImg08: "https://nye.oss-cn-beijing.aliyuncs.com/shuweixuanzong.png",
				weixuanzong: "https://nye.oss-cn-beijing.aliyuncs.com/shuweixuanzong.png",
				xuanzong: "https://nye.oss-cn-beijing.aliyuncs.com/shexiantou03.png",
				yicuzhu: "https://nye.oss-cn-beijing.aliyuncs.com/shexiantou02.png",
				image: "",
				jiagex1ianmuxiao01:"",
				title: "",
				xuanzongDisable01: false,
				xuanzongDisable02: false,
				xuanzongDisable03: false,
				xuanzongDisable04: false,
				xuanzongDisable05: false,
				xuanzongDisable06: false,
				xuanzongDisable07: false,
				xuanzongDisable08: false,
				list: [{
					text: '支付宝'
				}, {
					text: '微信'
				}],
				show: false
			}
		},
		onLoad(option) {
			let that = this;
			let token = uni.getStorageSync("token");
			this.$u.get('https://api.wkkin.cn/index.php/sexiantou/dikuaixianqin?id='+ option.id, {}, {
				token: token
			}).then(res => {
				console.log(res);
				that.image = res.data.image
				that.jiagex1ianmuxiao01 = res.data.jiage
				that.title = res.data.title
				that.xuanzong01 = res.data.dikuangxianqing01
				that.xuanzong02 = res.data.dikuangxianqing02
				that.xuanzong03 = res.data.dikuangxianqing03
				that.xuanzong04 = res.data.dikuangxianqing04
				that.xuanzong05 = res.data.dikuangxianqing05
				that.xuanzong06 = res.data.dikuangxianqing06
				that.xuanzong07 = res.data.dikuangxianqing07
				that.xuanzong08 = res.data.dikuangxianqing08
				if(that.xuanzong01 == "true"){
					that.xuanzongImg01 = that.yicuzhu
					that.xuanzongDisable01 = true;
				}
				if(that.xuanzong02 == "true"){
					that.xuanzongImg02 = that.yicuzhu
					that.xuanzongDisable02 = true;
				}
				if(that.xuanzong03 == "true"){
					that.xuanzongImg03 = that.yicuzhu
					that.xuanzongDisable03 = true;
				}
				if(that.xuanzong04 == "true"){
					that.xuanzongImg04 = that.yicuzhu
					that.xuanzongDisable04 = true;
				}
				if(that.xuanzong05 == "true"){
					that.xuanzongImg05 = that.yicuzhu
					that.xuanzongDisable05 = true;
				}
				if(that.xuanzong06 == "true"){
					that.xuanzongImg06 = that.yicuzhu
					that.xuanzongDisable06 = true;
				}
				if(that.xuanzong07 == "true"){
					that.xuanzongImg07 = that.yicuzhu
					that.xuanzongDisable07 = true;
				}
				if(that.xuanzong08 == "true"){
					that.xuanzongImg08 = that.yicuzhu
					that.xuanzongDisable08 = true;
				}
				that.xuanzong01 = false
				that.xuanzong02 = false
				that.xuanzong03 = false
				that.xuanzong04 = false
				that.xuanzong05 = false
				that.xuanzong06 = false
				that.xuanzong07 = false
				that.xuanzong08 = false
			});
		},
		
		methods: {
			checkboxChange01() {
				this.xuanzong01 = true
				console.log(222);
				if (this.xuanzongImg01 == this.weixuanzong) {
					this.xuanzongImg01 = this.xuanzong;
				} else {
					this.xuanzongImg01 = this.weixuanzong
				}
			},
			checkboxChange02() {
				console.log(222);
				if (this.xuanzongImg02 == this.weixuanzong) {
					this.xuanzongImg02 = this.xuanzong;
				} else {
					this.xuanzongImg02 = this.weixuanzong
				}
			},
			checkboxChange03() {
				console.log(222);
				if (this.xuanzongImg03 == this.weixuanzong) {
					this.xuanzongImg03 = this.xuanzong;
				} else {
					this.xuanzongImg03 = this.weixuanzong
				}
			},
			checkboxChange04() {
				console.log(222);
				if (this.xuanzongImg04 == this.weixuanzong) {
					this.xuanzongImg04 = this.xuanzong;
				} else {
					this.xuanzongImg04 = this.weixuanzong
				}
			},
			checkboxChange05() {
				console.log(222);
				if (this.xuanzongImg05 == this.weixuanzong) {
					this.xuanzongImg05 = this.xuanzong;
				} else {
					this.xuanzongImg05 = this.weixuanzong
				}
			},
			checkboxChange06() {
				console.log(222);
				if (this.xuanzongImg06 == this.weixuanzong) {
					this.xuanzongImg06 = this.xuanzong;
				} else {
					this.xuanzongImg06 = this.weixuanzong
				}
			},
			checkboxChange07() {
				console.log(222);
				if (this.xuanzongImg07 == this.weixuanzong) {
					this.xuanzongImg07 = this.xuanzong;
				} else {
					this.xuanzongImg07 = this.weixuanzong
				}
			},
			checkboxChange08() {
				console.log(222);
				if (this.xuanzongImg08 == this.weixuanzong) {
					this.xuanzongImg08 = this.xuanzong;
				} else {
					this.xuanzongImg08 = this.weixuanzong
				}
			},
			click(index) {
				console.log(`点击了第${index + 1}项，内容为：${this.list[index].text}`)
				if (index == 0) {
					let orderInfo = "alipay_sdk=alipay-sdk-php-20161101&app_id=app_id&biz_content=%7B%22body%22%3A%22DCloud%E8%87%B4%E5%8A%9B%E4%BA%8E%E6%89%93%E9%80%A0HTML5%E6%9C%80%E5%A5%BD%E7%9A%84%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7%EF%BC%8C%E5%8C%85%E6%8B%AC%E7%BB%88%E7%AB%AF%E7%9A%84Runtime%E3%80%81%E4%BA%91%E7%AB%AF%E7%9A%84%E6%9C%8D%E5%8A%A1%E5%92%8CIDE%EF%BC%8C%E5%90%8C%E6%97%B6%E6%8F%90%E4%BE%9B%E5%90%84%E9%A1%B9%E9%85%8D%E5%A5%97%E7%9A%84%E5%BC%80%E5%8F%91%E8%80%85%E6%9C%8D%E5%8A%A1%E3%80%82%22%2C%22subject%22%3A+%22DCloud%E9%A1%B9%E7%9B%AE%E6%8D%90%E8%B5%A0%22%2C%22out_trade_no%22%3A+%2220220103221748%22%2C%22timeout_express%22%3A+%2230m%22%2C%22total_amount%22%3A+%221%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%7D&charset=UTF-8&format=json&method=alipay.trade.app.pay&notify_url=%25E5%2595%2586%25E6%2588%25B7%25E5%25A4%2596%25E7%25BD%2591%25E5%258F%25AF%25E4%25BB%25A5%25E8%25AE%25BF%25E9%2597%25AE%25E7%259A%2584%25E5%25BC%2582%25E6%25AD%25A5%25E5%259C%25B0%25E5%259D%2580&sign_type=RSA2&timestamp=2022-01-03+22%3A17%3A48&version=1.0&sign=";
					uni.requestPayment({
						provider: 'alipay',
						orderInfo: orderInfo, //微信、支付宝订单数据 【注意微信的订单信息，键值应该全部是小写，不能采用驼峰命名】
						success: function(res) {
							console.log('success:' + JSON.stringify(res));
						},
						fail: function(err) {
							console.log('fail:' + JSON.stringify(err));
						}
					});
				}
				if (index == 1) {
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
			zhunin(){
				this.show = true;
				// console.log(32333)
				// let that = this;
				// let token = uni.getStorageSync("token");
				// let unni = uni;
				// // 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				// 			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/savezhunin?num1=' + this.xuanzong01 + "&num2=" + this.xuanzong02 + "&num3=" + this.xuanzong03 + "&num4=" + this.xuanzong04 + "&num5=" + this.xuanzong05 + "&num6=" + this.xuanzong06 + "&num7=" + this.xuanzong07 + "&num8=" + this.xuanzong08  , {}, {
				// 				token: token
				// 			}).then(res => {
				// 				console.log(res);
				// 				that.$refs.uTips.show({
				// 								title: '购买成功',
				// 								type: 'success',
				// 								duration: '2300'
				// 							})
				// 				setTimeout(()=>{
				// 					uni.reLaunch({
				// 					    url: '/pages/shexiantou/shexiantou'
				// 					})
				// 				}, 3000)
								
				// 			});
			}
		}
	}
</script>

<style>
	.success {
		margin-right: 0;
		text-align: right;
		padding-top: 5vw;
		padding-right: 9vw;
	}

	.weixianzong03 {
		margin-right: 3vw;
	}

	.group {
		margin-left: 3vw;
	}

	.xiafan {
		padding-top: 6vw;
		margin-right: 3vw;
	}

	.weixuanzong01 {
		width: 150%;
		height: 35vw;
	}

	.sku {
		padding-top: 3vw;
	}

	.kexuan1 {
		padding-bottom: 1vw;
	}

	.u-row {
		text-align: center;
	}

	.kexuan image {
		width: 5vw;
		height: 5vw;
	}

	.xuanzhedikuai {
		font-size: 6vw;
		margin-top: 10vw;
	}

	.title {
		padding-top: 2vw;
		font-size: 6vw;
		font-weight: 500;
	}

	.jiageshumu {
		font-size: 6vw;
		padding-left: 1vw;
		padding-right: 1vw;
		color: #DD6161;
		font-weight: 500;
	}

	.xiaod {
		font-size: 3vw;
	}

	.body {
		padding: 5vw;
	}

	.image {
		width: 100%;
	}
</style>
