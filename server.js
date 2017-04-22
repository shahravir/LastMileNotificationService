var nodemailer = require('nodemailer');
var express = require('express');
var app = express();

app.post('/', function(req, res){

    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
		port:'587',
		secure:false,
		ignoreTLS:true,
        auth: {
            user: 'ambarish161@gmail.com', // Your email id
            pass: 'ibm@2014' // Your password
        }
    });
	
	var text = 'Hello world from \n\n' + 'Ravi';
	
	var mailOptions = {
		from: 'ambarish161@gmail.com', // sender address
		to: 'shah.ravir@gmail.com', // list of receivers
		subject: 'Email Example', // Subject line
		text: text //, // plaintext body
		// html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
	};
	
	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.json({yo: 'error'});
		}else{
			console.log('Message sent: ' + info.response);
			res.json({yo: info.response});
		};
});
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});