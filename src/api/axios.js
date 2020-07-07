import Vue from 'vue'
import axios from 'axios'
import qs from 'qs' // 引入qs模块，用来序列化post类型的数据
import { Toast } from 'vant'
import Api from './index'
import store from '@/store'

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
        store.state.loading = false // 关闭加载遮罩
        return Promise.error(error)
    }
)

// 响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.code != 0) {
            if (response.data.msg != '') {
                Toast.fail(response.data.msg)
            }
            store.state.loading = false // 关闭加载遮罩
            return Promise.resolve(response.data)
        }
        store.state.loading = false // 关闭加载遮罩
        return Promise.resolve(response.data)
    },
    error => {
        Toast.fail('响应异常')
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
            return axios.get(Api[url], { params })
        },
        // 封装 post
        post(url, params) {
            return axios.post(Api[url], qs.stringify(params))
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
