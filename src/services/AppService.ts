import { AppInfo } from '@/mmodels/response';
import { listAppQuery} from '@/api/method'
import { queryWithDsl } from '@/api'

export function listApp(): Promise<AppInfo> {
  return queryWithDsl({
    list: listAppQuery()
  },data=>data.list)
}