const http=require('http');
const fs=require('fs');
const minimist=require('minimist');

const args = minimist(process.argv.slice(2));

const server=http.createServer((req,resp)=>{
    if(req.url==="/"){       
        fs.readFile('home.html',(err,data)=>{
            if(err){
                resp.writeHead(404,{'Content-Type':'text/plain'});
            }else{
                resp.writeHead(200,{'Content-Type':'text/html'});
                resp.end(data);
            }           
        })
    }else if(req.url=='/registration'){
        fs.readFile("registration.html",(err,data)=>{
            if(err){
                resp.writeHead(404,{'Content-Type':'text/plain'});
            }else{
                resp.writeHead(200,{'Content-Type':'text/html'});
                resp.end(data);
            }
        })
    }else if(req.url=='/projects'){
        fs.readFile("project.html",(err,data)=>{
            if(err){
                resp.writeHead(404,{'Content-Type':'text/plain'});
            }else{
                resp.writeHead(200,{'Content-Type':'text/html'});
                resp.end(data);
            }
        })
    }else{
        resp.writeHead(404,{'Content-Type':'text/plain'});
    }
}).listen(parseInt(args.port))