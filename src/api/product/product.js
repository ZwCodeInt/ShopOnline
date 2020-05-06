import mock, { Random } from "mockjs";

var resp = [];
var datas = [];

let createData = function() {
    if(datas.length == 0) {
        for(let i = 0; i < 30; i++) {
            let obj = {
                id: i + 1,
                image: Random.dataImage('200x200', '蛋糕'),
                title: Random.csentence(10, 20),
                name: Random.csentence(5, 10),
                price: (i + 1) * 10,
                content: Random.csentence(300, 2000),
                contentImage: Random.dataImage('200x200', '蛋糕')
            }
            datas.push(obj);
        }
    }
}

let products = function(data) {
    let params = JSON.parse(data.body)    
    createData()
    if(params.searchName) {
        resp = datas.filter(x => x.name == params.searchName);   
    }
    if(params.pageIndex && params.pageSize) {
        let skip = (params.pageIndex - 1) * params.pageSize;
        let take = params.pageIndex * params.pageSize;
        resp = datas.filter(x => x.id > skip && x.id <= take)
    }
    return resp;
}

let singleProduct = function(data) {
    createData();
    let params = JSON.parse(data.body);
    return datas.filter(x => x.id == params.id)[0]
}

let getProducts = function(func) {
    createData()
    func(datas)
}

mock.mock("http://cake.com/cake/query", "post", products)
mock.mock("http://cake.com/cake/single", "get", singleProduct)

export default {
    getProducts
}

