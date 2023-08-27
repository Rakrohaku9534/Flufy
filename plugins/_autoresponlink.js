/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
*/

let handler = m => m

handler.all = async function (m, { isBlocked }) {
  if (isBlocked) return
  if (
    (m.mtype === 'groupInviteMessage' ||
      m.text.startsWith('Undangan untuk bergabung') ||
      m.text.startsWith('Invitation to join') ||
      m.text.startsWith('Buka tautan ini')) &&
    !m.isBaileys &&
    !m.isGroup
  ) {
    let teks = `Mau nambahin bot ke grup kak?
Ngak gratis yaa..

*HARGA:*
➠ 10 hari • Rp 5.000
_Free premium 5 hari_

➠ 25 hari • Rp 10.000
 _Free premium 10 hari_

➠ 30 hari • Rp 15.000
_Free premium 30 hari_

*Minat? Hubungi*
° https://wa.me/62857-8653-9008`

    this.reply(m.chat, teks, m)
  }
}

module.exports = handler