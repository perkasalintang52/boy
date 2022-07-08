let handler = async m => m.reply(`
╭─「 Donasi • Saweria 」
│ • Dana,Gopay,Ovo,Pulsa 
│ •  [081322577123]
| •  [https://saweria.co/joceylintangg]
╰────
Donasi akan di gunakan untuk beli apikey dan jasa Run
Berapapun donasi sangat berguna buat bot

Chat owner jika ingin donasi 
wa.me/6281322577123
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
