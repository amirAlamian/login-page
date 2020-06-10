const http = require("http");
const fs = require("fs");
const path = require("path")
http.createServer(function (request, response) {
    if (request.url === "/index" && request.method === "GET") {
        fs.readFile("./public/index4.html", "UTF-8", function (err, file) {
            response.write(file);
            response.end();
            if (err) {
                console.log("something went wrong");
            }

        })
    }
    if (request.url === "/style4.css" && request.method === "GET") {
        fs.readFile("./public/style4.css", "UTF-8", function (err, file) {
            response.write(file);
            response.end();
            if (err) {
                console.log("something went wrong");
            }

        })
    }
    if (request.url === "/client.js" && request.method === "GET") {
        fs.readFile("./public/client.js", "UTF-8", function (err, file) {
            response.write(file);
            response.end();
            if (err) {
                console.log("something went wrong");
            }

        })
    }
    if (request.url === "/jquery-3.4.1.js" && request.method === "GET") {
        fs.readFile("./public/jquery-3.4.1.js", "UTF-8", function (err, file) {
            response.write(file);
            response.end();
            if (err) {
                console.log("something went wrong");
            }

        })
    }
    if (request.url === "/images/8.png" && request.method === "GET") {
        var filePath = path.join("C:/Users/WIN10/Desktop/Maktab/createServer/7/public/images", '8.png');
        var readStream = fs.createReadStream(filePath);
        readStream.pipe(response);
    }
    if (request.url === "/images/icon5.png" && request.method === "GET") {
        var filePath = path.join("C:/Users/WIN10/Desktop/Maktab/createServer/7/public/images", 'icon5.png');
        var readStream = fs.createReadStream(filePath);
        readStream.pipe(response);
    }
    if (request.url === "/yekan.ttf" && request.method === "GET") {
        var filePath = path.join("C:/Users/WIN10/Desktop/Maktab/createServer/7/public", 'yekan.ttf');
        var readStream = fs.createReadStream(filePath);
        readStream.pipe(response);
    }
    if (request.url === "/images/icon4.png" && request.method === "GET") {
        var filePath = path.join("C:/Users/WIN10/Desktop/Maktab/createServer/7/public/images", 'icon4.png');
        var readStream = fs.createReadStream(filePath);
        readStream.pipe(response);
    }
    if (request.url === "/images/icon3.png" && request.method === "GET") {
        var filePath = path.join("C:/Users/WIN10/Desktop/Maktab/createServer/7/public/images", 'icon3.png');
        var readStream = fs.createReadStream(filePath);
        readStream.pipe(response);
    }
    if (request.url === "/login" && request.method === "POST") {
        fs.readFile("./users.json", "UTF-8", function (err, file) {
            file = JSON.parse(file);
            request.on("data",function(data){
                data=JSON.parse(data);
                for(let i=0;i<file.length;i++){
                    if(data["username"]===file[i]["username"]){
                        if(data["password"]===file[i]["password"]){
                            response.write("logged in")
                            response.end()
                        }
                        else{
                            response.write("failed")
                            response.end()
                        }
                        break;
                    }
                    if(i===file.length-1){
                        response.write("failed")
                        response.end()
                    }
                }
                
                
            })
            if (err) {
                console.log("something went wrong");
            }

        })
    }
}).listen(8080);
console.log("server starts at port 8080");