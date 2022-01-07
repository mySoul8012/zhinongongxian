<template>
	<view>
		<view>
			<image class="title" src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/shopTitle.png" />
		</view>
		<view>
			<scroll-view scroll-y=true scroll-x=true show-scrollbar=true scroll-top="3" class="daohan">
				<uni-collapse v-for="fenne in fennei">
					<uni-collapse-item :title="fenne.zhuyao.fennei"
						thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
						<view class="content">
							<view v-for="(item,index) in fenne.zhifennei" class="text" @click="category(item.id)">{{item.fennei}}</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>

			</scroll-view>
			<view class="sanpin">
				<luyj-search-bar placeholder="搜索想要农作物/家禽、水产" :radius="100" @confirm="search"></luyj-search-bar>
				<scroll-view class="sanpinShop" scroll-y="true">
					<u-row gutter="16" @click="shopClick(shop.id)" v-for="shop in shops">
						<u-col span="5">
							<image :src="shop.image" class="titleShop">
						</u-col>
						<u-col span="7">
							<u-row class="titleShopDange titleShopeDangege1" gutter="16">
								<view class="uni-lastmsg">{{shop.title}}</view>
							</u-row>
							<u-row gutter="16" class="titleShopDange titleShopeDangege2">
								<u-col span="6">
									<view class="qianshu">￥{{shop.jiage}}</view>
								</u-col>
								<u-col span="6">
									<view>{{shop.danwei}} </view>
								</u-col>
							</u-row>
							<u-row gutter="16" class="titleShopDange titleShopeDangege3">
								<u-col span="4">
									<view class="tejia">
										<text class="tejiaText">特价</text>
									</view>
								</u-col>
								<u-col span="7">
									<view class="xiaonian">销量：{{shop.xiaonian}}</view>
								</u-col>
							</u-row>
						</u-col>

						<u-line color="#808080" />
					</u-row>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shops: [],
				fennei: []
			}
		},
		onLoad(option) {
			let that = this;
			let category = option.category;
			if (category == undefined) {
				category = 8
			}
			let token = uni.getStorageSync("token");
			this.$u.get('https://api.wkkin.cn/index.php/shop/shopcategory?category=' +
				category, {}, {
					token: token
				}).then(res => {
				console.log(res);
				that.shops = res.data;
			});
			this.$u.get('https://api.wkkin.cn/index.php/shop/category', {}, {
					token: token
				}).then(res => {
				console.log(res);
				that.fennei = res.data;
			});
		},
		methods: {
			search(e) {
				console.log(e)
				let that = this;
				let token = uni.getStorageSync("token");
				this.$u.get('https://api.wkkin.cn/index.php/shop/search?key=' + e
					.value, {}, {
						token: token
					}).then(res => {
					console.log(res);
					that.shops = res.data;
				});
			},
			shopClick(e) {
				console.log(e)
				uni.navigateTo({
					url: '/pages/shop/shopXianqin/shopXianqin?id=' + e
				});
			},
			category(e) {
				let that = this;
				let token = uni.getStorageSync("token");
				this.$u.get(
					'https://api.wkkin.cn/index.php/shop/shopcategory?category=' + e, {}, {
						token: token
					}).then(res => {
					console.log(res);
					that.shops = res.data;
				});
			}
		}
	}
</script>

<style>
	.title {
		width: 100%;
	}
.uni-lastmsg {
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
     }
	.daohan {
		width: 39%;
		height: 65%;
		position: absolute;
		left: 0px;
		top: 35%;
	}

	.text {
		padding: 5vw;
		margin-left: 8vw;
		font-size: 4vw;
	}

	.sanpin {

		width: 61%;
		height: 65%;
		position: absolute;
		right: 0px;
		top: 35%;
	}

	.sanpinShop {
		width: 100%;
		height: 89%;
		position: absolute;
		right: 0px;
		top: 11%;
	}

	.titleShop {
		width: 20vw;
		height: 20vw;
		padding: 5vw;
	}

	.titleShopDange {
		margin-left: 3vw;
	}

	.titleShopeDangege1 {
		font-weight: 400;
		margin-top: -4vw;

	}

	.titleShopeDangege2 {
		padding-top: -9vw;
	}

	.qianshu {
		font-size: 5vw;
		margin-left: -2vw;
		font-weight: 300;
		color: #DD6161;
	}

	.tejia {
		margin-left: -1vw;

	}

	.xiaonian {
		font-size: 3vw;
	}

	.tejiaText {
		background-color: #DD6161;
		color: #FFFFFF;
		padding-left: 1vw;
		padding-right: 1vw;
		border-radius: 2vw;
	}

	.titleShopeDangege3 {
		padding-top: 2vw;
	}
</style>
