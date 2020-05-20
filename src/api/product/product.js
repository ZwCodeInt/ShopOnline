import mock, { Random } from "mockjs";

var resp = [];
var prods = [];  //模拟商品
var types = [];  //模拟商品类型

let createData = function() {
    if(prods.length == 0) {
        for(let i = 0; i < 30; i++) {
            let id = i + 1;
            let obj = {
                id: id,
                image: Random.dataImage('200x200', '蛋糕'),
                title: Random.csentence(10, 20),
                name: Random.csentence(5, 10),
                price: (i + 1) * 10,
                content: Random.csentence(300, 2000),
                contentImage: Random.dataImage('200x200', '蛋糕')
            }
            let t = {
                id: id,
                pId: obj.id,
                name: '绿色',
                price: (i + 1) * 12,
            }
            let t2 = {
                id: id + 1,
                pId: obj.id,
                name: '灰色',
                price: (i + 1) * 18,
            }
            types.push(t);
            types.push(t2);
            prods.push(obj);
        }
    }
}

//商品列表API
let products = function(data) {
    let params = JSON.parse(data.body)    
    createData()
    if(params.searchName) {
        resp = prods.filter(x => x.name == params.searchName);   
    }
    if(params.pageIndex && params.pageSize) {
        let skip = (params.pageIndex - 1) * params.pageSize;
        let take = params.pageIndex * params.pageSize;
        resp = prods.filter(x => x.id > skip && x.id <= take)
    }
    return resp;
}

//单个商品API
let singleProduct = function(data) {
    createData();
    let params = JSON.parse(data.body);
    return prods.filter(x => x.id == params.id)[0]
}


let getProducts = function(func) {
    createData()
    func(prods)
}

//根据商品获取商品类型
let queryProductTypes = function(data) {
    createData()
    let params = JSON.parse(data.body);
    return types.filter(x => x.pId == params.id);
}

mock.mock("http://cake.com/cake/query", "post", products)
mock.mock("http://cake.com/cake/single", "get", singleProduct)
mock.mock("http://cake.com/cake/queryProductTypes", "post", queryProductTypes)

export default {
    getProducts
}

