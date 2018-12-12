// import Vue from 'vue'
// import Router from 'vue-router'
// import { Get_menu } from "_api";

// export const Menu_list = () => {
//     const promise = new Promise((resolve, reject) => {
//         Get_menu().then(res => {
//             if (res.status) {
//                 let d = res.data;
//                 let r = [];
//                 for (let i = 0, len = d.length; i < len; i++) {
//                     let y = d[i].module.router_name;
//                     let t = d[i].module.router_component;
//                     let q = {
//                         path: d[i].module.router_path,
//                         name: d[i].module.router_name,
//                         meta: {
//                             title: d[i].module.module_name
//                         },
//                         component: () => import(`@cp/${y}/${t}.vue`),
//                     }
//                     r.push(q);
//                 }
//                 resolve(r);
//             }
//         });
//     })
//     return promise;
// }


// export const MK = () => {
//     return '123';
// }



