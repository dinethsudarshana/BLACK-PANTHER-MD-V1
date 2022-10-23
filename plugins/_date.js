function TimeCalculator(a){let b=Math.floor(a/31536e3),c=Math.floor(a%31536e3/2628e3),d=Math.floor(a%31536e3%2628e3/86400),e=Math.floor(a%86400/3600),f=Math.floor(a%3600/60),g=Math.floor(a%60);return(b>0?b+(1===b?" year, ":" years, "):"")+(c>0?c+(1===c?" month, ":" months, "):"")+(d>0?d+(1===d?" day, ":" days, "):"")+(e>0?e+(1===e?" hour, ":" hours, "):"")+(f>0?f+(1===f?" minute ":" minutes, "):"")+(g>0?g+(1===g?" second":" seconds "):"")}
const {Module, isPublic} = require('../lib/')
Module({
  pattern: 'age ?(.*)',
  fromMe: isPublic,
  desc: 'Age calculator .age dob',
  type: 'utility',
}, async (m,t) => {
if (!t[1]) return await m.reply("_Give me your Date of Birth_");
if (!/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(t[1])) return await m.reply("_Date must be in dd/mm/yy format_");
var DOB = t[1]
var actual = DOB.includes("-")? DOB.split("-")[1]+'-'+DOB.split("-")[0]+'-'+DOB.split("-")[2]:  DOB.split("/")[1]+'-'+DOB.split("/")[0]+'-'+DOB.split("/")[2]
var dob = new Date(actual).getTime()
var today = new Date().getTime()
var age = (today - dob)/1000
return await m.reply('```'+TimeCalculator(age)+'```')  
});
Module({
  pattern: 'cntd ?(.*)',
  fromMe: isPublic,
  desc: 'Counts Date',
  type: 'utility',
}, async (m,t) => {
if (!t[1]) return await m.reply("_Give me a future date!_");
if (!/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(t[1])) return await m.reply("_Date must be in dd/mm/yy format_");
var DOB = t[1]
var actual = DOB.includes("-")? DOB.split("-")[1]+'-'+DOB.split("-")[0]+'-'+DOB.split("-")[2]:  DOB.split("/")[1]+'-'+DOB.split("/")[0]+'-'+DOB.split("/")[2]
var dob = new Date(actual).getTime()
var today = new Date().getTime()
var age = (dob-today)/1000
return await m.reply("_"+TimeCalculator(age)+" remaining_")  
});
