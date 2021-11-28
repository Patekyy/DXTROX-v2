let handler = async m => m.reply(`


╭─「 Support link」
│ • paytm,Donate [254727475670]
│ • https://github.com/Tracertech
 | • give a star if the project helped u
╰────
`.trim()) // give a star if it helped u
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
