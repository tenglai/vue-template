/**
 * 异步获取数据，基于promise操作
 */
import $http from './index'
import {localStore} from  '../config/myUtils'

/**
 * 获取首页数据
 * params 为参数
 */

export const homeData = (params) => $http.get('book/search?', {
  count: params.count,
  q: params.keywords
});
