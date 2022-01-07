<template>
	<view>
		<image class="image" src="https://nye.oss-cn-beijing.aliyuncs.com/fonter.png" />
		<u-row gutter="18" class="row">
			<u-col span="3">
				<image @click="zhudizongzhi" class="blockTouch" src="https://nye.oss-cn-beijing.aliyuncs.com/index-zongdi.png" />
			</u-col>
			<u-col span="3">
				<image @click="xumuyanzhi" class="blockTouch" src="https://nye.oss-cn-beijing.aliyuncs.com/index-xumu.png" />
			</u-col>
			<u-col span="3">
				<image @click="faxiannonhuo" class="blockTouch" src="https://nye.oss-cn-beijing.aliyuncs.com/index-faxiannonghuo.png">
			</u-col>
			<u-col span="3">
				<image @click="shishizhibo" class="blockTouch" src="https://nye.oss-cn-beijing.aliyuncs.com/index-shishizhibo.png">
			</u-col>
		</u-row>
		<u-row gutter="18" class="row">
			<u-col span="3">
				<image @click="redian()" class="blockTouch" src="https://nye.oss-cn-beijing.aliyuncs.com/index-redian.png" />
			</u-col>
			<u-col span="3">
				<image @click="jishujiaoniou" class="blockTouch" src="https://nye.oss-cn-beijing.aliyuncs.com/index-jishujiaoniou.png" />
			</u-col>
			<u-col span="3">
				<image @click="qiandao" class="blockTouch" src="https://nye.oss-cn-beijing.aliyuncs.com/index-qiandao.png" />
			</u-col>
			<u-col span="3">
				<image @click="huiyuan" class="blockTouch" src="https://nye.oss-cn-beijing.aliyuncs.com/index-huiyuan.png" />
			</u-col>
		</u-row>
		<view class="hanqin">
			<u-row gutter="16">
						<u-col span="2">
							<view class="demo-layout bg-purple">
								<image style="width: 10vw;height: 10vw;" src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/index-jinrihanqin.png">
							</view>
						</u-col>
						<u-col span="2">
							<view class="demo-layout bg-purple-light">
								<view>
									<image style="width: 15vw;height: 5vw;" src="https://nye.oss-cn-beijing.aliyuncs.com/index-shucai.png">
								</view>
								<view @click="xinwen">
									<image  style="width: 15vw;height: 5vw;" src="https://nye.oss-cn-beijing.aliyuncs.com/index-xinwen.png">
								</view>
							</view>
						</u-col>
						<u-col span="4">
							<view class="demo-layout bg-purple-dark" style="margin-left: 3vw;">
								<view>{{shucai[0]}}</view>
								<view>{{shucai[1]}}</view>
							</view>
						</u-col>
						<u-col span="4">
							<view class="demo-layout bg-purple-dark">
								<view>{{shucai[2]}}</view>
								<view>{{shucai[3]}}</view>
							</view>
						</u-col>
					</u-row>
		</view>
		<view>
			<u-row gutter="16">
				<u-col span="3" class="wendu">
					<text>{{temp}} ℃</text>
				</u-col>
				<u-col span="6" class="riqi">
					<text>{{obsTime}}</text>
				</u-col>
				<u-col span="3" class="tianqi">
					{{text}}
				</u-col>
			</u-row>
			<u-row gutter="16" class="wenduxiaozhi">
				体感温度：{{feelsLike}}℃   风力: {{windScale}}级   湿度: {{humidity}}%
			</u-row>
		</view>
		<view>
			<image class="about" src="https://nye.oss-cn-beijing.aliyuncs.com/about.png"/>
		</view>
		<view>
			<image class="video" src="https://nye.oss-cn-beijing.aliyuncs.com/video.png">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:"",
				obsTime: "",
				temp: "",
				feelsLike: "",
				windScale: "",
				humidity: "",
				shucai: []
			}
		},
		onLoad() {
			const clientInfo = plus.push.getClientInfo()
							console.log(clientInfo)
							console.log("333333333");
			const value = uni.getStorageSync('token');
			let that = this;
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('https://api.wkkin.cn/index.php/index/index', {}, {
				token: value
			}).then(res => {
				console.log(res);
				that.shucai = res.data
			});
			 uni.getLocation({
			        type: 'wgs84',
			        success: function (res) {
			            console.log('当前位置的经度：' + res.longitude);
			            console.log('当前位置的纬度：' + res.latitude);
						uni.request({
						    url: 'https://devapi.qweather.com/v7/weather/now?key=b8ab4c4a1ec740c09c4bf670591f62da&location=' + res.longitude + "," + res.latitude, //仅为示例，并非真实接口地址。
						    data: {
						        text: 'uni.request'
						    },
						    header: {
						        'custom-header': 'hello' //自定义请求头信息
						    },
						    success: (res) => {
						        console.log(res.data);
						        that.text = res.data.now.text;
								that.temp = res.data.now.temp;
								let time = res.data.now.obsTime.substring(0, 10);
								that.obsTime = time;
								that.feelsLike = res.data.now.feelsLike;
								that.windScale = res.data.now.windScale;
								that.humidity = res.data.now.humidity;
						    }
						});
			        }
			    });
		},
		methods: {
			qiandao(){
				uni.navigateTo({
					url:"/pages/index/qiandao/qiandao"
				})
			},
			huiyuan(){
				uni.navigateTo({
					url:"/pages/index/huiyuan/huiyuan"
				})
			},
			xinwen(){
				uni.navigateTo({
					url:"pages/index/jishujiaoniou/jishujiaoniou?id=1"
				})
			},
			jishujiaoniou(){
				uni.navigateTo({
					url:"pages/index/jishujiaoniou/jishujiaoniou?id=0"
				})
			},
			shishizhibo(){
				uni.navigateTo({
					url:"/pages/index/shishizhibo/shishizhibo"
				})
			},
			faxiannonhuo(){
				uni.navigateTo({
					url:"/pages/index/shop/shop"
				})
			},
			xumuyanzhi(){
				uni.navigateTo({
					url:"/pages/index/shop/shop?category=5"
				})
			},
			zhudizongzhi(){
				uni.navigateTo({
					url:"/pages/shexiantou/shexiantou?isMe=" + false
				})
			},
			redian(){
				uni.navigateTo({
				    url: '/pages/redian/redian'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.hanqin{
		padding: 2vw;
		margin-left: 5vw;
		margin-right: 5vw;
	}
	.video {
		width: 100%;
		margin-top: -2vw;
	}
	.about{
		width: 100%;
		height: 140vw;
		margin-top: 2vw;
	}
	.wenduxiaozhi {
		margin-left: 3vw;
	}
	.wendu {
		font-size: 8vw;
		color: #19BE6B;
	}
	.wendu text {
		margin-left: 2vw;
	}
	.riqi {
		color: #19BE6B;
		margin-top: 4vw;
	}
	.tianqi {
		text-align: right;
		margin-left: 40vw ;
		margin-right: -200vw;
		font-size: 7vw;
		color: #2B85E4;
	}
	.tianqi text{
		margin-left: 40vw;
	}
	.image {
		width: 100%;
		height: 155vw;
	}

	.blockTouch {
		width: 25vw;
		height: 21vw;
		margin-left: -2vw;
		margin-top: -2vw;
	}

	.row {
		width: 100%;
	}
	
	.icon{
		width: 16px;
		height: 16px;
	}
</style>
