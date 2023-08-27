/* 
Script By Reelly XD
   YT: ReellyXD
   IG: reellyxd
Buy Script? 
   WA: +62 857-0436-85323
   TELE: t.me/rely_xd
   Github: github.com/ReellyXD
*/

let axios = require('axios')

let handler = async (m, { conn, text }) => {
  if (!text) throw '*Example:* .ai cara mendapatkan anak tetangga'

  conn.chatRead(m.chat)
  conn.sendMessage(m.chat, {
    react: {
      text: '',
      key: m.key,
    }
  })

  try {
    const response = await axios.post(`https://api.itsrose.life/chatGPT/turbo?apikey=${global.rose}`, {
      "model": "gpt-4",
      "temperature": 0,
      "stop": "string",
      "max_tokens": 200,
      "presence_penalty": 0,
      "frequency_penalty": 0,
      "messages": [
        {
          "role": "user",
          "content": text
        }
      ]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'accept': 'text/event-stream'
      }
    })

    if (response.status == 200) {
      let message = response.data.result.messages
      let content = message.content
      let reply = `${content}`
      m.reply(reply)
    } else {
      m.reply('Openai1 sedang bermasalah, coba .ai2')
    }

  } catch (error) {
    console.log(error)
    m.reply('Openai1 sedang bermasalah, coba .ai2')
  }
}

handler.command = /^ai$/i
handler.help = ['ai <text>']
handler.tags = ['tools']
handler.register = true
handler.premium = true

module.exports = handler