const http = require('http');

// 요청과 응답 매개변수
http.createServer((req,res) => {
  if (req.method === 'POST' && req.url === '/') {
    let body = "";
  }
})