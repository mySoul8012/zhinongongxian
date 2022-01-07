<template>
	<view>
		<view class="waiwei">
			<u-row gutter="16">
				<u-col span="3">
					<view class="demo-layout bg-purple">原手机号</view>
				</u-col>
				<u-col span="1">
					<view class="demo-layout bg-purple-light">|</view>
				</u-col>
				<u-col span="8">
					<view class="demo-layout bg-purple-dark">
						<u-input v-model="phone"  placeholder="请输入原手机号"/>
					</view>
				</u-col>
			</u-row>
			<u-row gutter="16">
				<u-col span="3">
					<view class="demo-layout bg-purple">验证码</view>
				</u-col>
				<u-col span="1">
					<view class="demo-layout bg-purple-light">|</view>
				</u-col>
				<u-col span="4">
					<view class="demo-layout bg-purple-dark">
						<u-input v-model="yanzhenma"  placeholder="请输入验证码"/>
					</view>
				</u-col>
				<u-col span="4">
					<view class="demo-layout bg-purple-dark">
						<view>获取验证码</view>
					</view>
				</u-col>
			</u-row>
			<u-row gutter="16">
				<u-col span="3">
					<view class="demo-layout bg-purple">新手机号</view>
				</u-col>
				<u-col span="1">
					<view class="demo-layout bg-purple-light">|</view>
				</u-col>
				<u-col span="8">
					<view class="demo-layout bg-purple-dark">
						<u-input v-model="newphone"  placeholder="请输入新手机号"/>
					</view>
				</u-col>
			</u-row>
			<u-row gutter="16">
				<u-col span="3">
					<view class="demo-layout bg-purple">确认手机号</view>
				</u-col>
				<u-col span="1">
					<view class="demo-layout bg-purple-light">|</view>
				</u-col>
				<u-col span="8">
					<view class="demo-layout bg-purple-dark">
						<u-input v-model="newzaiciphone"  placeholder="请再次输入确认新手机号"/>
					</view>
				</u-col>
			</u-row>
		</view>
		<view class="anniou">
			<u-button type="success" shape="circle" @click="success">确认</u-button>
		</view>
				<u-toast ref="uToast" />

	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:"",
				yanzhenma:"",
				newphone:"",
				newzaiciphone:""
			}
		},
		methods: {
			success(){
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/phoneNew?phone='+ this.phone + "&yanzhenma=" + this.yanzhenma + "&newphone=" + this.newphone + "&newzaiciphone=" + this.newzaiciphone, {}, {
					token: value
				}).then(res => {
					console.log(res);
					if(res.states == "200"){
						that.$refs.uToast.show({
											title: '修改手机号成功',
											type: 'success',
											url: "/pages/gerenzongxin/sezhi/zanhaoheanquang/zanhaoheanquang"
										})
					}
				});
			}
		}
	}
</script>

<style>
	.anniou{
		margin-left: 15vw;
		margin-right: 15vw;
		margin-top: 25vw;
		
	}
	.waiwei{
		margin-top: 10vw;
		padding: 5vw;
		margin-left: 3vw;
		margin-right: 3vw;
	}
	.bg-purple-light{
		color: #9c9c9c;
		
	}
</style>
