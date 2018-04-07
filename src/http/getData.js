/**
 * 异步获取数据，基于promise操作
 */
import $http from './index'
import {localStore} from  '../config/myUtils'

/**
 * 获取首页数据
 * areasn 为参数
 */

export const homeData = (areasn) => $http.get('/index.json?act=index', {
  areasn: areasn
});
