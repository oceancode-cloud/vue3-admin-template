import { ResultData, useRequest } from '@oceancode/ocean-ui';
const request = useRequest()
const API_PREFIX = import.meta.env.VITE_GLOB_API_URL || ''
/**
 * ping
 * @returns ping
 */
export function ping(): Promise<ResultData<string>> {
  return request.get(API_PREFIX + '/ping', {});
}