import { apiResponseWrapper } from '@oceancode/ocean-ui'
import { ping as pingApi } from '@/api'

export function ping(): Promise<string>{
  return apiResponseWrapper(pingApi())
}