const http = require('http');
const queryString = require('querystring');
let PORT = 3000;

// 요청과 응답 매개변수
http.createServer((req,res) => {
  if (req.method === 'POST' && req.url === '/') {
    let body = "";
    // 새 문자열에 데이터 조각을 문자열로 변환한 것을 대입
    req.on('data', chunk => {
      body += chunk.toString()
    })
    // 선언 쿼리스트링 방식으로 데이터를 넣은 body를 분석 요청
    req.on('end', () => {
      const parsedBody = queryString.parse(body);
    })
    // 응답 머리에 200 정상 작동 컨텐츠 타입은 텍스트 설명
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("이게 post 요청 방식인가?")
  }
}).listen(3000, () => {
  // 서버를 실행해도 나오지 않는 이유는 Content-Type text/plain <- 때문이고 이를 html으로 바꿔주면 열린다. 
  console.log(`http://localhost:${PORT}/`)
})