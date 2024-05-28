import { UserLoginRequest } from './../models/request/UserLoginRequest';
import { ResultData, useRequest,apiResponseWrapper } from '@oceancode/ocean-ui'
const request = useRequest()
const API_PREFIX = import.meta.env.VITE_GLOB_API_URL || ''

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
