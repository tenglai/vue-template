/**
 * Created by soft on 2018/1/8.
 * 异步获取数据，基于promise操作
 */
import $http from './index'
import {localStore} from  '../config/myUtils'

/**
 *获取首页数据
 * */

export const homeData = (areasn) => $http.get('/index.json?act=index', {
    areasn: areasn
});

/**
* 获取区域景区
 *
* */
export const cityScenicspots = (areasn) => $http.get('/index.json?act=cityScenicspots', {
    areasn: areasn
});

/**
 * 搜索区域或景区信息
 *
 * */
export const searchScenicspots = (areasn) => $http.get('/index.json?act=cityScenicspots', {
    areasn: areasn
});

/**
 *景区列表信息
 *
 * */

// export const spotsList = (areasn) => $http.get('/index.json?act=cityScenicspots', {
//     areasn: areasn
// });

export const spotsList = (city) => $http.get('guide.json?act=list', {
    city: city
});

/**
 *景区向导列表
 *
 * */

export const guideList = (scenicspot) => $http.get('/guide.json?act=guideslist', {
    scenicspot: scenicspot
});

/**
 *景区向导玩法详情
 *
 * */
export const guideDetails = (areasn) => $http.get('/guide.json?act=scenicspotGuideDails', {
    areasn: areasn
});

/**
 *向导主页信息
 *
 * */

export const guide = (areasn) => $http.get('/guide.json?act=guide', {
    areasn: areasn
});

/**
 *
 * 向导导玩法详情
 * */

export const playlistDetail = (areasn) => $http.get('/guide.json?act=guide', {
    areasn: areasn
});

/**
 *
 * 获取用户详细信息

 * */

export const getuserInfo = () => $http.get('/userInfo/getUserInfoDails', {

});

/**
 *
 * 加载套餐集合
 * */

export const loadPackage = (areasn) => $http.get('/order.json?act=loadPackage', {
    areasn: areasn
});

/**
 *
 * 初始化订单
 * */

export const initOrder = (areasn) => $http.get('/order.json?act=init', {
    areasn: areasn
});


/**
 *
 * 加载订单信息（下单）
 * */

export const loadOrder = (areasn) => $http.get('/order.json?act=loadOrder', {
    areasn: areasn
});

/**
 *
 * 未使用的优惠券
 * */

export const loadYhj = (areasn) => $http.get('/order.json?act=loadyhj', {
    areasn: areasn
});

/**
 *
 * 加载过期优惠券

 * */

export const loadOveryhj = (areasn) => $http.get('/order.json?act=loadOveryhj', {
    areasn: areasn
});

/**
 *
 * 加载已使用的优惠券

 * */

export const loadmakeyhj = (areasn) => $http.get('/order.json?act=loadmakeyhj', {
    areasn: areasn
});

/**
 *
 *新增订单
 * */

export const creatOrder = (areasn) => $http.get('/order.json?act=create', {
    areasn: areasn
});


/**
 *
 *付款加载信息
 * */
export const payOrder = (areasn) => $http.get('/order.json?act=play', {
    areasn: areasn
});

/**
 *
 *付款加载信息
 * */
export const orderDetail = (areasn) => $http.get('/order.json?act=details', {
    areasn: areasn
});

/**
 *
 *修改订单状态
 * */
export const updateOrder = (areasn) => $http.get('/order.json?act=updateStatus', {
    areasn: areasn
});

/**
 *
 *取消订单
 * */
export const cancelOrder = (areasn) => $http.get('/order.json?act=cancel', {
    areasn: areasn
});
