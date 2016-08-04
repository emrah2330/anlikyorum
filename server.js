var express = require('express');
var app = express();
var server = app.listen(8080);
var io = require('socket.io').listen(server);

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});

io.sockets.on('connection',function(socket){ //Kullanýcý eðer bu sayfaya baðlanýrsa çalýþacak ana fonksiyonum
	socket.on('yorumgonder',function(data){ // socket.emit('yorumgonder',yorum) ile gönderdiðim deðeri burada aldým.
		io.emit('yorumugerigonder',data); //Bu fonksiyon ise gelen yorumu alýp bütün kullanýcýlara servis eder.Bu deðeri js dosyamda socket on ile alýp ekrana yazdýrabilirim.
	});
});