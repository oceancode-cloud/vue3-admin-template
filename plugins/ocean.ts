function isNaiveUiComponent(name: string){
  const ret = 
  [
    'o-button','o-button-group',
    'o-form',
    'o-input',
    'o-icon',
    'o-simple-select',
    'o-simple-tree',
    'o-dialog',
    'o-drawer',
    'o-space',
    'o-tree',
    'o-simple-menu',
    'o-dropdown',
    'o-avatar',
    'o-collapse',
    'o-image',
    'o-divider',
    'o-carousel',
    'o-switch',
    'o-tag',
    'o-popconfirm',
  ].indexOf(name)!=-1

  return ret
}

function convertCamelCaseToDash(str: string) {
  return str.replace(/([A-Z])/g, (match, letter, index) =>
    index === 0 ? letter.toLowerCase() : `-${letter.toLowerCase()}`)
}

function mappingComponent(name: string){
  if(name==='simple-select') return 'select'
  else if(name==='simple-tree') return 'tree-select'
  else if(name==='simple-menu') return 'menu'
  return name
}

export function OceanUiResolver(name,namespace: string = 'n'){
  return  doOceanUiResolver(name,namespace)
}
function doOceanUiResolver(name: string,namespace: string = 'n'){
  if(!name)return
  let componentName
  let simpleName
  let from = '@oceancode/ocean-ui'
  if(!namespace) namespace = 'n'
  if(name.startsWith('O')){
    simpleName = name.substring(1)
    if(isNaiveUiComponent(convertCamelCaseToDash(name))){
      componentName = namespace.toUpperCase()+mappingComponent(simpleName)
      from = 'naive-ui'
    }else{
      componentName = name
    }
  }else if(name.startsWith('o-')){
    simpleName = name.substring(2)
    
    if(isNaiveUiComponent(name)){
      componentName = namespace+'-'+mappingComponent(simpleName)
      from = 'naive-ui'
    }else{
      componentName = name
    }
  }
  
  if(componentName){
    return 
  }

  if(componentName){
    return { name: componentName, from: from }
  }
}