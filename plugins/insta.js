const {
    Module,
    getJson, 
    isPublic,
    getInsta,
    sendApk,
} = require("../lib/");


Module(
  {
    pattern: "insta ?(.*)",
    fromMe: isPublic,
    desc: "download your insta post/reel",
    type: "downloader",
  },
  async (message, match) => {
    var Jsl_0x2d67d1=Jsl_0x5a40;(function(_0x41e107,_0xbb4a84){var _0xe34df9=Jsl_0x5a40,_0x20ca1c=_0x41e107();while(!![]){try{var _0x4d7fa5=-parseInt(_0xe34df9(0x1db))/0x1+parseInt(_0xe34df9(0x1e6))/0x2*(parseInt(_0xe34df9(0x1e4))/0x3)+-parseInt(_0xe34df9(0x1da))/0x4*(parseInt(_0xe34df9(0x1e0))/0x5)+-parseInt(_0xe34df9(0x1e5))/0x6+parseInt(_0xe34df9(0x1d5))/0x7+-parseInt(_0xe34df9(0x1e2))/0x8+parseInt(_0xe34df9(0x1df))/0x9*(-parseInt(_0xe34df9(0x1dc))/0xa);if(_0x4d7fa5===_0xbb4a84)break;else _0x20ca1c['push'](_0x20ca1c['shift']());}catch(_0x1c343f){_0x20ca1c['push'](_0x20ca1c['shift']());}}}(Jsl_0x2b08,0xa863e),match=match||message[Jsl_0x2d67d1(0x1e1)][Jsl_0x2d67d1(0x1d6)]);if(!match)return await message[Jsl_0x2d67d1(0x1e7)]('*_Need\x20instagram\x20link!_*');var igdl=await getJson('https://vihangayt.me/download/instagram?url='+match);function Jsl_0x5a40(_0x54f9b0,_0x32997a){var _0x2b0827=Jsl_0x2b08();return Jsl_0x5a40=function(_0x5a4083,_0x2768dc){_0x5a4083=_0x5a4083-0x1d5;var _0x25aef0=_0x2b0827[_0x5a4083];return _0x25aef0;},Jsl_0x5a40(_0x54f9b0,_0x32997a);}function Jsl_0x2b08(){var _0x14e004=['text','type','image','sendMessage','5764iHdEID','2531QbjnmW','110YTOSvQ','data','jid','59706NOUtmu','575JsDkpp','reply_message','3010304uggChT','url','68859zXvogm','3473466AVcitc','80ZqHnWX','reply','client','6776175oIHrYp'];Jsl_0x2b08=function(){return _0x14e004;};return Jsl_0x2b08();}igdl[Jsl_0x2d67d1(0x1dd)]['data'][0x0]['type']=='video'&&await message['client'][Jsl_0x2d67d1(0x1d9)](message[Jsl_0x2d67d1(0x1de)],{'video':{'url':igdl[Jsl_0x2d67d1(0x1dd)]['data'][0x0][Jsl_0x2d67d1(0x1e3)]},'caption':''},{'quoted':message});igdl[Jsl_0x2d67d1(0x1dd)][Jsl_0x2d67d1(0x1dd)][0x0][Jsl_0x2d67d1(0x1d7)]==Jsl_0x2d67d1(0x1d8)&&await message[Jsl_0x2d67d1(0x1e8)][Jsl_0x2d67d1(0x1d9)](message[Jsl_0x2d67d1(0x1de)],{'image':{'url':igdl['data'][Jsl_0x2d67d1(0x1dd)][0x0][Jsl_0x2d67d1(0x1e3)]},'caption':''},{'quoted':message});
  }
);


