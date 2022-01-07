<template>
	<view>
		<u-toast ref="uToast" />
		<image style="z-index: 0;" src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/noncan-beijin.png"
			class="images" />
		<view class="name">
			<u-row gutter="16">
				<u-col span="4">
					<view class="demo-layout bg-purple">
						<u-avatar :src="images">
						</u-avatar>
					</view>
				</u-col>
				<u-col span="8">
					<view class="demo-layout bg-purple-light">
						<view class="namename">{{name}}</view>
						<view class="huozan">
							<u-icon name="heart-fill" color="red" />{{zanshu}}
						</view>
					</view>
				</u-col>
			</u-row>
		</view>
		<view class="tubiao">
			<image v-show="haoyouniebiao"
			@click="xioujian"
				src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/xioujian.png" />
			<image v-show="haoyouniebiao"
			@click="cucong"
				src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/cucong.png" />
			<image v-show="haoyouniebiao"
			@click="jiaosui"
				src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/jiaosou.png" />
			<image v-show="haoyouniebiao"
				@click="penyou"
				src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/penyou.png" />
			<image v-show="haoyouniebiao"
			@click="jiankong"
				src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/jiankong.png" />
			<image v-show="!haoyouniebiao"
			@click="home"
				src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/huijia.png" />
			<image v-show="!haoyouniebiao"
			@click="touhuafei2"
				src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/touhuafei.png" />
			<image v-show="!haoyouniebiao"
			@click="tousui"
				src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/tousui.png" />
			<image v-show="!haoyouniebiao"
			@click="paihanban"
				src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/paihanban.png" />
		</view>
		<view class="dibu" v-show="isPaihanban">
			<view class="zuixindongtai">最新动态</view>
			<view class="kanguozanyuan">{{kanguo}}看过你的庄园</view>
		</view>
		<view v-show="isPaihanban">
			<view class="zuixindongtai" style="margin-top: 25vw;">排行榜</view>
			<u-row gutter="16">
				<u-col span="4">
					<view class="demo-layout bg-purple paihanban">周排行榜</view>
				</u-col>
				<u-col span="4">
					<view class="demo-layout bg-purple-light paihanban">|</view>
				</u-col>
				<u-col span="4">
					<view class="demo-layout bg-purple-dark paihanban">总排行榜</view>
				</u-col>
			</u-row>
			<u-row gutter="16" style="text-align: center;">
				<u-col span="5">
					<view class="demo-layout bg-purple">
						<view class="zoupaihanban" style="padding-top: 1vw;">
							<view class="zoupaihanbanname" v-for="zoupaihanban in zoupaihanbans">{{zoupaihanban}}</view>
						</view>
					</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple-light"></view>
				</u-col>
				<u-col span="5">
					<view class="demo-layout bg-purple-dark" style="text-align: center;">
						<view class="zongpaihanban" v-for="zongpaihanban in zongpaihanbans">
							<u-icon name="heart-fill" color="red" />{{zongpaihanban}}
						</view>
					</view>
				</u-col>
			</u-row>
		</view>


		<view class="dibu" v-show="isHaoyou">
			<view class="zuixindongtai">好友列表</view>
		</view>
		<view style="margin-top: 10vw;padding: 5vw;" v-show="isHaoyou">
			<view class="waiwei02" v-for="(penyou, index) in penyous" @click="haoyou(index)">
				<u-row gutter="16" class="u-row">
					<u-col span="2">
						<view class="demo-layout bg-purple">
							<u-avatar :src="penyou.images">
							</u-avatar>
						</view>
					</u-col>
					<u-col span="6">
						<view class="demo-layout bg-purple-light">
							<view>{{penyou.name}}</view>
							<view>获赞{{penyou.huozan}}个</view>
						</view>
					</u-col>
					<u-col span="4">
						<view class="demo-layout bg-purple-dark zaixian">
							<view>{{penyou.zaixian}}分钟前在线</view>
							<view @click="yonghudianzan(index)">
								<u-icon :name="penyou.icon" color="red" />
							</view>
						</view>
					</u-col>
				</u-row>
				<u-line color="#adadad" />
			</view>
		</view>

		<view class="dibu" v-show="jiankongniebiao">
			<view class="zuixindongtai">监控列表</view>
		</view>
		<view class="box" style="margin-top: 10vw;padding: 5vw;" v-show="jiankongniebiao">
			<view class="wenzhi" v-for="jiankong in jiankongs" @click="xuanzhetudi(jiankong.id)">
				<image class="tupian"
					:src="jiankong.images" />
					<view>{{jiankong.name}}</view>
			</view>
			<view class="wenzhi" @click="addxinzhentudi">
				<image class="tupian" src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/addtudi.png">
					
				</image>
				<view>新增土地</view>		

			</view>
		</view>
				

	</view>
