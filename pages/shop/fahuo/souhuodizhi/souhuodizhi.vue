<template>
	<view class="page flex-col">
		<view class="box1 flex-col">
			<view class="bd2 flex-row">
				<view class="box2 flex-col"></view>
				<text class="info1">默认地址</text>
			</view>
			<view class="bd3 flex-col" @click="danjidizhi">
				<view class="block1 flex-row">
					<view class="section1 flex-col"></view>
					<view class="section2 flex-col">
						<view class="layer1 flex-row">
							<text class="word4">{{morensouhuodizhi.name}}</text>
							<text class="word5">{{morensouhuodizhi.phone}}</text>
						</view>
						<text class="paragraph1">
							{{morensouhuodizhi.address}}
						</text>
					</view>
					<image @click="xiougai(morensouhuodizhi.id)" class="icon2" referrerpolicy="no-referrer"
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdab355049f592a6444b529c339370633587c78beca63c2fb0a89627de242f04d" />
				</view>
			</view>
			<view class="bd4 flex-row">
				<view class="outer4 flex-col"></view>
				<text class="word6">地址</text>
			</view>
			<view class="bd5 flex-col" :style="style" v-for="(zhencandizh, index) in zhencandizhi">
				<view class="box3 flex-row" @click="sezhidizhi(index)">
					<u-avatar class="outer5 flex-col" :text="zhencandizh.name"></u-avatar>
					<view class="outer6 flex-col">
						<view class="mod3 flex-row">
							<text class="info3">{{zhencandizh.name}}</text>
							<text class="txt2">{{zhencandizh.phone}}</text>
						</view>
						<text class="paragraph2">
							{{zhencandizh.address}}
						</text>
					</view>
					<image @click="xiougai(zhencandizh.id)" class="label2" referrerpolicy="no-referrer"
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdab355049f592a6444b529c339370633587c78beca63c2fb0a89627de242f04d" />
				</view>
				<view style="width: 95%;" v-show="isShow">
					<u-line color="#797979" margin="3vw 3vw 0 0" />
					<u-row gutter="16" style="width: 105%;margin-top: 1vw;">
						<u-col span="3">
							<view class="demo-layout bg-purple">
								<u-radio-group v-model="value">
									<u-radio :name="zhencandizh.id" @change="radioChange" active-color="#6edb90">设置默认地址</u-radio>
								</u-radio-group>
							</view>
						</u-col>
						<u-col span="7">
							<view class="demo-layout bg-purple-light"></view>
						</u-col>
						<u-col span="2">
							<view @click="sancu(zhencandizh.id)" class="demo-layout bg-purple-dark">删除</view>
						</u-col>
					</u-row>
				</view>
			</view>
					<u-toast ref="uToast" />

			<view class=" flex-col button">
				<u-button type="success" shape="circle" @click="xiougai(-1)">
					<view class="bd10 flex-col"></view>添加收货地址
				</u-button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				constants: {},
				value: "",
				style: "",
				isShow: false,
				morensouhuodizhi: [],
				zhencandizhi: [],
				reFresh:""
			};
		},
		watch:{
		    //监听reFresh,如果有修改就执行监听器
		    reFresh:function(){
		      // 调初始化页面的接口
			  
		        console.log("页面已重新加载");
				this.value =  ""
				this.style =  ""
				this.isShow =  false
				this.morensouhuodizhi=  []
				this.zhencandizhi=[]
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://api.wkkin.cn/index.php/address/index', {}, {
					token: value
				}).then(res => {
					console.log(res);
					for (var i=0;i<res.data.length;i++)
					{ 
					    console.log(i)
						if(res.data[i].is == "1"){
							console.log(2222)
							that.morensouhuodizhi = res.data[i];
							console.log(that.morensouhuodizhi)
						}else{
							that.zhencandizhi.push(res.data[i])
						}
					}
				});
		    }
		},
		onLoad(){
			const value = uni.getStorageSync('token');
			let that = this;
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('https://api.wkkin.cn/index.php/address/index', {}, {
				token: value
			}).then(res => {
				console.log(res);
				for (var i=0;i<res.data.length;i++)
				{ 
				    console.log(i)
					if(res.data[i].is == "1"){
						console.log(2222)
						that.morensouhuodizhi = res.data[i];
						console.log(that.morensouhuodizhi)
					}else{
						that.zhencandizhi.push(res.data[i])
					}
				}
			});
		},
		onNavigationBarButtonTap() {
			console.log("点击了自定义按钮");
			if(! this.isShow){
				this.style = "height: 34vw";
				this.isShow= true
			}else{
				this.style = "";
				this.isShow= false
			}
			
		},
		methods: {
			sezhidizhi(e){
				uni.setStorageSync('morensouhuodizhi', this.zhencandizhi[e]);
				let pages = getCurrentPages()//页面栈
				    let prePage = pages[pages.length - 2]//上一页
				    prePage.$vm.reFresh = Math.random()//触发上一页监听器
				    
				    uni.navigateBack()//返回上一页
			},
			danjidizhi(){
				uni.setStorageSync('morensouhuodizhi', this.morensouhuodizhi);
				let pages = getCurrentPages()//页面栈
				    let prePage = pages[pages.length - 2]//上一页
				    prePage.$vm.reFresh = Math.random()//触发上一页监听器
				    
				    uni.navigateBack()//返回上一页
			},
			xiougai(e){
				console.log(e)
				uni.navigateTo({
					url:"/pages/gerenzongxin/souhuodizhi/xiougaisouhuodizhi/xiougaisouhuodizhi?id=" + e
				})
			},
			sancu(e){
				console.log(e)
				console.log(e)
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://api.wkkin.cn/index.php/address/delete?id=' + e, {}, {
					token: value
				}).then(res => {
					console.log(res);
					that.$refs.uToast.show({
										title: '删除地址成功',
										type: 'success'
									})
				});
			},
			radioChange(e){
				console.log(e)
				const value = uni.getStorageSync('token');
				let that = this;
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://api.wkkin.cn/index.php/address/sezhimoren?id=' + e, {}, {
					token: value
				}).then(res => {
					console.log(res);
					that.$refs.uToast.show({
										title: '设置默认成功',
										type: 'success'
									})
					let pages = getCurrentPages()//页面栈
					    let prePage = pages[pages.length - 2]//上一页
					    prePage.$vm.reFresh = Math.random()//触发上一页监听器
					
									
				});
				
			}
		}
	};
</script>
<style>
	@import './common.css';
	@import './index.rpx.css';

	.button {
		margin-left: 15vw;
		margin-right: 15vw;
		margin-top: 30vw;
		margin-bottom: 30vw;
	}

	.button view {
		margin-right: 5vw;
	}
</style>

