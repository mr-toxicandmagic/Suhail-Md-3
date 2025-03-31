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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_06_03_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDk2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIsXG4gICAgICAgIDMsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgODEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NixcbiAgICAgICAgMjA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyLFxuICAgICAgICA0NixcbiAgICAgICAgMTY5LFxuICAgICAgICA0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgODgsXG4gICAgICAgIDY0LFxuICAgICAgICAzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDU2LFxuICAgICAgICA3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDc4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM4LFxuICAgICAgICA0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAxODksXG4gICAgICAgIDMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTExLFxuICAgICAgICAzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMixcbiAgICAgICAgMTg3LFxuICAgICAgICA2MixcbiAgICAgICAgMjQyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDc2LFxuICAgICAgICA0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDUyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTFl5NnRpdEt2bjhEbzArV2dqVjZuMThHMHEzN0R1V2dJaTNrbU1YeDg2OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaWwzWUJ3VUNRRXVvSGRhdjUtVWc3UVwiLFxuICBcInBob25lSWRcIjogXCI2YTdhNjI2OC0yNzZhLTQ3YzQtYmJlNy0xZDhjYWQxYTNiY2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjgsXG4gICAgICAxMzIsXG4gICAgICAyMzgsXG4gICAgICAxMTYsXG4gICAgICA0NCxcbiAgICAgIDgxLFxuICAgICAgMjU1LFxuICAgICAgMTk3LFxuICAgICAgOTEsXG4gICAgICAxMyxcbiAgICAgIDE4NixcbiAgICAgIDI0NixcbiAgICAgIDEyMSxcbiAgICAgIDE0NCxcbiAgICAgIDU2LFxuICAgICAgMTM3LFxuICAgICAgNjcsXG4gICAgICAxMjUsXG4gICAgICAxMCxcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNCxcbiAgICAgIDIwNyxcbiAgICAgIDYxLFxuICAgICAgMTQyLFxuICAgICAgNDgsXG4gICAgICAzNCxcbiAgICAgIDE5MixcbiAgICAgIDI1NCxcbiAgICAgIDI1LFxuICAgICAgODgsXG4gICAgICAxNzMsXG4gICAgICA3NyxcbiAgICAgIDQ0LFxuICAgICAgMTEyLFxuICAgICAgMCxcbiAgICAgIDE5OCxcbiAgICAgIDE5NSxcbiAgICAgIDI0MyxcbiAgICAgIDI0MyxcbiAgICAgIDE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZLOUg4VzFMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDk0MDY0NjM3MzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NDU1MTEyODg2NjkyMDoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05hQnBMY0hFUEsvckw4R0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibVc1ZE94Q0pWL1hYSWRUaVhad1RSbTJRbGdBdnpaVzVDSGx5VXFnNDVFaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVTUVlUFRRL2l5L3piaTk5R3BkV0IxcTNaSG9EZEJuQXJRN2hHOFd3OVEwNi9sc0FRR0QxUWhPbGhMY2h0cm1KeHhUL3QraDhWL3VWUDRZcHdBa2FEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYNEt5SFY5bndQRks2SDJqK1RRYmdmY1JBeitna1VTSTQ1YlpydWVRdVFxb2RzQUVIUXMwNDFlWXVOcDlrWnZTWGhsc3NHV2I4QUlFUysxdDlCSUtodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDk0MDY0NjM3MzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDM0NjIzODhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
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
