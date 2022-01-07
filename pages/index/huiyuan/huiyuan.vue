<template>
	<view class="page flex-col">
		<view class="fanhui" @click="fanhui"></view>
		<view class="group1 flex-col">
			<view class="bd1 flex-col">
				<view class="main1 flex-col">
					<view class="layer1 flex-col">
						<view class="layer2 flex-row">
							<view class="bd2">
								<text class="txt1">9:4</text>
								<text class="word1">1</text>
							</view>
							<view class="bd3 flex-col"></view>
							<view class="bd4 flex-col"></view>
							<image class="label1" referrerpolicy="no-referrer"
								src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng7c371ddedb0f192c948d81e33b4f6db6925d7eab4e2172f54a9c0421233ea5bd" />
						</view>
					</view>
					<text class="info1">会员</text>
					<view class="layer3 flex-row">
						<view class="block1 flex-col"></view>
						<view class="block2 flex-col">
							<text class="info2">{{phone}}</text>
							<text class="txt2">{{kaitong01}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="bd5">
				<text class="txt3">尊享会员享</text>
				<text class="info3">9</text>
				<text class="word2">大特权</text>
			</view>
			<view class="bd6 flex-row">
				<view class="box1 flex-col" v-for="(item, index) in loopData0" :key="index">
					<view class="bd7 flex-col">
						<view class="bd8 flex-col" :style="{ background: item.lanhuBg2 }">
							<text v-if="item.slot1 === 1" class="word3">9</text>
						</view>
						<text class="word4" v-html="item.lanhutext0"></text>
					</view>
				</view>
			</view>
		</view>
		<view class="group2 flex-col">
			<view class="main2 flex-row">
				<text class="info4">会员·尊享版</text>
				<view class="main3">
					<text class="txt4">最低¥</text>
					<text class="info5">15</text>
					<text class="word5">/月</text>
				</view>
			</view>
			<view class="main4 flex-row">
				<view class="wrap1 flex-col">
					<view class="box2 flex-col"></view>
					<view class="box3">
						<text class="txt5">每月可享受</text>
						<text class="word6">九大</text>
						<text class="info6">权益</text>
					</view>
				</view>
				<view class="wrap2 flex-col" @click="kaitong"><text class="txt6">{{kaitong02}}</text></view>
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
				loopData0: [{
						lanhuBg2: 'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5456bf60ba9e749b6a4452d7d8b32bd0601ec738a7ec721e1ae78de8d2c236b5) -4px -4px no-repeat',
						lanhutext0: '独立摄像头'
					},
					{
						lanhuBg2: 'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb1d88997b1b9dae5bb5d683c2dd0c88b7d538422382625551fb3fe96bb785b98) -4px -4px no-repeat',
						lanhutext0: '专属庄园'
					},
					{
						lanhuBg2: 'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb1d0c5503528304272e3cf43bc654e967f5efc048900123a8f9fa0b604500663) -4px -4px no-repeat',
						lanhutext0: '免费管理'
					},
					{
						lanhuBg2: 'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb2efc796f8bd8baa705fcd437310d76e40fcebf0e24e62075f64c0865cf0629b) -4px -4px no-repeat',
						lanhutext0: '免费保险'
					},
					{
						lanhuBg2: 'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc48286a789f4346e5de37149d9b856b65fb054fd7a8ccf3141fd984a00e7b8c9) -4px -4px no-repeat',
						lanhutext0: '同省免费配送'
					},
					{
						lanhuBg2: 'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2439de1c177ee858fe8ef54cb8f5ee1b246b588d9b17e80db7ccb7e0d2008655) -4px -4px no-repeat',
						lanhutext0: '天天送商品'
					},
					{
						lanhuBg2: 'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdb18a3e4e04d7d06e290e94bb4187db7b4dcb51cda27739d9f164697cb698df5) -4px -4px no-repeat',
						lanhutext0: '积分翻倍'
					},
					{
						lanhuBg2: 'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng342bf0d7645841bf382690c70944612ac489c070cf7b99c97e960ca8d6a44556) -4px -4px no-repeat',
						lanhutext0: '享9折优惠',
						slot1: 1
					},
					{
						lanhuBg2: 'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng744aa4084e51aec45a15212b7c7ee2e0cea4c842cf0e3ea807303d76412697e0) -4px -4px no-repeat',
						lanhutext0: '保护仓库'
					}
				],
				constants: {},
				phone: "",
				isHuiyuan: true,
				kaitong01: "未开通",
				kaitong02: "立即开通",
				list: [{
					text: '支付宝'
				}, {
					text: '微信'
				}],
				show: false
			};
		},
		onLoad() {
			const value = uni.getStorageSync('token');
			let that = this;
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/huiyuan', {}, {
				token: value
			}).then(res => {
				console.log(res);
				that.phone = res.data.phone;
				that.isHuiyuan = res.data.isHuiyuan
				if (that.isHuiyuan) {
					that.kaitong01 = "已开通"
					that.kaitong02 = "已开通"
				} else {
					that.kaitong01 = " 未开通",
						that.kaitong02 = "立即开通"
				}
			});
		},
		methods: {
			click(index) {
				console.log(`点击了第${index + 1}项，内容为：${this.list[index].text}`)
				if (index == 0) {
					let orderInfo = "alipay_sdk=alipay-sdk-php-20161101&app_id=2015112700878442&biz_content=%7B%22body%22%3A%22DCloud%E8%87%B4%E5%8A%9B%E4%BA%8E%E6%89%93%E9%80%A0HTML5%E6%9C%80%E5%A5%BD%E7%9A%84%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7%EF%BC%8C%E5%8C%85%E6%8B%AC%E7%BB%88%E7%AB%AF%E7%9A%84Runtime%E3%80%81%E4%BA%91%E7%AB%AF%E7%9A%84%E6%9C%8D%E5%8A%A1%E5%92%8CIDE%EF%BC%8C%E5%90%8C%E6%97%B6%E6%8F%90%E4%BE%9B%E5%90%84%E9%A1%B9%E9%85%8D%E5%A5%97%E7%9A%84%E5%BC%80%E5%8F%91%E8%80%85%E6%9C%8D%E5%8A%A1%E3%80%82%22%2C%22subject%22%3A+%22DCloud%E9%A1%B9%E7%9B%AE%E6%8D%90%E8%B5%A0%22%2C%22out_trade_no%22%3A+%2220220103190538%22%2C%22timeout_express%22%3A+%2230m%22%2C%22total_amount%22%3A+%221%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%7D&charset=UTF-8&format=json&method=alipay.trade.app.pay&notify_url=http%253A%252F%252Fdemo.dcloud.net.cn%252Fpayment%252Falipay%252Fnotify.php&sign_type=RSA2&timestamp=2022-01-03+19%3A05%3A38&version=1.0&sign=iz5aGTHCqV4V2T9JeVZkjCtRL171RFXrDu%2Fz5TkrOk7m%2FLppF5nuZ%2FaI%2BijY6fHhi0kVLFOeCQKkUxEp1Ex1W%2FE%2FrslMeK2ikfFYRjViAXvFXKLZBACZ0lXSxtqd15aZlwom6viWSPMhHxLygTz17FtpkQL3rNRjbQPdMZjd8eOSU8QM%2By%2FbNiYILVrHzZgL8Hpq2FWP3Ab7mryOASBGvPa4emk1Dff4Nqtr9SWwOWCZaQoPLiEXu5erm%2B%2F6znNIxdDXr07RqywbKrXNC2xniWifCy%2BSiFmMr5N3gpBt52YKzkkrt3QO8NKUeEQ7G5%2BALw%2F9%2B02dr1suTVNdR%2FPARQ%3D%3D";
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
			kaitong() {
				if (this.isHuiyuan) {
					this.$refs.uToast.show({
						title: '你已开通了哦！',
						type: 'error'
					})
				} else {
					this.show = true
				}
			},
			fanhui() {
				uni.navigateBack({

				})
			}
		}
	};
</script>
<style>
	@import './common.css';
	@import './index.rpx.css';

	.fanhui {
		position: absolute;
		top: 5vw;
		width: 20vw;
		height: 20vw;
		z-index: 999999;
	}
</style>
