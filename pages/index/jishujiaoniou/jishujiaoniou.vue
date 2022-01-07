<template>
	<view>
		<image src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/redianZhifujin.png"></image>
		<view class="block">
			<u-row gutter="16" class="title">
				<text>{{title}}</text>
			</u-row>
			<u-row gutter="16">
				<u-line color="black" />
			</u-row>
			<u-row gutter="16" class="text">
				<text>{{conent}}</text>
			</u-row>
		</view>
		<view class="position-sticky" @click="starFunction">
			<u-icon :name="star"></u-icon>
			<text>&nbsp;{{count}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				star: "star",
				count: 150,
				title: "",
				conent: "",
				id: ""
			}
		},
		onLoad(option) {
			let that = this;
			this.id = option.id;
			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/redianwenzan?id=' + option
				.id, {}, {
					token: ""
				}).then(res => {
				console.log(res);
				that.title = res.data.title;
				that.conent = res.data.conent;
				that.count = res.data.count
			});
			uni.getStorage({
			    key:option.id,
			    success: function(res){
			        console.log(res.data); //123456789
					that.star = res.data;
			    }
			})
		},
		methods: {
			starFunction() {
				let that = this;
				if (that.star == "star") {
					this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/star?id=' + that
						.id, {}, {
							token: ""
						}).then(res => {
						console.log(res);
						if (res.states == "200") {
							that.star = "star-fill"
							that.count++;
							uni.setStorage({
							    key:that.id,
							    data:'star-fill',
							    success: function (){
							        console.log("存储成功")
									console.log(that.id)
							    }
							})
						}
					});
				} else {
					this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/starQuxiao?id=' +
						that.id, {}, {
							token: ""
						}).then(res => {
						console.log(res);
						if (res.states == "200") {
							that.star = "star"
							that.count--
							uni.setStorage({
							    key:that.id,
							    data:'star',
							    success: function (){
							        console.log("存储成功")
							    }
							})
						}
					});
				}
			}
		}
	}
</script>

<style>
	image {
		width: 100%;
		height: 50vw;
	}

	.block {
		padding: 8vw;
	}

	.title {
		font-size: 5vw;
		padding-bottom: 4vw;
	}

	.text {
		padding-top: 4vw;
	}

	.position-sticky {
		position: fixed;
		left: 0;
		top: 96%;
		top: 96%;
		box-shadow: 1px 1px 20px 2px #d1d1d1;
		width: 100%;
		text-align: center;
		font-size: 5vw;
	}

	.position-sticky u-icon {
		padding: 20vw;
	}
</style>
