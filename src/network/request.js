import axios from 'axios'

export function request(config){
  //创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/h8',
    timeout:5000
  })
  return instance(config)
}