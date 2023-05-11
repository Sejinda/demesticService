// 管理用户数据相关

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '../apis/user'
export const useUserStore = defineStore('user', () => {
    // 1. 定义管理用户数据的state

    const userInfo = ref({ account: '18610848230', password: '123456', })

    // const userInfo = ref({account:'19882018021',password: "123456",})
    // userInfo.account="19882018021";
    // userInfo.passwordt="123456";

    // 2. 定义获取接口数据的action函数
    // console.log(userInfo);
    // var account=userInfo.value.account;
    // console.log(account);
    // var password=userInfo.value.password;
    // console.log(password);

    const getUserInfo = async ({account,password }) => {
        try {
            if (!userInfo.value) {
                throw new Error('userInfo.value is undefined');
            }
           
            const res = await loginAPI({ account, password })

            userInfo.value = res.result
            console.log(userInfo.value);
        }
        catch (error) {
            console.log(error);
            return null;

        }
    }

    // 退出时清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
        //     // 执行清除购物车的action
        //     cartStore.clearCart()
    }

    // 3. 以对象的格式把state和action return
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true,
})