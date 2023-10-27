var usermodel = require('../model/usermodel');
var nodemailer = require('nodemailer');

exports.insert = async (req,res) => {

    // var data = await usermodel.create(req.body);9
    
        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dixitapambhar06@gmail.com',
            pass: 'dpca alau wmdb bypr'
        }
        });

        var mailOptions = {
        from: 'dixitapambhar06@gmail.com',
        to: req.body.email,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });
            res.status(200).json({
                status:"email send"
            })
        }