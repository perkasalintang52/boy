let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Dana,Gopay,Ovo,Pulsa 
│ •  [082388332165]
╰────
Donasi akan di gunakan untuk beli apikey dan jasa Run
Berapapun donasi sangat berguna buat bot

Chat owner jika ingin donasi 
wa.me/6282388332165
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
