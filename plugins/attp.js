/* Copyright (C) 2023 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

function _0x2987(){const _0x324f69=['text','please\x20add\x20any\x20text','get','964146xhWaUx','../lib','../config','_Failed\x20To\x20Fetch\x20Attp\x20Sticker\x20From\x20The\x20Api','api/attp?text=','reply_message','1529457iUrPsZ','4179776scVAPQ','arraybuffer','_An\x20Error\x20Occured\x20While\x20Changing\x20The\x20Text\x20To\x20Attp\x20Sticker_','93744OBYHds','2164869yHDInO','16432800nXtaKo','_Error\x20While\x20Fetching\x20Attp\x20Sticker:_','sticker','axios','text\x20to\x20rgb\x20sticker','&apikey=8coTqIYPs6','error','1376864qgdOoZ','85lHdmdC','attp','message','_Error\x20While\x20Fetching\x20Attp\x20Sticker_','reply'];_0x2987=function(){return _0x324f69;};return _0x2987();}(function(_0x4bc3a4,_0x200bee){const _0x98d85=_0x4bc3a4();function _0x4665c4(_0xebe7dd,_0x3855a8){return _0x2fa1(_0xebe7dd-0x273,_0x3855a8);}while(!![]){try{const _0x384121=parseInt(_0x4665c4(0x3ea,0x3dc))/0x1+parseInt(_0x4665c4(0x3e1,0x3ee))/0x2+parseInt(_0x4665c4(0x3f0,0x3e6))/0x3+parseInt(_0x4665c4(0x3f1,0x3e8))/0x4+-parseInt(_0x4665c4(0x3e2,0x3ed))/0x5*(parseInt(_0x4665c4(0x3f4,0x3f5))/0x6)+-parseInt(_0x4665c4(0x3f5,0x3f6))/0x7+-parseInt(_0x4665c4(0x3f6,0x3ec))/0x8;if(_0x384121===_0x200bee)break;else _0x98d85['push'](_0x98d85['shift']());}catch(_0x376b8a){_0x98d85['push'](_0x98d85['shift']());}}}(_0x2987,0x8d33e));const {Bixby,isPublic}=require(_0x4072b9(0x187,0x17b)),{PACKNAME,AUTHOR,BASE_URL}=require(_0x4072b9(0x174,0x17c)),axios=require(_0x4072b9(0x177,0x16d));function _0x2fa1(_0x355ecf,_0x1b2d8d){const _0x2987e4=_0x2987();return _0x2fa1=function(_0x2fa12d,_0x261b0e){_0x2fa12d=_0x2fa12d-0x168;let _0x470470=_0x2987e4[_0x2fa12d];return _0x470470;},_0x2fa1(_0x355ecf,_0x1b2d8d);}function _0x4072b9(_0x39fc0c,_0x4311f1){return _0x2fa1(_0x4311f1-0x3,_0x39fc0c);}Bixby({'pattern':_0x4072b9(0x175,0x173),'fromMe':isPublic,'desc':_0x4072b9(0x166,0x16e),'type':_0x4072b9(0x164,0x16c)},async(_0x23db4,_0x30b2ba)=>{function _0x36502e(_0x49e3c0,_0x29b386){return _0x4072b9(_0x49e3c0,_0x29b386- -0x60);}try{_0x30b2ba=_0x30b2ba||_0x23db4[_0x36502e(0x124,0x11f)]&&_0x23db4[_0x36502e(0x121,0x11f)][_0x36502e(0x125,0x117)];if(!_0x30b2ba)return await _0x23db4['reply'](_0x36502e(0x121,0x118));else{const _0x1851cf=BASE_URL+_0x36502e(0x11b,0x11e)+encodeURIComponent(_0x30b2ba)+_0x36502e(0x105,0x10f),_0x1810dd=await axios[_0x36502e(0x127,0x119)](_0x1851cf,{'responseType':_0x36502e(0x12f,0x122)});if(_0x1810dd['status']===0xc8){const _0x20516a=Buffer['from'](_0x1810dd['data'],'binary');await _0x23db4['sendMessage'](_0x20516a,{'packname':PACKNAME,'author':AUTHOR},_0x36502e(0xff,0x10c));}else return console['error'](_0x36502e(0x11a,0x11d)),await _0x23db4[_0x36502e(0x11e,0x116)](_0x36502e(0x124,0x123));}}catch(_0x37d627){return console[_0x36502e(0x108,0x110)](_0x36502e(0x10c,0x10b),_0x37d627[_0x36502e(0x115,0x114)]),await _0x23db4['reply'](_0x36502e(0x10f,0x115));}});