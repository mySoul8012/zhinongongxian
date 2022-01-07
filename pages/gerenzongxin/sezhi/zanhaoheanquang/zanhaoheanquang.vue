<template>
	<view>
		<view class="bottom1">
			<view  @click="phonebandin">
			<u-row customStyle="margin-bottom: 10px" class="bottom" >
				<u-col span="9">
					<view class="demo-layout bg-purple tudi" >
						<view class="tudi">绑定手机</view>
						<view class="phone">{{phone}}</view>
					</view>
				</u-col>
				<u-col span="3">
					<view class="demo-layout bg-purple">
						<view class="jiantou"><text class="xiougai">{{phone1}}</text>></view>
					</view>
				</u-col>
			</u-row>
			</view>
			<u-row customStyle="margin-bottom: 10px" @click="weixinButtom" class="bottom">
				<u-col span="9">
					<view class="demo-layout bg-purple tudi">
						<view class="tudi">绑定微信</view>
						<view class="phone">{{weixin}}</view>
					</view>
				</u-col>
				<u-col span="3">
					<view class="demo-layout bg-purple">
						<view class="jiantou"><text class="xiougai">{{weixin1}}</text>></view>
					</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px" class="bottom" @click="shiminrenzhen">
				<u-col span="9">
					<view class="demo-layout bg-purple tudi">
						<view class="tudi">实名认证</view>
					</view>
				</u-col>
				<u-col span="3">
					<view class="demo-layout bg-purple">
						<view class="jiantou"><text class="xiougai">{{renzhen}}</text>></view>
					</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px" class="bottom" @click="sezhimima">
				<u-col span="11">
					<view class="demo-layout bg-purple tudi">
						<view class="tudi">设置密码</view>
					</view>
				</u-col>
				<u-col span="1">
					<view class="demo-layout bg-purple">
						<view class="jiantou">></view>
					</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px" class="bottom" @click="showModal">
				<u-col span="11">
					<view class="demo-layout bg-purple tudi">
						<view class="tudi">注销账号</view>
					</view>
				</u-col>
				<u-col span="1">
					<view class="demo-layout bg-purple">
						<view class="jiantou">></view>
					</view>
				</u-col>
			</u-row>
		</view>
		<view>
			<u-modal v-model="show" @confirm="confirm" ref="uModal" title="确认" content="确认注销账号吗？"
				:show-cancel-button="true" :mask-close-able="true" :async-close="true"></u-modal>
						<u-toast ref="uToast" />

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				phone: "",
				phone1: "",
				weixin: "",
				weixin1: "",
				renzhen: ""
			}
		},
		onLoad() {
			const value = uni.getStorageSync('token');
			let that = this;
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/zanhaoheanquan', {}, {
				token: value
			}).then(res => {
				console.log(res);
				if(res.states == "200"){
					that.phone = res.data.phone
					that.phone1 = res.data.phone1
					that.weixin = res.data.weixin
					that.weixin1 = res.data.weixin1
					that.renzhen = res.data.renzhen
				}
			});
		},
		methods: {
			showModal() {
				this.show = true;
			},
			sezhimima(){
				uni.navigateTo({
					url:"/pages/gerenzongxin/sezhi/sezhimima/sezhimima"
				})
			},
			phonebandin(){
				uni.navigateTo({
					url:"/pages/gerenzongxin/sezhi/bandinsouji/bandinsouji"
				})
			},
			shiminrenzhen(){
				uni.navigateTo({
					url:"/pages/gerenzongxin/sezhi/shimingrenzhen/shimingrenzhen"
				})
			},
			weixinButtom(){
				const value = uni.getStorageSync('token');
				let that = this;
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
				    console.log(loginRes.authResult);
				    // 获取用户信息
				    uni.getUserInfo({
				      provider: 'weixin',
				      success: function (infoRes) {
				        console.log('用户昵称为：' + infoRes.userInfo.openId);
						that.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/userOpenid?openid=' + infoRes.userInfo.openId, {}, {
							token: value
						}).then(res => {
							console.log(res);
							if(res.states == "200"){
								that.weixin = infoRes.userInfo.nickName;
								that.weixin1 = "去修改"
								that.$refs.uToast.show({
													title: '绑定微信成功',
													type: 'success'
												})
							}
						});
				      }
				    });
				  }
				});
			},
			confirm() {
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/zhuxiaozanhao', {}, {
					token: value
				}).then(res => {
					console.log(res);
					if(res.states == "200"){
						that.show = !that.show;
						that.$refs.uToast.show({
											title: '注销账号成功',
											type: 'success',
											url: "/pages/Login/Login"
										})
					}
				});
			}
		}
	}
</script>

<style>
	body {
		background-color: #F7F7F7;
	}

	.bottom {

		padding-top: 4vw;
		padding-bottom: 4vw;
		font-size: 5vw;
		padding-left: 2vw;
		padding-right: 2vw;
	}

	.bottom1 {
		background-color: #FFFFFF;
		margin-left: 5vw;
		margin-right: 5vw;
		border-radius: 3vw;
		box-shadow: 10px 5px 5px #F3F4F6;
	}

	.phone {
		color: #a8a8a8;
		font-size: 4vw;
	}

	.xiougai {
		color: #a8a8a8;
		font-size: 4vw;
		padding-right: 3vw;
	}
</style>
