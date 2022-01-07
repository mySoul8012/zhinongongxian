<template>
	<view>
		<view>
			<image class="title" src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/shopTitle.png" />
		</view>
		<view>
			<scroll-view scroll-y=true scroll-x=true show-scrollbar=true scroll-top="3" class="daohan">
				<uni-collapse>
					<uni-collapse-item title="肥料"
						thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
						<view class="content">
							<view class="text">肥料</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
				<uni-collapse>
					<uni-collapse-item title="保险"
						thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
						<view class="content">
							<view class="text">保险</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
				<uni-collapse>
					<uni-collapse-item title="疫苗"
						thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
						<view class="content">
							<view class="text">疫苗</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
				<uni-collapse>
					<uni-collapse-item title="饲料"
						thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
						<view class="content">
							<view class="text" @click="category()">饲料</view>
							<view class="text">饲料</view>
							<view class="text">饲料</view>
							<view class="text">饲料</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
				<uni-collapse>
					<uni-collapse-item title="疫苗"
						thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
						<view class="content">
							<view class="text">疫苗</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
				<uni-collapse>
					<uni-collapse-item title="疫苗"
						thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
						<view class="content">
							<view class="text">疫苗</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
				<uni-collapse>
					<uni-collapse-item title="疫苗"
						thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
						<view class="content">
							<view class="text">疫苗</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
				<uni-collapse>
					<uni-collapse-item title="疫苗"
						thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
						<view class="content">
							<view class="text">疫苗</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
				<uni-collapse>
					<uni-collapse-item title="疫苗"
						thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
						<view class="content">
							<view class="text">疫苗</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
				<uni-collapse>
					<uni-collapse-item title="疫苗"
						thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
						<view class="content">
							<view class="text">疫苗</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</scroll-view>
			<view class="sanpin">
				
				<scroll-view class="sanpinShop" scroll-y="true">
					<u-row gutter="16" @click="shopClick(shop.id)" v-for="shop in shops">
						<u-col span="5">
							<image :src="shop.image"
								class="titleShop">
						</u-col>
						<u-col span="7">
							<u-row class="titleShopDange titleShopeDangege1" gutter="16">
								<view>{{shop.title}}</view>
							</u-row>
							<u-row gutter="16" class="titleShopDange titleShopeDangege2">
								<u-col span="6">
									<view class="qianshu">￥{{shop.jiage}}</view>
								</u-col>
								<u-col span="6">
									<view>{{shop.danwei}}</view>
								</u-col>
							</u-row>
							<u-row gutter="16" class="titleShopDange titleShopeDangege3">
								<u-col span="5">
									<view class="tejia">
										<text class="tejiaText">今日价格</text>
									</view>
								</u-col>
								<u-col span="6">
									<view class="xiaonian">已认养：{{shop.xiaonian}}</view>
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
				shops: [
				]
			}
		},
		onLoad() {
			let that = this;
			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/jiaoyijiekou?category=1', {}, {
							token: 'xyz'
						}).then(res => {
							console.log(res);
							that.shops = res.data.shops;
						});
		},
		methods: {
			search(e) {
				console.log(e)
				let that = this;
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/searchShop?key=' + e.value, {}, {
								token: 'xyz'
							}).then(res => {
								console.log(res);
								that.shops = res.data.shops;
							});
			},
			shopClick(e){
				console.log(e)
				uni.navigateTo({
				    url: '/pages/jiaoyi/jiaoyishop/jiaoyishop?id=' + e
				});
			},
			category(){
				let that = this;
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/jiaoyijiekou?category=1', {}, {
								token: 'xyz'
							}).then(res => {
								console.log(res);
								that.shops = res.data.shops;
							});
			}
		}
	}
</script>

<style>
	.title {
		width: 100%;
	}

	.daohan {
		background-color: #19BE6B;
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
		height: 72%;
		position: absolute;
		right: 0px;
		top: 28%;
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
		margin-top: -0vw;
		
	}
	.titleShopeDangege2{
		margin-top: 3vw;
	}
	.qianshu {
		font-size: 5vw;
		margin-left: -2vw;
		font-weight: 300;
		color: #DD6161;
	}
	.tejia{
		margin-left: -1vw;
		
	}
	.xiaonian{
		font-size: 2vw;
		margin-top: 1vw;
	}
	.tejiaText{
		background-color: #DD6161;
		color:#FFFFFF;
		padding-left: 1vw;
		padding-right: 1vw;
		border-radius: 2vw;
		font-size: 1vw;
	}
	.titleShopeDangege3 {
		padding-top: 2vw;
	}
</style>
