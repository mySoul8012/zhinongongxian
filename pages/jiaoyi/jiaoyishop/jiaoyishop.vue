<template>
	<view>
		<u-row gutter="16">
			<image :src="image" class="image" />
		</u-row>
		<u-row gutter="16" class="jiage">
			<view>￥ {{jiage}}</view>
		</u-row>
		<u-row gutter="16" class="title">
			<view>{{title}}</view>
		</u-row>
		<u-line color="#ababab" />
		<u-row gutter="16" class="pinjia">
			<u-row gutter="16">
				<u-col span="2">
					<view class="icon"></view>
				</u-col>
				<u-col span="10">
					价格行情图
				</u-col>
			</u-row>
		</u-row>
		<view>
			<view class="charts-box">
				<qiun-data-charts type="line" :chartData="chartData" background="none" />
			</view>
		</view>
		<view class="bottom"></view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				"image": "",
				"jiage": "",
				"title": "",
				"id": "",
				chartData: {
					"categories": [
						
					],
					"series": [{
							"name": "成交量",
							"data": [
								35,
								8,
								25,
								37,
								4,
								20
							]
						}
					]
				}
			}
		},
		onLoad(option) {
			let that = this;
			const value = uni.getStorageSync('token');
			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/jiaoyixianqin?id=' + option
				.id, {}, {
					token: value
				}).then(res => {
				console.log(res);
				that.image = res.data.image
				that.jiage = res.data.jiage
				that.title = res.data.title
				that.id = res.data.id;
				that.chartData.categories = res.data.jiagezoushi.categories
				that.chartData.series[0].data = res.data.jiagezoushi.series
			});
		},
		methods: {
			goumai() {
				console.log("3333")
			}
		}
	}
</script>

<style>
	.bottom {
		height: 20vw;
	}

	.position-sticky {
		position: fixed;
		left: 0;
		top: 92%;
		height: 20vw;
		box-shadow: 1px 1px 20px 2px #d1d1d1;
		width: 100%;
		text-align: right;
		font-size: 5vw;
		z-index: 1000;
		background-color: #FFFFFF;
		padding: 4vw;
	}

	.pinjiaImage {
		width: 40vw;
		height: 30vw;
		padding: 4vw;
	}

	.pinjiaTou {
		padding-left: 5vw;
		padding-top: 3vw;
	}

	.pinjiaAvatar {}

	.image {
		width: 100%;
		height: 100vw;
	}

	.jiage {
		color: #DD6161;
		font-size: 6vw;
		padding-left: 3vw;
		font-weight: 900;
	}

	.title {
		font-weight: 900;
		padding-left: 3vw;
		padding-top: 3vw;
		padding-bottom: 8vw;
	}

	.icon {
		width: 1vw;
		background-color: #19BE6B;
		height: 7vw;
		margin-right: 8vw;
	}

	.pinjia {
		margin-top: 8vw;
		margin-left: 5vw;
	}
</style>
