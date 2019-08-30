import axios from "axios"
import store from "../store"

export function request(config, success, sb) {
    const instance1 = axios.create({
        baseURL: "https://www.easy-mock.com/mock/5d2725531752820de7a8a8ec/lhnsb/",
        timeout: 5000
    })


    instance1.interceptors.request.use((config) => {
        // console.log(config);
        store.state.xflag = true;
        return config;
    }, function (err) {

    });


    instance1.interceptors.response.use(function (res) {
        // console.log(res.data);
        store.state.xflag = false;
        return res.data
    }, function (err) {

    });

    instance1(config).then(function (res) {
        success(res);
    }).catch(function (err) {
        sb(err);
    });
}
