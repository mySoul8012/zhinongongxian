<template>
	<view>
		<view class="count">当前连续签到： <text>{{nianxuqiandao}}</text>天</view>
		<view class="button">
			<u-button type="warning" shape="circle" @click="nijiqiandao" :disabled="xuanzongDisable01">
				<view v-show="!xuanzongDisable01"><u-icon name="calendar"></u-icon> 立即签到</view>
				<view v-show="xuanzongDisable01">今日已签到</view>
			</u-button>
		</view>
		<view class="xiantiao">
			<u-line color="#fcfcfc" />
		</view>
		<view class="waiwei">
			<text class="tianshu" :class="class01">+1</text>
			<text class="tianshu" :class="class02">+2</text>
			<text class="tianshu" :class="class03">+3</text>
			<text class="tianshu" :class="class04">+4</text>
			<text class="tianshu" :class="class05">+5</text>
			<text class="tianshu" :class="class06">+6</text>
			<text class="tianshu" :class="class07">+7</text>
		</view>
		<view style="padding-top: 2vw;display: flex;">
			<text class="riqi" v-for="qianda in qiandao">{{qianda.riqi}}</text>
		</view>
		<view class="qiandaoriniwaiwei">
			<view class="title">签到日历({{month}}月)</view>
			<view class="riqicount">
				<view>一</view>
				<view>二</view>
				<view>三</view>
				<view>四</view>
				<view>五</view>
				<view>六</view>
				<view>日</view>
				<view v-for="dat in data" :class="dat.class">{{dat.data}}</view>
			</view>
		</view>
		<view class="zhuyishixian">连续签到20天额外赠送新鲜蔬菜</view>
				<u-toast ref="uToast" />
<u-popup v-model="show" mode="center" z-index="999999999999999">
		<view class="waiwei08">
			<image class="image" src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/qiandaotitle.png">
				<view class="neijiqiandao" >再签到{{20-nianxuqiandao}}天，可以领取新鲜蔬菜！</view>
				<view class="jinrihuopde">累计签到{{nianxuqiandao}}天，今日获得<text>新鲜蔬菜</text></view>
				 <image  class="pingup"
				              referrerpolicy="no-referrer"
				              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng85625d412a06b55a2fb35b318b058991a16b5d001e532f543f4bcee67d25c923"
				            />
							 <image
							 @click="close"
							          class="pic4"
							          referrerpolicy="no-referrer"
							          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0150193722f9876d0daf05e2c94d055497b6f990ca3e9c24a5e08fa19097e423"
							        />
		</view>
	</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				month: "",
				data: [],
				qiandaorini: [],
				qiandaoriqi: [],
				qiandao: [],
				class01: "",
				class02: "",
				class03: "",
				class04: "",
				class05: "",
				class06: "",
				class07: "",
				nianxuqiandao: "",
				xuanzongDisable01: true,
				show: false
			}
		},
		onLoad() {
			console.log(new Date().getMonth() + 1)
			this.month = new Date().getMonth() + 1;
			// 获取第一天天数
			console.log(new Date().getDay())
			// 获取首月是星期几
			let year = new Date().getFullYear();
			let time = year + "/" + this.month + "/" + "1"
			let week = new Date(time).getDay()

			function getDays() {
				var date = new Date();
				//将当前月份加1，下移到下一个月
				date.setMonth(date.getMonth() + 1);
			 //将当前的日期置为0，
				date.setDate(0);
				//再获取天数即取上个月的最后一天的天数
				var days = date.getDate();
				return days;
			}

			function getBeforeDate(n) {
				var date = new Date();
				var year, month, day;
				date.setDate(date.getDate() - n);
				year = date.getFullYear();
				month = date.getMonth() + 1;
				day = date.getDate();
				s = year + '-' + (month < 10 ? ('0' + month) : month) + '-' + (day < 10 ? ('0' + day) : day);
				return s;
			}
			let daysdanqian = getDays()
			for (var i = 0; i < week - 1; i++) {
				this.data.push({
					"data": "",
					"class": "weixuanzong"
				})
			}
			for (var i = 0; i < daysdanqian; i++) {
				this.data.push({
					"data": i + 1,
					"class": "weixuanzong"
				})
			}
			const value = uni.getStorageSync('token');
			let that = this;
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/qiandaoxinxihuoqu', {}, {
				token: value
			}).then(res => {
				that.nianxuqiandao = res.data.nianxuqiandao
				that.xuanzongDisable01 = res.data.isqiandao
				that.qiandaorini = res.data.qiandaorini;
				for (var i = 0; i < that.data.length; i++) {
					for (var j = 0; j < that.qiandaorini.length; j++) {
						if (that.data[i].data == that.qiandaorini[j]) {
							that.data[i].class = "xuanzong"
						}
					}
				}
				var nowdays = new Date()
				var days1 = new Date().getDate()
				var month1 = new Date().getMonth() + 1
				var year1 = new Date().getFullYear()
				console.log(days1)
				this.qiandaoriqi = res.data.qiandaoriqi
				console.log(this.qiandaoriqi)
				let flag = true;
				for(var ji in this.qiandaoriqi){
					if(flag){
						this.qiandao.push( {
							"riqi":this.qiandaoriqi[ji],
							"class":"xuanzong01"
						})
					}else{
						this.qiandao.push( {
							"riqi":this.qiandaoriqi[ji],
							"class":"weixuanzong01"
						})
					}
					if(this.qiandaoriqi[ji] == "今日"){
						flag = false
					}
				}
				console.log(this.qiandao)
				this.class01 = this.qiandao[0].class
				this.class02 = this.qiandao[1].class
				this.class03 = this.qiandao[2].class
				this.class04 = this.qiandao[3].class
				this.class05 = this.qiandao[4].class
				this.class06 = this.qiandao[5].class
				this.class07 = this.qiandao[6].class
			});
		},
		getBeforeDate: function(n) {
			var date = new Date();
			var year, month, day;
			date.setDate(date.getDate() - n);
			year = date.getFullYear();
			month = date.getMonth() + 1;
			day = date.getDate();
			s = year + '-' + (month < 10 ? ('0' + month) : month) + '-' + (day < 10 ? ('0' + day) : day);
			return s;
		},
		methods: {
			close(){
				this.show = false
			},
			nijiqiandao(){
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/nijiqiandao', {}, {
					token: value
				}).then(res => {
					console.log(res);
					that.xuanzongDisable01 = true
					that.show = true
				});
			}
		}
	}
