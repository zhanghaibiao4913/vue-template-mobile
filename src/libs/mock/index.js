const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

const test =  {
  'list|20': [{
    'id|1-1000': 1,
    'code': 132154646457,
    'extCode': 146785465748,
    'ordState|-1-3': 0,
    'deliveryState|0-2': 0,
    'collectState|0-2': 0,
    'businessEntityName': 'xxxx有限公司', //生成一条随机的中文句子
    'deliName': Random.cname(),
    'deliTel': '@email',
    'deliArea': Random.county(),
    'goodsTotalAmount|20000-50000': 0,
    'discount': 0,
    'totalAmount': 50000,
    'totalFreight': 10,
    'otherExpenses': 0,
    'totalOutGoodsAmount': 50000,
    'totalOutAmount': 50000,
    'inputDateTimestamp': Random.date('yyyy-MM-dd'),
    'deliveryTimestamp': Random.date('yyyy-MM-dd'),
    'receiptTimestamp': Random.date('yyyy-MM-dd'),
    'receiveTimestamp': Random.date('yyyy-MM-dd'),
  }],
  'total': 20
};
 
// Mock.mock( url, post/get , 返回的数据)
Mock.mock(RegExp('/user/list' + ".*"), 'get', (options)=> {
  console.log(options.url)
});
Mock.mock('/test', 'get', test);