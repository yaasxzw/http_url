const http = require('http')
const port = 3000

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<meta charset="UTF-8">')
        res.write('<h1>Olá, Mundo</h1>')
        res.end()
    }else if(req.url === '/home'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<meta charset="UTF-8">')
        res.write('<h1>Bem-Vindo á página inicial!</h1>')
        res.end()
    }else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<meta charset="UTF-8">')
        res.write('<h1>Sobre nós:</h1>')
        res.write('<h1>somos uma empresa dedicada a....</h1>')
        res.end()
    }
});
server.listen(port, ()=>{
    console.log(`Servidor on ${port}😎`)
});