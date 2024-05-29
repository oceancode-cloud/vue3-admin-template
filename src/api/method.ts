import { buildDsl } from '@oceancode/ocean-wui'
export function listAppQuery(fields?: Array<string | object>): string {
  return buildDsl('listApp',[],fields || ['id','name','desc','packageName','status'])
}

export function listUserProjectQuery(fields?: Array<string | object>): string {
  return buildDsl('listUserProject',[],fields || ['name','id','desc'])
}