// GabutBot 3.0 All Command 
// Original by Nurutomo n friends, Recode by YangJunMing

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const yts = require('yt-search')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const nyoutube = ('© GabutBot 3.0\nYoutube/Sc :\nhttps://www.youtube.com/channel/UCUAdKiNCnt6mpGD94okTaoQ/')  //ubah di config biar ngk emror
const ini_mark = `0@s.whatsapp.net`
//database tebak
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let asahotak = db.data.game.asahotak = []
let tebakbendera = db.data.game.tebakbendera = []
let tekateki = db.data.game.tekateki = []
let tebakkabupaten = db.data.game.tebakkabupaten = []
let tebakprovinsi = db.data.game.tebakprovinsi = []
let vote = db.data.others.vote = []
let akinator = JSON.parse(fs.readFileSync('./src/akinator.json'))

//TIME
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌉'
 } 


module.exports = naze = async (naze, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await naze.decodeJid(naze.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
	
	
        // Group
        const groupMetadata = m.isGroup ? await naze.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
        // Public & Self
        if (!naze.public) {
            if (!m.key.fromMe) return
        }
		
		// apikey
		apikey = 'INSERT API KEY HERE'

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await naze.setStatus(`${naze.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 *ANTI LINK* 」\n\n*Kamu terdeteksi mengirim link group*, *maaf kamu akan di kick‼️,yang mau juga silahkan kirim link‼️*`)
        if (!isBotAdmins) return m.reply(`*Bot aja bukan admin anj*`)
        let gclink = (`https://chat.whatsapp.com/`+await naze.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`*maaf gak jadi, karena kamu ngirim link group ini*`)
        if (isAdmins) return m.reply(`*maaf kamu admin*`)
        if (isCreator) return m.reply(`*maaf kamu owner bot ku*`)
        naze.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: naze.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, naze.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        naze.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            naze.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }
		if (akinator.hasOwnProperty(m.sender.split('@')[0]) && isCmd && ["0", "1", "2", "3", "4", "5"].includes(body)) {
                kuis = true
                var { server, frontaddr, session, signature, question, step } = akinator[m.sender.split('@')[0]]
                if (step == "0" && budy == "5") throw("Maaf Anda telah mencapai pertanyaan pertama")
                var ini_url = `https://api.lolhuman.xyz/api/akinator/answer?apikey=${apikey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
                var get_result = await fetchJson(ini_url)
                var get_result = get_result.result
                if (get_result.hasOwnProperty("name")) {
                    var ini_name = get_result.name
                    var description = get_result.description
                    ini_txt = `${ini_name} - ${description}\n\n`
                    ini_txt += "*Sekian dan terima gaji. Akinator by GabutBot*"
                    await naze.sendImage(m.chat, get_result.image, ini_txt, m).then(() => {
                        delete akinator[m.sender.split('@')[0]]
                        fs.writeFileSync("./src/akinator.json", JSON.stringify(akinator))
                    })
                    return
                }
                var { question, _, step } = get_result
                ini_txt = `${question}\n\n`
                ini_txt += "0 - Ya\n"
                ini_txt += "1 - Tidak\n"
                ini_txt += "2 - Saya Tidak Tau\n"
                ini_txt += "3 - Mungkin\n"
                ini_txt += "4 - Mungkin Tidak\n"
                ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
                if (args[0] === '5') {
                    var ini_url = `https://api.lolhuman.xyz/api/akinator/back?apikey=${apikey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
                    var get_result = await fetchJson(ini_url)
                    var get_result = get_result.result
                    var { question, _, step } = get_result
                    ini_txt = `${question}\n\n`
                    ini_txt += "0 - Ya\n"
                    ini_txt += "1 - Tidak\n"
                    ini_txt += "2 - Saya Tidak Tau\n"
                    ini_txt += "3 - Mungkin\n"
                    ini_txt += "4 - Mungkin Tidak"
                    ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
                }
                naze.sendText(m.chat, ini_txt, m).then(() => {
                    const data_ = akinator[m.sender.split('@')[0]]
                    data_["question"] = question
                    data_["step"] = step
                    akinator[m.sender.split('@')[0]] = data_
                    fs.writeFileSync("./src/akinator.json", JSON.stringify(akinator))
                })
            }

       if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await naze.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, naze.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
		if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await naze.sendButtonText(m.chat, [{ buttonId: 'tebak kabupaten', buttonText: { displayText: 'Tebak Kabupaten' }, type: 1 }], `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, naze.user.name, m)
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
		if (tebakprovinsi.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakprovinsi[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await naze.sendButtonText(m.chat, [{ buttonId: 'tebak provinsi', buttonText: { displayText: 'Tebak Provinsi' }, type: 1 }], `🎮 Tebak Provinsi 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, naze.user.name, m)
                delete tebakprovinsi[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await naze.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, naze.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await naze.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, naze.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
		
		if (tekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tekateki[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await naze.sendButtonText(m.chat, [{ buttonId: 'tebak teki', buttonText: { displayText: 'Teka Teki' }, type: 1 }], `🎮 Teka Teki 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, naze.user.name, m)
                delete tekateki[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await naze.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, naze.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await naze.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, naze.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
		
		if (asahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = asahotak[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await naze.sendButtonText(m.chat, [{ buttonId: 'tebak asahotak', buttonText: { displayText: 'Asah Otak' }, type: 1 }], `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, naze.user.name, m)
                delete asahotak[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
		
		if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await naze.sendButtonText(m.chat, [{ buttonId: 'tebak bendera', buttonText: { displayText: 'Tebak Bendera' }, type: 1 }], `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, naze.user.name, m)
                delete tebakbendera[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await naze.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, naze.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await naze.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, naze.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await naze.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await naze.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    naze.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    naze.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) naze.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) naze.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) naze.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    naze.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) naze.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) naze.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    naze.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} *Telah Afk*${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        	if (!m.isGroup) throw mess.group
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await naze.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await naze.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            naze.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *menantang* @${m.mentionedJid[0].split`@`[0]} *untuk bermain suit*

*Silahkan* @${m.mentionedJid[0].split`@`[0]} *untuk ketik terima/tolak*`
            this.suit[id] = {
            chat: await naze.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) naze.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	     case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                naze.sendMessage(m.chat, { image: { url: 'https://asset.kompas.com/crops/iFErOVsv-tbW5AR5JSPOmMEA0NM=/121x0:1000x586/750x500/data/photo/2019/07/03/2998909183.jpg' }, caption: `*Hai Kak ${m.pushName}*\n\nDonasinya disini kack!\nDANA: 08116646665\nGOPAY: 08116646665\nOVO: 08116646665\n\n*Makasih kak*` }, { quoted: m })
            }
            break
            case 'sc': {
                m.reply('https://wa.me/6285822347348')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    naze.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    naze.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    naze.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    naze.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    naze.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    naze.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    naze.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
			case 'suitbot':
  var but = [{buttonId: `sbatu`, buttonText: { displayText: "Batu ✊" }, type: 1 }, {buttonId: `sgunting`, buttonText: { displayText: "Gunting ✌️" }, type: 1 }, {buttonId: `skertas`, buttonText: { displayText: "Kertas ✋" }, type: 1 }]
  var sutit = `*[ GAME SUIT ]*\n\nNOTE : *KAMU MEMILIKI 3 BUTTON DAN 3 KESEMPATAN UNTUK MEMILIH ANTARA BATU GUNTING KERTAS*\n*JIKA KAMU MEMENANGKAN 3 KESEMPATAN PERMAINAN BATU GUNTING KERTAS*\n*KAMU MENANG!!*`
naze.sendMessage(m.chat, { text: sutit, buttons: but, footer: "Pilih Button Di Bawah\n\n- _Jika Kamu Pakai WhatsApp Mod Langsung Saja Ketik #sgunting, #sbatu, #skertas_", templateButtons: but }, {quoted: m})
break
case 'sbatu':
  const batu = [`Aku Memilih *Batu*\nKamu Memilih *Batu*\n\n!! KITA SERI !!`,`Aku Memilih *Gunting*\nKamu Memilih *Batu*\n\n!! KAMU MENANG:( !!`,`Aku Memilih *Kertas*\nKamu Memilih *Batu*\n\n!! AKU MENANG !!`]
					const batuh = batu[Math.floor(Math.random() * batu.length)]
					var batuh2 = `*[ GAME SUIT ]*\n\n${batuh}`
					naze.sendMessage(m.chat, { text: batuh2 }, { quoted: m })
break
case 'sgunting':
  const gunting = [`Aku Memilih *Batu*\nKamu Memilih *Gunting*\n\n!! AKU MENANG !!`,`Aku Memilih *Gunting*\nKamu Memilih *Gunting*\n\n!! KITA SERI !!`,`Aku Memilih *Kertas*\nKamu Memilih *Gunting*\n\n!! KAMU MENANG :( !!`]
					const guntingh = gunting[Math.floor(Math.random() * gunting.length)]
					var guntingh2 = `*[ GAME SUIT ]*\n\n${guntingh}`
					naze.sendMessage(m.chat, { text: guntingh2 }, { quoted: m})

break
case 'skertas':

  const kertas = [`Aku Memilih *Batu*\nKamu Memilih *Kertas*\n\n!! KAMU MENANG :( !!`,`Aku Memilih *Gunting*\nKamu Memilih *Kertas*\n\n!! KAMU KALAH !!`,`Aku Memilih *Kertas*\nKamu Memilih *Kertas*\n\n!! KITA SERI !!`]
					const kertash = kertas[Math.floor(Math.random() * kertas.length)]
					var kertash2 = `*[ GAME SUIT ]*\n\n${kertash}`
					naze.sendMessage(m.chat, { text: kertash2 }, { quoted: m })

break
case 'slot':	
 const pepekk = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //Arasya
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🥑 : 🥑 : 🥑 Win👑',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🌶️ : 🌶️ : 🌶️ Win👑',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
  const kalah = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //Arasya
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        ]
 const kalah2 = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //Arasya
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        ]
        const selot = pepekk[Math.floor(Math.random() * pepekk.length)]
        const kalahnya = kalah[Math.floor(Math.random() * kalah.length)]
        const kalahnya2 = kalah2[Math.floor(Math.random() * kalah2.length)]
        var slotnya = `*[ 🎰 GAME SLOT 🎰 ]*

${kalahnya}
${selot}
${kalahnya2}

Note : Jika Kamu Mendapatkan Item Yang Sama, Kamu Menang!!!
Contoh : 🔔 : 🔔 : 🔔`
        var but = [{buttonId: `${command}`, buttonText: { displayText: "Kembali Slot" }, type: 1 }]
naze.sendMessage(m.chat, { text: slotnya, buttons: but, footer: "© Slot By ShinySebastian", templateButtons: but }, {quoted: m})
        break	
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await naze.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                 let menuss = [
                {
                title: "Tebak-tebakan Menu",
                rows: [
                {title: "Tebak Lagu", rowId: `tebak lagu`, description: `Tebak judul lagu dari musik`},
                {title: "Tebak Gambar", rowId: `tebak gambar`, description: `Tebak kalimat dari setiap gambar`},
                {title: "Tebak Kata", rowId: `tebak kata`, description: `Tebak Kata dari soal yg diberikan`},
                {title: "Tebak Kalimat", rowId: `tebak kalimat`, description: `Tebak kalimat/bagian yg rumpang`},
                {title: "Tebak Lirik", rowId: `tebak lirik`, description: `Melengkapi bagian rumpang dari lirik yg diberikan`},
				{title: "Cak Lontong", rowId: `tebak lontong`, description: `Teka-teki advanced yg hanya bisa dijawab out of the box`},
				{title: "Asah Otak", rowId: `tebak asahotak`, description: `Tebak-tebakan seputar Ilmu pengetahuan umum`},
				{title: "Tebak Bendera", rowId: `tebak bendera`, description: `Tebak nama negara dari sebuah bendera`},
				{title: "Tebak Kabupaten", rowId: `tebak kabupaten`, description: `Tes wawasan kenegaraan yuk!`},
				{title: "Tebak Provinsi", rowId: `tebak provinsi`, description: `Tes wawasan kenegaraan yuk!`},
				{title: "Teka-teki", rowId: `tebak teki`, description: `Tebak-tebakan penghibur kita semua :D`},
                ]
                },
				]
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await naze.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    naze.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    naze.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, naze.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    naze.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    naze.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, naze.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
					} else if (args[0] === 'kabupaten') {
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://api.lolhuman.xyz/api/tebak/kabupaten?apikey=${apikey}')
             
                    naze.sendImage(m.chat, anu.result.img, `Silahkan Jawab Soal Di Atas Ini\nWaktu : 60s`, m).then(() => {
                    tebakkabupaten[m.sender.split('@')[0]] = anu.result.title.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + anu.result.title)
                    naze.sendButtonText(m.chat, [{ buttonId: 'tebak kabupaten', buttonText: { displayText: 'Tebak Kabupaten' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkabupaten[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, naze.user.name, m)
                    delete tebakkabupaten[m.sender.split('@')[0]]
                    }
					} else if (args[0] === 'provinsi') {
                    if (tebakprovinsi.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://api.lolhuman.xyz/api/tebak/provinsi?apikey=${apikey}')
             
                    naze.sendImage(m.chat, anu.result.img, `Silahkan Jawab Soal Di Atas Ini\nWaktu : 60s`, m).then(() => {
                    tebakprovinsi[m.sender.split('@')[0]] = anu.result.title.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakprovinsi.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + anu.result.title)
                    naze.sendButtonText(m.chat, [{ buttonId: 'tebak provinsi', buttonText: { displayText: 'Tebak Provinsi' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakprovinsi[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, naze.user.name, m)
                    delete tebakprovinsi[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    naze.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    naze.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, naze.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    naze.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    naze.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, naze.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    naze.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    naze.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, naze.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    naze.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    naze.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, naze.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'asahotak') {
					if (asahotak.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anuw = await fetchJson('https://zenzapis.xyz/entertainment/asahotak?apikey=${apikey}')
                    let result = anuw.result
                    naze.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    asahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (asahotak.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                   naze.sendButtonText(m.chat, [{ buttonId: 'tebak asahotak', buttonText: { displayText: 'Asah Otak' }, type: 1 }], `Waktu Habis\nJawaban:  ${asahotak[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, naze.user.name, m)
                    delete asahotak[m.sender.split('@')[0]]
					}
            } else if (args[0] === 'bendera') {
				if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anug = await fetchJson('https://api.lolhuman.xyz/api/tebak/bendera?apikey=${apikey}')
                    let result = anug.result
                    naze.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.flag}\nWaktu : 60s`, m).then(() => {
                    tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.name)
                   naze.sendButtonText(m.chat, [{ buttonId: 'tebak bendera', buttonText: { displayText: 'Tebak Bendera' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, naze.user.name, m)
                    
                    delete tebakbendera[m.sender.split('@')[0]]
					}
			} else if (args[0] === 'teki') {
				if (tekateki.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anuf = await fetchJson('https://zenzapis.xyz/entertainment/tekateki?apikey=${apikey}')
                    let result = anuf.result
                    naze.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tekateki.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                   naze.sendButtonText(m.chat, [{ buttonId: 'tebak teki', buttonText: { displayText: 'Teka Teki' }, type: 1 }], `Waktu Habis\nJawaban:  ${tekateki[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, naze.user.name, m)
                    
                    delete tekateki[m.sender.split('@')[0]]
					}
			}
			naze.sendListMsg(m.chat, `*Silahkan Pilih Menu Dibawah Ini*`, naze.user.name, `TEBAK MENU`, `Click Here`, menuss, m)
			}
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                naze.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, buttons, jawab, naze.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannyaa🗿

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, buttons, jawab, naze.user.name, m, {mentions: menst})
            }
            break
            case 'gbtku': {
            if (!isPremium) throw mess.premime
			if (!text) throw `Example : ${prefix + command} hai|halo`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `` }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m)
            }
            break
            
           
//Pembatas
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                naze.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await naze.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await naze.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await naze.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(`*Peserta berhasil dikeluarkan dari group*`)).catch((err) => m.reply(`*Peserta tidak dapat dikeluarkan dari group*`))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await naze.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await naze.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await naze.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await naze.updateBlockStatus(users, 'block').then((res) => m.reply(`*Peserta berhasil diblock dan tidak dapat mengirim chat ke bot*`).catch((err) => m.reply(`*Peserta tidak dapat diblock*`)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await naze.updateBlockStatus(users, 'unblock').then((res) => m.reply(`*Peserta berhasil diunblock dan kembali dapat mengirim chat ke bot*`).catch((err) => m.reply(`*Peserta tidak bisa diunblock*`)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await naze.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await naze.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                await naze.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                await naze.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                naze.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            naze.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: naze.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            naze.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿??𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: naze.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            naze.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: naze.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            naze.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${naze.user.id}
`
naze.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await naze.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Sukses Menutup Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await naze.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Sukses Membuka Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, buttons, `Mode Group`, naze.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await naze.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Sukses Membuka Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await naze.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Sukses Menutup Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, buttons, `Mode Edit Info`, naze.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`*Sudah Aktif kak Sebelumnya*`)
                db.data.chats[m.chat].antilink = true
                m.reply(`*Antilink Sekarang Aktif !*`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`*Sudah Tidak Aktif Sebelumnya*`)
                db.data.chats[m.chat].antilink = false
                m.reply(`*Antilink Sekarang Tidak Aktif !*`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, buttons, `Mode Antilink`, naze.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${naze.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${naze.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, buttons, `Mute Bot`, naze.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await naze.groupInviteCode(m.chat)
                naze.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n👾Link Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === '1') {
                    await naze.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply('Success turn on ephemeral for 1 day')).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await naze.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply('Success turn on ephemeral for 7 days')).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await naze.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply('Success turn on ephemeral for 90 days')).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await naze.groupToggleEphemeral(m.chat, 0).then((res) => m.reply('Success turn off ephemeral')).catch((err) => m.reply('Error!'))
                } else {
                let sections = [
                {
                title: "CHANGE EPHEMERAL GROUP",
                rows: [
                {title: "Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
                {title: "Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
                {title: "Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
                {title: "Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                naze.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, naze.user.name, `Hello Admin ${groupMetadata.subject}`, `Click Here`, sections, m)
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await naze.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let txt = `「 *Broadcast Group* 」\n\n${text}`
                    let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, txt, nyoutube, m)
		}}
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(3000)
                      let txt = `「 *Broadcast Naze Dev* 」\n\n${text}`
                      let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, txt, nyoutube, m)
		}}
            break
			 case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                naze.sendTextWithMentions(m.chat, teks, m)
            }
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await naze.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 naze.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await naze.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 naze.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    naze.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `*Balas Video/Image Dengan Caption* ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await naze.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maksimal 10 detik!*')
                let media = await quoted.download()
                let encmedia = await naze.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*Kirim Gambar/Video Dengan Caption* ${prefix + command}\nDurasi *Video 1-9 Detik*`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
		case 'translate':
			if (args.length == 0) throw (`Example: ${prefix + command} en Tahu Bacem\n\n_Bahasa yang didukung dapat dilihat di: https://sites.google.com/site/opti365/translate_codes_`)
                    get_args = args.join(" ").split("|")
				negara_asal = get_args[0]
				kode_negara = get_args[1]
                   
                    ini_txt = get_args[2]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/${negara_asal}/${kode_negara}?apikey=${apikey}&text=${ini_txt}`)
                   
                    init_txt = `From : ${get_result.result.from}\n`
                    init_txt += `To : ${kode_negara}\n`
                    init_txt += `Original : ${ini_txt}\n`
                    init_txt += `Translated : ${get_result.result.translated}\n`
					init_txt += `Pronunciation: ${get_result.result.pronunciation}\n`
                    m.reply(init_txt)
                    break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await naze.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await naze.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) throw `Example : ${prefix + command} text`
           await naze.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'naze', 'morou', m, {asSticker: true})

         }
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await naze.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
	        case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    naze.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await naze.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            naze.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            naze.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${naze.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            naze.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await naze.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await naze.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    naze.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
		case 'countdate':
			if (args.length == 0) throw (`Example: ${prefix + command} Hari|Bulan|Tahun`)
			get_args = args.join(" ").split("|")
                    hari = get_args[0]
                    bulan = get_args[1]
					tahun = get_args[2]
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/countdown/${hari}/${bulan}/${tahun}?apikey=${apikey}`)
			get_result = get_result.result
			m.reply(get_result)
			break
		case 'kodetelepon':
			if (args.length == 0) throw(`Example: ${prefix + command} 62`)
			kueri = args[0]
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/callingcode/${kueri}?apikey=${apikey}`)
			get_result = get_result.result
			ini_txt = `⭔ Nama: ${get_result.name}\n`
			ini_txt += `⭔ Domain: ${get_result.topLevelDomain}\n`
			ini_txt += `⭔ Kode Telepon: ${get_result.callingCodes}\n`
			ini_txt += `⭔ Ibu Kota: ${get_result.capital}\n`
			ini_txt += `⭔ Penyebutan: ${get_result.altSpellings}\n`
			ini_txt += `⭔ Region: ${get_result.region}\n`
			m.reply(ini_txt)
					break
		case 'ssweb':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.google.com`)
                    kueri = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${apikey}&url=${kueri}`)
                  naze.sendImage(m.chat, ini_buffer, 'Screenshot Website', m)
				  case 'hentaiimage': case 'hentai':
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${apikey}`)
                  naze.sendImage(m.chat, ini_buffer, 'Oops...', m)
                   					break
                   					
                    break						
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                naze.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
			case 'zippyshare': case 'zippydl':
			if (args.length == 0) throw (`Usage: ${prefix + command} link`)
            m.reply(mess.wait) 
			kueri = args[0]
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${apikey}&url=${kueri}`)
			get_result = get_result.result
			ini_txt = `[ *ZIPPYSHARE ALTERNATIVE DOWNLOAD* ]\n\n`
			ini_txt += `⭔ Name File : ${get_result.name_file}\n`
			ini_txt += `⭔ Size : ${get_result.size}\n`
			ini_txt += `⭔ Date Upload : ${get_result.date_upload}\n`
			ini_txt += `⭔ Download URL : ${get_result.download_url}\n`
			m.reply(ini_txt)
			break
			case 'spotifysearch':
			 if (args.length == 0) throw (`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "[ *SPOTIFY SEARCH* ]\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    m.reply(ini_txt)
                    break
					case 'spotifydw': case 'spotify':
			if (args.length == 0) throw (`Usage: ${prefix + command} link`)
                m.reply(mess.wait) 
			kueri = args[0]
                let anuaa = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${apikey}&url=${kueri}`)
                let msgsaa = await naze.sendImage(m.chat, anuaa.result.thumbnail, `⭔ Title : ${anuaa.result.title}\n⭔ Singer : ${anuaa.result.artists}\n⭔ Duration : ${anuaa.result.duration}\n⭔ Popularity : ${anuaa.result.popularity}\n⭔ URL : ${anuaa.result.external_urls.spotify}`, m)
                naze.sendMessage(m.chat, { audio: { url: anuaa.result.link }, mimetype: 'audio/mp4', fileName: anuaa.result.title+'.mp3' }, { quoted: m })
				break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        anu = await fetchJson(`https://api-reysekha.herokuapp.com/api/download/googleimg?query=${text}&apikey=APIKEY`)
        n = anu.result
        images = n[Math.floor(Math.random() * n.length)]
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: naze.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                naze.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
        break
		case 'jaraktempuh':
			if (args.length == 0) throw(`Usage: ${prefix + command} kota1|kota2`)
			get_args = args.join(" ").split("|")
                    kota1 = get_args[0]
                    kota2 = get_args[1]
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${apikey}&kota1=${kota1}&kota2=${kota2}`)
			get_result = get_result.result
			ini_txt = `Dari kota: ${get_result.from.name}\n`
			ini_txt += `Latitude: ${get_result.from.latitude}\n`
			ini_txt += `Longitude: ${get_result.from.longitude}\n\n`
			ini_txt += `Ke kota: ${get_result.to.name}\n`
			ini_txt += `Latitude: ${get_result.to.latitude}\n`
			ini_txt += `Longitude: ${get_result.to.longitude}\n\n`
			ini_txt += `Jarak tempuh: ${get_result.jarak}\n`
			ini_txt += `*Waktu:*\n`
			ini_txt += `Kereta Api: ${get_result.kereta_api}\n`
			ini_txt += `Pesawat: ${get_result.pesawat}\n`
			ini_txt += `Mobil: ${get_result.mobil}\n`
			ini_txt += `Motor: ${get_result.motor}\n`
			ini_txt += `Jalan Kaki: ${get_result.jalan_kaki}\n`
			naze.sendText(m.chat, ini_txt)
					break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: naze.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                naze.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                naze.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                naze.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                naze.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                naze.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                naze.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                naze.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                naze.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
			case 'menfes': case 'menfess': {
		        if (m.isGroup) throw ('Fitur tidak dapat digunakan di grup!')
            	if (!text) throw `Example : ${prefix + command} 6282xxxxx|nama samaran|pesan`
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
               let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `Kamu punya surat nii!`,jpegThumbnail: thumb}}}
               let mq1 = m1 + '@s.whatsapp.net'
               let kawk = ('Menfess by GabutBot V3.0')
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
               let pjtxt = `Pesan Dari : ${m2} \nUntuk : @${mq1.split('@')[0]}\n\nPesan: ${m3}`
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '❤ Like This Menfess' }, type: 1 }]
            await naze.sendButtonText(m1 + '@s.whatsapp.net', buttons, pjtxt, kawk, m, {mentions: ments, quoted: kafloc})
            let akhji = `Pesan Telah Terkirim Ke @${mq1.split('@')[0]}`
            await naze.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments})
            }
            break
			case 'hehehe': {
                reactionMessage = {
                    react: {
                        text: '❤',
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                naze.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'waifu': {
            	m.reply(mess.wait)
                anu = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
                buffer = await getBuffer(anu.url)
                let buttons = [{buttonId: `waifu`, buttonText: {displayText: 'Next Image'}, type: 1},{buttonId: `simplemenu`, buttonText: {displayText: '⬅️Back'}, type: 1}]
                let buttonMessage = {
                    image: buffer,
                    caption: `Random Waifu`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                naze.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                naze.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                naze.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                naze.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                naze.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'gcsearch': {
                if (!text) throw 'Masukkan Query Title'
                anu = await fetchJson(`https://botcahx-rest-api.herokuapp.com/api/search/linkgroupwa?text=${text}`)
                n = anu.result
                result = n[Math.floor(Math.random() * n.length)]
                let jwbn = `*Nama : ${result.nama}\n*Link : ${result.link}*`
		let buttons = [{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, jwbn, nyoutube, m)
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                naze.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                naze.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(`https://zenzapis.xyz/randomtext/${command}?apikey=${apikey}`)
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                naze.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                naze.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                naze.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                naze.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6285822347348`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example❗:\n${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika,1,2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka,7,7,2005,2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7,7,2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7,7,2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12,1,2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12,1,2022,28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 2009 3 24`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
			case 'cekaku':		
const ganteng = ['Cakep ✔️','Jelek Anjrit ❌']
  const sifat = ['Pembohong','Galak','Suka Bantu Orang','Baik','Jahat:(','Bobrok','Suka BadMood','Setia','Tulus','Beriman','Penyayang Binatang','Baperan']
  const suka = ['Makan','Tidur','Main Game','Sesama Jenis','Binatang',`Seseorang Yang ${pushname} Sukai`,'Belajar','Ibadah','Diri Sendiri']
  const nomernyah = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
  const keberanian = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
  const kepinteran = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const ganz = ganteng[Math.floor(Math.random() * ganteng.length)]
					const sipat = sifat[Math.floor(Math.random() * sifat.length)]
					const numb = nomernyah[Math.floor(Math.random() * nomernyah.length)]
					const gai = suka[Math.floor(Math.random() * suka.length)]
					const berani = keberanian[Math.floor(Math.random() * keberanian.length)]
					const pinter = kepinteran[Math.floor(Math.random() * kepinteran.length)]
  var cek = `*[ CEK PRIBADI KAMU ]*
 
Nama : ${pushname}
Sifat : ${sipat}
Keberanian : ${berani}%
Ketakutan : ${numb}%
Cakep : ${ganz}
Cek Pintar : ${pinter}%
Menyukai : ${gai}
  `

					 naze.profilePictureUrl(m.chat, 'image').then( res => naze.sendMessage(m.chat, {caption: cek, image: { url: res }}, {quoted: m})).catch(() => naze.sendMessage(m.chat, {caption: cek, image: {url: `https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg`}}, {quoted: m}))
				    break
					case 'bisakah': case 'bisagak': 	
					if (args.length == 0) throw (`Usage: ${prefix + command} saya ganteng`)
					kueri = args.join(" ")				
				const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!','Keknya kamu bisa','Gak mungkin lah cuk🗿']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
naze.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })
break	
case 'apakah':
if (!q) throw(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul','Pastilah','Pasti bisa kack!']
					const kah = apa[Math.floor(Math.random() * apa.length)]
naze.sendMessage(m.chat, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })
					break	
case 'gimana': case 'bagaimana': case 'how':
if (!q) throw(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
naze.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })
					break				
case 'rate':
if (!q) throw(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
					const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
naze.sendMessage(m.chat, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })
					break
					case 'kapan': case 'kapankah':
if (!q) throw(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
naze.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
					break		
case 'siapa': case 'siapakah':
if (!q) throw(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} beban?`)
					const siapa = ['Brigette','Keiko','Setan','Floren','Chimon','Josal','Gaby','Yoan','Naya','bapakmu','Jeremy','Natan','Setan','Dajjal','Shine','Tuhan','Jokowi','Ibumu','Nicho','Ezelio','Raja Inggris','Malaikat maut','Eline','Ga ada','Panji','Bot','Nenekmu','Prabowo','Megawatzy','Malaikat surga','Kim Jong Un','Putin']
					const gatau = siapa[Math.floor(Math.random() * siapa.length)]
naze.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : *${gatau}*` }, { quoted: m })
					break	
case 'sifat': case 'ceksifat':
if (!q) throw(`Penggunaan ${command} Nama\n\nContoh : ${command} Eline?`)
					const sifaat = ['Baik','penyayang','jahat','tidak setia','hebat','pintar','setia','buruk','bijaksana','bijak','cantik','menggemaskan','jelek','dingin','keren','bersih','serakah','rakus','ramah','dermawan','tinggi hati','sombong','rendah hati','penyabar','pemalas','nakal','rajin','imut','ceroboh','mudah marah','sopan','baik hati']
					const elinee = sifaat[Math.floor(Math.random() * sifaat.length)]
naze.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : *${elinee}*` }, { quoted: m })
					break						
case 'dimana': case 'kemana':
if (!q) throw (`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} saya sekarang?`)
					const dimanas = ['Neraka','Kuburan','Gereja','Got','Tempat tidur','Istana presiden','Surga','Rumah gaby','Rumah jeremy','Laut','peti mati','Jepang','Kantor polisi','Rumah mu','Rumah zio','Kalkud','Mulut mu','Hati mu','Rumah eline']
					const kemanas = dimanas[Math.floor(Math.random() * dimanas.length)]
naze.sendMessage(m.chat, { text: `Pertanyaan : ${q}\nJawaban : Di *${kemanas}*` }, { quoted: m })
					break
					
			case 'bebangrup': 
			if (!m.isGroup) throw mess.group
					let membear = participants.map(u => u.id)
					let oranag = membear[Math.floor(Math.random() * membear.length)]
					let teks = `Nih beban Grup @${oranag.split('@')[0]}`
					let meanst = [oranag]
            let buttaons = [
                        { buttonId: 'bebangrup', buttonText: { displayText: 'Beban' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, buttaons, teks, naze.user.name, m, {mentions: meanst})
            break
			case 'babigrup':
			if (!m.isGroup) throw mess.group
					let memberr = participants.map(u => u.id)
					let orag = memberr[Math.floor(Math.random() * memberr.length)]
					let ters = `Nih babi di Grup @${orag.split('@')[0]}, jangan baper yak:v`
					let meansrt = [orag]
            let buttns = [
                        { buttonId: 'babigrup', buttonText: { displayText: 'Babi' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, buttns, ters, naze.user.name, m, {mentions: meansrt})
            break
			case 'kerengrup':
			if (!m.isGroup) throw mess.group
					let krn = participants.map(u => u.id)
					let oranng = krn[Math.floor(Math.random() * krn.length)]
					let texx = `Wihh si keren kita nih 😎 @${oranng.split('@')[0]}`
					let mesrt = [oranng]
            let butons = [
                        { buttonId: 'kerengrup', buttonText: { displayText: 'Keren' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, butons, texx, naze.user.name, m, {mentions: mesrt})
            break
			case 'cantikgrup':
			if (!m.isGroup) throw mess.group
					let cantik1 = participants.map(u => u.id)
					let mantap1 = cantik1[Math.floor(Math.random() * cantik1.length)]
					let vio1 = `Wihh si paling cute dan cantik ☺ @${mantap1.split('@')[0]}`
					let men1 = [mantap1]
            let butons1 = [
                        { buttonId: 'cantikgrup', buttonText: { displayText: 'Cantik' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, butons1, vio1, naze.user.name, m, {mentions: men1})
            break
			case 'gantenggrup':
			if (!m.isGroup) throw mess.group
					let gtg1 = participants.map(u => u.id)
					let mantap2 = gtg1[Math.floor(Math.random() * gtg1.length)]
					let vio2 = `Anjayyy sungkem si paling ganteng😎😆 @${mantap2.split('@')[0]}`
					let men2 = [mantap2]
            let butons2 = [
                        { buttonId: 'gantenggrup', buttonText: { displayText: 'Ganteng' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, butons2, vio2, naze.user.name, m, {mentions: men2})
            break
			case 'pintargrup':
			if (!m.isGroup) throw mess.group
					let pintaar = participants.map(u => u.id)
					let mantap3 = pintaar[Math.floor(Math.random() * pintaar.length)]
					let vio3 = `Ayo belajar biar pinter kek @${mantap3.split('@')[0]}`
					let men3 = [mantap3]
            let butons3 = [
                        { buttonId: 'pintargrup', buttonText: { displayText: 'Pintar' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, butons3, vio3, naze.user.name, m, {mentions: men3})
            break
			case 'wibugrup':
			if (!m.isGroup) throw mess.group
					let wibu = participants.map(u => u.id)
					let mantap4 = wibu[Math.floor(Math.random() * wibu.length)]
					let vio4 = `Anjayy si pemuja anime @${mantap4.split('@')[0]}`
					let men4 = [mantap4]
            let butons4 = [
                        { buttonId: 'wibugrup', buttonText: { displayText: 'WIBU' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, butons4, vio4, naze.user.name, m, {mentions: men4})
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    naze.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://botcahx-rest-api.herokuapp.com/api/dowloader/tikok?url=${text}`)
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: '📖List Menu'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.video },
                    caption: `Download From ${text}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 5
                }
                naze.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
           /**case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://botcahx-rest-api.herokuapp.com/api/dowloader/tikok?url=${text}`)
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.video_original },
                    caption: `Download From ${text}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 5
                }
                naze.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break**/
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://botcahx-rest-api.herokuapp.com/api/dowloader/tikok?url=${text}`)
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: '📖List Menu'}, type: 1},
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await naze.sendMessage(m.chat, buttonMessage, { quoted: m })
                naze.sendMessage(m.chat, { audio: { url: anu.result.video }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) naze.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    naze.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await naze.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                naze.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await naze.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                naze.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 5
                }
                naze.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await naze.sendMessage(m.chat, buttonMessage, { quoted: m })
                naze.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                naze.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                naze.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: naze.user.name,
			buttons,
			headerType: 4
		    }
		    naze.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        naze.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		naze.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		naze.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		/**case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		naze.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		naze.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		naze.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		naze.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break**/
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		naze.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await naze.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                naze.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                naze.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                naze.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
		case 'mediafire':
				if (args.length == 0) throw (`Usage: ${prefix + command} link`)
                m.reply(mess.wait) 
			kueri = args[0]
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/mediafire?apikey=${apikey}&url=${kueri}`)
			get_result = get_result.result
			ini_txt = `[ *MEDIAFIRE ALTERNATIVE DOWNLOAD* ]\n\n`
			ini_txt += `⭔ Name File : ${get_result.filename}\n`
			ini_txt += `⭔ Type : ${get_result.filetype}\n`
			ini_txt += `⭔ Size : ${get_result.filesize}\n`
			ini_txt += `⭔ Date Upload : ${get_result.uploaded}\n`
			ini_txt += `⭔ Download URL : ${get_result.link}\n`
			m.reply(ini_txt)
			break
			case 'ktpmaker':
			  if (args.length == 0) throw (`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${apikey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    naze.sendImage(m.chat, ini_buffer, 'KTPnya kack', m)
                    break
					case 'bucinsertifikat':
					case 'sertifikatbucin':
					case 'bucincert':
					if (args.length == 0) throw (`Example: ${prefix + command} Justimun Kentod`)
                   kueri = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/bucinserti?apikey=${apikey}&name=${kueri}`)
                    naze.sendImage(m.chat, ini_buffer, 'Sertifikatnya kack', m)
                    break
					case 'tololsert':
					case 'tololcert':
					case 'tololsertifikat':
					if (args.length == 0) throw (`Example: ${prefix + command} Justimun Kentod`)
                   kueri = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/toloserti?apikey=${apikey}&name=${kueri}`)
                    naze.sendImage(m.chat, ini_buffer, 'Sertifikatnya kack', m)
                    break
					case 'pacarsertifikat':
				case 'pacarcert':

	
                    if (args.length == 0) throw (`Usage: ${prefix + command} nama1|nama2`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
					luxiang = `Selamat yaa ${nik} ❤️ ${prov}`
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pacarserti?apikey=${apikey}&name1=${nik}&name2=${prov}`)
                    naze.sendImage(m.chat, ini_buffer, luxiang, m)
                    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                naze.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await naze.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, naze.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await naze.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
			break
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, naze.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await naze.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, naze.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await naze.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, naze.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, naze.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await naze.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await naze.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, naze.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await naze.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, naze.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, naze.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                naze.public = true
                m.reply('*Sukse Change To Public Usage*')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                naze.public = false
                m.reply('*Sukses Change To Self Usage*')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
			case 'akinator': 
                    if (akinator.hasOwnProperty(m.sender.split('@')[0])) throw ("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=${apikey}`)
                    let { server, frontaddr, session, signature, question, step } = get_result.result
                    const data = {}
                    data["server"] = server
                    data["frontaddr"] = frontaddr
                    data["session"] = session
                    data["signature"] = signature
                    data["question"] = question
                    data["step"] = step
                    imi_txt = `${question}\n\n`
                    imi_txt += "0 - Ya\n"
                    imi_txt += "1 - Tidak\n"
                    imi_txt += "2 - Saya Tidak Tau\n"
                    imi_txt += "3 - Mungkin\n"
                    imi_txt += "4 - Mungkin Tidak"
                    naze.sendText(m.chat, imi_txt, m).then(() => {
                        akinator[m.sender.split('@')[0]] = data
                        fs.writeFileSync("./src/akinator.json", JSON.stringify(akinator))
                    })
                    break
                case 'cancelakinator':
                    if (!akinator.hasOwnProperty(m.sender.split('@')[0])) throw ("Anda tidak memiliki akinator sebelumnya")
                    delete akinator[m.sender.split('@')[0]]
                    fs.writeFileSync("./src/akinator.json", JSON.stringify(akinator))
                    m.reply("Success mengcancel akinator sebelumnya")
                    break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                naze.sendContact(m.chat, global.owner, m)
            }
            break
            case 'playstore': {
            if (!text) throw `Example : ${prefix + command} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `⭔ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `⭔ Name : ${i.name}\n`
            teks += `⭔ Link : ${i.link}\n`
            teks += `⭔ Developer : ${i.developer}\n`
            teks += `⭔ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            m.reply(teks)
            }
            break
            case 'gsmarena': {
            if (!text) throw `Example : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `⭔ Title: ${judul}
⭔ Realease: ${rilis}
⭔ Size: ${ukuran}
⭔ Type: ${type}
⭔ Storage: ${storage}
⭔ Display: ${display}
⭔ Inchi: ${inchi}
⭔ Pixel: ${pixel}
⭔ Video Pixel: ${videoPixel}
⭔ Ram: ${ram}
⭔ Chipset: ${chipset}
⭔ Battery: ${batrai}
⭔ Battery Brand: ${merek_batre}
⭔ Detail: ${detail}`
            naze.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
            if (!text) throw `Example: ${prefix + command} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Thumbnail: ${i.thumb}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            naze.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            naze.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!text) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Amino Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Community: ${i.community}\n`
            capt += `⭔ Community Link: ${i.community_link}\n`
            capt += `⭔ Thumbnail: ${i.community_thumb}\n`
            capt += `⭔ Description: ${i.community_desc}\n`
            capt += `⭔ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            naze.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `⭔ Judul: ${judul}\n`
            capt += `⭔ Dibaca: ${dibaca}\n`
            capt += `⭔ Divote: ${divote}\n`
            capt += `⭔ Bab: ${bab}\n`
            capt += `⭔ Waktu: ${waktu}\n`
            capt += `⭔ Url: ${url}\n`
            capt += `⭔ Deskripsi: ${description}`
            naze.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Like: ${i.like}\n`
            capt += `⭔ Creator: ${i.creator}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            m.reply(capt)
            }
            break
            case 'drakor': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Years: ${i.years}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            naze.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
			case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                let buttonas = [
                    {buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMesasage = {
                    image: { url: `http://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}` },
                    caption: `Random image for ${command}`,
                    footer: naze.user.name,
                    buttons: buttonas,
                    headerType: 4
                }
                naze.sendMessage(m.chat, buttonMesasage, { quoted: m })
				
            
			break
			case 'dj': case 'darkjoke':
                let dj1 = [
                    {buttonId: `darkjoke`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let dj2 = {
                    image: { url: `https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${apikey}` },
                    caption: `JANGAN BAPER YAKK`,
                    footer: naze.user.name,
                    buttons: dj1,
                    headerType: 4
                }
                naze.sendMessage(m.chat, dj2, { quoted: m })
				
            
			break
			case 'rm': case 'randommeme':
                let rm1 = [
                    {buttonId: `randommeme`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let rm2 = {
                    image: { url: `https://api.lolhuman.xyz/api/random/meme?apikey=${apikey}` },
                    caption: `TAHAN KETAWA NGAB MWEHEHEHE`,
                    footer: `Random Meme`,
                    buttons: rm1,
                    headerType: 4
                }
                naze.sendMessage(m.chat, rm2, { quoted: m })
				
            
			break
			case 'mindo': case 'memeindo':
                let mi1 = [
                    {buttonId: `memeindo`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let mi2 = {
                    image: { url: `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${apikey}` },
                    caption: `TAHAN KETAWA NGAB MWEHEHEHE`,
                    footer: `Cintailah meme lokal`,
                    buttons: mi1,
                    headerType: 4
                }
                naze.sendMessage(m.chat, mi2, { quoted: m })
				
            
			break
			case 'randommobil': case 'rmobil':
                let rb1 = [
                    {buttonId: `rmobil`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let rb2 = {
                    image: { url: `https://zenzapis.xyz/randomimage/mobil?apikey=${apikey}` },
                    caption: `Random Car`,
                    footer: `Random Car`,
                    buttons: rb1,
                    headerType: 4
                }
                naze.sendMessage(m.chat, rb2, { quoted: m })
			break
			case 'rkucing': case 'randomkucing':
                let rk1 = [
                    {buttonId: `rkucing`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let rk2 = {
                    image: { url: `https://zenzapis.xyz/randomimage/kucing?apikey=${apikey}` },
                    caption: `MEONG 🐱`,
                    footer: `Random Cat`,
                    buttons: rk1,
                    headerType: 4
                }
                naze.sendMessage(m.chat, rk2, { quoted: m })
				
            
			break
			case 'ranjing': case 'randomanjing':
                let ra1 = [
                    {buttonId: `ranjing`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let ra2 = {
                    image: { url: `https://zenzapis.xyz/randomimage/anjing?apikey=${apikey}` },
                    caption: `GUK GUK 🐶`,
                    footer: `Random Dog`,
                    buttons: ra1,
                    headerType: 4
                }
                naze.sendMessage(m.chat, ra2, { quoted: m })
				
            
			break
			case 'randompp': case 'rpp':
                let rp1 = [
                    {buttonId: `randompp`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let rp2 = {
                    image: { url: `https://zenzapis.xyz/randomimage/profil?apikey=${apikey}` },
                    caption: `PP Estetik`,
                    footer: `Random Profile Picture`,
                    buttons: rp1,
                    headerType: 4
                }
                naze.sendMessage(m.chat, rp2, { quoted: m })
				
            
			break
			
			case 'ranime': case 'animer': 
                let rv1 = [
                    {buttonId: `ranime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let rv2 = {
                    image: { url: `https://zenzapis.xyz/randomanime/anime?apikey=${apikey}` },
                    caption: `Kawaii >//<`,
                    footer: `Random Anime`,
                    buttons: rv1,
                    headerType: 4
                }
                naze.sendMessage(m.chat, rv2, { quoted: m })
				
            
			break
			case 'rmotor': case 'randommotor':
                let rt1 = [
                    {buttonId: `randommotor`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let rt2 = {
                    image: { url: `https://zenzapis.xyz/randomimage/motor?apikey=${apikey}` },
                    caption: `Kepengen yaa mwehehe:v`,
                    footer: `Random Motor`,
                    buttons: rt1,
                    headerType: 4
                }
                naze.sendMessage(m.chat, rt2, { quoted: m })
				
            
			break
			
			case 'rboneka': case 'randomboneka':
                let rs1 = [
                    {buttonId: `randomboneka`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let rs2 = {
                    image: { url: `https://zenzapis.xyz/randomimage/boneka?apikey=${apikey}` },
                    caption: `Hayoo tes nyali :D`,
                    footer: `Random Boneka`,
                    buttons: rs1,
                    headerType: 4
                }
                naze.sendMessage(m.chat, rs2, { quoted: m })
				
            
			break
			case 'rblackpink': case 'rbp': case 'randomblackpink':
                let kp1 = [
                    {buttonId: `rbp`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let kp2 = {
                    image: { url: `https://zenzapis.xyz/randomimage/blackpink?apikey=${apikey}` },
                    caption: `Cantik :)`,
                    footer: `Random Blackpink`,
                    buttons: kp1,
                    headerType: 4
                }
                naze.sendMessage(m.chat, kp2, { quoted: m })
				
            
			break
			case '1cak': case 'wancak': case 'onecak':
                let kw1 = [
                    {buttonId: `wancak`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let kw2 = {
                    image: { url: `https://api.lolhuman.xyz/api/onecak?apikey=${apikey}` },
                    caption: `Ngakak awokawokawok:v`,
                    footer: `Cintailah Meme Lokal`,
                    buttons: kw1,
                    headerType: 4
                }
                naze.sendMessage(m.chat, kw2, { quoted: m })
			break
			
			case 'infogempa': case 'bmkggempa':
             get_result = await fetchJson(`https://zenzapis.xyz/information/bmkg/gempa?apikey=${apikey}`)
			get_result = get_result.result
			ini_txt = `⭔ Tanggal: ${get_result.tanggal}\n`
			ini_txt += `⭔ Jam: ${get_result.jam}\n`
			ini_txt += `⭔ Koordinat: ${get_result.coordinates}\n`
			ini_txt += `⭔ Lintang: ${get_result.lintang}\n`
			ini_txt += `⭔ Bujur: ${get_result.bujur}\n`
			ini_txt += `⭔ Kekuatan: ${get_result.magnitude} SR\n`
			ini_txt += `⭔ Kedalaman: ${get_result.kedalaman}\n`
			ini_txt += `⭔ Wilayah: ${get_result.wilayah}\n`
			ini_txt += `⭔ Potensi: ${get_result.potensi}\n`
			ini_txt += `⭔ Wilayah yg dirasakan: ${get_result.dirasakan}\n`
			naze.sendImage(m.chat, get_result.shakemap, ini_txt, m)
			break
            case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                naze.sendListMsg(m.chat, `pilih aja *Rull* Setmenu nya!`, naze.user.name, `*Hello Arull* !`, `Pilih Rull`, sections, m)
                }
            }
            break
            case 'sponsor': {
            if (!m.isGroup) throw mess.group
            let qontak = `6285718971848@s.whatsapp.net`
let dana = `6281911500445@s.whatsapp.net`
let shopeeotp = `6285574670796@s.whatsapp.net`
let shopee = `622150996855@s.whatsapp.net`
let tokopedia = `6281197911081@s.whatsapp.net`
let smartfrend = `628881212888@s.whatsapp.net`
let getcontact = `447990653714@s.whatsapp.net`
let facebook = `447710173736@s.whatsapp.net`
let pasarpolis = `6287700178000@s.whatsapp.net`
let kominfo = `628119224545@s.whatsapp.net`
let alfamart = `628111500959@s.whatsapp.net`
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let jawab = `*Bot by Shine Sebastian* 
□ *Creator* :  @${ownernya.split('@')[0]}\n□ *Pemakai* : @${me.split('@')[0]}\n□ *Powered*  : @${ini_mark.split('@')[0]}\n- :  @${qontak.split('@')[0]}\n- :  @${dana.split('@')[0]}\n- :  @${shopeeotp.split('@')[0]}\n- :  @${shopee.split('@')[0]}\n- :  @${tokopedia.split('@')[0]}\n- :  @${smartfrend.split('@')[0]}\n- :  @${getcontact.split('@')[0]}\n- :  @${facebook.split('@')[0]}\n- :  @${pasarpolis.split('@')[0]}\n- :  @${getcontact.split('@')[0]}\n- :  @${kominfo.split('@')[0]}\n- :  @${alfamart.split('@')[0]}`
            let ments = [ownernya, me, ini_mark, qontak, dana, shopeeotp, shopee, tokopedia, smartfrend, getcontact, facebook, pasarpolis, kominfo, alfamart]
            let buttons = [
                        { buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 }
                    ]
                    await naze.sendButtonText(m.chat, buttons, jawab, naze.user.name, m, {mentions: ments})
            }
            break
 
            case 'menu': case 'list': case 'help': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
            let kukiw = `*${ucapanWaktu}*
╭──❍「 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍 」❍
├ *Nama* : ${pushname}
├ *Number* : ${me.split('@')[0]}
├ *Premium* : ${isPremium ? '✅' : `❌`}
├ *Limit* : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
╰──❍

╭──❍「 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 」❍
├ *Nama Bot* : GabutBot 3.0
├ *Owner* : ${ownernya.split('@')[0]}
├ *Mode* : ${naze.public ? 'Public' : `Self`}
├ *Prefix* :「 MULTI-PREFIX 」
╰──❍

╭──❍「 𝙄𝙉𝘿𝙊𝙉𝙀𝙎𝙄𝘼𝙉 𝙏𝙄𝙈𝙀 」❍
├ *Hari Ini* : ${hariini}
├ *Wib* : ${barat} WIB
├ *Wita* : ${tengah} WITA
├ *Wit* : ${timur} WIT
╰──❍`
                let sections = [
                {
				title : "ALL MENU",
				rows: [
				{title: "All Menu", rowId: `allmenu`, description: `📕All Menu`},
				]
				}, {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Group", rowId: `mgroup`, description: `👥Group Menu`},
                {title: "Webzone", rowId: `mwebzone`, description: `📹Webzone Menu`},
                {title: "Downloader", rowId: `mdownloader`, description: `📥Downloader Menu`},
                {title: "Search", rowId: `msearch`, description: `🔍Search Menu`},
                {title: "Random", rowId: `randomimage`, description: `❔Random Menu`},
                {title: "Text Pro", rowId: `mtextpro`, description: `❇Text Pro Menu`},
                {title: "Photo Oxy", rowId: `mphotooxy`, description: `♻️Photo Oxy Menu`},
                {title: "Ephoto", rowId: `mephoto`, description: `🗳Ephoto Menu`},
                {title: "Fun", rowId: `mfun`, description: `🔫Fun Menu`},
				{title: "Kerang Ajaib", rowId: `mkaj`, description: `🐚Kerang Ajaib Menu`},
                {title: "Primbon", rowId: `mprimbon`, description: `😂Primbon Menu`},
                {title: "Convert", rowId: `mconvert`, description: `🛠Convert Menu`},
                {title: "Main", rowId: `mmain`, description: `💾Main Menu`},
                {title: "Database", rowId: `mdatabase`, description: `📁Database Menu`},
                {title: "Anonymous", rowId: `manonymous`, description: `🎭Anonymous Menu`},
                {title: "Islamic", rowId: `mislamic`, description: `🕌Islamic Menu`},
                {title: "Voice", rowId: `mvoice`, description: `🎶Voice Menu`},
                {title: "Owner", rowId: `mowner`, description: `🎟Owner Menu`}
                ]
                },
                ]
                naze.sendListMsg(m.chat, kukiw, nyoutube, `*Hello Kak ${pushname}*!`, `Pilih Menu`, sections, m)
            }
            break
            case 'mgroup': {
goup = `┌──⭓ *Group Menu*
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}ephemeral [option]
│⭔ ${prefix}setppgc [image]
│⭔ ${prefix}setname [text]
│⭔ ${prefix}setdesc [text]
│⭔ ${prefix}group [option]
│⭔ ${prefix}editinfo [option]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}hidetag [text]
│⭔ ${prefix}tagall [text]
│⭔ ${prefix}antilink [on/off]
│⭔ ${prefix}mute [on/off]
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│⭔ ${prefix}vote [text]
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
│
└───────⭓`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, goup, nyoutube, m)
            }
            break
      case 'mwebzone': {
wbzone = `┌──⭓ *Webzone Menu*
│
│⭔ ${prefix}playstore
│⭔ ${prefix}gsmarena
│⭔ ${prefix}jadwalbioskop
│⭔ ${prefix}nowplayingbioskop
│⭔ ${prefix}aminio
│⭔ ${prefix}wattpad
│⭔ ${prefix}webtoons
│⭔ ${prefix}drakor
│
└───────⭓`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, wbzone, nyoutube, m)
            }
            break
            case 'mdownloader': {
dwnloader = `┌──⭓ *Downloader Menu*
│
│⭔ ${prefix}tiktoknowm [url]
│⭔ ${prefix}tiktokwm [url]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}twitter [url]
│⭔ ${prefix}twittermp3 [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}pinterestdl [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url]
│⭔ ${prefix}getmusic [query]
│⭔ ${prefix}getvideo [query]
│⭔ ${prefix}umma [url]
│⭔ ${prefix}joox [query]
│⭔ ${prefix}soundcloud [url]
│⭔ ${prefix}spotify[url]
│⭔ ${prefix}spotifysearch [query]
│⭔ ${prefix}zippydl[url]
│
└───────⭓`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, dwnloader, nyoutube, m)
            }
            break
            case 'msearch': {
sarch = `┌──⭓ *Search Menu*
│
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}pinterest [query]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikimedia [query]
│⭔ ${prefix}ytsearch [query]
│⭔ ${prefix}ringtone [query]
│⭔ ${prefix}stalk [option] [query]
│
└───────⭓`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, sarch, nyoutube, m)
            }
            break
           
            case 'mtextpro': {
txtpro = `┌──⭓ *Text Pro Menu*
│
│⭔ ${prefix}3dchristmas
│⭔ ${prefix}3ddeepsea
│⭔ ${prefix}americanflag
│⭔ ${prefix}3dscifi
│⭔ ${prefix}3drainbow
│⭔ ${prefix}3dwaterpipe
│⭔ ${prefix}halloweenskeleton
│⭔ ${prefix}sketch
│⭔ ${prefix}bluecircuit
│⭔ ${prefix}space
│⭔ ${prefix}metallic
│⭔ ${prefix}fiction
│⭔ ${prefix}greenhorror
│⭔ ${prefix}transformer
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dcrackedstone
│⭔ ${prefix}3dneonlight
│⭔ ${prefix}impressiveglitch
│⭔ ${prefix}naturalleaves
│⭔ ${prefix}fireworksparkle
│⭔ ${prefix}matrix
│⭔ ${prefix}dropwater
│⭔ ${prefix}harrypotter
│⭔ ${prefix}foggywindow
│⭔ ${prefix}neondevils
│⭔ ${prefix}christmasholiday
│⭔ ${prefix}3dgradient
│⭔ ${prefix}blackpink
│⭔ ${prefix}gluetext
│
└───────⭓`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, txtpro, nyoutube, m)
            }
            break
            case 'mphotooxy': {
potooxy = `┌──⭓ *Photo Oxy Menu*
│
│⭔ ${prefix}shadow
│⭔ ${prefix}romantic
│⭔ ${prefix}smoke
│⭔ ${prefix}burnpapper
│⭔ ${prefix}naruto
│⭔ ${prefix}lovemsg
│⭔ ${prefix}grassmsg
│⭔ ${prefix}lovetext
│⭔ ${prefix}coffecup
│⭔ ${prefix}butterfly
│⭔ ${prefix}harrypotter
│⭔ ${prefix}retrolol
│
└───────⭓`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, potooxy, nyoutube, m)
            }
            break
            case 'mephoto': {
ehoto = `┌──⭓ *Ephoto Menu*
│
│⭔ ${prefix}ffcover
│⭔ ${prefix}crossfire
│⭔ ${prefix}galaxy
│⭔ ${prefix}glass
│⭔ ${prefix}neon
│⭔ ${prefix}beach
│⭔ ${prefix}blackpink
│⭔ ${prefix}igcertificate
│⭔ ${prefix}ytcertificate
│
└───────⭓`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, ehoto, nyoutube, m)
            }
            break
			case 'mkaj': {
				kaj = `┌──⭓ *Kerang Ajaib Menu*
│
│⭔ ${prefix}cekaku
│⭔ ${prefix}bisagak [question]
│⭔ ${prefix}apakah [question]
│⭔ ${prefix}gimana [question]
│⭔ ${prefix}rate [query]
│⭔ ${prefix}kapan [question]
│⭔ ${prefix}siapa [question]
│⭔ ${prefix}ceksifat [query]
│⭔ ${prefix}dimana [question]
│
└───────⭓`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, kaj, nyoutube, m)
            }
            break
           case 'mfun': {
mun = `┌──⭓ *Fun Menu*
│
│⭔ ${prefix}menfess [message]
│⭔ ${prefix}simih
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│⭔ ${prefix}jadian
│⭔ ${prefix}jodohku
│⭔ ${prefix}delttt
│⭔ ${prefix}tictactoe
│⭔ ${prefix}family100
│⭔ ${prefix}tebak [option]
│⭔ ${prefix}math [mode]
│⭔ ${prefix}suitpvp [@tag]
│⭔ ${prefix}suitbot
│⭔ ${prefix}slot
│⭔ ${prefix}akinator
│⭔ ${prefix}cancelakinator
│
└───────⭓`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, mun, nyoutube, m)
            }
            break
            case 'mprimbon': {
pimbon = `┌──⭓ *Primbon Menu*
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│
└───────⭓`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, pimbon, nyoutube, m)
            }
            break
            case 'mconvert': {
cnvert = `┌──⭓ *Convert Menu*
│
│⭔ ${prefix}attp
│⭔ ${prefix}ttp
│⭔ ${prefix}toimage
│⭔ ${prefix}removebg
│⭔ ${prefix}sticker
│⭔ ${prefix}emojimix
│⭔ ${prefix}emojimix2
│⭔ ${prefix}tovideo
│⭔ ${prefix}togif
│⭔ ${prefix}tourl
│⭔ ${prefix}tovn
│⭔ ${prefix}tomp3
│⭔ ${prefix}toaudio
│⭔ ${prefix}ebinary
│⭔ ${prefix}dbinary
│⭔ ${prefix}styletext
│⭔ ${prefix}smeme
│⭔ ${prefix}ktpmaker
│⭔ ${prefix}bucincert
│⭔ ${prefix}pacarcert
│⭔ ${prefix}tololcert
│
└───────⭓`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, cnvert, nyoutube, m)
            }
            break
            case 'mmain': {
min = `┌──⭓ *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete
│⭔ ${prefix}infochat
│⭔ ${prefix}quoted
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│⭔ ${prefix}speedtest
│
└───────⭓`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, min, nyoutube, m)
            }
            break
            case 'mdatabase': {
dtbase = `┌──⭓ *Database Menu*
│
│⭔ ${prefix}setcmd
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
│
└───────⭓`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, dtbase, nyoutube, m)
            }
            break
            case 'manonymous': {
aonymous = `┌──⭓ *Anonymous Menu*
│
│⭔ ${prefix}anonymous
│⭔ ${prefix}start
│⭔ ${prefix}next
│⭔ ${prefix}keluar
│
└───────⭓`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, aonymous, nyoutube, m)
            }
            break
            case 'mislamic': {
islmic = `┌──⭓ *Islamic Menu*
│
│⭔ ${prefix}iqra
│⭔ ${prefix}hadist
│⭔ ${prefix}alquran
│⭔ ${prefix}juzamma
│⭔ ${prefix}tafsirsurah
│
└───────⭓`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, islmic, nyoutube, m)
            }
            break
case 'mvoice': {
vice = `┌──⭓ *Voice Changer*
│
│⭔ ${prefix}bass
│⭔ ${prefix}blown
│⭔ ${prefix}deep
│⭔ ${prefix}earrape
│⭔ ${prefix}fast
│⭔ ${prefix}fat
│⭔ ${prefix}nightcore
│⭔ ${prefix}reverse
│⭔ ${prefix}robot
│⭔ ${prefix}slow
│⭔ ${prefix}tupai
│
└───────⭓`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, vice, nyoutube, m)
            }
            break
            case 'mowner': {
oner = `┌──⭓ *Owner Menu*
│
│⭔ ${prefix}react [emoji]
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup [text]
│⭔ ${prefix}bcall [text]
│⭔ ${prefix}setppbot [image]
│⭔ ${prefix}setexif
│⭔ ${prefix}setmenu [option]
│
└───────⭓`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, oner, nyoutube, m)
            }
            break
            case 'allmenu': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
                anu = `*${ucapanWaktu}* kak @${me.split('@')[0]}\n*Powered*  : @${ini_mark.split('@')[0]}\n*Creator* : @${ownernya.split('@')[0]}
┌──⭓ *Group Menu*
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}ephemeral [option]
│⭔ ${prefix}setppgc [image]
│⭔ ${prefix}setname [text]
│⭔ ${prefix}setdesc [text]
│⭔ ${prefix}group [option]
│⭔ ${prefix}editinfo [option]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}hidetag [text]
│⭔ ${prefix}tagall [text]
│⭔ ${prefix}antilink [on/off]
│⭔ ${prefix}mute [on/off]
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│⭔ ${prefix}vote [text]
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
│
└───────⭓
┌──⭓ *Webzone Menu*
│
│⭔ ${prefix}playstore
│⭔ ${prefix}gsmarena
│⭔ ${prefix}jadwalbioskop
│⭔ ${prefix}nowplayingbioskop
│⭔ ${prefix}aminio
│⭔ ${prefix}wattpad
│⭔ ${prefix}webtoons
│⭔ ${prefix}drakor
│
└───────⭓
┌──⭓ *Downloader Menu*
│
│⭔ ${prefix}tiktoknowm [url]
│⭔ ${prefix}tiktokwm [url]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}twitter [url]
│⭔ ${prefix}twittermp3 [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}pinterestdl [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url]
│⭔ ${prefix}getmusic [query]
│⭔ ${prefix}getvideo [query]
│⭔ ${prefix}umma [url]
│⭔ ${prefix}joox [query]
│⭔ ${prefix}soundcloud [url]
│⭔ ${prefix}spotify[url]
│⭔ ${prefix}spotifysearch [query]
│⭔ ${prefix}zippydl[url]
│
└───────⭓
┌──⭓ *Search Menu*
│
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}pinterest [query]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikimedia [query]
│⭔ ${prefix}ytsearch [query]
│⭔ ${prefix}ringtone [query]
│⭔ ${prefix}translate [query]
│⭔ ${prefix}stalk [option] [query]
│
└───────⭓
┌──⭓ *Random Menu*
│
│⭔ ${prefix}randomimage
│
└───────⭓
┌──⭓ *Text Pro Menu*
│
│⭔ ${prefix}3dchristmas
│⭔ ${prefix}3ddeepsea
│⭔ ${prefix}americanflag
│⭔ ${prefix}3dscifi
│⭔ ${prefix}3drainbow
│⭔ ${prefix}3dwaterpipe
│⭔ ${prefix}halloweenskeleton
│⭔ ${prefix}sketch
│⭔ ${prefix}bluecircuit
│⭔ ${prefix}space
│⭔ ${prefix}metallic
│⭔ ${prefix}fiction
│⭔ ${prefix}greenhorror
│⭔ ${prefix}transformer
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dcrackedstone
│⭔ ${prefix}3dneonlight
│⭔ ${prefix}impressiveglitch
│⭔ ${prefix}naturalleaves
│⭔ ${prefix}fireworksparkle
│⭔ ${prefix}matrix
│⭔ ${prefix}dropwater
│⭔ ${prefix}harrypotter
│⭔ ${prefix}foggywindow
│⭔ ${prefix}neondevils
│⭔ ${prefix}christmasholiday
│⭔ ${prefix}3dgradient
│⭔ ${prefix}blackpink
│⭔ ${prefix}gluetext
│
└───────⭓
┌──⭓ *Photo Oxy Menu*
│
│⭔ ${prefix}shadow
│⭔ ${prefix}romantic
│⭔ ${prefix}smoke
│⭔ ${prefix}burnpapper
│⭔ ${prefix}naruto
│⭔ ${prefix}lovemsg
│⭔ ${prefix}grassmsg
│⭔ ${prefix}lovetext
│⭔ ${prefix}coffecup
│⭔ ${prefix}butterfly
│⭔ ${prefix}harrypotter
│⭔ ${prefix}retrolol
│
└───────⭓
┌──⭓ *Ephoto Menu*
│
│⭔ ${prefix}ffcover
│⭔ ${prefix}crossfire
│⭔ ${prefix}galaxy
│⭔ ${prefix}glass
│⭔ ${prefix}neon
│⭔ ${prefix}beach
│⭔ ${prefix}blackpink
│⭔ ${prefix}igcertificate
│⭔ ${prefix}ytcertificate
│
└───────⭓
┌──⭓ *Fun Menu*
│
│⭔ ${prefix}menfess [message]
│⭔ ${prefix}simih
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│⭔ ${prefix}jadian
│⭔ ${prefix}jodohku
│⭔ ${prefix}delttt
│⭔ ${prefix}tictactoe
│⭔ ${prefix}family100
│⭔ ${prefix}tebak [option]
│⭔ ${prefix}math [mode]
│⭔ ${prefix}suitpvp [@tag]
│⭔ ${prefix}suitbot
│⭔ ${prefix}slot
│⭔ ${prefix}akinator
│⭔ ${prefix}cancelakinator
│
└───────⭓
┌──⭓ *Kerang Ajaib Menu*
│
│⭔ ${prefix}cekaku
│⭔ ${prefix}bisagak [question]
│⭔ ${prefix}apakah [question]
│⭔ ${prefix}gimana [question]
│⭔ ${prefix}rate [query]
│⭔ ${prefix}kapan [question]
│⭔ ${prefix}siapa [question]
│⭔ ${prefix}ceksifat [query]
│⭔ ${prefix}dimana [question]
│
└───────⭓
┌──⭓ *Primbon Menu*
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│
└───────⭓
┌──⭓ *Convert Menu*
│
│⭔ ${prefix}attp
│⭔ ${prefix}ttp
│⭔ ${prefix}toimage
│⭔ ${prefix}removebg
│⭔ ${prefix}sticker
│⭔ ${prefix}emojimix
│⭔ ${prefix}emojimix2
│⭔ ${prefix}tovideo
│⭔ ${prefix}togif
│⭔ ${prefix}tourl
│⭔ ${prefix}tovn
│⭔ ${prefix}tomp3
│⭔ ${prefix}toaudio
│⭔ ${prefix}ebinary
│⭔ ${prefix}dbinary
│⭔ ${prefix}styletext
│⭔ ${prefix}smeme
│⭔ ${prefix}ktpmaker
│⭔ ${prefix}bucincert
│⭔ ${prefix}pacarcert
│⭔ ${prefix}tololcert
│
└───────⭓
┌──⭓ *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete
│⭔ ${prefix}infochat
│⭔ ${prefix}quoted
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│⭔ ${prefix}speedtest
│
└───────⭓
┌──⭓ *Database Menu*
│
│⭔ ${prefix}setcmd
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
│
└───────⭓
┌──⭓ *Anonymous Menu*
│
│⭔ ${prefix}anonymous
│⭔ ${prefix}start
│⭔ ${prefix}next
│⭔ ${prefix}keluar
│
└───────⭓
┌──⭓ *Islamic Menu*
│
│⭔ ${prefix}iqra
│⭔ ${prefix}hadist
│⭔ ${prefix}alquran
│⭔ ${prefix}juzamma
│⭔ ${prefix}tafsirsurah
│
└───────⭓
┌──⭓ *Voice Changer*
│
│⭔ ${prefix}bass
│⭔ ${prefix}blown
│⭔ ${prefix}deep
│⭔ ${prefix}earrape
│⭔ ${prefix}fast
│⭔ ${prefix}fat
│⭔ ${prefix}nightcore
│⭔ ${prefix}reverse
│⭔ ${prefix}robot
│⭔ ${prefix}slow
│⭔ ${prefix}tupai
│
└───────⭓
┌──⭓ *Owner Menu*
│
│⭔ ${prefix}react [emoji]
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup [text]
│⭔ ${prefix}bcall [text]
│⭔ ${prefix}setppbot [image]
│⭔ ${prefix}setexif
│⭔ ${prefix}setmenu [option]
│
└───────⭓
_Donasi Ngab_\n_Jangan Ngarep Free Mulu_`
                let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, anu, nyoutube, m, {mentions: ments})
            }
            break
			case 'randomimage':
			 let sections = [
                {
                title: "Random Image 1",
                rows: [
                {title: "Random Kucing", rowId: `rkucing`, description: `Random Kucing yg Sangat Kawaii`},
                {title: "Random Anjing", rowId: `ranjing`, description: `Random Anjing yg Sangat Kawaii`},
                {title: "Random Mobil", rowId: `rmobil`, description: `Random Mobil yg Sangat Keren`},
                {title: "Random Motor", rowId: `rmotor`, description: `Random Motor yg sangat Keren`},
                {title: "Random PP", rowId: `rpp`, description: `Random PP Estetik`},
				{title: "Random Boneka", rowId: `rboneka`, description: `Random Boneka Seram`},
				{title: "Random Blackpink", rowId: `rblackpink`, description: `Random K-Pop Blackpink`},
                ]
                },{
					title: "Random Image 2",
					rows: [
					{title: "Random Kopi", rowId: `coffe`, description: `Pagi-pagi enaknya ngopi :)`},
					{title: "Random Art", rowId: `art`, description: `Random Seni`},
                {title: "Random Couple", rowId: `couple2`, description: `Random PP Couple untuk Pasangan`},
                {title: "Random BTS", rowId: `bts`, description: `Random K-Pop BTS`},
                {title: "Random EXO", rowId: `exo`, description: `Random K-Pop EXO`},
                {title: "Random Elf", rowId: `elf`, description: `Random Elf`},
                ]
                },{
					title: "Random Anime Image",
					rows: [
				{title: "Random Anime", rowId: `animer`, description: `Random Anime >///<`},
				{title: "Random Waifu", rowId: `waifu`, description: `Random Istri Anime`},
				{title: "Random Husbu", rowId: `husbu`, description: `Random Suami Anime`},
				{title: "Random Waifu", rowId: `waifu`, description: `Random Istri Anime`},
				{title: "Random Neko", rowId: `neko`, description: `Random Kucing tapi Anime`},
				{title: "Random Shinobu", rowId: `shinobu`, description: `Random Shinobu`},
				{title: "Random Waifux", rowId: `waifus`, description: `Random Waifu (NSFW)`},
				{title: "Random Nekox", rowId: `nekos`, description: `Random Neko (NSFW)`},
				{title: "Random Trap", rowId: `trap`, description: `Random Trap Anime (NSFW)`},
				{title: "Random Blowjob", rowId: `blowjob`, description: `Random Blowjob (NSFW)`},
				]
				},{
					title: "Random Meme",
					rows: [
					{title: "Darkjoke", rowId: `dj`, description: `Random Meme Gelap :v`},
				{title: "Random Meme", rowId: `randommeme`, description: `Random Meme Awokawok`},
				{title: "1cak Meme", rowId: `wancak`, description: `Random Meme dari Wancak`},
				{title: "Meme Lokal", rowId: `memeindo`, description: `Random Mim Lokal`},
				]
				},{
					title: "Random Text",
					rows: [
				{title: "Quote Anime", rowId: `quotesanime`, description: `Kata Bijak dari Anime Kalian`},
				{title: "Kata Motivasi", rowId: `motivasi`, description: `Mengubah Hidup Kalian`},
				{title: "Quote Dilan", rowId: `dilanquote`, description: `Quote Bucin dari Dilan`},
				{title: "Quote Bucin", rowId: `bucinquote`, description: `Quote Bucin <3`},
				{title: "Kata Senja", rowId: `katasenja`, description: `Kata dari matahari untuk kalian :)`},
				{title: "Random Puisi", rowId: `puisi`, description: `Puisi yang indah membuat kalian bahagia <3`},
				]
				},
		]
                naze.sendListMsg(m.chat, `*Silahkan Pilih Menu Dibawah Ini*`, nyoutube, `RANDOM IMAGE`, `Click Here`, sections, m)
				break
				case 'tagmenu':
			 let tagg = [
                {
                title: "Tag Menu",
                rows: [
				{title: "Si Paling Beban", rowId: `bebangrup`, description: `Siapa yg beban disini ya??`},
				{title: "Si Babi di Grup", rowId: `babigrup`, description: `Tes kebaperan yuk awokawok:v`},
				{title: "Si Paling Keren😎😎", rowId: `kerengrup`, description: `Anjayyy keren sekali orang ini😎😋`},
				{title: "Si Paling Pinter", rowId: `pintargrup`, description: `Belajarlah dari orang ini`},
				{title: "Si Paling Wibu", rowId: `wibugrup`, description: `Anjay wibu 😌😌`},
				{title: "Si Cantik bak Bidadari", rowId: `cantikgrup`, description: `Wow cantik sekali org ini😍`},
				{title: "Si Ganteng bak tuan Putra", rowId: `gantenggrup`, description: `Ganteng sekaliii tuan putra ini :D`},
				]
				},
				]
				 naze.sendListMsg(m.chat, `*Menu tag seseorang yg si paling...*`, nyoutube, `TAG MENU`, `Click Here`, tagg, m)
				break
            case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
naze_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await naze.sendMessage(m.chat, { audio: naze_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    naze.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
