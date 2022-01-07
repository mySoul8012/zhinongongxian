<template>
  <view class="page flex-col">
    <view class="main1 flex-col">
      <view class="block2 flex-col">
        <view class="main2 flex-col">
          <view class="bd5 flex-row">
            <view class="bd6 flex-col">
              <image
                class="img1"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng27de561969bbf77b2c168a86b1ed4064e5d6ca94d570d0ed1421bfc1cbabb09e"
              />
            </view>
            <view class="bd7 flex-col">
              <text class="paragraph1">
                {{title}}
              </text>
              <text class="info1">¥{{jiage}}</text>
            </view>
          </view>
          <view class="bd8 flex-row">
            <text class="txt1">贩卖数量</text>
            <view class="mod1 flex-col">
              <view class="section1 flex-row">
                <view class="block3 flex-col" @click="jiansao()"></view>
                <view class="block4 flex-col"></view>
                <text class="info2">{{muqianjianshu}}</text>
                <view class="block5 flex-col" @click="zhenjia()"></view>
                <image
                  class="icon1"
                  referrerpolicy="no-referrer"
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1109f8f9be8c6ab96a6350f5fb457c7f04287cef44bdfdabe07b054bfa3340b8"
                />
              </view>
            </view>
          </view>
          <view class="bd9 flex-row" style="width: 100%;">
            <text class="info3">备注</text>
            <u-input v-model="beizhu" height="30" style="margin-left: 2vw;width: 180%;"/>
          </view>
          <view class="bd10">
            <text class="word4">共{{muqianjianshu}}件，共计：</text>
            <text class="word5">¥{{muqianjianshu * jiage}}</text>
          </view>
        </view>
      </view>
      <view class="block6 flex-col">
        <view class="main3 flex-row">
          <text class="txt3">收款合计：¥{{muqianjianshu * jiage}}</text>
          <button class="section2 flex-col" @click="onClick_1">
            <text class="word6">提交交易</text>
          </button>
        </view>
      </view>
    </view><u-toast ref="uToast" />
  </view>
</template>
<script>
export default {
  data() {
    return {
      constants: {},
	  id: "",
	  title: "",
	  jiage:"",
	  jianshu: 0,
	  muqianjianshu: 1,
	  beizhu: ""
    };
  },
  onLoad(option) {
  	this.id = option.id
	const value = uni.getStorageSync('token');
	let that = this;
	// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
	this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/cankusanpinxianqin?id=' + this.id, {}, {
		token: value
	}).then(res => {
		console.log(res);
		that.title = res.data.title
		that.jiage = res.data.jiage
		that.jianshu = res.data.jianshu
	});
  },
  methods: {
	  jiansao(){
		console.log(33)  
		if(this.muqianjianshu <= 1){
			
		}else{
			this.muqianjianshu--
		}
	  },
	  zhenjia(){
		  if(this.muqianjianshu >= this.jianshu){
			  
		  }else{
			  this.muqianjianshu++
		  }
	  },
    onClick_1() {
      const value = uni.getStorageSync('token');
      let that = this;
      // 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
      this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/jinxinjiaoyi?id=' + this.id + "&count=" + this.muqianjianshu + "&beizhu=" + this.beizhu , {}, {
      	token: value
      }).then(res => {
      	console.log(res);
      	that.$refs.uToast.show({
      						title: '交易成功',
      						type: 'success',
							url: "/pages/gerenzongxin/canku/canku"
      					})
      });
    }
  }
};
</script>
<style>
@import './common.css';
@import './index.rpx.css';
</style>