</script>

<style>
	.jinrihuopde text{
		color: #0BC477;
	}
	.waiwei08{
		padding: 7vw;
		text-align: center;
	}
	.neijiqiandao{
		font-size: 5vw;
	}
	.pingup{
		width: 45vw;
		height: 35vw;
	}
	.image{
		position: fixed;
		top: 3vw;
		left: 9vw;
		z-index: 99999999999999;
	}
	.pic4{
		position: fixed;
		z-index: 9999999999999;
		top: 120vw;
		left: 42vw;
		width: 13vw;
		height: 13vw;
	}
	.xuanzong {
		background-color: #FFBA45;
		border-radius: 8vw;
		text-align: center;
		color: #FFFFFF;
	}

	.riqicount {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}

	.riqicount view {
		margin: 3vw;
		padding: 1vw;
		width: 6vw;


	}

	.zhuyishixian {
		text-align: center;
		color: #9e9e9e;
	}

	.title {
		text-align: center;
		padding: 3vw;
	}

	.riqi {
		padding-left: 3vw;
		padding-right: 2vw;
		color: #FFFFFF;
		display: inline-block;
		width: 200vw;
	}
	.qiandaoriniwaiwei {
		margin-top: 10vw;
		background-color: #FFFFFF;
		margin-left: 8vw;
		margin-right: 8vw;
		border-radius: 2vw;
	}

	body {
		background-image: url(https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/qiandaobeijin.png);
		background-size: cover;
		background-repeat: no-repeat;
	}

	.xiantiao {
		margin-top: 13vw;
		z-index: -99999999999;
		position: absolute;
		width: 88%;
		margin-left: 5vw;
		margin-right: 5vw;
	}

	.waiwei {
		padding-top: 10vw;
	}

	.xuanzong01 {
		margin: 3vw;
		background-color: #FFBA45;
		padding: 2vw;
		border-radius: 80vw;
		color: #FFFFFF;
	}
	.weixuanzong01{
		margin: 3vw;
		background-color: #B7B7B7;
		padding: 2vw;
		border-radius: 80vw;
		color: #FFFFFF;
	}
	.count {
		color: #FFFFFF;
		margin-top: 5vw;
		margin-left: 5vw;
	}

	.count text {
		color: #d1a909;
	}

	.button {
		margin-top: 7vw;
		margin-left: 25vw;
		margin-right: 25vw;
	}

	.button u-icon {
		margin-right: 5vw;
	}
</style>
