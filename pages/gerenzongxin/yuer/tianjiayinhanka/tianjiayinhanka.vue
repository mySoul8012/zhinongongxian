<template>
	<view class="page flex-col">
		<view class="section1 flex-col">
			<text class="word3">添加银行卡</text>
			<text class="txt1">请绑定持卡人本人的银行卡</text>
			<view class="main2 flex-row" style="width: 74%;">
				<text class="word4">持卡人</text>

				<u-input height="50" class="cikaren inputcikaren" v-model="cikaren" type="type"
					placeholder="持卡人本人银行卡卡号" />

			</view>
			<view class="main3 flex-col"></view>
			<view class="main4 flex-row">
				<text class="word5">卡号</text>
				<u-input height="50" class="kahao" v-model="kahao" type="type" placeholder="持卡人本人银行卡卡号"/>
			</view>
			<view class="main5 flex-col"></view>
			<view class="main6 flex-row" @click="kaneixin">
				<text class="word6">卡类型</text>
				<text class="word7">{{kaneixin01}}</text>
				<view class="group1 flex-col"></view>
			</view>
			<view class="main7 flex-col"></view>
			<view class="main8 flex-row" style="width: 80%;">
				<text class="txt2">手机号</text>
				<u-input height="50" class="kahao" v-model="phone" placeholder="请输入银行预留手机号" />
			</view>
			<view class="main9 flex-col"></view>
			<view class="button">
				<u-button type="success" shape="circle" @click="button">下一步</u-button>
			</view>
		</view>
		<u-select @confirm="confirm" v-model="show" :list="list"></u-select>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				constants: {},
				cikaren: "",
				show: false,
				list: [{
						value: '1002',
						label: '工商银行'
					},
					{
						value: '1005',
						label: '农业银行'
					}
				],
				kaneixin01: "工商银行",
				kaneixinxuanzong: "",
				kahao:"",
				phone:""
			};
		},
		methods: {
			kaneixin(){
				this.show = !this.show
			},
			confirm(e){
				console.log(e)
				this.kaneixin01 = e[0].label
				this.kaneixinxuanzong = e[0].value
				console.log(111)
			},
			button(){
				try {
				    uni.setStorageSync('cikaren', this.cikaren);
					uni.setStorageSync('kaneixinxuanzong', this.kaneixinxuanzong);
					uni.setStorageSync('kahao', this.kahao);
					uni.setStorageSync('phone', this.phone);
					uni.navigateTo({
						url:"/pages/gerenzongxin/yuer/tianjiayinhanka/tianjiayinhanka02/tianjiayinhanka02"
					})
				} catch (e) {
				    // error
				}
			}
		}
	};
