<template>
  <view class="page flex-col">
    <view class="main1 flex-col">
      <view class="layer2 flex-col">
        <view
          class="box4 flex-col"
          v-for="(item, index) in loopData0"
          :key="index"
		  @click="xianqin(item.id)"
        >
          <view class="block1 flex-col">
            <view class="block2 flex-col">
              <view class="group3 flex-col">
                <image
                  class="img1"
                  referrerpolicy="no-referrer"
                  :src="item.lanhuimage0"
                />
              </view>
            </view>
            <view class="block3 flex-row">
              <text class="info1" v-html="item.lanhutext0"></text>
              <view
                class="mod1 flex-col"
                :style="{ background: lanhuBg5 }"
              ></view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      loopData0: [
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb99abf74d31ac6c91e56fbcd448f335b1b44552495f7507a94bde2483e2d95d',
          lanhutext0: '点击预约线下活动'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb99abf74d31ac6c91e56fbcd448f335b1b44552495f7507a94bde2483e2d95d',
          lanhutext0: '点击查看详细信息'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb99abf74d31ac6c91e56fbcd448f335b1b44552495f7507a94bde2483e2d95d',
          lanhutext0: '点击查看详细信息'
        }
      ],
	  lanhuBg5: 'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng81f9a8cc817c94c93a74e8c6939f16e05a39f599a0ad2c5922df1de45487a88a) 100% no-repeat',
      constants: {}
    };
  },
  onLoad() {
  	const value = uni.getStorageSync('token');
  	let that = this;
  	// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
  	this.$u.get('https://www.fastmock.site/mock/b5a4df94ec60085c9c24349ecb20ceb0/nonye/xianxiahuodong', {}, {
  		token: value
  	}).then(res => {
  		console.log(res);
		that.loopData0 = res.data;
  	});
  },
  methods: {
	  xianqin(e){
		  console.log(e)
		  uni.navigateTo({
		  	url:"pages/gerenzongxin/xianxiahetong/xianqing/xianqing?id=" + e
		  })
	  }
  }
};
</script>
<style>
@import './common.css';
@import './index.rpx.css';
</style>
