<template>
	<view>
		<view class="title">
			<u-row customStyle="margin-bottom: 10px">
				<u-col span="1">
					<view class="demo-layout bg-purple-light">
						<view class="logo"></view>
					</view>
				</u-col>
				<u-col span="11">
					<view class="demo-layout bg-purple">
						<view>提醒类型</view>
					</view>
				</u-col>
			</u-row>
		</view>
		<view class="xiaoxitixin">
			<u-row gutter="16" class="u-row">
				<u-col span="9">
					<view class="demo-layout bg-purple">
						<view>系统消息</view>
						<view class="bottom">系统通知，聊天消息等必要提醒</view>
					</view>
				</u-col>
				<u-col span="3">
					<view class="demo-layout bg-purple-light">
							<u-switch @change="switchChange1" active-color="green" v-model="checked"></u-switch>
					</view>
				</u-col>
			</u-row>
			<u-row gutter="16" class="u-row">
				<u-col span="9">
					<view class="demo-layout bg-purple">
						<view>热门推荐</view>
						<view class="bottom">推荐消息提醒</view>
					</view>
				</u-col>
				<u-col span="3">
					<view class="demo-layout bg-purple-light">
							<u-switch @change="switchChange2"  active-color="green" v-model="checked1"></u-switch>
					</view>
				</u-col>
			</u-row>
		</view>
		<view class="huanc" @click="huanc">
			<u-row gutter="16" class="u-row">
				<u-col span="9">
					<view class="demo-layout bg-purple">
						<view>清空缓存</view>
					</view>
				</u-col>
				<u-col span="3">
					<view class="demo-layout bg-purple-light">
							>
					</view>
				</u-col>
			</u-row>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: false,
				checked1: false,
			}
		},
		methods: {
			switchChange1(){
				console.log(1)
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/xitongxiaoxiszhi?checked='+ this.checked, {}, {
					token: value
				}).then(res => {
					console.log(res);
					if(res.states == "200"){
						that.$refs.uToast.show({
											title: '修改系统消息状态成功',
											type: 'success'
										})
					}
				});
			},
			huanc(){
				let that = this;
				that.$refs.uToast.show({
									title: '清除缓存成功',
									type: 'success'
								})
			},
			switchChange2(){
				console.log(1)
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/remengtuijiansezhi?checked1='+ this.checked1, {}, {
					token: value
				}).then(res => {
					console.log(res);
					if(res.states == "200"){
						that.$refs.uToast.show({
											title: '修改系统消息状态成功',
											type: 'success'
										})
					}
				});
			}
		}
	}
</script>

<style>
	.huanc{
		margin-left: 7vw;
		margin-top: 3vw;
	}
	.u-row{
		padding-bottom: 3vw;
	}
	body{
		background-color: #F7F7F7;
		font-size: 4vw;
	}
	.bottom{
		font-size: 2vw;
		color: #979798;
	}
	.xiaoxitixin{
		margin-top: 3vw;
		margin-left: 5vw;
		margin-right: 5vw;
		padding: 3vw;
		border-radius: 3vw;
		background-color: #FFFFFF;
	}
	.logo {
		width: 3vw;
		height: 8vw;
		background: #0BC477;
		border-radius: 3vw;
	}

	.title {
		margin-top: 4vw;
		margin-left: 5vw;
	}
</style>
