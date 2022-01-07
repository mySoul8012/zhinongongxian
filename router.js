// router.js
import {
	RouterMount,
	createRouter,
	runtimeQuit
} from 'uni-simple-router';

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	routerErrorEach:({type,level,...args})=>{
			console.log({type,level,...args})
			// #ifdef APP-PLUS
				if(type===3){
					router.$lockStatus=false;
					runtimeQuit();
				}
			// #endif
		},
	routes: [{
		path: "/pages/shexiantou/shexiantou",
		beforeEnter: (to, from, next) => {
			next()
		}
	},
	{
		path: "/pages/shexiantou/sexiantouxianqing/sexiantouxianqing",
		beforeEnter: (to, from, next) => {
			next()
		}
	},
	{
		path: "/pages/Login/Login",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/index/index",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/redian/redian",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/redian/zhifujin/zhifujin",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/shop/shopXianqin/shopXianqin",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/shop/shop",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/Login/Login2/Login2",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/jiaoyi/jiaoyi",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/center/index",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/center/weixiaoquang/weixiaoquang",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/gerenzongxin",
		beforeEnter: (to, from, next) => {
			next();
		}
	}
	,{
		path: "/pages/center/sezhi/sezhi",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/sezhi/sezhi",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/sezhi/zanhaoheanquang/zanhaoheanquang",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/sezhi/bandinsouji/bandinsouji",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/sezhi/shimingrenzhen/shimingrenzhen",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/sezhi/sezhimima/sezhimima",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/sezhi/tongyong/tongyong",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/sezhi/guanyuwomen/guanyuwomen",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/yuer/yuer",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/yuer/mingxi/mingxi",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/yuer/tixian/tixian",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/yuer/tianjiayinhanka/tianjiayinhanka",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/yuer/tianjiayinhanka/tianjiayinhanka02/tianjiayinhanka02",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/neijisouyi/neijisouyi",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/jifen/jifen",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/jifen/shop/shop",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/souhuo/souhuo",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/souhuo/kefu/kefu",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/souhuo/cakanwuniou/cakanwuniou",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/sexiantou/sexiantou",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/canku/canku",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/souhuodizhi/souhuodizhi",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/souhuodizhi/xiougaisouhuodizhi/xiougaisouhuodizhi",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/xiaoqihezhuo/xiaoqihezhuo",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/nianxiwomen/nianxiwomen",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/zhenxinfupin/zhenxinfupin",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/xianxiahetong/xianxiahetong",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/xianxiahetong/xianqing/xianqing",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/gerenzongxin/canku/jiaoyi/jiaoyi",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/jiaoyi/jiaoyishop/jiaoyishop",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/noncan/noncan",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/shop/fahuo/fahuo",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/shop/fahuo/souhuodizhi/souhuodizhi",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/index/shop/shop",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/index/shishizhibo/shishizhibo",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/index/jishujiaoniou/jishujiaoniou",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/index/huiyuan/huiyuan",
		beforeEnter: (to, from, next) => {
			next();
		}
	},{
		path: "/pages/index/qiandao/qiandao",
		beforeEnter: (to, from, next) => {
			next();
		}
	}]
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	uni.setStorageSync('storage_key', 'hello');
	 const value = uni.getStorageSync('token');
	 console.log(value)
	 if(value === ""){
		 if (to.path == '/pages/Login/Login2/Login2' || to.path == '/pages/Login/Login') {
		        next();
		    } else{
		    next("/pages/Login/Login")
		  }
	 }else{
		 next()
	 }
	 
});
// 全局路由后置守卫
router.afterEach((to, from) => {
	console.log('跳转结束')
})

export {
	router,
	RouterMount
}
