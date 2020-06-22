import Vue from 'vue'
import axios from 'axios'
import qs from 'qs' // 引入qs模块，用来序列化post类型的数据
import { Toast } from 'vant'

axios.defaults.baseURL = process.env.VUE_APP_API
// axios.defaults.headers.common['Authorization'] = store.state.token;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
    config => {
        store.state.loading = true // 开启加载遮罩
        return config
    },
    error => {
        Toast.fail('请求异常')
        console.log('请求异常 :', error)
        store.state.loading = false // 关闭加载遮罩
        return Promise.error(error)
    }
)

// 响应拦截器
axios.interceptors.response.use(
    response => {
        // if (response.status === 200) {
        //     return Promise.resolve(response);
        // } else {
        //     return Promise.reject(response);
        // }
        store.state.loading = false // 关闭加载遮罩
        return Promise.resolve(response)
    },
    error => {
        Toast.fail('响应异常')
        console.log('响应异常 :', error)
        store.state.loading = false // 关闭加载遮罩
        return Promise.reject(error)
    }
)

Plugin.install = (Vue, options) => {
    Vue.prototype.$axios = {
        // 封装 全参数
        default(config) {
            return axios(config)
        },
        // 封装 get
        get(url, params) {
            return axios.get(url, { params })
        },
        // 封装 post
        post(url, params) {
            return axios.post(url, qs.stringify(params))
        },
        // 封装 all
        all(config) {
            return axios.all(config)
        },
        spread(config) {
            return axios.spread(config)
        }
    }
}

Vue.use(Plugin)

export default Plugin
