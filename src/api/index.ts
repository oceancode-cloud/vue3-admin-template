import { UserLoginRequest } from './../models/request/UserLoginRequest';
import { ResultData, useRequest,apiResponseWrapper,DataHandle } from '@oceancode/ocean-ui'
const request = useRequest()
const API_PREFIX = import.meta.env.VITE_GLOB_API_URL || ''

export function queryWithDsl<T,R=T>(querys: object,cb?:DataHandle<T,R>):ResultData<R>{
  return apiResponseWrapper(request.dsl(API_PREFIX+import.meta.env.VITE_GLOB_API_PATH || '/graphql/query', querys),cb)
}

/**
 * ping
 * @returns ping
 */
export function ping(): Promise<ResultData<string>> {
  return request.get('/api/ping', {});
}

export function userLogin(param: UserLoginRequest): Promise<ResultData<string>> {
  return apiResponseWrapper(request.post(API_PREFIX + '/J_USR_OO1_0001', param));
}
