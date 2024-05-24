import { PermissionPlugin,PluginType } from '@oceancode/ocean-wui'
import { listUserPermission } from '@/services'
export function permissionPlg():PermissionPlugin{
  return {
    name: PluginType.PERMISSION,
    load(){
      return listUserPermission()
    }
  }
}