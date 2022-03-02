const http = require('http')
const port = 5000
const fs = require('fs')

server = http.createServer((req, res) =>{
    res.writeHead(200,{
        'Content-Type': 'text-html'
    })
    const url = req.url
    console.log(url)
    if(url === '/home'){
        res.write('<h1>ini adalah halaman home</h1>')
        res.end()
    
    }else if(url === '/about'){
        res.write('<h1>ini adalah halaman about</h1>')
        res.end()
    
    }else{
        // res.write('<h1>404 not found</h1>')
        fs.readFile()
        res.write('<h1>404 not found</h1>')
        res.end()
    }
});

server.listen(port, () =>{
    console.log(`server listen on port ${port}`)
})