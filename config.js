global.owner = ['6285786539008']  
global.mods = ['6285786539008'] 
global.prems = ['6285786539008']

// YANG ATAS ITU UBAH JADI NOMOR LU
// & YG BAWAH INI, NOMOR,NAMA,EMAIL LU
global.fsizedoc = '45000000000' // default 10TB
global.fpagedoc = '19'
global.namedoc = 'IG: fahrul_mt'
global.nameowner = 'Fahrul Developer'
global.mail = 'rakrohaku@gmail.com'
global.nolu = '6285786539008'
global.numberowner = '6285786539008' 
global.dana = '6285786539008'
global.pulsa = '6285786539008'
global.gopay = '6285786539008'

// YG BAWAH ITU, ISI NAMA BOT, DAN MEDSOS LU

global.namebot = 'F.A Bot MultiDevice'
global.gc = 'https://chat.whatsapp.com/FSbrP6LWWm4A8i8uGdyDTs'
global.sourceUrl = "https://Instagram.com/fahrul_mt"
global.instagram = 'https://instagram.com/fahrul_mt'
global.flythumb = 'https://telegra.ph/file/ea29a9d14ed01923eb7ab.jpg' //Ini thumbnail menu dll
global.version = '6.0'

// BAWAH INI GOSAH DIGANTI, KECUALI KLO KEY NYA ABIS

global.lolkey = '4ec4c2205a943c2dc163cd7e' //key ini udah Prem, cuma gk di custom aja
global.rose = 'Rk-relyXsakkarin';
global.zenzkey = 'BagasPrdn'
global.btc = 'Admin'

// BAWAH INI WM, SERAH LU MW ISI APA

global.wm = 'The Next WhatsApp Bot'
global.watermark = wm
global.wm2 = 'Fahrul Developer'
global.wm3 = 'F.A Bot'
global.wm4 = 'F.A Bot'
global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.wait = 'Loading, please wait...'
global.eror = 'Server Error'
global.benar = 'Benar\n'
global.salah = 'Salah\n'
global.web = global.sourceUrl

// YG BAWAH ITU, UBAH, UNTUK WM STIKER

global.stiker_wait = 'Sedang Di Proses...'
global.packname = 'Created By F.A Bot\n'
global.author = 'Fahrul Developer'

// UDAH COY, YG BAWAH INI GOSAH DI APA" IN

global.APIs = { 
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais.com',
  lolhuman: 'https://api.lolhuman.xyz',
  tio: 'https://api.botcahx.live',
  popcat: 'https://api.popcat.xyz',
  rey: 'https://sekha.me'
}
global.APIKeys = { // Tambahkan Apikey nya disini

  'https://sekha.me': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://pencarikode.xyz': 'pais', 
  'https://zekais.com': 'apikeymu',
  'https://api.botcahx.live': 'QaepQXxR',
  'https://api.lolhuman.xyz': 'ayakaviki',
}

/*Yang Ini Untuk Setting Rpg Game Yah Kak*/
global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

/*Yang Ini Jangan Di Ubah Yah Kak*/
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})