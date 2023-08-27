let handler = m => m

handler.all = async function (m, { isBlocked }) {
  if (isBlocked) return
  if (m.text.toLowerCase() === '.sc' || m.text.toLowerCase() === '.script' || m.text.toLowerCase() === 'sc') {
 (async() => {
const arr = [
  "Buat Sendiri sana🗿",
  "Ngak bang canda\nMauan amat anj"
];

const { key } = await conn.sendMessage(m.chat, { text: 'Nyari Sc?' }, { quoted: m});

for (let i = 0; i < arr.length; i++) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  await conn.sendMessage(m.chat, { text: arr[i], edit: key });
}})()

   }
}

module.exports = handler