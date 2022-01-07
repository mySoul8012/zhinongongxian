<template>
	<view>

		<scroll-view scroll-y="true" scroll-x="true" class="scroll">
			<view class="logo01">
				<u-row gutter="16">
					<u-col span="3">
						<view class="demo-layout bg-purple">
							<image class="logo"
								src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/redianLogo.png">

						</view>
					</u-col>
					<u-col span="9">
						<view class="demo-layout bg-purple-light">您好，欢迎咨询智慧农场在线客服。</view>
					</u-col>
				</u-row>
			</view>
			<view class="huangewenti">
				<u-row gutter="16">
					<u-col span="4">
						<view class="demo-layout bg-purple">你是不是想问</view>
					</u-col>
					<u-col span="7">
						<view class="demo-layout bg-purple-light huanyihuan">换一换</view>
					</u-col>
					<u-col span="1">
						<view class="demo-layout bg-purple-dark">
							<image class="label1" referrerpolicy="no-referrer"
								src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng35b89a277f1d8e5724b72a8acdea7849c4cf2a5978bc18f1343e782dcc6cfc05" />
						</view>
					</u-col>
				</u-row>
				<view v-for="(item, index) in nishibushixianwen" @click="fasongxiaosi(item)">
					<view class="weifahuo" @click="canpinweifahuo(item)">{{item}} </view>
					<u-line v-if="index != nishibushixianwen.length - 1" margin="3vw 3vw 0 0 " color="#b5b5b5" />
				</view>
			</view>
			<view v-for="item in niantiao">
				<view class="me01" v-if="item.isMe">
					<view class="me">{{item.msg}}</view>
				</view>
				<view  v-if="!item.isMe">
					<view class="she01">
						<view class="she">{{item.msg}}</view>
					</view>
					<view class="jjdiao">
						<u-row gutter="16">
							<u-col span="4" @click="yijj(item.id)">
								<view class="demo-layout bg-purple shugan">
									<u-icon :name="yijjIcon"></u-icon>已解决
								</view>
							</u-col>
							<u-col span="4">
								<view class="demo-layout bg-purple-light shugan">|</view>
							</u-col>
							<u-col span="4" @click="weijj(item.id)">
								<view class="demo-layout bg-purple-dark shugan">
									<u-icon :name="weijjIcon"></u-icon>未解决
								</view>
							</u-col>
						</u-row>
					</view>
				</view>
			</view>
			
		</scroll-view>
		<view class="bottom"></view>
		<view class="waiwei">
			<u-row gutter="16">
						<u-col span="11">
							<view class="demo-layout bg-purple">
								<view class="input">
									<u-input v-model="value" />
								</view>
							</view>
						</u-col>
						<u-col span="1">
							<view class="demo-layout bg-purple-light">
								<image @click="send"
								  class="icon5"
								  referrerpolicy="no-referrer"
								  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge0f3c2ae9d35133c686c7b4afb0b6aaf9a43410442b7653036cf057cd6ae0a12"
								/>
							</view>
						</u-col>
						
					</u-row>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nishibushixianwen: "",
				niantiao:[
				],
				value:"",
				yijjIcon: "thumb-up",
				weijjIcon:"thumb-down"
			}
		},
		onLoad() {
			// 待交易
			const value = uni.getStorageSync('token');
			let that = this;
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/shibushixianwen', {}, {
				token: value
			}).then(res => {
				console.log(res);
				that.nishibushixianwen = res.data
			});
		},
		methods: {
			yijj(e){
				if(this.yijjIcon == "thumb-up"){
				console.log(e)
				// 待交易
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/shifoujj?is=true', {}, {
					token: value
				}).then(res => {
					console.log(res);
					that.yijjIcon = "thumb-up-fill"
				});
				}
			},
			weijj(e){
				if(this.weijjIcon=="thumb-down"){
				console.log(e)
				// 待交易
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/shifoujj?is=false', {}, {
					token: value
				}).then(res => {
					console.log(res);
					that.weijjIcon = "thumb-down-fill"
				});
				}
			},
			canpinweifahuo(e){
				console.log(e)
				console.log(1)
				// 待交易
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/send?msg=' + e, {}, {
					token: value
				}).then(res => {
					console.log(res);
					that.niantiao.push(
						{
							"id": 0,
							"msg": e,
							"isMe": true
						}
					)
					that.niantiao.push(
						{
							"id": res.data.id,
							"msg": res.data.msg,
							"isMe": false
						}
					)
				});
			},
			send(){
				console.log(1)
				// 待交易
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/send?msg=' + this.value, {}, {
					token: value
				}).then(res => {
					console.log(res);
					that.niantiao.push(
						{
							"id": 0,
							"msg": this.value,
							"isMe": true
						}
					)
					this.value = "",
					that.niantiao.push(
						{
							"id": res.data.id,
							"msg": res.data.msg,
							"isMe": false
						}
					)
				});
			},
			fasongxiaosi(e){
				console.log(e)
			}
		}
	}
</script>

<style>
	body {
		background: #F7F7F7;
	}
	.bottom{
		height: 30vw;
	}
	.icon5{
		width: 8vw;
		height: 8vw;
	}
	.input {
		background: #F7F7F7;
		border-radius: 5vw;
		padding: 2vw;
		padding-left: 5vw;
		padding-right: 5vw;
	}

	.scroll {
		z-index: 5;
	}

	.waiwei {
		/* width: 100%;
		background: #F7F7F7;
		position: -webkit-sticky !important;
		position: sticky !important;
		position: fixed;
		right: 0;
		bottom: calc(var(--window-bottom) + 0px);
		left: 0;
		z-index: 1030;
		margin-bottom: 0;
		padding: 5vw;
		background-color: #FFFFFF; */
		background-color: #FFFFFF;
		padding: 5vw;
		position: fixed;
		left: 0;
		top: 88%;
		box-shadow: 1px 1px 20px 2px #d1d1d1;
		width: 100%;
	}

	.shugan {
		text-align: center;
	}

	.jjdiao {
		background-color: #FFFFFF;
		margin-left: 10vw;
		margin-right: 10vw;
		padding: 5vw;
		text-align: center;
		border-radius: 3vw;
	}

	.me01 {
		text-align: right;
		margin: 4vw;
		padding: 2vw;
		padding: 5vw;
	}

	.she01 {
		text-align: left;
		margin: 4vw;
		padding: 2vw;
		padding: 5vw;
	}

	.me {

		display: inline-block;
		width: auto;
		height: auto;
		background-color: #18B566;
		padding: 3vw;
		border-radius: 4vw 0vw 4vw 4vw;
		color: #FFFFFF;
	}

	.she {
		display: inline-block;
		width: auto;
		height: auto;
		background-color: #FFFFFF;
		padding: 3vw;
		border-radius: 0vw 4vw 4vw 4vw;
	}

	.weifahuo {
		margin-top: 5vw;
		margin-left: 1vw;
	}

	.huangewenti {
		margin: 4vw;
		padding: 2vw;
		background-color: #FFFFFF;
		border-radius: 3vw;
		margin-top: 6vw;
	}

	.label1 {
		width: 3vw;
		height: 3vw;
	}

	.huanyihuan {
		text-align: right;
	}

	.logo {
		width: 15vw;
		height: 15vw;
	}

	.logo01 {
		margin: 4vw;
		padding: 2vw;
		background-color: #FFFFFF;
		border-radius: 2vw;
	}



	u-input {}
</style>
