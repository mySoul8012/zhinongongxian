<template>
	<view>
		<view class="waiwei">
			<u-row gutter="16">
				<u-col span="3">
					<view class="demo-layout bg-purple">收货人</view>
				</u-col>
				<u-col span="9">
					<view class="demo-layout bg-purple-light input">
						<view :class="name.xuanzong" style="background-color: #f1f1f1;border-radius: 3vw;padding: 1vw;">
							<u-input placeholder="名字" v-model="name.name" />
						</view>
					</view>
				</u-col>
			</u-row>
			<u-row gutter="16">
				<u-col span="3">
					<view style="color: #FFFFFF;">2222</view>
				</u-col>
				<u-col span="9">
					<view class="demo-layout bg-purple-light">
						<view class="souhuoren" v-show="name.show">
							请填写收货人，不能包含特殊符号
						</view>
					</view>
				</u-col>
			</u-row>

			<u-row gutter="16">
				<u-col span="3">
					<view class="demo-layout bg-purple">手机号码</view>
				</u-col>
				<u-col span="9">
					<view class="demo-layout bg-purple-light input">
						<view :class="phone.xuanzong"
							style="background-color: #f1f1f1;border-radius: 3vw;padding: 1vw;">
							<u-row gutter="16">
								<u-col span="9">
									<view class="demo-layout bg-purple">
										<u-input placeholder="请输入手机号码" v-model="phone.name" />
									</view>
								</u-col>
								<u-col span="2" @click="phone.SelectShow = true">
									<view class="demo-layout bg-purple-light">{{phone.quhao}}</view>
									<u-select v-model="phone.SelectShow" :list="phone.list" @confirm="xuanzhePhone">
									</u-select>
								</u-col>
								<u-col span="1">
									<view class="demo-layout bg-purple-dark">
										<u-icon name="arrow-right">
										</u-icon>
									</view>
								</u-col>
							</u-row>
						</view>
					</view>
				</u-col>
			</u-row>
			<u-row gutter="16">
				<u-col span="3">
					<view style="color: #FFFFFF;">2222</view>
				</u-col>
				<u-col span="9">
					<view class="demo-layout bg-purple-light" v-show="phone.show">
						<view class="souhuoren">
							请填写手机号码
						</view>
					</view>
				</u-col>
			</u-row>


			<u-row gutter="16">
				<u-col span="3">
					<view class="demo-layout bg-purple">所在地区</view>
				</u-col>
				<u-col span="9">
					<view class="demo-layout bg-purple-light input">
						<view :class="address.xuanzong"
							style="background-color: #f1f1f1;border-radius: 3vw;padding: 1vw;">
							<u-row gutter="16">
								<u-col span="11">
									<view class="demo-layout bg-purple address">
										<text>
											{{address.name}}
										</text>
										<u-select v-model="address.SelectShow" mode="mutil-column-auto"
											:list="address.list" @confirm="xuanzheaddress"></u-select>
									</view>
								</u-col>

								<u-col span="1" @click="address.SelectShow = true">
									<view class="demo-layout bg-purple-dark">
										<u-icon name="arrow-right">
										</u-icon>
									</view>
								</u-col>
							</u-row>
						</view>
					</view>
				</u-col>
			</u-row>
			<u-row gutter="16">
				<u-col span="3">
					<view style="color: #FFFFFF;">2222</view>
				</u-col>
				<u-col span="9">
					<view class="demo-layout bg-purple-light">
						<view class="souhuoren" v-show="address.show">
							请填写地址
						</view>
					</view>
				</u-col>
			</u-row>



			<u-row gutter="16">
				<u-col span="3">
					<view class="demo-layout bg-purple">详情地址</view>
				</u-col>
				<u-col span="9">
					<view class="demo-layout bg-purple-light input">
						<view :class="xianxidizhi.xuanzong"
							style="background-color: #f1f1f1;border-radius: 3vw;padding: 1vw;">
							<u-row gutter="16">
								<u-col span="10">
									<view class="demo-layout bg-purple address">
										<u-input v-model="xianxi" />
									</view>
								</u-col>
							</u-row>
						</view>
					</view>
				</u-col>
			</u-row>
			<u-row gutter="16">
				<u-col span="3">
					<view style="color: #FFFFFF;">2222</view>
				</u-col>
				<u-col span="9">
					<view class="demo-layout bg-purple-light">
						<view class="souhuoren" v-show="xianxidizhi.show">
							请填写详细地址
						</view>
					</view>
				</u-col>
			</u-row>

			<u-row gutter="16" class="seweimorendizhi">
				<u-col span="10">
					<view class="demo-layout bg-purple">设为默认收货地址</view>
				</u-col>
				<u-col span="2">
					<view class="demo-layout bg-purple-light">
						<u-switch v-model="morensouhuodizhi"></u-switch>

					</view>
				</u-col>
			</u-row>
