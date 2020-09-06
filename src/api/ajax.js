/*
ajax 请求函数
*/
import axios from 'axios'
export default function ajax(url,data={},type='GET'){
return new Promise(function (resolve,reject){//高阶函数
//执行异步请求
  let promise
  if (type==='GET'){
    let dataStr = '';
    //拼接字符串
    Object.keys(data).forEach(key=>{
      dataStr += key + '=' + data[key] + '&'
    })
    if (dataStr != ''){
      dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
  promise = axios.get(url)
  }else{
    promise = axios.post(url,data)
  }
  promise.then(function (respose){
    //成功调用 resolve
    resolve(respose.data)
  }).catch(function (error){
    //失败执行reject
    reject(error)
  })
})
}