</script>
<style>
	.button {
		margin-top: 30vw;
		margin-left: 10vw;
		margin-right: 10vw;
	}

	.kahao {
		margin-left: 8vw;
	}

	.inputcikaren {
		padding-bottom: 10vw;
		margin-left: 5vw;
	}

	.cikaren {}

	.page {
		z-index: 1;
		position: relative;
		width: 375px;
		height: 812px;
		background-color: rgba(255, 255, 255, 1);
		overflow: hidden;
		justify-content: flex-start;
		padding-top: 0;
	}

	.section1 {
		z-index: auto;
		width: 375px;
		height: 803px;
	}

	.main1 {
		z-index: 2;
		height: 88px;
		background-color: rgba(247, 247, 247, 1);
		width: 375px;
		justify-content: flex-start;
	}

	.mod1 {
		z-index: auto;
		width: 375px;
		height: 79px;
	}

	.layer1 {
		z-index: 8;
		height: 44px;
		width: 375px;
		justify-content: flex-end;
		align-items: flex-end;
		padding: 0 14px 11px 0;
	}

	.wrap1 {
		z-index: auto;
		width: 340px;
		height: 17px;
	}

	.box1 {
		z-index: 23;
		width: 54px;
		height: 17px;
		overflow-wrap: break-word;
		text-align: center;
		white-space: nowrap;
		font-size: 0;
	}

	.word1 {
		font-size: 14px;
		font-family: Helvetica;
		color: rgba(0, 0, 0, 1);
		line-height: 17px;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.word2 {
		font-size: 14px;
		font-family: Helvetica;
		color: rgba(0, 0, 0, 1);
		line-height: 17px;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.box2 {
		z-index: 17;
		width: 17px;
		height: 11px;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8ce7767a969f0a87db754c9e45a3e7a4dcead05688664c56b6305e19b5138508) -1px -1px no-repeat;
		margin: 2px 0 0 219px;
	}

	.box3 {
		z-index: 13;
		width: 16px;
		height: 11px;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng92d71d13da58ba4887551315bf83a1d7044dd8e56d5d54f8f479185caa02c6e2) -1px 0px no-repeat;
		margin: 2px 0 0 5px;
	}

	.icon1 {
		z-index: 9;
		width: 25px;
		height: 12px;
		margin: 1px 0 0 4px;
	}

	.layer2 {
		z-index: auto;
		width: 186px;
		height: 25px;
		justify-content: space-between;
		margin: 10px 0 0 20px;
	}

	.icon2 {
		z-index: 24;
		width: 12px;
		height: 22px;
		margin-top: 2px;
	}

	.info1 {
		z-index: 3;
		width: 36px;
		height: 25px;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 18px;
		letter-spacing: -0.4320000112056732px;
		white-space: nowrap;
		line-height: 25px;
		text-align: left;
	}

	.word3 {
		z-index: 4;
		width: 88px;
		height: 25px;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 18px;
		letter-spacing: -0.4320000112056732px;
		font-family: PingFangSC-Medium;
		white-space: nowrap;
		line-height: 25px;
		text-align: left;
		align-self: center;
		margin-top: 33px;
	}

	.txt1 {
		z-index: 5;
		width: 188px;
		height: 22px;
		display: block;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 16px;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 22px;
		text-align: left;
		align-self: center;
		margin-top: 10px;
	}

	.main2 {
		z-index: auto;
		height: 22px;
		width: 70%;
		justify-content: space-between;
		margin: 64px 0 0 36px;
	}

	.word4 {
		z-index: 34;
		width: 47px;
		height: 22px;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 16px;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 22px;
		text-align: left;
	}

	.info2 {
		z-index: 38;
		width: 47px;
		height: 22px;
		display: block;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 16px;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 22px;
		text-align: left;
	}

	.main3 {
		z-index: 30;
		width: 305px;
		height: 1px;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng159aadce71bdd14063cf1a60cd5b402cf77d45060a7c029157481e2413a68211) -1px 0px no-repeat;
		align-self: center;
		margin-top: 20px;
	}

	.main4 {
		z-index: auto;
		width: 305px;
		height: 22px;
		margin: 20px 0 0 36px;
	}

	.word5 {
		z-index: 35;
		width: 32px;
		height: 22px;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 16px;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 22px;
		text-align: left;
	}

	.info3 {
		z-index: 39;
		width: 157px;
		height: 22px;
		display: block;
		overflow-wrap: break-word;
		color: rgba(153, 153, 153, 1);
		font-size: 16px;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 22px;
		text-align: left;
		margin-left: 32px;
	}

	.label1 {
		z-index: 42;
		width: 20px;
		height: 20px;
		margin: 1px 0 0 64px;
	}

	.main5 {
		z-index: 31;
		width: 305px;
		height: 1px;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng159aadce71bdd14063cf1a60cd5b402cf77d45060a7c029157481e2413a68211) -1px 0px no-repeat;
		align-self: center;
		margin-top: 20px;
	}

	.main6 {
		z-index: auto;
		width: 305px;
		height: 22px;
		margin: 21px 0 0 36px;
	}

	.word6 {
		z-index: 37;
		width: 47px;
		height: 22px;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 16px;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 22px;
		text-align: left;
	}

	.word7 {
		z-index: 41;
		width: 115px;
		height: 22px;
		display: block;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 16px;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 22px;
		text-align: left;
		margin-left: 17px;
	}

	.group1 {
		z-index: 53;
		width: 15px;
		height: 14px;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3f0e97ea041b4d5bb99b7391afee5ec670fdb3d09874857f9ed5dbd5adfe35fa) 100% no-repeat;
		margin: 4px 0 0 111px;
	}

	.main7 {
		z-index: 33;
		width: 305px;
		height: 1px;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng159aadce71bdd14063cf1a60cd5b402cf77d45060a7c029157481e2413a68211) -1px 0px no-repeat;
		align-self: center;
		margin-top: 20px;
	}

	.main8 {
		z-index: auto;
		width: 100%;
		height: 22px;
		justify-content: space-between;
		margin: 20px 0 0 36px;
	}

	.txt2 {
		z-index: 36;
		width: 32px;
		height: 22px;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 16px;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 22px;
		text-align: left;
	}

	.info4 {
		z-index: 40;
		width: 157px;
		height: 22px;
		display: block;
		overflow-wrap: break-word;
		color: rgba(153, 153, 153, 1);
		font-size: 16px;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 22px;
		text-align: left;
	}

	.main9 {
		z-index: 32;
		width: 305px;
		height: 1px;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng159aadce71bdd14063cf1a60cd5b402cf77d45060a7c029157481e2413a68211) -1px 0px no-repeat;
		align-self: center;
		margin-top: 20px;
	}

	.main10 {
		z-index: 51;
		height: 40px;
		border-radius: 20px;
		background-color: rgba(216, 216, 216, 1);
		align-self: center;
		margin-top: 159px;
		justify-content: center;
		align-items: flex-end;
		padding-right: 116px;
	}

	.word8 {
		z-index: 52;
		width: 52px;
		height: 22px;
		display: block;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 16px;
		letter-spacing: 1.1888890266418457px;
		font-family: PingFangSC-Medium;
		white-space: nowrap;
		line-height: 22px;
		text-align: left;
	}

	.pic1 {
		z-index: 28;
		width: 134px;
		height: 5px;
		align-self: center;
		margin-top: 124px;
	}

	html {
		font-size: 37.5px;
	}

	.page {
		z-index: 1;
		position: relative;
		width: 10rem;
		height: 21.654rem;
		background-color: rgba(255, 255, 255, 1);
		overflow: hidden;
		justify-content: flex-start;
		padding-top: 0;
	}

	.section1 {
		z-index: auto;
		width: 10rem;
		height: 21.414rem;
	}

	.main1 {
		z-index: 2;
		height: 2.347rem;
		background-color: rgba(247, 247, 247, 1);
		width: 10rem;
		justify-content: flex-start;
	}

	.mod1 {
		z-index: auto;
		width: 10rem;
		height: 2.107rem;
	}

	.layer1 {
		z-index: 8;
		height: 1.174rem;
		width: 10rem;
		justify-content: flex-end;
		align-items: flex-end;
		padding: 0 0.374rem 0.294rem 0;
	}

	.wrap1 {
		z-index: auto;
		width: 9.067rem;
		height: 0.454rem;
	}

	.box1 {
		z-index: 23;
		width: 1.44rem;
		height: 0.454rem;
		overflow-wrap: break-word;
		text-align: center;
		white-space: nowrap;
		font-size: 0;
	}

	.word1 {
		font-size: 0.373rem;
		font-family: Helvetica;
		color: rgba(0, 0, 0, 1);
		line-height: 0.454rem;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.word2 {
		font-size: 0.373rem;
		font-family: Helvetica;
		color: rgba(0, 0, 0, 1);
		line-height: 0.454rem;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.box2 {
		z-index: 17;
		width: 0.454rem;
		height: 0.294rem;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8ce7767a969f0a87db754c9e45a3e7a4dcead05688664c56b6305e19b5138508) -0.027rem -0.027rem no-repeat;
		background-size: 0.48rem 0.32rem;
		margin: 0.054rem 0 0 5.84rem;
	}

	.box3 {
		z-index: 13;
		width: 0.427rem;
		height: 0.294rem;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng92d71d13da58ba4887551315bf83a1d7044dd8e56d5d54f8f479185caa02c6e2) -0.027rem 0rem no-repeat;
		background-size: 0.427rem 0.32rem;
		margin: 0.054rem 0 0 0.134rem;
	}

	.icon1 {
		z-index: 9;
		width: 0.667rem;
		height: 0.32rem;
		margin: 0.027rem 0 0 0.107rem;
	}

	.layer2 {
		z-index: auto;
		width: 4.96rem;
		height: 0.667rem;
		justify-content: space-between;
		margin: 0.267rem 0 0 0.534rem;
	}

	.icon2 {
		z-index: 24;
		width: 0.32rem;
		height: 0.587rem;
		margin-top: 0.054rem;
	}

	.info1 {
		z-index: 3;
		width: 0.96rem;
		height: 0.667rem;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 0.48rem;
		letter-spacing: -0.4320000112056732px;
		white-space: nowrap;
		line-height: 0.667rem;
		text-align: left;
	}

	.word3 {
		z-index: 4;
		width: 2.347rem;
		height: 0.667rem;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 0.48rem;
		letter-spacing: -0.4320000112056732px;
		font-family: PingFangSC-Medium;
		white-space: nowrap;
		line-height: 0.667rem;
		text-align: left;
		align-self: center;
		margin-top: 0.88rem;
	}

	.txt1 {
		z-index: 5;
		width: 5.014rem;
		height: 0.587rem;
		display: block;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 0.426rem;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 0.587rem;
		text-align: left;
		align-self: center;
		margin-top: 0.267rem;
	}

	.main2 {
		z-index: auto;
		width: 2.96rem;
		height: 0.587rem;
		justify-content: space-between;
		margin: 1.707rem 0 0 0.96rem;
	}

	.word4 {
		z-index: 34;
		width: 1.254rem;
		height: 0.587rem;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 0.426rem;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 0.587rem;
		text-align: left;
	}

	.info2 {
		z-index: 38;
		width: 1.254rem;
		height: 0.587rem;
		display: block;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 0.426rem;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 0.587rem;
		text-align: left;
	}

	.main3 {
		z-index: 30;
		width: 8.134rem;
		height: 0.027rem;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng159aadce71bdd14063cf1a60cd5b402cf77d45060a7c029157481e2413a68211) -0.027rem 0rem no-repeat;
		background-size: 8.187rem 0.027rem;
		align-self: center;
		margin-top: 0.534rem;
	}

	.main4 {
		z-index: auto;
		width: 8.134rem;
		height: 0.587rem;
		margin: 0.534rem 0 0 0.96rem;
	}

	.word5 {
		z-index: 35;
		width: 0.854rem;
		height: 0.587rem;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 0.426rem;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 0.587rem;
		text-align: left;
	}

	.info3 {
		z-index: 39;
		width: 4.187rem;
		height: 0.587rem;
		display: block;
		overflow-wrap: break-word;
		color: rgba(153, 153, 153, 1);
		font-size: 0.426rem;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 0.587rem;
		text-align: left;
		margin-left: 0.854rem;
	}

	.label1 {
		z-index: 42;
		width: 0.534rem;
		height: 0.534rem;
		margin: 0.027rem 0 0 1.707rem;
	}

	.main5 {
		z-index: 31;
		width: 8.134rem;
		height: 0.027rem;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng159aadce71bdd14063cf1a60cd5b402cf77d45060a7c029157481e2413a68211) -0.027rem 0rem no-repeat;
		background-size: 8.187rem 0.027rem;
		align-self: center;
		margin-top: 0.534rem;
	}

	.main6 {
		z-index: auto;
		width: 8.134rem;
		height: 0.587rem;
		margin: 0.56rem 0 0 0.96rem;
	}

	.word6 {
		z-index: 37;
		width: 1.254rem;
		height: 0.587rem;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 0.426rem;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 0.587rem;
		text-align: left;
	}

	.word7 {
		z-index: 41;
		width: 3.067rem;
		height: 0.587rem;
		display: block;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 0.426rem;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 0.587rem;
		text-align: left;
		margin-left: 0.454rem;
	}

	.group1 {
		z-index: 53;
		width: 0.4rem;
		height: 0.374rem;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3f0e97ea041b4d5bb99b7391afee5ec670fdb3d09874857f9ed5dbd5adfe35fa) 100% no-repeat;
		margin: 0.107rem 0 0 2.96rem;
	}

	.main7 {
		z-index: 33;
		width: 8.134rem;
		height: 0.027rem;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng159aadce71bdd14063cf1a60cd5b402cf77d45060a7c029157481e2413a68211) -0.027rem 0rem no-repeat;
		background-size: 8.187rem 0.027rem;
		align-self: center;
		margin-top: 0.534rem;
	}

	.main8 {
		z-index: auto;
		width: 5.894rem;
		height: 0.587rem;
		justify-content: space-between;
		margin: 0.534rem 0 0 0.96rem;
	}

	.txt2 {
		z-index: 36;
		width: 0.854rem;
		height: 0.587rem;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 0.426rem;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 0.587rem;
		text-align: left;
	}

	.info4 {
		z-index: 40;
		width: 4.187rem;
		height: 0.587rem;
		display: block;
		overflow-wrap: break-word;
		color: rgba(153, 153, 153, 1);
		font-size: 0.426rem;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 0.587rem;
		text-align: left;
	}

	.main9 {
		z-index: 32;
		width: 8.134rem;
		height: 0.027rem;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng159aadce71bdd14063cf1a60cd5b402cf77d45060a7c029157481e2413a68211) -0.027rem 0rem no-repeat;
		background-size: 8.187rem 0.027rem;
		align-self: center;
		margin-top: 0.534rem;
	}

	.main10 {
		z-index: 51;
		height: 1.067rem;
		border-radius: 20px;
		background-color: rgba(216, 216, 216, 1);
		align-self: center;
		margin-top: 4.24rem;
		width: 8rem;
		justify-content: center;
		align-items: flex-end;
		padding-right: 3.094rem;
	}

	.word8 {
		z-index: 52;
		width: 1.387rem;
		height: 0.587rem;
		display: block;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 0.426rem;
		letter-spacing: 1.1888890266418457px;
		font-family: PingFangSC-Medium;
		white-space: nowrap;
		line-height: 0.587rem;
		text-align: left;
	}

	.pic1 {
		z-index: 28;
		width: 3.574rem;
		height: 0.134rem;
		align-self: center;
		margin-top: 3.307rem;
	}

	.page {
		z-index: 1;
		position: relative;
		width: 100vw;
		height: 216.54vw;
		background-color: rgba(255, 255, 255, 1);
		overflow: hidden;
		justify-content: flex-start;
		padding-top: 0;
	}

	.section1 {
		z-index: auto;
		width: 100vw;
		height: 214.14vw;
	}

	.main1 {
		z-index: 2;
		height: 23.47vw;
		background-color: rgba(247, 247, 247, 1);
		width: 100vw;
		justify-content: flex-start;
	}

	.mod1 {
		z-index: auto;
		width: 100vw;
		height: 21.07vw;
	}

	.layer1 {
		z-index: 8;
		height: 11.74vw;
		width: 100vw;
		justify-content: flex-end;
		align-items: flex-end;
		padding: 0 3.73vw 2.93vw 0;
	}

	.wrap1 {
		z-index: auto;
		width: 90.67vw;
		height: 4.54vw;
	}

	.box1 {
		z-index: 23;
		width: 14.4vw;
		height: 4.54vw;
		overflow-wrap: break-word;
		text-align: center;
		white-space: nowrap;
		font-size: 0;
	}

	.word1 {
		font-size: 3.73vw;
		font-family: Helvetica;
		color: rgba(0, 0, 0, 1);
		line-height: 4.54vw;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.word2 {
		font-size: 3.73vw;
		font-family: Helvetica;
		color: rgba(0, 0, 0, 1);
		line-height: 4.54vw;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.box2 {
		z-index: 17;
		width: 4.54vw;
		height: 2.94vw;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8ce7767a969f0a87db754c9e45a3e7a4dcead05688664c56b6305e19b5138508) -0.27vw -0.27vw no-repeat;
		background-size: 4.8vw 3.2vw;
		margin: 0.53vw 0 0 58.4vw;
	}

	.box3 {
		z-index: 13;
		width: 4.27vw;
		height: 2.94vw;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng92d71d13da58ba4887551315bf83a1d7044dd8e56d5d54f8f479185caa02c6e2) -0.27vw 0vw no-repeat;
		background-size: 4.26vw 3.2vw;
		margin: 0.53vw 0 0 1.33vw;
	}

	.icon1 {
		z-index: 9;
		width: 6.67vw;
		height: 3.2vw;
		margin: 0.26vw 0 0 1.06vw;
	}

	.layer2 {
		z-index: auto;
		width: 49.6vw;
		height: 6.67vw;
		justify-content: space-between;
		margin: 2.66vw 0 0 5.33vw;
	}

	.icon2 {
		z-index: 24;
		width: 3.2vw;
		height: 5.87vw;
		margin-top: 0.54vw;
	}

	.info1 {
		z-index: 3;
		width: 9.6vw;
		height: 6.67vw;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 4.8vw;
		letter-spacing: -0.4320000112056732px;
		white-space: nowrap;
		line-height: 6.67vw;
		text-align: left;
	}

	.word3 {
		z-index: 4;
		width: 23.47vw;
		height: 6.67vw;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 4.8vw;
		letter-spacing: -0.4320000112056732px;
		font-family: PingFangSC-Medium;
		white-space: nowrap;
		line-height: 6.67vw;
		text-align: left;
		align-self: center;
		margin-top: 8.8vw;
	}

	.txt1 {
		z-index: 5;
		width: 50.14vw;
		height: 5.87vw;
		display: block;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 4.26vw;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 5.87vw;
		text-align: left;
		align-self: center;
		margin-top: 2.67vw;
	}

	.main2 {
		z-index: auto;
		width: 29.6vw;
		height: 5.87vw;
		justify-content: space-between;
		margin: 17.06vw 0 0 9.6vw;
	}

	.word4 {
		z-index: 34;
		width: 12.54vw;
		height: 5.87vw;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 4.26vw;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 5.87vw;
		text-align: left;
	}

	.info2 {
		z-index: 38;
		width: 12.54vw;
		height: 5.87vw;
		display: block;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 4.26vw;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 5.87vw;
		text-align: left;
	}

	.main3 {
		z-index: 30;
		width: 81.34vw;
		height: 0.27vw;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng159aadce71bdd14063cf1a60cd5b402cf77d45060a7c029157481e2413a68211) -0.27vw 0vw no-repeat;
		background-size: 81.86vw 0.26vw;
		align-self: center;
		margin-top: 5.34vw;
	}

	.main4 {
		z-index: auto;
		width: 81.34vw;
		height: 5.87vw;
		margin: 5.33vw 0 0 9.6vw;
	}

	.word5 {
		z-index: 35;
		width: 8.54vw;
		height: 5.87vw;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 4.26vw;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 5.87vw;
		text-align: left;
	}

	.info3 {
		z-index: 39;
		width: 41.87vw;
		height: 5.87vw;
		display: block;
		overflow-wrap: break-word;
		color: rgba(153, 153, 153, 1);
		font-size: 4.26vw;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 5.87vw;
		text-align: left;
		margin-left: 8.54vw;
	}

	.label1 {
		z-index: 42;
		width: 5.34vw;
		height: 5.34vw;
		margin: 0.26vw 0 0 17.06vw;
	}

	.main5 {
		z-index: 31;
		width: 81.34vw;
		height: 0.27vw;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng159aadce71bdd14063cf1a60cd5b402cf77d45060a7c029157481e2413a68211) -0.27vw 0vw no-repeat;
		background-size: 81.86vw 0.26vw;
		align-self: center;
		margin-top: 5.34vw;
	}

	.main6 {
		z-index: auto;
		width: 81.34vw;
		height: 5.87vw;
		margin: 5.6vw 0 0 9.6vw;
	}

	.word6 {
		z-index: 37;
		width: 12.54vw;
		height: 5.87vw;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 4.26vw;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 5.87vw;
		text-align: left;
	}

	.word7 {
		z-index: 41;
		width: 30.67vw;
		height: 5.87vw;
		display: block;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 4.26vw;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 5.87vw;
		text-align: left;
		margin-left: 4.54vw;
	}

	.group1 {
		z-index: 53;
		width: 4vw;
		height: 3.74vw;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3f0e97ea041b4d5bb99b7391afee5ec670fdb3d09874857f9ed5dbd5adfe35fa) 100% no-repeat;
		margin: 1.06vw 0 0 29.6vw;
	}

	.main7 {
		z-index: 33;
		width: 81.34vw;
		height: 0.27vw;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng159aadce71bdd14063cf1a60cd5b402cf77d45060a7c029157481e2413a68211) -0.27vw 0vw no-repeat;
		background-size: 81.86vw 0.26vw;
		align-self: center;
		margin-top: 5.34vw;
	}

	.main8 {
		z-index: auto;
		width: 58.94vw;
		height: 5.87vw;
		justify-content: space-between;
		margin: 5.33vw 0 0 9.6vw;
	}

	.txt2 {
		z-index: 36;
		width: 8.54vw;
		height: 5.87vw;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 4.26vw;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 5.87vw;
		text-align: left;
	}

	.info4 {
		z-index: 40;
		width: 41.87vw;
		height: 5.87vw;
		display: block;
		overflow-wrap: break-word;
		color: rgba(153, 153, 153, 1);
		font-size: 4.26vw;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 5.87vw;
		text-align: left;
	}

	.main9 {
		z-index: 32;
		width: 81.34vw;
		height: 0.27vw;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng159aadce71bdd14063cf1a60cd5b402cf77d45060a7c029157481e2413a68211) -0.27vw 0vw no-repeat;
		background-size: 81.86vw 0.26vw;
		align-self: center;
		margin-top: 5.34vw;
	}

	.main10 {
		z-index: 51;
		height: 10.67vw;
		border-radius: 20px;
		background-color: rgba(216, 216, 216, 1);
		align-self: center;
		margin-top: 42.4vw;
		width: 80vw;
		justify-content: center;
		align-items: flex-end;
		padding-right: 30.94vw;
	}

	.word8 {
		z-index: 52;
		width: 13.87vw;
		height: 5.87vw;
		display: block;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 4.26vw;
		letter-spacing: 1.1888890266418457px;
		font-family: PingFangSC-Medium;
		white-space: nowrap;
		line-height: 5.87vw;
		text-align: left;
	}

	.pic1 {
		z-index: 28;
		width: 35.74vw;
		height: 1.34vw;
		align-self: center;
		margin-top: 33.07vw;
	}

	.page {
		z-index: 1;
		position: relative;
		width: 750rpx;
		height: 1624rpx;
		background-color: rgba(255, 255, 255, 1);
		overflow: hidden;
		justify-content: flex-start;
		padding-top: 0;
	}

	.section1 {
		z-index: auto;
		width: 750rpx;
		height: 1606rpx;
	}

	.main1 {
		z-index: 2;
		height: 176rpx;
		background-color: rgba(247, 247, 247, 1);
		width: 750rpx;
		justify-content: flex-start;
	}

	.mod1 {
		z-index: auto;
		width: 750rpx;
		height: 158rpx;
	}

	.layer1 {
		z-index: 8;
		height: 88rpx;
		width: 750rpx;
		justify-content: flex-end;
		align-items: flex-end;
		padding: 0 28rpx 22rpx 0;
	}

	.wrap1 {
		z-index: auto;
		width: 680rpx;
		height: 34rpx;
	}

	.box1 {
		z-index: 23;
		width: 108rpx;
		height: 34rpx;
		overflow-wrap: break-word;
		text-align: center;
		white-space: nowrap;
		font-size: 0;
	}

	.word1 {
		font-size: 28rpx;
		font-family: Helvetica;
		color: rgba(0, 0, 0, 1);
		line-height: 34rpx;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.word2 {
		font-size: 28rpx;
		font-family: Helvetica;
		color: rgba(0, 0, 0, 1);
		line-height: 34rpx;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.box2 {
		z-index: 17;
		width: 34rpx;
		height: 22rpx;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8ce7767a969f0a87db754c9e45a3e7a4dcead05688664c56b6305e19b5138508) -1rpx -1rpx no-repeat;
		margin: 4rpx 0 0 438rpx;
	}

	.box3 {
		z-index: 13;
		width: 32rpx;
		height: 22rpx;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng92d71d13da58ba4887551315bf83a1d7044dd8e56d5d54f8f479185caa02c6e2) -1rpx 0rpx no-repeat;
		margin: 4rpx 0 0 10rpx;
	}

	.icon1 {
		z-index: 9;
		width: 50rpx;
		height: 24rpx;
		margin: 2rpx 0 0 8rpx;
	}

	.layer2 {
		z-index: auto;
		width: 372rpx;
		height: 50rpx;
		justify-content: space-between;
		margin: 20rpx 0 0 40rpx;
	}

	.icon2 {
		z-index: 24;
		width: 24rpx;
		height: 44rpx;
		margin-top: 4rpx;
	}

	.info1 {
		z-index: 3;
		width: 72rpx;
		height: 50rpx;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 36rpx;
		letter-spacing: -0.4320000112056732px;
		white-space: nowrap;
		line-height: 50rpx;
		text-align: left;
	}

	.word3 {
		z-index: 4;
		width: 176rpx;
		height: 50rpx;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 36rpx;
		letter-spacing: -0.4320000112056732px;
		font-family: PingFangSC-Medium;
		white-space: nowrap;
		line-height: 50rpx;
		text-align: left;
		align-self: center;
		margin-top: 66rpx;
	}

	.txt1 {
		z-index: 5;
		width: 376rpx;
		height: 44rpx;
		display: block;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 32rpx;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 44rpx;
		text-align: left;
		align-self: center;
		margin-top: 20rpx;
	}

	.main2 {
		z-index: auto;
		width: 222rpx;
		height: 44rpx;
		justify-content: space-between;
		margin: 128rpx 0 0 72rpx;
	}

	.word4 {
		z-index: 34;
		width: 94rpx;
		height: 44rpx;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 32rpx;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 44rpx;
		text-align: left;
	}

	.info2 {
		z-index: 38;
		width: 94rpx;
		height: 44rpx;
		display: block;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 32rpx;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 44rpx;
		text-align: left;
	}

	.main3 {
		z-index: 30;
		width: 610rpx;
		height: 2rpx;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng159aadce71bdd14063cf1a60cd5b402cf77d45060a7c029157481e2413a68211) -1rpx 0rpx no-repeat;
		align-self: center;
		margin-top: 40rpx;
	}

	.main4 {
		z-index: auto;
		width: 610rpx;
		height: 44rpx;
		margin: 40rpx 0 0 72rpx;
	}

	.word5 {
		z-index: 35;
		width: 64rpx;
		height: 44rpx;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 32rpx;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 44rpx;
		text-align: left;
	}

	.info3 {
		z-index: 39;
		width: 314rpx;
		height: 44rpx;
		display: block;
		overflow-wrap: break-word;
		color: rgba(153, 153, 153, 1);
		font-size: 32rpx;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 44rpx;
		text-align: left;
		margin-left: 64rpx;
	}

	.label1 {
		z-index: 42;
		width: 40rpx;
		height: 40rpx;
		margin: 2rpx 0 0 128rpx;
	}

	.main5 {
		z-index: 31;
		width: 610rpx;
		height: 2rpx;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng159aadce71bdd14063cf1a60cd5b402cf77d45060a7c029157481e2413a68211) -1rpx 0rpx no-repeat;
		align-self: center;
		margin-top: 40rpx;
	}

	.main6 {
		z-index: auto;
		width: 610rpx;
		height: 44rpx;
		margin: 42rpx 0 0 72rpx;
	}

	.word6 {
		z-index: 37;
		width: 94rpx;
		height: 44rpx;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 32rpx;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 44rpx;
		text-align: left;
	}

	.word7 {
		z-index: 41;
		width: 230rpx;
		height: 44rpx;
		display: block;
		overflow-wrap: break-word;
		color: rgba(51, 51, 51, 1);
		font-size: 32rpx;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 44rpx;
		text-align: left;
		margin-left: 34rpx;
	}

	.group1 {
		z-index: 53;
		width: 30rpx;
		height: 28rpx;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3f0e97ea041b4d5bb99b7391afee5ec670fdb3d09874857f9ed5dbd5adfe35fa) 100% no-repeat;
		margin: 8rpx 0 0 222rpx;
	}

	.main7 {
		z-index: 33;
		width: 610rpx;
		height: 2rpx;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng159aadce71bdd14063cf1a60cd5b402cf77d45060a7c029157481e2413a68211) -1rpx 0rpx no-repeat;
		align-self: center;
		margin-top: 40rpx;
	}

	.main8 {
		z-index: auto;
		width: 442rpx;
		height: 44rpx;
		justify-content: space-between;
		margin: 40rpx 0 0 72rpx;
	}

	.txt2 {
		z-index: 36;
		width: 64rpx;
		height: 44rpx;
		display: block;
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 32rpx;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 44rpx;
		text-align: left;
	}

	.info4 {
		z-index: 40;
		width: 314rpx;
		height: 44rpx;
		display: block;
		overflow-wrap: break-word;
		color: rgba(153, 153, 153, 1);
		font-size: 32rpx;
		letter-spacing: -0.3840000033378601px;
		white-space: nowrap;
		line-height: 44rpx;
		text-align: left;
	}

	.main9 {
		z-index: 32;
		width: 610rpx;
		height: 2rpx;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng159aadce71bdd14063cf1a60cd5b402cf77d45060a7c029157481e2413a68211) -1rpx 0rpx no-repeat;
		align-self: center;
		margin-top: 40rpx;
	}

	.main10 {
		z-index: 51;
		height: 80rpx;
		border-radius: 20px;
		background-color: rgba(216, 216, 216, 1);
		align-self: center;
		margin-top: 318rpx;
		width: 600rpx;
		justify-content: center;
		align-items: flex-end;
		padding-right: 232rpx;
	}

	.word8 {
		z-index: 52;
		width: 104rpx;
		height: 44rpx;
		display: block;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 32rpx;
		letter-spacing: 1.1888890266418457px;
		font-family: PingFangSC-Medium;
		white-space: nowrap;
		line-height: 44rpx;
		text-align: left;
	}

	.pic1 {
		z-index: 28;
		width: 268rpx;
		height: 10rpx;
		align-self: center;
		margin-top: 248rpx;
	}

	body * {
		box-sizing: border-box;
		flex-shrink: 0;
	}

	body {
		font-family: PingFangSC-Regular, Roboto, Helvetica Neue, Helvetica, Tahoma,
			Arial, PingFang SC-Light, Microsoft YaHei;
		margin: 0;
	}

	button {
		margin: 0;
		padding: 0;
		border: 1px solid transparent;
		outline: none;
		background-color: transparent;
	}

	button:active {
		opacity: 0.6;
	}

	.flex-col {
		display: flex;
		flex-direction: column;
	}

	.flex-row {
		display: flex;
		flex-direction: row;
	}
</style>