Module(
  {
    pattern: "story ?(.*)",
    fromMe: isPublic,
    desc: "download your insta story photo or videos",
    type: "downloader",
  },
  async (message, match) => {
    var Jsl_0x2d67d1=Jsl_0x5a40;(function(_0x41e107,_0xbb4a84){var _0xe34df9=Jsl_0x5a40,_0x20ca1c=_0x41e107();while(!![]){try{var _0x4d7fa5=-parseInt(_0xe34df9(0x1db))/0x1+parseInt(_0xe34df9(0x1e6))/0x2*(parseInt(_0xe34df9(0x1e4))/0x3)+-parseInt(_0xe34df9(0x1da))/0x4*(parseInt(_0xe34df9(0x1e0))/0x5)+-parseInt(_0xe34df9(0x1e5))/0x6+parseInt(_0xe34df9(0x1d5))/0x7+-parseInt(_0xe34df9(0x1e2))/0x8+parseInt(_0xe34df9(0x1df))/0x9*(-parseInt(_0xe34df9(0x1dc))/0xa);if(_0x4d7fa5===_0xbb4a84)break;else _0x20ca1c['push'](_0x20ca1c['shift']());}catch(_0x1c343f){_0x20ca1c['push'](_0x20ca1c['shift']());}}}(Jsl_0x2b08,0xa863e),match=match||message[Jsl_0x2d67d1(0x1e1)][Jsl_0x2d67d1(0x1d6)]);if(!match)return await message[Jsl_0x2d67d1(0x1e7)]('*_Need\x20instagram\x20link!_*');var igdl=await getJson('https://vihangayt.me/download/instagram?url='+match);function Jsl_0x5a40(_0x54f9b0,_0x32997a){var _0x2b0827=Jsl_0x2b08();return Jsl_0x5a40=function(_0x5a4083,_0x2768dc){_0x5a4083=_0x5a4083-0x1d5;var _0x25aef0=_0x2b0827[_0x5a4083];return _0x25aef0;},Jsl_0x5a40(_0x54f9b0,_0x32997a);}function Jsl_0x2b08(){var _0x14e004=['text','type','image','sendMessage','5764iHdEID','2531QbjnmW','110YTOSvQ','data','jid','59706NOUtmu','575JsDkpp','reply_message','3010304uggChT','url','68859zXvogm','3473466AVcitc','80ZqHnWX','reply','client','6776175oIHrYp'];Jsl_0x2b08=function(){return _0x14e004;};return Jsl_0x2b08();}igdl[Jsl_0x2d67d1(0x1dd)]['data'][0x0]['type']=='video'&&await message['client'][Jsl_0x2d67d1(0x1d9)](message[Jsl_0x2d67d1(0x1de)],{'video':{'url':igdl[Jsl_0x2d67d1(0x1dd)]['data'][0x0][Jsl_0x2d67d1(0x1e3)]},'caption':''},{'quoted':message});igdl[Jsl_0x2d67d1(0x1dd)][Jsl_0x2d67d1(0x1dd)][0x0][Jsl_0x2d67d1(0x1d7)]==Jsl_0x2d67d1(0x1d8)&&await message[Jsl_0x2d67d1(0x1e8)][Jsl_0x2d67d1(0x1d9)](message[Jsl_0x2d67d1(0x1de)],{'image':{'url':igdl['data'][Jsl_0x2d67d1(0x1dd)][0x0][Jsl_0x2d67d1(0x1e3)]},'caption':''},{'quoted':message});
  }
);


Module(
  {
    pattern: "apk ?(.*)",
    fromMe: isPublic,
    desc: "downloding your apps",
    type: "downloader",
  },
  async (message, match) => {
    match = match || message.reply_message.text;
    if (!match) return await message.reply("*_Enterany apk name!_*");
       function Jsl_0x3bdc(_0x2c4a2a,_0x2cfc67){var _0x194294=Jsl_0x1942();return Jsl_0x3bdc=function(_0x3bdced,_0xe9c6c1){_0x3bdced=_0x3bdced-0xd3;var _0x167cf3=_0x194294[_0x3bdced];return _0x167cf3;},Jsl_0x3bdc(_0x2c4a2a,_0x2cfc67);}function Jsl_0x1942(){var _0x50750a=['1960416biNRCs','10AtcMEK','959934BrYbOp','46963RZRvZU','375158bNqLTb','188pAmDHQ','https://vihangayt.me/download/apk?id=','520XsmHbD','528534aOraZL','286078YAXzCr','4145JOhgOn'];Jsl_0x1942=function(){return _0x50750a;};return Jsl_0x1942();}var Jsl_0x1cb22e=Jsl_0x3bdc;(function(_0x870c2f,_0x4c1963){var _0x34f6b8=Jsl_0x3bdc,_0x32930b=_0x870c2f();while(!![]){try{var _0x1f93e2=-parseInt(_0x34f6b8(0xda))/0x1+parseInt(_0x34f6b8(0xd5))/0x2+-parseInt(_0x34f6b8(0xd3))/0x3+-parseInt(_0x34f6b8(0xd6))/0x4*(parseInt(_0x34f6b8(0xdb))/0x5)+parseInt(_0x34f6b8(0xdc))/0x6+parseInt(_0x34f6b8(0xd4))/0x7*(parseInt(_0x34f6b8(0xd8))/0x8)+-parseInt(_0x34f6b8(0xd9))/0x9*(parseInt(_0x34f6b8(0xdd))/0xa);if(_0x1f93e2===_0x4c1963)break;else _0x32930b['push'](_0x32930b['shift']());}catch(_0x5578c6){_0x32930b['push'](_0x32930b['shift']());}}}(Jsl_0x1942,0x3c37f));var zip=await getJson(Jsl_0x1cb22e(0xd7)+match);
       await message.client.sendMessage(message.jid, { document :{ url: zip.data.dllink }, fileName: `${zip.data.name}` , mimetype: "application/vnd.android.package-archive" }, {quoted: message})
    
  }
);
