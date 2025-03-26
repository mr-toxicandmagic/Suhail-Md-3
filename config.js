const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "50940646373,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_55_03_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDcxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDUwLFxuICAgICAgICA1OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDczLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgODcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2LFxuICAgICAgICA2NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNixcbiAgICAgICAgOTcsXG4gICAgICAgIDExLFxuICAgICAgICAyMixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc3LFxuICAgICAgICA5OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NixcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjksXG4gICAgICAgIDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlV0MWF3Nk1UcnNtUFA0dkRwMmhCck9RYXJ3RTVtcVllb3hvUk5zTWNDS289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklwYWVrVTlzU3R1ZHZjYmdld2I2cGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjQwMTA4OTctYzIxYS00MTBlLWI1YzgtYzE3NTkwMWIxZDVhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NyxcbiAgICAgIDE3NSxcbiAgICAgIDEyLFxuICAgICAgMTA0LFxuICAgICAgMTE2LFxuICAgICAgMTI3LFxuICAgICAgMTgxLFxuICAgICAgMjE0LFxuICAgICAgMTM3LFxuICAgICAgODIsXG4gICAgICAyMjMsXG4gICAgICAxMyxcbiAgICAgIDI3LFxuICAgICAgMjM0LFxuICAgICAgMjIzLFxuICAgICAgMTAsXG4gICAgICAxOCxcbiAgICAgIDkxLFxuICAgICAgMTU0LFxuICAgICAgMjI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDE5NCxcbiAgICAgIDY5LFxuICAgICAgNzksXG4gICAgICAxMzMsXG4gICAgICAxMTcsXG4gICAgICAxMzAsXG4gICAgICAxMTAsXG4gICAgICA5MCxcbiAgICAgIDIzNixcbiAgICAgIDExMCxcbiAgICAgIDI1MSxcbiAgICAgIDIzMyxcbiAgICAgIDY3LFxuICAgICAgNjksXG4gICAgICAxOTYsXG4gICAgICAyMDEsXG4gICAgICAxMTAsXG4gICAgICAyNCxcbiAgICAgIDk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIko3UUMzU043XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDk0MDY0NjM3MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NDU1MTEyODg2NjkyMDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05hQnBMY0hFUHlFamI4R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibVc1ZE94Q0pWL1hYSWRUaVhad1RSbTJRbGdBdnpaVzVDSGx5VXFnNDVFaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMU3FDa3BzUUZZR0ttSzdIT09pNE9JTVdMK1JhaDZ4clY5ckZhNVQzeG1WZitGb0pkcC9Bd2RKWFZ4d005TVVvUlJoNnhsM1ZBU3hzdDBtck92ZWlDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1bStaTHkzdTRlQ1h6b0o3dUh3MzBiaE9taHRiY3R3bURUV0JXL1FOQXphZks5STVsWW1NOCswdGJRSGkzaUdGYTVPLzNKa1ZHV2NDOGNBZWJQTVRDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDk0MDY0NjM3MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDI5NDY5NDRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "TOXICO-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
