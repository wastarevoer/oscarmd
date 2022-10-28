let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
「 Suport Bot Dengan Cara donasi 」

⫹⫺ Via Pulsa : 6282215791949
⫹⫺ Via Dana : 6282215791949
⫹⫺ Via Saweria :
⫹⫺ https://saweria.co/taasptra

`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
