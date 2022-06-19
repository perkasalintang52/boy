let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let helloaine = fs.readFileSync('./mp3/PTT-20220619-WA0585.opus') 
conn.sendFile(m.chat, helloaine, '', '', m, true)
//conn.sendMessage(m.chat, helloaine, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
// await conn.sendMessage(m.chat, { audio: { url: helloaine }, mimetype: 'audio/mp4'}, m)
}

handler.customPrefix = /^(hi|hii|hiii|hi Tsukasa|hii tsukasa|hiii tsukasa|hy|halo|hallo|helo|hello|hy tsukasa|halo tsukasa|hallo tsukasa|helo tsukasa|hello tsukasa)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
