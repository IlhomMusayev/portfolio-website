const router = require("express").Router();
const nodemailer = require("nodemailer");

const TelegramBot = require('node-telegram-bot-api')

router.get(["/", "/index.html"], (req, res) => {
	res.render("index", {
		user: req.user,
		title: "Home",
		isHome: true
	});
});

router.post('/sendmessage', (req, res) => {
    const { name, email, subject, message, telegram } = req.body

    const token = '5033922825:AAEVNXs18Q1FH_-ZSqn_lc209d8F_xCOEWc'

    const bot = new TelegramBot(token, { polling: true })

    const chatId = 1492712163

    bot.sendMessage(chatId,`📩 <b>YANGI XABAR:\n\n🖊 Subject:</b> ${subject}\n\n<b>👤 Name</b>: ${name}<b>\n\n📜 Message:</b> ${message}\n\n<b>📧 Email:</b> ${email}\n\n<b>🔵 Telegram:</b> <a href="https://t.me/${telegram}"><i>${telegram}</i></a>`, {
        parse_mode: "HTML"
    })
    

    res.status(200).json({
        ok: true
    })
    // const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //        auth: {
    //             user: 'ilhommusayev2001@gmail.com',
    //             pass: 'rbkhqfuztxtbbqde',
    //          },
    //     secure: true,
    //     });

    // const mailData = {
    //     from: email,
    //     to: "ilhommusayev2001@gmail.com",
    //     subject: subject,
    //     text: "Ilhomjon.uz",
    //     html: `<p style="font-size: 18px; color: #383838"><b>Email:</b> ${email} <br><br> <b>Xabar:</b> ${message}<br><br> <a style="text-decoration: none; color: blue;" href = "https://t.me/${telegram}">Telegram</a></p>`
    // }

    // transporter.sendMail(mailData, (error, info) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     res.status(200)
    //     res.redirect('/')
    // })
})

module.exports = {
	router,
	path: "/",
};