<template>
	<view>
		<view class="bottom1">
			
			<u-row customStyle="margin-bottom: 10px" class="bottom" @click="zanhaoheanquan">
				<u-col span="11">
					<view class="demo-layout bg-purple tudi">
						<view class="tudi">账号和安全</view>
					</view>
				</u-col>
				<u-col span="1">
					<view class="demo-layout bg-purple">
						<view class="jiantou">></view>
					</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px" class="bottom" @click="tongyong">
				<u-col span="11">
					<view class="demo-layout bg-purple tudi">
						<view class="tudi">通用</view>
					</view>
				</u-col>
				<u-col span="1">
					<view class="demo-layout bg-purple">
						<view class="jiantou">></view>
					</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px" class="bottom">
				<u-col span="11">
					<view class="demo-layout bg-purple tudi">
						<view class="tudi">查看用户隐私协议</view>
					</view>
				</u-col>
				<u-col span="1">
					<view class="demo-layout bg-purple">
						<view class="jiantou">></view>
					</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px" class="bottom" @click="guanyuwomen">
				<u-col span="11">
					<view class="demo-layout bg-purple tudi">
						<view class="tudi">关于我们</view>
					</view>
				</u-col>
				<u-col span="1">
					<view class="demo-layout bg-purple">
						<view class="jiantou">></view>
					</view>
				</u-col>
			</u-row>
		</view>
		<view class="anniou">
					<u-button @click="unlogin" type="success" text="镂空">退出登录</u-button>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			unlogin(){
				uni.setStorageSync("token", "")
				uni.reLaunch({
				    url: '/pages/Login/Login'
				});
			},
			zanhaoheanquan(){
				uni.navigateTo({
				    url: '/pages/gerenzongxin/sezhi/zanhaoheanquang/zanhaoheanquang'
				});
			},
			guanyuwomen(){
				uni.navigateTo({
				    url: '/pages/gerenzongxin/sezhi/guanyuwomen/guanyuwomen'
				});
			},
			tongyong(){
				uni.navigateTo({
				    url: '/pages/gerenzongxin/sezhi/tongyong/tongyong'
				});
			}
		}
	}
</script>

<style>
	body {
		background-color: #F7F7F7;
	}

	
	.anniou{
		color: #FFFFFF;
		margin-top: 70vw;
		margin-left: 15vw;
		margin-right: 15vw;
	}
	.bottom {
		
		padding-top: 4vw;
		padding-bottom: 4vw;
		font-size: 5vw;
		padding-left: 2vw;
		padding-right: 2vw;
	}
	.bottom1{
		background-color: #FFFFFF;
		margin-left: 5vw;
		margin-right: 5vw;
		border-radius: 3vw;
		box-shadow: 10px 5px 5px #F3F4F6;
	}
</style>