<u-toast ref="uToast" />
			<view class="uButtom">
				<u-button type="success" shape="circle" @click="baoc">保存</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: "",
				name: {
					name: "",
					xuanzong: "xuanzong01",
					show: false
				},
				phone: {
					name: "",
					xuanzong: "xuanzong01",
					show: false,
					SelectShow: false,
					quhao: "+86",
					list: [{
							value: '+86',
							label: '+86'
						}
					]
				},
				address: {
					name: "北京市 北京市 海淀区",
					xuanzong: "xuanzong01",
					show: false,
					SelectShow: false,
					quhao: "+86",
					list: []
				},
				xianxidizhi: {
					name: "",
					xuanzong: "xuanzong01",
					show: false,
					SelectShow: false,
					quhao: "+86",
					list: [{
							value: '+86',
							label: '+86'
						},
						{
							value: '+1',
							label: '+1'
						}
					]
				},
				morensouhuodizhi: false,
				shen: '',
				shi: "",
				qu: "",
				xianxi: ""
			}
		},
		
		onLoad(option) {
			let id = option.id
			this.id = id;
			const value = uni.getStorageSync('token');
			let that = this;
			// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
			this.$u.get('https://api.wkkin.cn/index.php/address/shenshiqu', {}, {
				token: value
			}).then(res => {
				console.log(res);
				console.log("--------------")
				that.address.list = res.data
			});
			console.log(id)
			if (id == -1) {
				this.shen = "北京市"
				this.shi = "北京市"
				this.qu = "海淀区"
			} else {
				// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
				this.$u.get('https://api.wkkin.cn/index.php/address/finddange?id=' +
					id, {}, {
						token: value
					}).then(res => {
					console.log(res);
					that.name.name = res.data.name;
					that.phone.name = res.data.phone;
					that.address.name = res.data.shuozaidiqu
					let data = res.data.shuozaidiqu.split(" ");
					console.log(data);
					that.shen = data[0];
					that.shi = data[1];
					that.qu = data[2];
					that.xianxi = res.data.xianxidizhi
					that.morensouhuodizhi = res.data.isMoren
				});
			}
		},
		methods: {
			baoc(){
				console.log("----------------------------")
				console.log('https://api.wkkin.cn/index.php/address/save?name=' + this.name.name + "&phone=" + this.phone.name + "&address=" + this.address.name + "&xianxidizhi=" + this.xianxidizhi.name + "&morensouhuodizhi=" + this.morensouhuodizhi + "&id=-1&shen=" + this.shen + "&shi=" +this.shi + "&qu=" + this.qu + "&xianxi=" + this.xianxi)
				if(this.id == -1){
					const value = uni.getStorageSync('token');
					let that = this;
					// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
					this.$u.get('https://api.wkkin.cn/index.php/address/save?name=' + this.name.name + "&phone=" + this.phone.name + "&address=" + this.address.name + "&xianxidizhi=" + this.xianxidizhi.name + "&morensouhuodizhi=" + this.morensouhuodizhi + "&id=-1&shen=" + this.shen + "&shi=" +this.shi + "&qu=" + this.qu + "&xianxi=" + this.xianxi  , {}, {
						token: value
					}).then(res => {
						console.log(res);
						that.$refs.uToast.show({
											title: '保存成功',
											type: 'success'
										})
					});
				}else{
					const value = uni.getStorageSync('token');
					console.log("-------------------------------------------------------")
					console.log(this.xianxidizhi);
					let that = this;
					// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
					this.$u.get('https://api.wkkin.cn/index.php/address/save?name=' + this.name.name + "&phone=" + this.phone.name + "&address=" + this.address.name + "&xianxidizhi=" + this.xianxidizhi.name + "&morensouhuodizhi=" + this.morensouhuodizhi + "&id=" + this.id + "&shen=" + this.shen + "&shi=" +this.shi + "&qu=" + this.qu + "&xianxi=" + this.xianxi, {}, {
						token: value
					}).then(res => {
						console.log(res);
						that.$refs.uToast.show({
											title: '修改成功',
											type: 'success'
										})
					});
				}
				let pages = getCurrentPages()//页面栈
				    let prePage = pages[pages.length - 2]//上一页
				    prePage.$vm.reFresh = Math.random()//触发上一页监听器
				    let prePage1 = pages[pages.length - 3]//上一页
				    prePage1.$vm.reFresh = Math.random()//触发上一页监听器
				    uni.navigateBack()//返回上一页
			},
			xuanzhePhone(e) {
				console.log(e)
				this.phone.quhao = e[0].label
			},
			xuanzheaddress(e) {
				console.log(e)
				console.log(e)
				this.address.name = ""
				for (let i = 0; i < 3; i++) {
					this.address.name += e[i].label + "  "
				}
				console.log(this.address);
				this.shen = e[0].label;
				this.shi = e[1].label;
				this.qu = e[2].label;
				console.log(this.shen);
				console.log(this.shi);
				console.log(this.qu);
			},
			dinwei() {
				let that = this;
				uni.getLocation({
					type: 'wgs84',
					geocode: true, //设置该参数为true可直接获取经纬度及城市信息
					success: function(res) {
						console.log(res)
						that.address.name = res.address.province + " " + res.address.city + " " + res.address
							.district
						that.xianxidizhi.name = res.address.street + res.address.streetNum + res.address
							.poiName
					},
					fail: function() {
						uni.showToast({
							title: '获取地址失败，将导致部分功能不可用',
							icon: 'none'
						});
					}
				});
			}
		}
	}
</script>

<style>
	.uButtom {
		margin-top: 40vw;
		margin-left: 6vw;
		margin-right: 6vw;
	}

	.seweimorendizhi {
		margin-top: 8vw;
	}

	.waiwei {
		margin-top: 5vw;
		margin-left: 7vw;
		margin-right: 7vw;
	}

	.xuanzong {
		border-style: solid;
		border-color: red;
		border-radius: 3vw;
		padding: 1vw;
	}

	.xuanzong01 {
		border-radius: 30vw;
		padding: 1vw;
	}

	.souhuoren {
		color: red;
		font-size: 3vw;
	}

	.input {}

	.address {
		padding-top: 2vw;
		padding-bottom: 2vw;
	}
</style>