</template>

<script>
	export default {
		data() {
			return {
				haoyouniebiao: true,
				isPaihanban: true,
				isHaoyou: false,
				jiankongniebiao: false,
				id: "",
				name: "",
				images: "",
				zanshu: "",
				kanguo: "",
				zoupaihanbans: "",
				zongpaihanbans: "",
				jiankongs: "",
				penyous: "",
				jiankongId: ""
			}
		},
		onLoad() {
			const value = uni.getStorageSync('token');
			let that = this;
			function randomNum(minNum,maxNum){ 
			    switch(arguments.length){ 
			        case 1: 
			            return parseInt(Math.random()*minNum+1,10); 
			        break; 
			        case 2: 
			            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
			        break; 
			            default: 
			                return 0; 
			            break; 
			    } 
			} 
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/noncanjiekou', {}, {
				token: value
			}).then(res => {
				console.log(res);
				that.id = res.data.id
				that.name = res.data.name
				that.images = res.data.images
				that.zanshu = res.data.zanshu
				let lenthh = res.data.dongtai.length
				console.log(lenthh)
				let num = randomNum(0, lenthh-1)
				console.log(num)
				that.kanguo = res.data.dongtai[num]
				that.zoupaihanbans = res.data.zoupaihanban
				that.zongpaihanbans = res.data.zongpaihanban
				that.jiankongs = res.data.jiankong
				lenthh = that.jiankongs.length;
				console.log(that.jiankongs[4])
				for(var i = 0 ; i< lenthh; i++){
					console.log(that.jiankongs[i])
					if(that.jiankongs[i].id == that.id){
						that.jiankongs[i].images = "https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/xuanzongjiankong.png"
					}else{
						that.jiankongs[i].images = "https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/weixuanzongjiankong.png"
					}
				}
				console.log(that.jiankongs)
				that.penyous = res.data.penyou
				for(var i in that.penyous){
					console.log(that.penyous[i])
					that.penyous[i].icon= "heart"
				}
			});
		},
		methods: {
			tousui(){
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/tousui?userId=' + this.id + "&jiankongId="  + this.jiankongId, {}, {
					token: value
				}).then(res => {
					console.log(res);
					that.$refs.uToast.show({
										title: '偷水成功',
										type: 'success'
									})
				});
			},
			touhuafei2(){
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/touhuafei?userId=' + this.id + "&jiankongId="  + this.jiankongId, {}, {
					token: value
				}).then(res => {
					console.log(res);
					that.$refs.uToast.show({
										title: '偷化肥成功',
										type: 'success'
									})
				});
			},
			jiaosui(){
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/cucong?userId=' + this.id + "&jiankongId="  + this.jiankongId, {}, {
					token: value
				}).then(res => {
					console.log(res);
					that.$refs.uToast.show({
										title: '浇水成功',
										type: 'success'
									})
				});
			},
			cucong(){
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/cucong?userId=' + this.id + "&jiankongId="  + this.jiankongId, {}, {
					token: value
				}).then(res => {
					console.log(res);
					that.$refs.uToast.show({
										title: '除虫成功',
										type: 'success'
									})
				});
			},
			xioujian(){
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/xioujian?userId=' + this.id + "&jiankongId="  + this.jiankongId, {}, {
					token: value
				}).then(res => {
					console.log(res);
					that.$refs.uToast.show({
										title: '修剪成功',
										type: 'success'
									})
				});
			},
			haoyou(e){
				console.log(e)
				this.id = this.penyous[e].id
				this.name = this.penyous[e].name;
				this.images = this.penyous[e].images;
				this.zanshu = this.penyous[e].huozan
				this.jiankongId = this.penyous[e].sexiantou
			},
			addxinzhentudi(){
				uni.navigateTo({
					url:"/pages/gerenzongxin/sexiantou/sexiantou?isMe=false"
				})
			},
			home(){
				this.haoyouniebiao = true
				const value = uni.getStorageSync('token');
				let that = this;
				function randomNum(minNum,maxNum){ 
				    switch(arguments.length){ 
				        case 1: 
				            return parseInt(Math.random()*minNum+1,10); 
				        break; 
				        case 2: 
				            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
				        break; 
				            default: 
				                return 0; 
				            break; 
				    } 
				} 
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/noncanjiekou', {}, {
					token: value
				}).then(res => {
					console.log(res);
					that.id = res.data.id
					that.name = res.data.name
					that.images = res.data.images
					that.zanshu = res.data.zanshu
					let lenthh = res.data.dongtai.length
					console.log(lenthh)
					let num = randomNum(0, lenthh-1)
					console.log(num)
					that.kanguo = res.data.dongtai[num]
					that.zoupaihanbans = res.data.zoupaihanban
					that.zongpaihanbans = res.data.zongpaihanban
					that.jiankongs = res.data.jiankong
					lenthh = that.jiankongs.length;
					console.log(that.jiankongs[4])
					for(var i = 0 ; i< lenthh; i++){
						console.log(that.jiankongs[i])
						if(that.jiankongs[i].id == that.id){
							that.jiankongs[i].images = "https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/xuanzongjiankong.png"
						}else{
							that.jiankongs[i].images = "https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/weixuanzongjiankong.png"
						}
					}
					console.log(that.jiankongs)
					that.penyous = res.data.penyou
					for(var i in that.penyous){
						console.log(that.penyous[i])
						that.penyous[i].icon= "heart"
					}
				});
			},
			xuanzhetudi(e){
				console.log(e)
				this.jiankongId = e
				let lenthh = this.jiankongs.length;
				console.log(this.jiankongs[4])
				for(var i = 0 ; i< lenthh; i++){
					console.log(this.jiankongs[i])
					if(this.jiankongs[i].id == this.id){
						this.jiankongs[i].images = "https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/xuanzongjiankong.png"
					}else{
						this.jiankongs[i].images = "https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/weixuanzongjiankong.png"
					}
				}
				console.log(this.jiankongs)
				this.$forceUpdate()
			},
			yonghudianzan(e){
				console.log(e)
				this.penyous[e].icon = "heart-fill"
				this.$forceUpdate()
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/yonghudianzan?id=' + this.penyous[e].id, {}, {
					token: value
				}).then(res => {
					console.log(res);
					that.$refs.uToast.show({
										title: '点赞成功',
										type: 'success'
									})
				});
			},
			paihanban(){
				this.isPaihanban = true;
				this.isHaoyou = false;
				this.jiankongniebiao = false
				
			},
			jiankong(){
				this.isPaihanban = false;
				this.isHaoyou = false;
				this.jiankongniebiao = true;
				this.haoyouniebiao = true
			},
			penyou(){
				this.isPaihanban = false;
				this.isHaoyou = true;
				this.jiankongniebiao = false
				this.haoyouniebiao = false
				this.id = this.penyous[0]
				this.images = this.penyous[0].images;
				this.name = this.penyous[0].name;
				this.zanshu = this.penyous[0].huozan
				this.jiankongId = this.penyous[0].sexiantou
			}
		}
	}
