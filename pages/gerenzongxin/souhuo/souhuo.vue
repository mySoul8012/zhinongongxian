<template>
	<view>
		<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		<view class="waiwei" v-show="daijiaoyi" v-for="daijiaoyishop in daijiaoyishops">
			<view class="sanpincenshu">商品已成熟</view>
			<view>
				<u-row gutter="16">
					<u-col span="5">
						<view class="demo-layout bg-purple">
							<image class="images"
								:src="daijiaoyishop.images">
						</view>
					</u-col>
					<u-col span="7">
						<view class="demo-layout bg-purple-light">
							<view class="title">{{daijiaoyishop.title}}</view>
							<view class="title">{{daijiaoyishop.danwei}}</view>
							<view class="title">x {{daijiaoyishop.jianshu}}</view>
							<view class="title">实付款：<text style="color: #0BC477;">￥{{daijiaoyishop.fukuan}}</text></view>
						</view>
					</u-col>
				</u-row>
			</view>
			<view class="buttom">
				<u-row gutter="16">
					<u-col span="6">
						<view class="demo-layout bg-purple">
							<u-button shape="circle" class="custom-style" @click="pinianjiaoyi(daijiaoyishop.id)">批量交易</u-button>
						</view>
					</u-col>
					<u-col span="6">
						<view class="demo-layout bg-purple-light">
							<u-button shape="circle" @click="yijianjiaoyi(daijiaoyishop.id)">一件交易</u-button>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
		
		<view class="waiwei" v-show="daicaozhuo" v-for="daicaozhuoshop in daicaozhuoshops">
			<view class="sanpincenshu">未操作</view>
			<view>
				<u-row gutter="16">
					<u-col span="5">
						<view class="demo-layout bg-purple">
							<image class="images"
								:src="daicaozhuoshop.images">
						</view>
					</u-col>
					<u-col span="7">
						<view class="demo-layout bg-purple-light">
							<view class="title">{{daicaozhuoshop.title}}</view>
							<view class="title">{{daicaozhuoshop.danwe}}</view>
							<view class="title">x {{daicaozhuoshop.jianshu}}</view>
							<view class="title">实付款：<text style="color: #0BC477;">￥{{daicaozhuoshop.fukuan}}</text></view>
						</view>
					</u-col>
				</u-row>
			</view>
			<view class="buttom">
				<u-row gutter="16">
					<u-col span="6">
						<view class="demo-layout bg-purple">
							
						</view>
					</u-col>
					<u-col span="6">
						<view class="demo-layout bg-purple-light">
							<u-button shape="circle" @click="tixincaozhuo(daicaozhuoshop.id)">提醒操作</u-button>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
		
		<view class="waiwei" v-show="yiwanceng" v-for="yiwancengshop in yiwancengshops">
			<view class="sanpincenshu">已完成</view>
			<view>
				<u-row gutter="16">
					<u-col span="5">
						<view class="demo-layout bg-purple">
							<image class="images"
								:src="yiwancengshop.images">
						</view>
					</u-col>
					<u-col span="7">
						<view class="demo-layout bg-purple-light">
							<view class="title">{{yiwancengshop.title}}</view>
							<view class="title">{{yiwancengshop.danwei}}</view>
							<view class="title">x {{yiwancengshop.jianshu}}</view>
							<view class="title">实付款：<text style="color: #0BC477;">￥{{yiwancengshop.fukuan}}</text></view>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
		
		<view class="waiwei" v-show="daisouhuo" v-for="daisouhuoshop in daisouhuoshops">
			<view class="sanpincenshu">买家已付款</view>
			<view>
				<u-row gutter="16">
					<u-col span="5">
						<view class="demo-layout bg-purple">
							<image class="images"
								:src="daisouhuoshop.images">
						</view>
					</u-col>
					<u-col span="7">
						<view class="demo-layout bg-purple-light">
							<view class="title">{{daisouhuoshop.title}}</view>
							<view class="title">{{daisouhuoshop.danwei}}</view>
							<view class="title">x {{daisouhuoshop.jianshu}}</view>
							<view class="title">实付款：<text style="color: #0BC477;">￥{{daisouhuoshop.fukuan}}</text></view>
						</view>
					</u-col>
				</u-row>
			</view>
			<view class="buttom01">
				<u-row gutter="16">
					<u-col span="4">
						<view class="demo-layout bg-purple">
							<u-button shape="circle" @click="kefu">客服问题</u-button>
						</view>
					</u-col>
					<u-col span="4">
						<view class="demo-layout bg-purple">
							<u-button shape="circle" @click="cakanwuniou(daisouhuoshop.id)">查看物流</u-button>
						</view>
					</u-col>
					<u-col span="4">
						<view class="demo-layout bg-purple-light">
							<u-button shape="circle" @click="qrensouhuo(daisouhuoshop.id)">确认收货</u-button>
						</view>
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
				id: "",
				list: [{
					name: '全部'
				}, {
					name: '待交易'
				}, {
					name: '待操作'
				}, {
					name: "待收货"
				}, {
					name: "已完成"
				}],
				current: 1,
				daijiaoyi: true,
				daicaozhuo: false,
				daisouhuo: false,
				yiwanceng: false,
				daijiaoyishops: "",
				daicaozhuoshops: "",
				daisouhuoshops: "",
				yiwancengshops:""
			}
		},
		onLoad(option) {
			console.log(option.id)
			this.id = option.id
			// 待交易
			const value = uni.getStorageSync('token');
			let that = this;
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/daijiaoyi', {}, {
				token: value
			}).then(res => {
				console.log(res);
				that.daijiaoyishops = res.data
			});
			// 待操作
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/daicaozhuo', {}, {
				token: value
			}).then(res => {
				console.log(res);
				that.daicaozhuoshops = res.data
			});
			// 待收货
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/daisouhuo', {}, {
				token: value
			}).then(res => {
				console.log(res);
				that.daisouhuoshops = res.data
			});
			// 已完成
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/yiwancen', {}, {
				token: value
			}).then(res => {
				console.log(res);
				that.yiwancengshops = res.data
			});
		},
		onReady() {
			console.log(this.id)
			if (this.id == 1) {
				uni.setNavigationBarTitle({
					title: '待交易'
				});
				this.current = 1
				this.daijiaoyi = true
			}
			if(this.id == 2){
				uni.setNavigationBarTitle({
					title: '待操作'
				});
				this.current = 2
				this.daicaozhuo = true
				this.daijiaoyi = false
			}
			if(this.id == 3){
				uni.setNavigationBarTitle({
					title: '待收货'
				});
				this.current = 3
				this.daisouhuo = true
				this.daijiaoyi = false
			}
			if(this.id == 4){
				uni.setNavigationBarTitle({
					title: '已完成'
				});
				this.current = 4
				this.yiwanceng = true
				this.daijiaoyi = false
			}
		},
		methods: {
			cakanwuniou(e){
				console.log(e)
				uni.navigateTo({
					url:"/pages/gerenzongxin/souhuo/cakanwuniou/cakanwuniou?id="+e
				})
			},
			kefu(){
				uni.navigateTo({
					url: "/pages/gerenzongxin/souhuo/kefu/kefu"
				})
			},
			pinianjiaoyi(e){
				console.log(e)
				// 待交易
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/pinianjiaoyi?id=' + e, {}, {
					token: value
				}).then(res => {
					console.log(res);
					that.$refs.uToast.show({
										title: '批量交易成功',
										type: 'success'
									})
									// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
									that.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/daijiaoyi', {}, {
										token: value
									}).then(res => {
										console.log(res);
										that.daijiaoyishops = res.data
									});
				});
			},
			qrensouhuo(e){
				console.log(e)
				// 待交易
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/qrensouhuo?id=' + e, {}, {
					token: value
				}).then(res => {
					console.log(res);
					that.$refs.uToast.show({
										title: '确认收货成功',
										type: 'success'
									})
									// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
									that.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/daisouhuo', {}, {
										token: value
									}).then(res => {
										console.log(res);
										that.daijiaoyishops = res.data
									});
				});
			},
			yijianjiaoyi(e){
				console.log(e)
				// 待交易
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/yijianjiaoyi?id=' + e, {}, {
					token: value
				}).then(res => {
					console.log(res);
					that.$refs.uToast.show({
										title: '一件交易成功',
										type: 'success'
									})
									// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
									that.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/daijiaoyi', {}, {
										token: value
									}).then(res => {
										console.log(res);
										that.daijiaoyishops = res.data
									});
				});
			},
			tixincaozhuo(e){
				console.log(e)
				// 待交易
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/tixincaozhuo?id=' + e, {}, {
					token: value
				}).then(res => {
					console.log(res);
					that.$refs.uToast.show({
										title: '提醒操作成功',
										type: 'success'
									})
									// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
									that.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/daicaozhuo', {}, {
										token: value
									}).then(res => {
										console.log(res);
										that.daicaozhuoshops = res.data
									});
				});
			},
			change(index) {
				this.current = index;
				if(index == 0){
					uni.setNavigationBarTitle({
						title: '全部'
					});
					this.daijiaoyi = true;
					this.daicaozhuo = true;
					this.daisouhuo = true;
					this.yiwanceng = true;
				}
				if(index == 1){
					uni.setNavigationBarTitle({
						title: '待交易'
					});
					this.daijiaoyi = true;
					this.daicaozhuo = false
					this.daisouhuo = false;
					this.yiwanceng = false
				}
				if(index == 2){
					uni.setNavigationBarTitle({
						title:"待操作"
					})
					this.daijiaoyi = false;
					this.daicaozhuo = true;
					this.daisouhuo = false;
					this.yiwanceng = false
				}
				if(index == 3){
					uni.setNavigationBarTitle({
						title:"待收货"
					})
					this.daijiaoyi = false;
					this.daicaozhuo = false;
					this.daisouhuo = true;
					this.yiwanceng = false
				}
				if(index == 4){
					uni.setNavigationBarTitle({
						title:"已完成"
					})
					this.daijiaoyi = false;
					this.daicaozhuo = false;
					this.daisouhuo = false;
					this.yiwanceng = true
				}
			}
		}
	}
</script>

<style>
	body {
		background-color: #F7F7F7;
	}
	.custom-style {
		color: #0dc300;
	}
	.buttom{
		width: 55%;
		margin-right: 0vw;
		margin-left: 40vw;
	}
	.buttom01{
		margin-top: 3vw;
		margin-right: 0vw;
		margin-left: 20vw;
	}
	.title {
		padding-bottom: 2vw;
	}

	.images {
		width: 30vw;
		height: 30vw;
	}

	.waiwei {
		background-color: #FFFFFF;
		margin-top: 5vw;
		margin-left: 5vw;
		margin-right: 5vw;
		padding: 3vw;
		border-radius: 5vw;
	}

	.sanpincenshu {
		text-align: right;
		color: #0BC477;
	}
</style>
