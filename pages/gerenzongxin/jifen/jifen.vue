<template>
	<view class="page flex-col">
		<view class="section1 flex-col">
			<view class="layer1 flex-row">
				<view class="main1 flex-col"></view>
				<text class="txt1">热门好货</text>
			</view>
			<view class="layer2 flex-col">
				<view class="outer1 flex-col" v-for="(item, index) in loopData0" :key="index" @click="remenhaohuo(item.id)">
					<view class="layer3 flex-row">
						<view class="layer4 flex-col">
							<view class="bd1 flex-col">
								<image class="imagess" :src="item.images">
			 			</view>
						</view>
						<view class="layer5 flex-col">
							<text class="word1" v-html="item.lanhutext0"></text>
							<text class="word2" v-html="item.lanhutext1"></text>
							<view class="block1">
								<text class="word3" v-html="item.lanhutext2"></text>
								<text class="info1" v-html="item.lanhutext3"></text>
							</view>
						</view>
					</view>
				</view>
			</view>

		</view>
		<view class="section2 flex-col" style="background-size: 110%;">
			<view class="section3 flex-col">
				<view class="bd2 flex-col">
					<view class="outer2 flex-row">
						<view class="box1">

						</view>


					</view>
				</view>
				<view class="bd3 flex-row">
					<image class="label1" @click="fanhui()" referrerpolicy="no-referrer"
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4629f77fba918ef594b99600634ff75ca1f41f9efacf1cb9b0605413b8234f01" />
					<text class="word6">积分</text>
				</view>
				<image class="label2" referrerpolicy="no-referrer"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng74b543e63e3ccb0eebddf5a5bca2dfd4d84463f95eae4bb96c95bb4628ba95cd" />
				<text class="txt2">可用积分</text>
			</view>
			<text class="info2">{{jifen}}</text>
		</view>
		<view class="section4 flex-col">
			<view class="mod1 flex-row">
				<text class="txt3">本月新增</text>
				<text class="word7">已兑换</text>
			</view>
			<view class="mod2 flex-row">
				<text class="word8">{{benyxinzhen}}</text>
				<text class="txt4">{{yiduihuan}}</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				loopData0: "",
				jifen:"",
				benyxinzhen:"",
				yiduihuan:"",
				constants: {}
			};
		},
		onLoad() {
			const value = uni.getStorageSync('token');
			let that = this;
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/jifen', {}, {
				token: value
			}).then(res => {
				console.log(res);
				that.jifen = res.data.jifen
				that.benyxinzhen = res.data.benyxinzhen
				that.yiduihuan = res.data.yiduihuan
				that.loopData0 = res.data.loopData0
			});
		},
		methods: {
			fanhui(){
				uni.navigateBack({
					
				})
			},
			remenhaohuo(e){
				console.log(e)
				uni.navigateTo({
					url:"/pages/gerenzongxin/jifen/shop/shop?id" + e
				})
			}
		}
	};
</script>
<style>
	@import './common.css';
	@import './index.rpx.css';

	.imagess {
		width: 30vw;
		height: 30vw;
	}
</style>
