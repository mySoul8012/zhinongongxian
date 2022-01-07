<template>
	<view>
		<u-row gutter="16">
			<image :src="image" class="image" />
		</u-row>
		<u-row gutter="16" class="jiage">
			<view>积分： {{jiage}}</view>
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
					评价
				</u-col>
			</u-row>
		</u-row>
		<view v-for="pinjia in pinjias">
			<u-row gutter="16" class="pinjiaTou">
				<u-col span="2" >
					<u-avatar size="70" class="pinjiaAvatar" :src="pinjia.avager"></u-avatar>
				</u-col>
				<u-col span="10" class="pinjiaText">
					<view>{{pinjia.text}}</view>
				</u-col>
			</u-row>
			<u-row gutter="16">
				<image class="pinjiaImage" :src="pinjia.image[0]">
				<image class="pinjiaImage" :src="pinjia.image[1]">
			</u-row>
		</view>
		<view class="bottom"></view>
		<view class="position-sticky">
				<u-button @click="goumai()" size="medium" type="success">立即购买</u-button>

		</view>
				<u-toast ref="uToast" />

	</view>
</template>

<script>
	export default {
		data() {
			return {
				"image": "",
				"jiage": "",
				"title": "",
				"pinjias": [],
				"id": ""
			}
		},
		onLoad(option) {
			let that = this;
			const value = uni.getStorageSync('token');
			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/jifensanpinxianqin?id=' + option.id, {}, {
							token: value
						}).then(res => {
							console.log(res);
							that.image = res.data.image
							that.jiage = res.data.jiage
							that.title = res.data.title
							that.pinjias = res.data.pinjia
							that.id = res.data.id;
						});
		},
		methods: {
			goumai(){
				console.log("3333")
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/jifengoumaisanpin?id='+  this.id, {}, {
					token: value
				}).then(res => {
					console.log(res);
					if(res.states == 200){
						that.$refs.uToast.show({
											title: '购买成功',
											type: 'success'
										})
										}else{
											that.$refs.uToast.show({
																title: '积分不足',
																type: 'error'
															})
										}
					
					
				});
			}
		}
	}
</script>

<style>
	.bottom{
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
	.pinjiaImage{
		width: 40vw;
		height: 30vw;
		padding: 4vw;
	}
	.pinjiaTou{
		padding-left: 5vw;
		padding-top: 3vw;
	}
	.pinjiaAvatar{
		
	}
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
	.icon{
		width: 1vw;
		background-color: #19BE6B;
		height: 7vw;
		margin-right: 8vw;
	}
	.pinjia{
		margin-top: 8vw;
		margin-left: 5vw;
	}
</style>
