const http = require('http')
const port = 5000
const fs = require('fs')

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404)
            res.write("Page Not Found")
        } else {
            res.write(data)
        }
        res.end();
    })
}

server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    const url = req.url
    switch (url) {
        case "/home":
            renderHTML("./home.html", res)
            break
        case "/about":
            renderHTML("./about.html", res)
            break
        case "/services":
            renderHTML("./services.html", res)
            break
        default:
            renderHTML("./404.html", res)
            break
    }
});

server.listen(port, () => {
    console.log(`server listen on port ${port}`)
})