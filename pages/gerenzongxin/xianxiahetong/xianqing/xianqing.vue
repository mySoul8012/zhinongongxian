<template>
  <view class="page flex-col">
    <view class="main1 flex-col">
      <view class="mod1 flex-col">
        <view class="layer1 flex-col">
          <view class="main2 flex-row">
            <image
				@click="fanhui"
              class="label1"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdc0921154fe6948ef5f166f5e635cfc5ed9b75550c365fd03f575f5b56681e99"
            />
            <text class="word1">活动详情</text>
          </view>
        </view>
        <view class="layer2 flex-col">
          <view class="mod2 flex-row">
            <view class="layer3">
              <text class="word2">9:4</text>
              <text class="word3">1</text>
            </view>
            <view class="layer4 flex-col"></view>
            <view class="layer5 flex-col"></view>
            <image
              class="label2"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng7c371ddedb0f192c948d81e33b4f6db6925d7eab4e2172f54a9c0421233ea5bd"
            />
          </view>
        </view>
       <image
         class="pic1"
         referrerpolicy="no-referrer"
         src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng66ee309ad6c7c83e6b0a022e195b76574b24db07956a9b3d7250365e6f938a17"
       />
      </view>
      <view class="mod3 flex-col">
        <view class="box1 flex-row">
          <view class="group1 flex-col"></view>
          <text class="txt1">活动内容</text>
        </view>
        <view class="box2 flex-row">
          <text class="paragraph1">
			{{text}}
            <br />
          </text>
        </view>
      </view>
      <view class="mod4 flex-col">
        <view class="section1 flex-row">
          <view class="block1 flex-col"></view>
          <text class="word4">详细信息</text>
        </view>
        <view class="section2 flex-row">
          <text class="word5">{{xianxixinxi}}</text>
        </view>
      </view>
      <button class="mod5 flex-col" @click="onClick_1">
        <text class="word6">分享好友</text>
      </button>
      
    </view>
    <view class="main3 flex-col">
      <view class="bd1 flex-row">
        <image
          class="label3"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng62b6364703c188ee9985c48ae019ebe3d0e4eeba60ec92a7605a0c51136154ec"
        />
        <text class="word7">活动时间</text>
      </view>
      <view class="bd2 flex-row">
        <text class="word8">
          {{time}}
        </text>
      </view>
      <view class="bd3 flex-row">
        <image
          class="icon1"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng90af49c473373f0098c561450c7a585dfd52ea7d1f0a300ce73e819e677384b8"
        />
        <text class="txt2">活动地点</text>
      </view>
      <view class="bd4 flex-row">
        <text class="word9">
          {{location}}
        </text>
      </view>
    </view>
    <button class="main4 flex-col" @click="onClick_2" style="margin-top: -1vw;">
      <text class="info2">立即预约</text>
    </button><u-toast ref="uToast" />
  </view>
</template>
<script>
export default {
  data() {
    return {
      constants: {},
	  id: "",
	  time: "",
	  location: "",
	  text:"",
	  xianxixinxi:""
    };
  },
  onLoad(option) {
	  this.id = option.id
  	const value = uni.getStorageSync('token');
  	let that = this;
  	// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
  	this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/huodongxianqin?id=' + this.id, {}, {
  		token: value
  	}).then(res => {
  		console.log(res);
  		this.time = res.data.time
		this.location = res.data.location
		this.text = res.data.text
		this.xianxixinxi = res.data.xianxixinxi
  	});
  },
  methods: {
    onClick_1() {
		console.log(1)
		uni.share({
		    provider: "weixin",
		    scene: "WXSceneSession",
		    type: 1,
		    summary: "分享",
		    success: function (res) {
		        console.log("success:" + JSON.stringify(res));
		    },
		    fail: function (err) {
		        console.log("fail:" + JSON.stringify(err));
		    }
		});
    },
    onClick_2() {
      const value = uni.getStorageSync('token');
      let that = this;
      // 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
      this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/nijiyuyun?id=' + this.id, {}, {
      	token: value
      }).then(res => {
      	console.log(res);
      	that.$refs.uToast.show({
      						title: '预约成功',
      						type: 'success'
      					})
      });
	  
    },
	fanhui(){
		uni.navigateBack({
			
		})
	}
  }
};
</script>
<style>
@import './common.css';
@import './index.rpx.css';
</style>