</script>

<style>
	.tupian {
		width: 26vw;
		height: 28vw;

	}

	.wenzhi {
		width: 26vw;
		margin-left: 3vw;
		text-align: center;
		margin-bottom: 5vw;
	}

	.box {
		display: flex;
		flex-wrap: wrap;
	}

	.waiwei02 {
		padding-bottom: 2vw;
	}

	.u-row {
		padding-bottom: 2vw;
	}

	.zaixian {
		text-align: right;
	}

	.zoupaihanbanname {
		margin-bottom: 5vw;
		margin-left: 9vw;
	}

	.zoupaihanban {
		background-image: url(https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/zoupaihanban.png);
		background-size: cover;
		background-repeat: no-repeat;
	}

	.zongpaihanban {
		margin-bottom: 2vw;
	}

	.paihanban {
		text-align: center;
		padding-bottom: 5vw;
		color: #19BE6B;
	}

	.kanguozanyuan {
		background-color: #addca8;
		padding: 3vw;
		padding-left: 5vw;
	}

	.dibu {
		position: absolute;
		width: 100%;
		background-color: #FFFFFF;
		margin-top: -5vw;
		z-index: 99999;
		border-radius: 5vw;
	}

	.zuixindongtai {
		font-size: 6vw;
		padding: 5vw;
	}

	.huozan {
		background-color: #FFFFFF;
		width: 12vw;
		margin-left: 1vw;
		border-radius: 10vw;
		padding-left: 1vw;
	}

	.namename {
		color: #FFFFFF;
		padding-left: 2vw;
	}

	.images {
		width: 100%;
		height: 150vw;
	}

	.name {
		position: absolute;
		width: 40vw;
		background-color: #707071;
		height: 14vw;
		top: 15vw;
		left: 8vw;
		border-radius: 10vw;
		padding-top: 1vw;
		padding-left: 1vw;
	}

	.tubiao {
		position: absolute;
		top: 15vw;
		right: 10vw;
		width: 15vw;
	}

	.tubiao image {
		width: 15vw;
		height: 15vw;
		padding-bottom: 5vw;
	}
</style>
