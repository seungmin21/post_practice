const http = require('http');

// 요청과 응답 매개변수
http.createServer((req,res) => {
  if (req.method === 'POST' && req.url === '/') {
    let body = "";
    // 새 문자열에 데이터 조각을 문자열로 변환한 것을 대입
    req.on('data', chunk => {
      body += chunk.toString()
    })
  }
})