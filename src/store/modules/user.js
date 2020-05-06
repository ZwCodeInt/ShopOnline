import axios from 'axios'

const state = {
    userInfomation: {
        account: '',
        token: '',
        username: '',
        loginDate: '',
    },
    userMenu: {
        favourite: 0,
        dis: 0,
        gift: 0,
        address: 0
    }
}

const actions = {
    setUser({commit, state}, token) {
        return new Promise((resolve, reject) => {
            
            let _resp = { isSuccess: false, error: '' };           
            axios({
                url: 'http://cake.com/user/getUser',
                method: 'post',
                data: { 'token': token }
            }).then(resp => {
                let data = resp.data;
                if(data.isSuccess) {
                    commit('setUserInfomation', { 'user': data.user });
                    if(token && !localStorage.token) {
                        localStorage.token = token;
                    }
                    _resp.isSuccess = true;
                }else {
                    _resp.error = '获取用户失败，请稍后重试'
                }
                resolve(_resp);
            }).catch(err => {
                reject(err);
            })
        })
    },
  
}

const mutations = {
    setUserInfomation(state, { user }) {
        state.userInfomation.account = user.account;
        state.userInfomation.token = user.token;
        state.userInfomation.username = user.username;
        state.userInfomation.loginDate = user.loginDate;
        state.userMenu.favourite = user.favourite;
        state.userMenu.dis = user.dis;
        state.userMenu.gift = user.gift;
        state.userMenu.address = user.address;
    }
}

const getters = {
    userInfomation: (state) => {
        return {
            info: {
                account: state.userInfomation.account,
                token: state.userInfomation.token,
                username: state.userInfomation.username,
                loginDate: state.userInfomation.loginDate
            },
            menu: {
                favourite: state.userMenu.favourite,
                dis: state.userMenu.dis,
                gift: state.userMenu.gift,
                address: state.userMenu.address
            }
        }
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}