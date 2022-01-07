<template>
	<view>
		<view class="waiwei">
			<u-row gutter="16">
				<u-col span="3">
					<view class="demo-layout bg-purple" @click="show = true">国籍∨</view>
				</u-col>
				<u-col span="1">
					<view class="demo-layout bg-purple-light">|</view>
				</u-col>
				<u-col span="8">
					<view class="demo-layout bg-purple-dark">
						{{xuanzopng}}
					</view>
				</u-col>
			</u-row>
			<u-row gutter="16">
				<u-col span="3">
					<view class="demo-layout bg-purple">真实姓名</view>
				</u-col>
				<u-col span="1">
					<view class="demo-layout bg-purple-light">|</view>
				</u-col>
				<u-col span="8">
					<view class="demo-layout bg-purple-dark">
						<u-input v-model="name"  placeholder="请输入真实姓名"/>
					</view>
				</u-col>
			</u-row>
			<u-row gutter="16">
				<u-col span="3">
					<view class="demo-layout bg-purple">身份证号</view>
				</u-col>
				<u-col span="1">
					<view class="demo-layout bg-purple-light">|</view>
				</u-col>
				<u-col span="8">
					<view class="demo-layout bg-purple-dark">
						<u-input v-model="number"  placeholder="请输入本人身份证号"/>
					</view>
				</u-col>
			</u-row>
		</view>
		<view>
			<view class="shenfenzhen">请上传身份证图片</view>
			<view class="shenfenzhen1">
			<image class="image" :src="shenfenzhenzhenmian" @click="zhenmian">
			<image class="image" @click="fanmian" :src="shenfenzhenfanmian">
				</view>
		</view>
		<view>
			<u-icon class="tubiao" name="info-circle"></u-icon>
			提示：请保证拍摄的图片清晰、完整
		</view>
		<view class="anniou">
			<u-button type="success" shape="circle" @click="success">确认</u-button>
		</view>
		<u-toast ref="uToast" />
		<u-select v-model="show" :list="list" @confirm="uSelect"></u-select>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shenfenzhenzhenmian: "https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/bandinshenfenzhenzhenmian.png",
				shenfenzhenfanmian: "https://weixinxiaocengxu.oss-cn-shanghai.aliyuncs.com/xianmu/bandinshenfenzhengfanmian.png",
				show: false,
				name:"",
				number:"",
				list: [{
						value: '中国',
						label: '中国'
					},
					{
						value: '美国',
						label: '美国'
					}
				],
				xuanzopng:"中国"
			}
		},
		methods: {
			uSelect(e) {
				console.log(e)
				this.xuanzopng = e[0].value
			},
			success(){
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/shiminrenzhen?xuanzopng='+ this.xuanzopng + "&name=" + this.name + "&number=" + this.number, {}, {
					token: value
				}).then(res => {
					console.log(res);
					if(res.states == "200"){
						that.$refs.uToast.show({
											title: '实名认证成功',
											type: 'success',
											url: "/pages/gerenzongxin/sezhi/zanhaoheanquang/zanhaoheanquang"
										})
					}
				});
			},
			fanmian(){
				const value = uni.getStorageSync('token');
				let that = this;
				uni.chooseImage({
					count:1,
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
				        uni.uploadFile({
				            url: 'https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/shenfenzhenfanmian', //仅为示例，非真实的接口地址
				            filePath: tempFilePaths[0],
				            name: 'file',
							header: {
								"token": value
							},
				            formData: {
				                'user': 'test'
				            },
				            success: (uploadFileRes) => {
				                console.log(JSON.parse(uploadFileRes.data));
								that.shenfenzhenfanmian = JSON.parse(uploadFileRes.data).data.image
				            }
				        });
				    }
				});
			},
			zhenmian(){
				const value = uni.getStorageSync('token');
				let that = this;
				uni.chooseImage({
					count:1,
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
				        uni.uploadFile({
				            url: 'https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/shenfenzhenzhenmian', //仅为示例，非真实的接口地址
				            filePath: tempFilePaths[0],
				            name: 'file',
							header: {
								"token": value
							},
				            formData: {
				                'user': 'test'
				            },
				            success: (uploadFileRes) => {
				                console.log(JSON.parse(uploadFileRes.data));
								that.shenfenzhenzhenmian = JSON.parse(uploadFileRes.data).data.image
				            }
				        });
				    }
				});
			}
		}
	}
</script>

<style>
	.anniou{
		margin-left: 10vw;
		margin-right: 10vw;
		margin-top: 50vw;
	}
	.image{
		width: 40vw;
		height: 30vw;
	}
	.tubiao{
		margin-left: 18vw;
		margin-top: 4vw;
	}
	.shenfenzhen1{
		margin-left: 8vw;
		margin-right: 8vw;
	}
	.shenfenzhen{
		padding: 5vw;
		margin-left: 3vw;
		margin-right: 3vw;
	}
	.waiwei {
		margin-top: 10vw;
		padding: 5vw;
		margin-left: 3vw;
		margin-right: 3vw;
	}
</style>
