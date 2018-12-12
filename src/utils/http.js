import axios from 'axios';
// import { Message } from 'element-ui';
import router from '../router'
import qs from "qs"

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://test.weixin101.com/global_client/admin/';


//http request 拦截器
axios.interceptors.request.use(
    config => {
        const token = sessionStorage.getItem('token');//注意使用的时候需要引入cookie方法，推荐js-cookie
        // config.data = JSON.stringify(config.data);
        if (token) {
            config.headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': token
            }
        } else {
            config.headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'default'
            }
            router.push({
                path: "/login",
                // querry: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
            })
        }
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);


//http response 拦截器
axios.interceptors.response.use(
    response => {
        // if (!response.data.status) {
        //     // router.push({
        //     //     path: "/login",
        //     //     // querry: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
        //     // })
        // }
        return response;
    },
    error => {
        return Promise.reject(error)
    }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}



/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data))
            .then(response => {
                // console.log(response);
                resolve(response.data);
            }, err => {
                // console.log(err)
                reject(err)
            })
    })
}
