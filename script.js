var http = require('http');
var url = require('url');
var operacoes = require('./matematica')


http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'})
    var q = url.parse(req.url, true).query
    var a = parseInt(q.numA)
    var b = parseInt(q.numB)

    if(q.opcao == "Soma"){
        res.end("Resultado: " + operacoes.soma(a,b))       
    }
    else if(q.opcao == "Subtração"){      
        res.end("Resultado: " + operacoes.sub(a,b)) 
    }
    else if(q.opcao == "Multiplicação"){       
        res.end("Resultado: " + operacoes.mult(a,b)) 
    }
    else if(q.opcao =="Divisão"){       
        res.end("Resultado: " + operacoes.div(a,b)) 
    }            
}).listen(3000);