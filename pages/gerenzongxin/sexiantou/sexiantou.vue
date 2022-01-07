<template>
	<view>
		<image class="image" src="https://nye.oss-cn-beijing.aliyuncs.com/sexiantou.png">
			<view>
				<view class="tables">
					<u-tabs active-color="#00aa00" :list="list" :is-scroll="false" :current="current" @change="change">
					</u-tabs>
				</view>
				<view class="view">
					<view class="view1" v-for="jiankong in jiankongs">
						<image :src="jiankong.image"
							class="view2">
							<view>
								{{jiankong.title}}
							</view>
							<view class="jiage">
								<u-row gutter="16">
									<u-col span="7">
										<view>价格：￥ <text>{{jiankong.jiage}}</text></view>
									</u-col>
									<u-col span="5">
										<view><u-button type="success" size="mini" @click="xuanzhe(jiankong.id)">选择地块</u-button></view>
									</u-col>
								</u-row>
							</view>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '全部'
				}, {
					name: '土地'
				}, {
					name: '畜牧'
				}],
				current: 1,
				jiankongs: [],
				isMe: false

			}
		},
		onLoad(option) {
			let isMe = option.isMe;
			this.isMe = isMe
			console.log(isMe)
			// 获取token
			let token = uni.getStorageSync("token");
			console.log(token)
			let that = this;
			// 发送请求，获取监控列表
			this.$u.get('https://api.wkkin.cn/index.php/Sexiantou/getJiankong?current=' + this.current + "&isMe=" + isMe, {}, {
							token: token
						}).then(res => {
							console.log(res);
							that.jiankongs = res.data
						});
		},
		methods: {
			change(index) {
				this.current = index;
				console.log(this.current)
				let that = this;
				// 发送请求，获取监控列表
				let token = uni.getStorageSync("token");
				this.$u.get('https://api.wkkin.cn/index.php/Sexiantou/getJiankong?current=' + this.current + "&isMe=" + this.isMe, {}, {
								token: token
							}).then(res => {
								console.log(res);
								that.jiankongs = res.data
							});
			},
			xuanzhe(e){
				console.log(e)
				uni.navigateTo({
				    url: '/pages/shexiantou/sexiantouxianqing/sexiantouxianqing?id=' + e
				});
			}
		}
	}
</script>

<style>
	.jiage {
		margin-left: -1vw;
	}
	.jiage text {
		color: #DD6161;
	}
	.view {
		display: flex;
		flex-wrap: wrap;
	}

	.view1 {
		width: 50%;
		padding: 5vw;
	}

	.view2 {
		width: 100%;
		height: 30vw;
	}

	.image {
		width: 100%;
	}

	.tables {
		width: 50%;
		padding-left: 5%;
	}
</style>
