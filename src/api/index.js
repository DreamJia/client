import { fetch, post } from "../utils/http.js"

//用户登录
export const Login_in = (data) => {
    return post("login", data);
}

//获取左侧菜单
export const Get_menu = () => {
    return fetch("menu/list");
}