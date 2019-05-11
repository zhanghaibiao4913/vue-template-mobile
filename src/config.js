/**
 * 配置文件导出
 */
let config = {};

if (process.env.NODE_ENV === 'production') {
  config.IP = 'www.yumyen.cn';
} else {
  config.IP = '127.0.0.1';
  config.port = 8080;
}
if (config.port) {
  config.baseURL = `http://${config.IP}:${config.port}`;
} else {
  config.baseURL = `http://${config.IP}`;
}

export default config