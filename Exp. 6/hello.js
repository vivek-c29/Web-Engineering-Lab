const http = require("http");
const server = http.createServer((req,res)=>{
    // res.writeHead(200,{'content-type':'text/plain'});
    res.end("Hello, World! \nWassup");
});

server.listen(3000,()=>{
    console.log('Server is running at port no. 3000');
    
})