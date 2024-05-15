import { MockMethod } from 'vite-plugin-mock'
import test from './test.mock'

import { mockObject as mockApiObject } from './api'

const mockObject: MockMethod[] = [
  {
    // 正则
    // url: /\/mock\/mockData(|\?\S*)$/,
    url: '/ping',
    method: 'get',
    response: () => test.fetchPingData
  }
]

export default mockObject.concat(mockApiObject)