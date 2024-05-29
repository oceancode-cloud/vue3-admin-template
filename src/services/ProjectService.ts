import { ProjectInfo } from '@/mmodels/response';
import { listUserProjectQuery} from '@/api/method'
import { queryWithDsl } from '@/api'

export function listUserProject(): Promise<ProjectInfo> {
  return queryWithDsl<ProjectInfo>({
    list: listUserProjectQuery()
  },data=>data.list)
}