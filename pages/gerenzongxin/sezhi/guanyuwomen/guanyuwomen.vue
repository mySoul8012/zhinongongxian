<template>
	<view>
		<view class="center">
			<image src="https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/redianLogo.png">
			<view class="text">
				     1、查看是否误设了短信拦截。2、若该号码欠费停机，建议您更换手机号码或者缴费后第二天重新获取。3、联系运营商取消黑名单。4、如果是信号网络延迟，可稍后尝试重新获取。
			</view>
		</view>
		<view>
			<view class="share">
				<u-button type="success" shape="circle" @click="share">分享给好友</u-button>
				<view>
					<u-icon class="tubiao" name="info-circle"></u-icon>
					如果您喜欢本产品，可以点击分享给好友
				</view>
			</view>
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
			share(){
				// uni.share({
				//     provider: "weixin",
				//     scene: "WXSceneSession",
				//     type: 0,
				//     href: "http://uniapp.dcloud.io/",
				//     title: "uni-app分享",
				//     summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				//     imageUrl: "https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d8590190-4f28-11eb-b680-7980c8a877b8.png",
				//     success: function (res) {
				//         console.log("success:" + JSON.stringify(res));
				//     },
				//     fail: function (err) {
				//         console.log("fail:" + JSON.stringify(err));
				//     }
				// });
				 plus.share.sendWithSystem({content:'分享内容',href:'https://www.dcloud.io/'}, function(){
				        console.log('分享成功');
				    }, function(e){
				        console.log('分享失败：'+JSON.stringify(e));
				    });
			}
		}
	}
</script>

<style>
	body{
		background-color: #F7F7F7;
	}
	.share{
		margin-left: 9vw;
		margin-right: 9vw;
		margin-top: 40vw;
	}
	.tubiao{
		margin-left: 8vw;
	}
	.center{
		margin-top: 8vw;
		margin-left: 5vw;
		margin-right: 5vw;
		padding-top: 10vw;
		background-color: #FFFFFF;
		text-align: center;
		padding-bottom: 5vw;
	}
	.center image{
		width: 20vw;
		height: 20vw;
	}
	.center .text{
		margin-left: 5vw;
		margin-right: 5vw;
		margin-top: 5vw;
		margin-bottom: 10vw;
	}
</style>
