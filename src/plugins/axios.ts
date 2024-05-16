import { RequestPlugin,RequestConfig,ResultData,useUser,ResultEnum,useMessage } from '@oceancode/ocean-ui'
import axios, { AxiosError, AxiosInstance, AxiosPromise } from 'axios'

const user = useUser()
const message = useMessage()

function hasData(data:any):boolean{
  return data.hasOwnProperty('data') || data.hasOwnProperty('results')
}
class AxiosRequest implements RequestPlugin {
  private service: AxiosInstance
  constructor(baseUrl:string){
    this.service = axios.create({
      baseURL: baseUrl, 
      timeout: 5000
    })

    this.service.interceptors.request.use(
      config => {
        const token = user.getToken()
        if (token) {
          config.headers['Authorization'] = ('Bearer ' + token) as any;
        }
        const projectId = user.getProjectId()
        if(projectId){
          config.headers['x-project-id'] = projectId
        }
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )

    this.service.interceptors.response.use(
      response => {
        return response
      },
      error => {
        return Promise.reject(error)
      }
    )
  }

  get<T>(url: string,params:any,config?:RequestConfig):Promise<ResultData<T>> {
    return handleErrorWrapper(this.service.get(url,{params:params,...config}))
  }
  post<T>(url: string,params:any,config?:RequestConfig):Promise<ResultData<T>> {
    return handleErrorWrapper(this.service.post(url,params,config))
  }
  put<T>(url: string,params:any,config?:RequestConfig):Promise<ResultData<T>> {
    return handleErrorWrapper(this.service.put(url,params,config))
  }
  delete<T>(url: string,params:any,config?:RequestConfig):Promise<ResultData<T>> {
    return handleErrorWrapper(this.service.delete(url,{params:params,...config}))
  }
}
function parseResonseData(data: any): any {
  const resData = {
    code: data.code,
    message: data.message,
    success: false,
    data: data.results || data.data,
    total: data.total,
    toLogin: false,
  };
  if (resData.code === ResultEnum.SUCCESS) {
    resData.success = true;
  } else if (resData.code === ResultEnum.NOT_LOGIN) {
    resData.toLogin = false
  }

  return resData;
}
function handleErrorWrapper<T>(p: AxiosPromise): Promise<ResultData<T>> {
  return new Promise((resolve,reject)=>{
    p.then(response=>{
      const data = response.data
      const resData = {
        code: data.code,
        message: data.message,
        success: false,
        data: data.results || data.data,
        total: data.total,
      } as ResultData
      if(!hasData(data)){
        return {
          data: data,
          code: ResultEnum.SUCCESS,
          success: true
        }
      }

      if (resData.code === ResultEnum.SUCCESS) {
        resData.success = true;
        resolve(resData);
      } else if (resData.code === ResultEnum.NOT_LOGIN) {
        window['$message'].error('用户信息过期，请重新登录');
        user.toLogin()
      } else {
        const msg = '错误码:' + resData.code + ' ' + (resData.message || '');
        window['$message'].error(msg);
      }
    }).catch((error: AxiosError)=>{
      const response = error.response as any
      const status = response.status
      if(status===400){
        const data = response.data
        message.error({code:data.code,message:data.message})
      }
      reject({ error: error, ...parseResonseData(response.data) });
    })
  })
}

export const axoisRequest = new AxiosRequest('')