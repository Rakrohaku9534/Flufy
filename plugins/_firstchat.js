/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
*/

let moment = require('moment-timezone')
let handler = m => m

handler.before = async function(m) {

	if (m.chat.endsWith('broadcast')) return
	if (m.fromMe) return
	if (m.isGroup) return

	let user = global.db.data.users[m.sender]
	let {
		banned
	} = db.data.users[m.chat]
	let username = conn.getName(m.sender)
	if (new Date - user.pc < 86400000) return

	let rely = `Hai ${ucapan()} *${username.replace(/@.+/, '')}* ðŸ‘‹
${banned ? `Anda telah dibanned, hubungi: https://wa.me/${global.nolu}` : 'Hai, apakah ada yang bisa saya bantu??'}`

	await m.reply(rely)
	user.pc = new Date * 1
}

module.exports = handler

function ucapan() {
	const hour_now = moment.tz('Asia/Jakarta').format('HH')
	var ucapanWaktu = 'Selamat Pagi'
	if (hour_now >= '03' && hour_now <= '10') {
		ucapanWaktu = 'Selamat Pagi'
	} else if (hour_now >= '10' && hour_now <= '15') {
		ucapanWaktu = 'Selamat Siang'
	} else if (hour_now >= '15' && hour_now <= '17') {
		ucapanWaktu = 'Selamat Sore'
	} else if (hour_now >= '17' && hour_now <= '18') {
		ucapanWaktu = 'Selamat Sore'
	} else if (hour_now >= '18' && hour_now <= '23') {
		ucapanWaktu = 'Selamat Malam'
	} else {
		ucapanWaktu = 'Selamat Malam'
	}
	return ucapanWaktu
}