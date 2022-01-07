<template>
	<view class="page flex-col">
		<view class="section1 flex-col">
				<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>

			<view class="mod4 flex-col" v-for="neijisouy in neijisouyi">
				<view class="bd1 flex-col">
					<u-row gutter="16">
						<u-col span="2">
							<view class="demo-layout bg-purple">
								<image :src="neijisouy.images" />
							</view>
						</u-col>
						<u-col span="10">
							<view class="demo-layout bg-purple-light"><text class="info4">{{neijisouy.title}}</text>
								<text class="info5">个数：{{neijisouy.geshu}}</text>
								<text class="info6">¥{{neijisouy.soujiao}}</text>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>

		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				constants: {},
				neijisouyi: "",
				list: [{
					name: '全部'
				}, {
					name: '瓜果'
				}, {
					name: '畜牧'
				}],
				current: 0
			};
		},
		onLoad() {
			const value = uni.getStorageSync('token');
			let that = this;
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/neijisouyi', {}, {
				token: value
			}).then(res => {
				console.log(res);
				that.neijisouyi = res.data
			});
		},
		methods: {
			change(index) {
				this.current = index;
				console.log(index)
				if(index == 0){
					this.quanbu()
				}
				if(index == 1){
					this.guanguo()
				}
				if(index == 2){
					this.xumu()
				}
			},
			quanbu() {
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/neijisouyi?fennei=' +
					"quanbu", {}, {
						token: value
					}).then(res => {
					console.log(res);
					that.neijisouyi = res.data
				});
			},
			guanguo() {
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/neijisouyi?fennei=' +
					"guanguo", {}, {
						token: value
					}).then(res => {
					console.log(res);
					that.neijisouyi = res.data
				});
			},
			xumu() {
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/neijisouyi?fennei=' +
					"xumu", {}, {
						token: value
					}).then(res => {
					console.log(res);
					that.neijisouyi = res.data
				});
			}
		}
	};
</script>
<style>
	@import './common.css';
	@import './index.rpx.css';

	image {
		width: 25vw;
		height: 25vw;
		margin-left: -28vw;
		margin-top: -10vw;
	}
</style>
