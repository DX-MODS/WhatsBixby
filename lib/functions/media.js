/*Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const BixbyInc_0x5d6561=BixbyInc_0xff88;(function(_0xf5f607,_0x59090d){const _0x7abae4=BixbyInc_0xff88,_0x51cf7d=_0xf5f607();while(!![]){try{const _0x274176=-parseInt(_0x7abae4(0x84))/0x1*(parseInt(_0x7abae4(0xae))/0x2)+-parseInt(_0x7abae4(0x9a))/0x3+parseInt(_0x7abae4(0x81))/0x4+-parseInt(_0x7abae4(0x99))/0x5*(-parseInt(_0x7abae4(0x7b))/0x6)+parseInt(_0x7abae4(0x8c))/0x7*(-parseInt(_0x7abae4(0xa6))/0x8)+-parseInt(_0x7abae4(0x9d))/0x9+parseInt(_0x7abae4(0x83))/0xa;if(_0x274176===_0x59090d)break;else _0x51cf7d['push'](_0x51cf7d['shift']());}catch(_0xf01f44){_0x51cf7d['push'](_0x51cf7d['shift']());}}}(BixbyInc_0x3f3f,0xe2b5e));function BixbyInc_0x3f3f(){const _0x4494c3=['image.webp','log','readFile','file-type','1996MYPYcY','sharp','unlink','string','-ac','div#output\x20>\x20p.outfile\x20>\x20video\x20>\x20source','window','@whiskeysockets/baileys','128k','writeFile','test','-preset','185118NhdFDQ','src','form\x20input[name]','-ab','mp3','promises','7049280KZKQqO','name','25503850gOSLXF','655lnROVJ','44100','value','file','-vbr','https://ezgif.com/webp-to-mp4/','opus','-c:v','49FaVaLj','-compression_level','new-image-url','https://ezgif.com/webp-to-mp4','child_process','url','querySelector','jsdom','-vn','toString','-b:a','slow','-c:a','35UMSiFA','2196897Dcstiz','POST','close','14687964yjTaLU','append','-crf','join','libx264','querySelectorAll','https://s6.ezgif.com/webp-to-png','https://ezgif.com/webp-to-png/','node-fetch','665240xvdDMH','text','-ar','mp4'];BixbyInc_0x3f3f=function(){return _0x4494c3;};return BixbyInc_0x3f3f();}const fs=require('fs'),{getHttpStream,toBuffer}=require(BixbyInc_0x5d6561(0x76)),{isUrl}=require('..'),path=require('path'),FormData=require('form-data'),{spawn}=require(BixbyInc_0x5d6561(0x90)),{default:fetch}=require(BixbyInc_0x5d6561(0xa5));let {JSDOM}=require(BixbyInc_0x5d6561(0x93));const sharp=require(BixbyInc_0x5d6561(0xaf)),{fromBuffer}=require(BixbyInc_0x5d6561(0xad));function ffmpeg(_0x5510eb,_0x433e60=[],_0x2b144e='',_0xbb143f=''){return new Promise(async(_0x5e6962,_0x1e1a37)=>{const _0x37dd19=BixbyInc_0xff88;try{let _0x223da3=path[_0x37dd19(0xa0)](__dirname,'../media',+new Date()+'.'+_0x2b144e),_0x4e1e37=_0x223da3+'.'+_0xbb143f;await fs['promises'][_0x37dd19(0x78)](_0x223da3,_0x5510eb),spawn('ffmpeg',['-y','-i',_0x223da3,..._0x433e60,_0x4e1e37])['on']('error',_0x1e1a37)['on']('close',async _0x4ac15e=>{const _0x3d5f7a=_0x37dd19;try{await fs[_0x3d5f7a(0x80)][_0x3d5f7a(0xb0)](_0x223da3);if(_0x4ac15e!==0x0)return _0x1e1a37(_0x4ac15e);_0x5e6962(await fs[_0x3d5f7a(0x80)][_0x3d5f7a(0xac)](_0x4e1e37)),await fs['promises']['unlink'](_0x4e1e37);}catch(_0x369775){_0x1e1a37(_0x369775);}});}catch(_0x5dd8df){_0x1e1a37(_0x5dd8df);}});}function ff(_0x2a1c7f,_0x3b6729=[],_0x5777d4='',_0x114550=''){return new Promise(async(_0x4558e5,_0x1528e1)=>{const _0x58001c=BixbyInc_0xff88;try{let _0x322b44=path[_0x58001c(0xa0)](__dirname,'./',+new Date()+'.'+_0x5777d4),_0x226a86=_0x322b44+'.'+_0x114550;await fs[_0x58001c(0x80)][_0x58001c(0x78)](_0x322b44,_0x2a1c7f),spawn('ffmpeg',['-y','-i',_0x322b44,..._0x3b6729,_0x226a86])['on']('error',_0x1528e1)['on'](_0x58001c(0x9c),async _0x10b18f=>{const _0xe9a3b6=_0x58001c;try{await fs[_0xe9a3b6(0x80)][_0xe9a3b6(0xb0)](_0x322b44);if(_0x10b18f!==0x0)return _0x1528e1(_0x10b18f);_0x4558e5(await fs[_0xe9a3b6(0x80)][_0xe9a3b6(0xac)](_0x226a86)),await fs[_0xe9a3b6(0x80)][_0xe9a3b6(0xb0)](_0x226a86);}catch(_0x325469){_0x1528e1(_0x325469);}});}catch(_0x213343){_0x1528e1(_0x213343);}});}function toAudio(_0x3f9ba6,_0x2ced89){const _0x14f8d3=BixbyInc_0x5d6561;return ff(_0x3f9ba6,['-vn',_0x14f8d3(0x73),'2',_0x14f8d3(0x96),_0x14f8d3(0x77),_0x14f8d3(0xa8),'44100','-f',_0x14f8d3(0x7f)],_0x2ced89);}function toPTT(_0xcdc0e1,_0x2ce6a1){const _0x3af060=BixbyInc_0x5d6561;return ff(_0xcdc0e1,[_0x3af060(0x94),'-c:a','libopus',_0x3af060(0x96),_0x3af060(0x77),_0x3af060(0x88),'on',_0x3af060(0x8d),'10'],_0x2ce6a1,_0x3af060(0x8a));}function BixbyInc_0xff88(_0x417810,_0x173c11){const _0x3f3f85=BixbyInc_0x3f3f();return BixbyInc_0xff88=function(_0xff88db,_0x45b817){_0xff88db=_0xff88db-0x72;let _0x227dec=_0x3f3f85[_0xff88db];return _0x227dec;},BixbyInc_0xff88(_0x417810,_0x173c11);}function toVideo(_0x385bf0,_0x2b36ac){const _0x605574=BixbyInc_0x5d6561;return ff(_0x385bf0,[_0x605574(0x8b),_0x605574(0xa1),_0x605574(0x98),'aac',_0x605574(0x7e),_0x605574(0x77),'-ar',_0x605574(0x85),_0x605574(0x9f),'32',_0x605574(0x7a),_0x605574(0x97)],_0x2b36ac,_0x605574(0xa9));}module['exports']={'webp2mp4':async _0x17c1c9=>{const _0x2a8c1b=BixbyInc_0x5d6561;let _0x13f143=new FormData(),_0x326b50=typeof _0x17c1c9===_0x2a8c1b(0x72)&&/https?:\/\//[_0x2a8c1b(0x79)](_0x17c1c9);_0x13f143[_0x2a8c1b(0x9e)](_0x2a8c1b(0x8e),_0x326b50?_0x17c1c9:''),_0x13f143[_0x2a8c1b(0x9e)]('new-image',_0x326b50?'':_0x17c1c9,_0x2a8c1b(0xaa));let _0x511c1b=await fetch(_0x2a8c1b(0x8f),{'method':_0x2a8c1b(0x9b),'body':_0x13f143}),_0x2d5ec4=await _0x511c1b[_0x2a8c1b(0xa7)](),{document:_0x2c0b2d}=new JSDOM(_0x2d5ec4)[_0x2a8c1b(0x75)],_0x5b0265=new FormData(),_0x5eee33={};for(let _0x127b63 of _0x2c0b2d[_0x2a8c1b(0xa2)](_0x2a8c1b(0x7d))){_0x5eee33[_0x127b63[_0x2a8c1b(0x82)]]=_0x127b63[_0x2a8c1b(0x86)],_0x5b0265[_0x2a8c1b(0x9e)](_0x127b63[_0x2a8c1b(0x82)],_0x127b63[_0x2a8c1b(0x86)]);}let _0x498b34=await fetch(_0x2a8c1b(0x89)+_0x5eee33[_0x2a8c1b(0x87)],{'method':'POST','body':_0x5b0265}),_0x358303=await _0x498b34[_0x2a8c1b(0xa7)](),{document:_0x56c690}=new JSDOM(_0x358303)['window'];return new URL(_0x56c690[_0x2a8c1b(0x92)](_0x2a8c1b(0x74))[_0x2a8c1b(0x7c)],_0x498b34['url'])[_0x2a8c1b(0x95)]();},'webp2png':async _0x56c068=>{const _0x2c929d=BixbyInc_0x5d6561;let _0x230dfc=new FormData(),_0x117a45=typeof _0x56c068===_0x2c929d(0x72)&&/https?:\/\//[_0x2c929d(0x79)](_0x56c068);_0x230dfc[_0x2c929d(0x9e)](_0x2c929d(0x8e),_0x117a45?_0x56c068:''),_0x230dfc[_0x2c929d(0x9e)]('new-image',_0x117a45?'':_0x56c068,_0x2c929d(0xaa));let _0x5a5361=await fetch(_0x2c929d(0xa3),{'method':'POST','body':_0x230dfc}),_0x475358=await _0x5a5361[_0x2c929d(0xa7)](),{document:_0x49611f}=new JSDOM(_0x475358)[_0x2c929d(0x75)],_0x291fc3=new FormData(),_0x52498f={};for(let _0x5ad3d9 of _0x49611f['querySelectorAll'](_0x2c929d(0x7d))){_0x52498f[_0x5ad3d9[_0x2c929d(0x82)]]=_0x5ad3d9['value'],_0x291fc3['append'](_0x5ad3d9[_0x2c929d(0x82)],_0x5ad3d9[_0x2c929d(0x86)]);}let _0xf32385=await fetch(_0x2c929d(0xa4)+_0x52498f[_0x2c929d(0x87)],{'method':'POST','body':_0x291fc3}),_0x2c5aa0=await _0xf32385[_0x2c929d(0xa7)]();console[_0x2c929d(0xab)](_0x2c5aa0);let {document:_0x1f5fc7}=new JSDOM(_0x2c5aa0)[_0x2c929d(0x75)];return new URL(_0x1f5fc7[_0x2c929d(0x92)]('div#output\x20>\x20p.outfile\x20>\x20img')[_0x2c929d(0x7c)],_0xf32385[_0x2c929d(0x91)])[_0x2c929d(0x95)]();},'toAudio':toAudio,'toPTT':toPTT,'toVideo':toVideo,'ff':ff};