import mock from "mockjs";

const userInfomation = [{
    id: 1,
    account: 'wzw',
    username: '仙女一号',
    password: '321',
    token: 'tyyd4hge5we87dgfd1f2ghbdfg41bdf85bd48sdw3OOPDGdfsKGGHG8'
},{
    id: 2,
    account: 'lwz',
    username: '专业团队送你上路',
    password: '123',
    token: 'gSDGRHG8854dsf5sdg4r545GDFWQZPDVJB1DAGFRSD81'
}]

const userAddress = [{
    id: 1,
    uId: 1,
    person: '专业团队',
    mobile: '133558877785',
    pac: '广东省珠海市',
    info: '云峰路万科里',
},{
    id: 2,
    uId: 1,
    person: '黑人团队',
    mobile: '13895564123',
    pac: '广东省珠海市2',
    info: '云峰路万科里2',
},{
    id: 3,
    uId: 2,
    person: '则为团队',
    mobile: '12558779965',
    pac: '潮汕人',
    info: '潮汕有没有专业团队',
}]

const userFavourite = [{
    id: 1,
    uId: 1,
    pId: 3
}, {
    id: 2,
    uId: 1,
    pId: 4,
}, {
    id:3,
    uId: 2,
    pId: 1
}, {
    id:4,
    uId: 2,
    pId: 3
}]

const userGift = [{

}]

const userDis = [{

}]

//MD5 加密 + 加盐
const passwordKey = 'cakeisgood';
const signature = ''
//当登录的时候会在密码后面加上key再进行加密(模拟的不进行MD5加密)

let login = function(data) {
    let params = JSON.parse(data.body)    
    let user;
    let resp = {
        isSuccess: false,
        error: '',
        token: ''
    }
    user = userInfomation.filter(x => x.account == params.account);
    if(user != undefined && user != null && user.length > 0) {
        if(user[0].password == params.password) {
            resp.isSuccess = true;
            resp.token = user[0].token;
        }else {
            resp.isSuccess = false;
            resp.error = '账号或密码错误';
        }
    }else {
        resp.isSuccess = false;
        resp.error = '不存在此账号'
    }
    return resp;
}

let queryAddress = function(data) {
    let params = JSON.parse(data.body);
    let address;
    address = userAddress.filter(x => x.uId == params.uId);
    return address;
}

let getUser = function(data) {
    let params = JSON.parse(data.body);
    let user = userInfomation.filter(x => x.token == params.token)[0];
    let resp = { isSuccess: false, error: '', user: {}};
    if(user) {
        resp.isSuccess = true;
        resp.user = {
            id: user.id,
            username: user.username,
            account: user.account,
            loginDate: Date.now,
            favourite: 0,
            address: userAddress.filter(x => x.uId == user.id).length,
            gift: 0,
            dis: 0,
            token: user.token
        }
    }else {
        resp.error = '找不到用户，错误：User is not found';
    }
    return resp;
}

mock.mock("http://cake.com/user/login", "post", login)
mock.mock("http://cake.com/user/queryAddress", "post", queryAddress)
mock.mock("http://cake.com/user/getUser", "post", getUser)

export default userInfomation