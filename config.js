const fs = require('fs')
const chalk = require('chalk')

global.apikey = 'YuKr3FZyAp6RN3ib97omxHO3TraBHsGThbJh7c67tdM'
global.rosekey = '-' //https://api.itsrose.life
//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'AbRuRi_bot'
global.namaowner = 'AbianRudiRidwan'

//—————「 Setting Owner 」—————//
global.owner = '60142808841'
global.nomorlu = '60142808841'
global.ownernomer = ["62895328628699"]
global.premium = ['60142808841']

//—————「 Set Wm 」—————//
global.packname = 'AbRuRi_bot'
global.author = 'AbianRudiRidwan'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    done: 'Done ✅',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Admin Group*_',
    wait: 'Mohon Sebentar, bot sedang memproses perintah...',
    endLimit: '*Maaf, limit anda sudah habis. Silahkan beli premium di nomor owner!*',
    error: '*!!!Feature Error!!!*',
prem: '*Premium only!! Silahkan beli premium di nomor owner!*',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 25,
}

//—————「 Set Image 」—————//
global.imageurl = 'https://i.pinimg.com/236x/75/d8/8e/75d88ec4982f34ce10009c9024934be8.jpg'
global.isLink = `https://github.com/rudiabian`
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
