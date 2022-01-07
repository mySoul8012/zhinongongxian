<template>
	<view class="page flex-col">
		<view class="mod1 flex-col">
			<view class="layer2 flex-col">
				<view class="box1 flex-row">
					<view class="section1 flex-col">
						<view class="mod3 flex-col">
							<image class="pic1" referrerpolicy="no-referrer"
								:src="images" />
						</view>
					</view>
					<view class="section2 flex-col">
						<text class="info2">{{title}}</text>
						<text class="word3">{{kuaididanhao}}</text>
						<view class="main1 flex-row">
							<button class="group7 flex-col" @click="onClick_1">
								<text class="word4">复制</text>
							</button>
							<text class="word5">{{jianshu}}件商品</text>
						</view>
					</view>
				</view>
			</view>
			<ali :state="alidata2.state" :datas="alidata2.data" :ways="alidata2.information"></ali>
		</view>
	</view>
</template>
<script>
	import ali from '../../../../components/WuLiu-step/WuLiu-step.vue';
	export default {
		components: {
			ali
		},
		data() {
			return {
				constants: {},
				alidata2: "",
				id:"",
				title:"",
				kuaididanhao:"",
				images:"",
				jianshu:""
			};
		},
		onLoad(option) {
			console.log(option.id)
			this.id = option.id
			// 待交易
			const value = uni.getStorageSync('token');
			let that = this;
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/cakanwuniou?id=' + this.id, {}, {
				token: value
			}).then(res => {
				console.log(res);
				that.alidata2 = res.data.alidata2;
				that.title = res.data.title
				that.kuaididanhao = res.data.kuaididanhao
				that.images = res.data.images
				that.jianshu = res.data.jianshu
			});
		},
		methods: {
			onClick_1() {
				uni.setClipboardData({
				    data: this.kuaididanhao,
				    success: function () {
				        console.log('success');
				    }
				});
			}
		}
	};
</script>
<style>
	@import './common.css';
	@import './index.rpx.css';
</style>
