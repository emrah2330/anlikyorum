var express = require('express');
var app = express();
var server = app.listen(8080);
var io = require('socket.io').listen(server);

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});

io.sockets.on('connection',function(socket){ //Kullan�c� e�er bu sayfaya ba�lan�rsa �al��acak ana fonksiyonum
	socket.on('yorumgonder',function(data){ // socket.emit('yorumgonder',yorum) ile g�nderdi�im de�eri burada ald�m.
		io.emit('yorumugerigonder',data); //Bu fonksiyon ise gelen yorumu al�p b�t�n kullan�c�lara servis eder.Bu de�eri js dosyamda socket on ile al�p ekrana yazd�rabilirim.
	});
});