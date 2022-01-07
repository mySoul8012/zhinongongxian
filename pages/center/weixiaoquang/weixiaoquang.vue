<template>
	<view>
		<view>
			<u-row gutter="16">
						<u-col span="4">
							<view class="demo-layout bg-purple">
								<image class="image" src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/penyou.png"/>
							</view>
						</u-col>
						<u-col span="4">
							<view class="demo-layout bg-purple-light">
								<image class="image" src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/noncang.png"/>
							</view>
						</u-col>
						<u-col span="4">
							<view class="demo-layout bg-purple-dark">
								<image class="image" src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/message.png"/>
							</view>
						</u-col>
					</u-row>
		</view>
		<view>
			<u-avatar :src="src"></u-avatar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: ""
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.image{
		width: 12vw;
		height: 18vw;
	}
	.demo-layout{
		padding: 8vw;
	}
</style>
