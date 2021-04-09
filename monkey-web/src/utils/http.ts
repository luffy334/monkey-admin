import axios from "axios"

// 请求超时 15秒
axios.defaults.timeout = 15000
// 跨域请求是否需要凭证
axios.defaults.withCredentials = true
// 默认请求地址
axios.defaults.baseURL = process.env["REACT_APP_BASE_URL"]
// 请求拦截器
axios.interceptors.request.use((config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    })
// 返回拦截器
axios.interceptors.response.use((response) => {
        return response
    },
    (error) => {
        console.log("请求出错：", error)
    }
)

/**
 * GET请求
 *
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export function get(url: string, params: {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params: params}).then((response) => {
            // landing(url, params, response.data);
            resolve(response.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

/**
 * POST请求
 *
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url: string, data: {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then((response) => {
            resolve(response.data)
        }).catch((error) =>{
            reject(error)
        })
    })
}

/**
 * PUT请求
 *
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url: string, data: {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then((response) => {
            resolve(response.data)
        }).catch((error) =>{
            reject(error)
        })
    })
}