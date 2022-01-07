<template>
	<view class="page flex-col">
		<view class="layer1 flex-col">

			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
			<view class="mod6 flex-col" v-for="weijiaoyi in weijiaoyis" v-show="weijiaoyiPage">
				<u-row gutter="16">
					<u-col span="4">
						<view class="demo-layout bg-purple">
							<image class="images" referrerpolicy="no-referrer"
								:src="weijiaoyi.images" />
						</view>
					</u-col>
					<u-col span="5">
						<view class="feiniao">{{weijiaoyi.title}}</view>
						<view class="kucui">库存{{weijiaoyi.kucui}}件</view>
					</u-col>
					<u-col span="3">
						<view class="word5 yigoumai">未交易</view>
						<view class="shiyong"><u-button shape="circle" @click="jinxinjiaoyi(weijiaoyi.id)">进行交易</u-button></view>
					</u-col>
				</u-row>
			</view>
			<view class="mod6 flex-col" v-for="yigou in yigous" v-show="yigouPage">
				<u-row gutter="16">
					<u-col span="4">
						<view class="demo-layout bg-purple">
							<image class="images" referrerpolicy="no-referrer"
								:src="yigou.images" />
						</view>
					</u-col>
					<u-col span="5">
						<view class="feiniao">{{yigou.title}}</view>
						<view class="kucui">库存{{yigou.kucui}}件</view>
					</u-col>
					<u-col span="3">
						<view class="word5 yigoumai">已购买</view>
						<view class="shiyong"><u-button shape="circle" @click="shiyong(yigou.id)">使用</u-button></view>
					</u-col>
				</u-row>
			</view>
		</view>
		<u-toast ref="uToast" />
		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				constants: {},
				list: [{
					name: '全部'
				}, {
					name: '未交易'
				}, {
					name: '已购'
				}],
				current: 0,
				weijiaoyis:"",
				yigous: "",
				weijiaoyiPage: true,
				yigouPage: true
			};
		},
		onLoad(){
			const value = uni.getStorageSync('token');
			let that = this;
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/wodecanku', {}, {
				token: value
			}).then(res => {
				console.log(res);
				that.weijiaoyis = res.data.weijiaoyi
				that.yigous = res.data.yigou
			});
		},
		methods: {
			onClick_1() {
				alert(1);
			},
			jinxinjiaoyi(e){
				uni.navigateTo({
					url:"pages/gerenzongxin/canku/jiaoyi/jiaoyi?id=" + e
				})
				
			},
			shiyong(e){
				
			},
			change(index) {
				this.current = index;
				console.log(index)
				if(index == 0){
					this.weijiaoyiPage = this.yigouPage = true
				}
				if(index == 1){
					this.weijiaoyiPage = true;
					this.yigouPage = false
				}
				if(index == 2){
					this.weijiaoyiPage = false;
					this.yigouPage = true
				}
			}
		}
	};
</script>
<style>
	@import './common.css';
	@import './index.rpx.css';

	.shiyong {
		margin-top: 8vw;
		margin-left: 0vw;
	}

	.yigoumai {
		margin-top: 2vw;
		margin-right: 0vw;
		margin-left: 10vw;
	}

	.images {
		width: 23vw;
		height: 23vw;
		margin-left: 5vw;
		margin-top: -6vw;
	}

	.feiniao {
		font-size: 4vw;
		margin-top: -2vw;
		margin-left: 3vw;
	}

	.kucui {
		margin-top: 2vw;
		margin-left: 3vw;
		font-size: 3vw;
		color: #717171;
	}
</style>
