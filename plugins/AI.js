/*Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic, tiny } = require("../lib/");
const { BASE_URL, API_KEY } = require("../config");
const axios = require("axios");

Bixby(
  {
    pattern: "ai-math",
    fromMe: isPublic,
    desc: "solve maths with ai",
    type: "ai",
  },
  async (message, match) => {
match = match || message.reply_message.text;
 if (!match) return await message.reply("*_Give me any math questions*");

const response = await axios.get(`${BASE_URL}api/ai/maths?text=${match}&apikey=${API_KEY}`);    
function WhatsBixby_0x454cd2(_0x213fc4,_0x337fcb,_0x924fef,_0xa62088,_0x5ac3ca){return WhatsBixby_0x53e7(_0x213fc4- -0x272,_0x924fef);}function WhatsBixby_0x535c0a(_0x59a067,_0x4ea518,_0x50f3c9,_0x224b62,_0x58f30a){return WhatsBixby_0x53e7(_0x50f3c9-0x48,_0x224b62);}function WhatsBixby_0x2d6038(_0x76d1e3,_0x455e60,_0x598869,_0x468059,_0x4be745){return WhatsBixby_0x53e7(_0x455e60-0xc,_0x468059);}function WhatsBixby_0x4c9a(){var _0x40e2e7=['10YeMnth','296keEOsq','*MATH','ion_*','148796XNzIqu','aths\x20','the\x20m','*\x0a\x0a','CS\x20AI','EMATI','2814204EjBOJy','12eukwlj','quest','10RBzxoe','16731edopbd','ble\x20t','24555PbeqYV','22fcyAmL','cess\x20','data','o\x20pro','reply','*_Una','resul','1191817YIBaOI','420630GJnrAj','87535TMrOHB'];WhatsBixby_0x4c9a=function(){return _0x40e2e7;};return WhatsBixby_0x4c9a();}function WhatsBixby_0x53b0f9(_0x5097ed,_0x501a71,_0x2ea74c,_0x3c7bd2,_0xbbb30f){return WhatsBixby_0x53e7(_0xbbb30f- -0x39f,_0x5097ed);}(function(_0x460504,_0x51851c){function _0x5628b1(_0x288f5a,_0x4b00ae,_0x49f696,_0x33ebe0,_0x22210e){return WhatsBixby_0x53e7(_0x4b00ae-0x30d,_0x288f5a);}function _0x1c5889(_0x45c0ed,_0x50d75e,_0x16419f,_0x534a0c,_0x48895b){return WhatsBixby_0x53e7(_0x16419f-0x11d,_0x45c0ed);}function _0x4ffed5(_0x1b9db2,_0x2b28d2,_0x592dad,_0x1cc4d7,_0x346660){return WhatsBixby_0x53e7(_0x2b28d2- -0x270,_0x346660);}function _0x27126d(_0x55b413,_0x2878c0,_0x3b20ab,_0x4a87d3,_0x4973fe){return WhatsBixby_0x53e7(_0x2878c0- -0x1a4,_0x55b413);}var _0x5c06be=_0x460504();function _0x2326a6(_0x4fc114,_0x143fa8,_0x310f6f,_0x5e21de,_0x4442d9){return WhatsBixby_0x53e7(_0x310f6f-0x92,_0x4442d9);}while(!![]){try{var _0xce8962=-parseInt(_0x1c5889(0x2fe,0x2fa,0x303,0x2f8,0x2fb))/(0x179b+0x7*-0x293+0x1*-0x595)+parseInt(_0x1c5889(0x2f2,0x2ed,0x2fa,0x2f5,0x304))/(-0x3*0x49+0x1*0x469+-0x38c)*(parseInt(_0x27126d(0x41,0x38,0x3a,0x38,0x36))/(0x2229+-0xe6a+-0x13bc))+parseInt(_0x1c5889(0x301,0x2ff,0x308,0x303,0x300))/(0xe57*0x1+0x1577+-0x12*0x1fd)*(parseInt(_0x4ffed5(-0x92,-0x97,-0xa3,-0xa3,-0x9a))/(-0x39+0x20a9*0x1+-0x206b))+parseInt(_0x1c5889(0x313,0x315,0x30f,0x30b,0x304))/(-0xb40+-0x1f0d*0x1+0x2a53)*(-parseInt(_0x4ffed5(-0x86,-0x8b,-0x98,-0x86,-0x8a))/(-0xa44+-0xc4c+0x1697))+-parseInt(_0x1c5889(0x2fd,0x30a,0x305,0x30e,0x308))/(-0x3fd*-0x6+0x634*-0x5+0x71e)*(-parseInt(_0x5628b1(0x4e7,0x4e7,0x4ef,0x4e9,0x4df))/(-0x1ff7+0xa2*0x2c+0x428))+parseInt(_0x4ffed5(-0x87,-0x89,-0x7e,-0x96,-0x90))/(0x26ae*0x1+0x184+0x1*-0x2828)*(-parseInt(_0x4ffed5(-0x92,-0x8c,-0x80,-0x92,-0x8f))/(-0xbd0+-0x1*0x2294+0x2e6f))+parseInt(_0x4ffed5(-0x88,-0x7f,-0x7d,-0x79,-0x74))/(0x8de+-0x18c*0x14+-0xb0f*-0x2);if(_0xce8962===_0x51851c)break;else _0x5c06be['push'](_0x5c06be['shift']());}catch(_0x5dfbd2){_0x5c06be['push'](_0x5c06be['shift']());}}}(WhatsBixby_0x4c9a,-0x1d*0x129d+-0xa*-0x6de7+0x213a));function WhatsBixby_0x53e7(_0x57fc45,_0x1374b8){var _0x58aeee=WhatsBixby_0x4c9a();return WhatsBixby_0x53e7=function(_0x3627b4,_0x1df122){_0x3627b4=_0x3627b4-(0x458*-0x7+-0x149b+0x34dc);var _0x32ac77=_0x58aeee[_0x3627b4];return _0x32ac77;},WhatsBixby_0x53e7(_0x57fc45,_0x1374b8);}function WhatsBixby_0x30ed3a(_0x17a00c,_0x567350,_0x3cfb26,_0x2e74f0,_0x2a77f5){return WhatsBixby_0x53e7(_0x3cfb26- -0x3f,_0x567350);}return response[WhatsBixby_0x30ed3a(0x19c,0x1ab,0x1a0,0x19c,0x195)]?message[WhatsBixby_0x30ed3a(0x1aa,0x1ac,0x1a2,0x1a8,0x1a6)](WhatsBixby_0x30ed3a(0x1a6,0x1a6,0x1aa,0x19e,0x1b1)+WhatsBixby_0x30ed3a(0x1a4,0x1a8,0x1b1,0x1ba,0x1ab)+WhatsBixby_0x2d6038(0x207,0x1fb,0x1f7,0x1f0,0x1fd)+WhatsBixby_0x53b0f9(-0x1a4,-0x1b0,-0x1be,-0x1ad,-0x1b1)+response[WhatsBixby_0x53b0f9(-0x1b6,-0x1b4,-0x1c5,-0x1b4,-0x1c0)][WhatsBixby_0x454cd2(-0x8f,-0x86,-0x89,-0x8c,-0x9b)+'t']):message[WhatsBixby_0x535c0a(0x21d,0x221,0x229,0x226,0x22b)](WhatsBixby_0x454cd2(-0x90,-0x86,-0x8d,-0x94,-0x85)+WhatsBixby_0x535c0a(0x222,0x219,0x223,0x21f,0x22e)+WhatsBixby_0x454cd2(-0x92,-0x9b,-0x90,-0x93,-0x9a)+WhatsBixby_0x454cd2(-0x94,-0x98,-0x9c,-0x91,-0x90)+WhatsBixby_0x454cd2(-0x85,-0x8e,-0x7e,-0x89,-0x7a)+WhatsBixby_0x535c0a(0x23e,0x22d,0x234,0x23b,0x22c)+WhatsBixby_0x2d6038(0x207,0x1ff,0x1fb,0x1f3,0x205)+WhatsBixby_0x535c0a(0x225,0x226,0x232,0x23d,0x238));
      
});

Bixby(
  {
    pattern: "bardai",
    fromMe: isPublic,
    desc: "bard ai",
    type: "ai",
  },
  async (message, match) => {
match = match || message.reply_message.text;
 if (!match) return await message.reply("*_Give me any math questions*");

const response = await axios.get(`${BASE_URL}api/ai/bardai?q=${match}&apikey=${API_KEY}`);    
function WhatsBixby_0x4e0211(_0x4ec065,_0x2b049b,_0x4a006e,_0x43ce8a,_0x3ad0dc){return WhatsBixby_0x37fa(_0x4ec065- -0x28f,_0x4a006e);}function WhatsBixby_0x1042f7(_0x5be945,_0x12957a,_0x3f35a1,_0x12b5ec,_0x3f189b){return WhatsBixby_0x37fa(_0x3f189b- -0x3a8,_0x3f35a1);}function WhatsBixby_0x34be5a(_0x3d28df,_0x583c10,_0x51c13b,_0x50ad07,_0x27627d){return WhatsBixby_0x37fa(_0x50ad07- -0x148,_0x583c10);}function WhatsBixby_0x37fa(_0x27c659,_0x3c3da0){var _0x4497d7=WhatsBixby_0x582d();return WhatsBixby_0x37fa=function(_0x142606,_0x4bd5aa){_0x142606=_0x142606-(0x1*-0x12ad+-0xc12+0x2089);var _0x13c323=_0x4497d7[_0x142606];return _0x13c323;},WhatsBixby_0x37fa(_0x27c659,_0x3c3da0);}function WhatsBixby_0x524764(_0x1d4df2,_0x26cf9c,_0x14fd5c,_0x5b87ed,_0x310faf){return WhatsBixby_0x37fa(_0x5b87ed- -0x107,_0x1d4df2);}function WhatsBixby_0x119c2c(_0x1737a9,_0x3d2e9c,_0x1f2aed,_0x6222f8,_0x2773ee){return WhatsBixby_0x37fa(_0x6222f8- -0x2c0,_0x2773ee);}(function(_0x510953,_0x1c1913){function _0xea2a4c(_0x447b2e,_0x26ab17,_0xd13136,_0xbab882,_0x4774d4){return WhatsBixby_0x37fa(_0xd13136- -0x352,_0x26ab17);}var _0xd6e87e=_0x510953();function _0x37bdb6(_0x13a83c,_0x18671c,_0x2106a4,_0x428754,_0x60c124){return WhatsBixby_0x37fa(_0x18671c- -0x178,_0x60c124);}function _0x16585f(_0x4a268c,_0x137212,_0x7cd45,_0x2747d0,_0x2c2e64){return WhatsBixby_0x37fa(_0x2747d0- -0x18d,_0x4a268c);}function _0x5b1cad(_0x3abbad,_0x3cf4fb,_0x1cbf90,_0x3a6001,_0x37710d){return WhatsBixby_0x37fa(_0x3abbad-0xaa,_0x37710d);}function _0x4af6b9(_0x71a9ae,_0x3602c1,_0x3294b4,_0x8cc1b0,_0x1280db){return WhatsBixby_0x37fa(_0x8cc1b0-0xd3,_0x71a9ae);}while(!![]){try{var _0x340941=parseInt(_0x5b1cad(0x280,0x27c,0x285,0x27c,0x27a))/(-0x2691+0x8*0x1db+0x17ba)+-parseInt(_0x5b1cad(0x27e,0x278,0x27f,0x27f,0x279))/(-0x8c5+0x259b+0x171*-0x14)+parseInt(_0x4af6b9(0x2a9,0x2ae,0x2ae,0x2a6,0x2ad))/(-0x790+-0xe55+-0x2bd*-0x8)+parseInt(_0x4af6b9(0x2a3,0x29f,0x2af,0x2a5,0x29b))/(-0x1fc0+0x1b*0x2a+0x1b56)*(-parseInt(_0x5b1cad(0x281,0x284,0x27b,0x282,0x27a))/(-0x34f*0x1+-0x5d9+0x30f*0x3))+parseInt(_0x16585f(0x47,0x37,0x43,0x3d,0x38))/(-0xf2e*-0x1+-0x2d9+-0xc4f)*(parseInt(_0x16585f(0x3d,0x3a,0x3a,0x44,0x3b))/(-0x70*0x2f+0x1e72+0x1*-0x9db))+-parseInt(_0xea2a4c(-0x17b,-0x183,-0x184,-0x17a,-0x180))/(0x1b51+0xa3b+-0x1*0x2584)+-parseInt(_0x4af6b9(0x2aa,0x2b6,0x2ab,0x2af,0x2b9))/(-0x2296+-0x3*-0x2c7+0x1a4a);if(_0x340941===_0x1c1913)break;else _0xd6e87e['push'](_0xd6e87e['shift']());}catch(_0x4399c3){_0xd6e87e['push'](_0xd6e87e['shift']());}}}(WhatsBixby_0x582d,-0x36e8f*0x1+0x6f49*0x3+0x76b8c));return response[WhatsBixby_0x4e0211(-0xc4,-0xc0,-0xc5,-0xc8,-0xc0)]?message[WhatsBixby_0x4e0211(-0xb2,-0xb3,-0xb8,-0xb3,-0xad)](WhatsBixby_0x119c2c(-0xfe,-0xfb,-0xf0,-0xf4,-0xec)+WhatsBixby_0x524764(0xbf,0xce,0xd0,0xc8,0xc9)+'\x0a'+response[WhatsBixby_0x524764(0xbc,0xc5,0xc6,0xc4,0xc6)][WhatsBixby_0x119c2c(-0xfc,-0xf7,-0xfa,-0xf5,-0xf7)]):message[WhatsBixby_0x34be5a(0x8c,0x92,0x94,0x95,0x9b)](WhatsBixby_0x119c2c(-0xec,-0xee,-0xf3,-0xeb,-0xe9)+WhatsBixby_0x119c2c(-0xe4,-0xdf,-0xdb,-0xe5,-0xdf)+WhatsBixby_0x1042f7(-0x1ca,-0x1ce,-0x1ce,-0x1d0,-0x1cf)+WhatsBixby_0x4e0211(-0xbf,-0xbe,-0xc1,-0xba,-0xb5)+WhatsBixby_0x119c2c(-0xf4,-0xec,-0xe9,-0xf3,-0xeb)+WhatsBixby_0x524764(0xd6,0xdb,0xda,0xd3,0xd4)+WhatsBixby_0x4e0211(-0xb7,-0xc1,-0xbf,-0xb6,-0xb0));function WhatsBixby_0x582d(){var _0x586c9c=['ble\x20t','799200WoZeSM','reply','1490946vhOXNI','data','*BARD','the\x20r','61208klayHs','\x20AI*\x0a','cess\x20','7UzsnIt','90012yvGZYc','1990128wQfrLC','1009274BeDUyd','*_Una','58564tLkjuS','5PUSyUQ','t_*','o\x20pro','eques'];WhatsBixby_0x582d=function(){return _0x586c9c;};return WhatsBixby_0x582d();}
});

Bixby(
  {
	  pattern: "photoleap ?(.*)",	
	  fromMe: isPublic,
	  desc: "generate image with photoleap",
    type: "ai",
  },
  async (message, match) => {
match = match || message.reply_message.text;
 if (!match) return await message.reply("*_Give me prompt");
const response = await axios.get(`${BASE_URL}api/ai/photoleap?q=${match}&apikey=${API_KEY}`);
(function(_0x5b0a0d,_0x204688){const _0x1b576e=_0x5b0a0d();function _0x408219(_0x546efe,_0x271219,_0x15833a,_0x19dbbe,_0x1040a1){return WhatsBixby_0xfade(_0x15833a- -0x176,_0x19dbbe);}function _0x385295(_0x222e47,_0x2eb616,_0x12ed13,_0x2e1842,_0x167502){return WhatsBixby_0xfade(_0x167502- -0xf8,_0x12ed13);}function _0x2ce2f2(_0x4c0dad,_0x2ef6dc,_0x2b0952,_0x51824a,_0x16277a){return WhatsBixby_0xfade(_0x16277a- -0x1ac,_0x2ef6dc);}function _0x276bfd(_0x382bc0,_0x3b7210,_0x5b4eac,_0x49cbf1,_0x4e1fa5){return WhatsBixby_0xfade(_0x382bc0-0x2fd,_0x49cbf1);}function _0x203d20(_0x122ca8,_0x4bf7f9,_0x335428,_0x2df9ff,_0x14c78c){return WhatsBixby_0xfade(_0x14c78c- -0x26f,_0x2df9ff);}while(!![]){try{const _0x46e920=parseInt(_0x203d20(-0x72,-0x71,-0x76,-0x6e,-0x70))/(0x25b3+0x1*0x4f4+0x6a*-0x67)+-parseInt(_0x2ce2f2(0x4b,0x53,0x52,0x43,0x49))/(-0x148e+-0x2109+0x1*0x3599)+-parseInt(_0x385295(0x101,0xfc,0x103,0xfc,0x103))/(0x1c34+-0xc6a+-0xfc7)*(parseInt(_0x385295(0x107,0x10b,0x104,0x10f,0x105))/(-0xd76+-0x145e+0x21d8))+parseInt(_0x408219(0x78,0x77,0x80,0x76,0x86))/(0x30*-0x4a+-0x83*0x36+0x2987)+parseInt(_0x203d20(-0x79,-0x6f,-0x7c,-0x7b,-0x77))/(-0x11ee+-0x927+-0x909*-0x3)*(-parseInt(_0x408219(0x8a,0x8b,0x86,0x81,0x8b))/(-0x4*-0xdd+-0x23cd+0x2060))+parseInt(_0x203d20(-0x6c,-0x77,-0x72,-0x70,-0x71))/(0x8e*0x17+0x233f+-0x2ff9)+parseInt(_0x385295(0x100,0x103,0x107,0x105,0x108))/(0x21bd+0x1*-0x1981+0x833*-0x1)*(parseInt(_0x203d20(-0x66,-0x6f,-0x6d,-0x6a,-0x6e))/(-0x1*-0x111c+-0x25a3+0x87*0x27));if(_0x46e920===_0x204688)break;else _0x1b576e['push'](_0x1b576e['shift']());}catch(_0x55bb9a){_0x1b576e['push'](_0x1b576e['shift']());}}}(WhatsBixby_0x5e0d,0x7*-0x1afc+-0x65*0x87e+0x662f9));const imgdata=response[WhatsBixby_0x39ba19(0x4f5,0x4ef,0x4fb,0x4ee,0x4fc)][WhatsBixby_0x3e9ea9(0x5cf,0x5cb,0x5d4,0x5d7,0x5d8)+'t'];function WhatsBixby_0x40bd78(_0x25653f,_0x350519,_0x2e1b1c,_0x49b9a2,_0x4ccc09){return WhatsBixby_0xfade(_0x2e1b1c- -0x1f6,_0x350519);}const WhatsBixby_0x16b6e0={};function WhatsBixby_0x3cc133(_0x34e36f,_0x142994,_0x7710a3,_0x1b1013,_0x3e7a75){return WhatsBixby_0xfade(_0x3e7a75-0x22,_0x1b1013);}function WhatsBixby_0xfade(_0x589bdb,_0x1ea0b5){const _0x3dd9a9=WhatsBixby_0x5e0d();return WhatsBixby_0xfade=function(_0x16b6e0,_0x26a300){_0x16b6e0=_0x16b6e0-(-0x145*0x13+0x29c+-0x1777*-0x1);let _0x55f900=_0x3dd9a9[_0x16b6e0];return _0x55f900;},WhatsBixby_0xfade(_0x589bdb,_0x1ea0b5);}WhatsBixby_0x16b6e0[WhatsBixby_0x3e9ea9(0x5d0,0x5d9,0x5d3,0x5db,0x5d9)]=imgdata;function WhatsBixby_0x39ba19(_0x16f06e,_0x391c81,_0x51ba68,_0x59bb70,_0x37fa8f){return WhatsBixby_0xfade(_0x16f06e-0x2fc,_0x59bb70);}const WhatsBixby_0x26a300={};WhatsBixby_0x26a300[WhatsBixby_0x3e9ea9(0x5d0,0x5d9,0x5d7,0x5ce,0x5d2)]=WhatsBixby_0x16b6e0,WhatsBixby_0x26a300[WhatsBixby_0x40bd78(0x5,-0x5,0x4,0x8,0x3)+'on']=CAPTION;const buttonMessage=WhatsBixby_0x26a300;function WhatsBixby_0x3e9ea9(_0x1803a9,_0x2eda05,_0x107b08,_0x592461,_0x508ef5){return WhatsBixby_0xfade(_0x107b08-0x3d1,_0x508ef5);}function WhatsBixby_0x5e0d(){const _0x38c41c=['url','resul','jid','sendM','image','essag','77380XipZYh','1336915wfcZDw','clien','20802qojYbr','data','capti','6JULMZu','273pCtvMv','531348ZCWLMt','848216btdtkS','21250ZJuSVv','27KBaWHe','651800FcyjNd'];WhatsBixby_0x5e0d=function(){return _0x38c41c;};return WhatsBixby_0x5e0d();}function WhatsBixby_0x1d6211(_0x5825dc,_0x38f12c,_0x15bc8f,_0x581777,_0xf56457){return WhatsBixby_0xfade(_0x15bc8f- -0x38c,_0x581777);}message[WhatsBixby_0x40bd78(0x4,-0x6,0x1,0xb,0x1)+'t'][WhatsBixby_0x3cc133(0x227,0x22f,0x22a,0x22e,0x227)+WhatsBixby_0x3cc133(0x211,0x20d,0x21a,0x21a,0x216)+'e'](message[WhatsBixby_0x39ba19(0x500,0x4f9,0x506,0x504,0x4f7)],buttonMessage,{'quoted':message});    
});

Bixby(
  {
    pattern: "blackbox",
    fromMe: isPublic,
    desc: "blackbox ai",
    type: "ai",
  },
  async (message, match) => {
match = match || message.reply_message.text;
 if (!match) return await message.reply("*_Give me any prompt");

const response = await axios.get(`${BASE_URL}api/ai/blackboxai?q=${match}&apikey=${API_KEY}`);    

(function(_0x26188f,_0x5e9027){function _0x2fb7cd(_0x14e0c8,_0x279f3c,_0x53b0b3,_0x1ae159,_0x44a83){return WhatsBixby_0x973c(_0x1ae159-0x51,_0x279f3c);}function _0x1574cd(_0x25c6d9,_0x31328e,_0x56dc3c,_0x16885f,_0x367d42){return WhatsBixby_0x973c(_0x56dc3c-0x1b,_0x31328e);}var _0x79cbcf=_0x26188f();function _0x266c25(_0x5cf511,_0x292c84,_0x4037ce,_0x234e4e,_0x26115d){return WhatsBixby_0x973c(_0x292c84- -0x212,_0x4037ce);}function _0x17c82a(_0x5eb4c0,_0x51adc0,_0x423b71,_0x18b3d1,_0x332565){return WhatsBixby_0x973c(_0x5eb4c0- -0x55,_0x332565);}function _0x56469e(_0xd31809,_0x219362,_0x10e1de,_0x18c691,_0x398e3a){return WhatsBixby_0x973c(_0x18c691- -0x304,_0x398e3a);}while(!![]){try{var _0x2f1cc3=parseInt(_0x1574cd(0xea,0xdc,0xde,0xd5,0xe1))/(0x1586+-0x245*-0x10+-0x39d5)+-parseInt(_0x2fb7cd(0x107,0x113,0x118,0x113,0x115))/(-0x1ebd+-0x2a1+0x2160)*(parseInt(_0x2fb7cd(0x10e,0x112,0x11d,0x118,0x11a))/(-0x188b+0x1e48+-0x1*0x5ba))+parseInt(_0x17c82a(0x63,0x60,0x59,0x5b,0x60))/(0x1905+-0x2372+0xa71)+-parseInt(_0x1574cd(0xe3,0xd8,0xd8,0xdb,0xe0))/(-0x2e0*-0xc+0x8c9+-0x39b*0xc)*(parseInt(_0x266c25(-0x141,-0x14c,-0x151,-0x149,-0x141))/(0xb*-0x187+0x1*-0x495+0x1568))+-parseInt(_0x266c25(-0x15d,-0x156,-0x154,-0x15c,-0x14b))/(-0x2572+0xa5c+-0x277*-0xb)*(parseInt(_0x17c82a(0x6a,0x6d,0x6d,0x74,0x63))/(0xa76+-0x2577+-0x9*-0x301))+parseInt(_0x2fb7cd(0x123,0x11b,0x124,0x11a,0x119))/(-0x1ed*-0xd+-0x3*-0x41e+-0x255a)*(parseInt(_0x56469e(-0x24e,-0x24c,-0x250,-0x249,-0x24e))/(0x1019+-0x29*0x95+0x12*0x6f))+-parseInt(_0x266c25(-0x150,-0x147,-0x14b,-0x14f,-0x146))/(0xc89+0x153b+-0x21b9);if(_0x2f1cc3===_0x5e9027)break;else _0x79cbcf['push'](_0x79cbcf['shift']());}catch(_0x2503cf){_0x79cbcf['push'](_0x79cbcf['shift']());}}}(WhatsBixby_0x4410,-0x23*0x34c9+-0x1*-0x531db+0x611e5));function WhatsBixby_0x973c(_0x3819ed,_0x3dcea5){var _0x5e323d=WhatsBixby_0x4410();return WhatsBixby_0x973c=function(_0x46d2d2,_0x12172c){_0x46d2d2=_0x46d2d2-(-0x6b9*0x1+0x982*0x1+-0x211);var _0x1701c0=_0x5e323d[_0x46d2d2];return _0x1701c0;},WhatsBixby_0x973c(_0x3819ed,_0x3dcea5);}function WhatsBixby_0x5589b8(_0x5c5c61,_0x608e90,_0x2bcde9,_0x10c28b,_0x4f0dc0){return WhatsBixby_0x973c(_0x608e90- -0x24,_0x10c28b);}function WhatsBixby_0xe374f8(_0xb0f213,_0x4163c4,_0x5203e8,_0x5baac9,_0x499020){return WhatsBixby_0x973c(_0x499020- -0x20b,_0x5baac9);}function WhatsBixby_0x5f46f9(_0x380621,_0x1e6a60,_0x408b37,_0x4c1723,_0x1d49a3){return WhatsBixby_0x973c(_0x1d49a3-0x1b9,_0x4c1723);}function WhatsBixby_0x5d0d1f(_0x15dcf5,_0x3f850c,_0x45dd37,_0x198e60,_0xd96f4e){return WhatsBixby_0x973c(_0x15dcf5- -0x13a,_0x198e60);}function WhatsBixby_0x5526de(_0x2f776e,_0x17a8f1,_0x444d8d,_0x65f7ff,_0x5ca9f3){return WhatsBixby_0x973c(_0x17a8f1- -0x119,_0x444d8d);}function WhatsBixby_0x4410(){var _0x279589=['the\x20r','4744696ckqGOg','K\x20BOX','reply','\x20AI*\x0a','1753984klfQLO','o\x20pro','*_Una','1692610aBeUsI','2254826UsoLCK','65Sxziug','t_*','8UGvxDL','eques','*BLAC','118lODPcp','472092zorNkw','ble\x20t','cess\x20','6774vqyDdJ','2361kHEeLj','data','9YkeaHd'];WhatsBixby_0x4410=function(){return _0x279589;};return WhatsBixby_0x4410();}return response[WhatsBixby_0x5526de(-0x57,-0x51,-0x46,-0x50,-0x4c)]?message[WhatsBixby_0x5526de(-0x4c,-0x4c,-0x41,-0x49,-0x4d)](WhatsBixby_0xe374f8(-0x145,-0x144,-0x144,-0x14f,-0x14a)+WhatsBixby_0x5d0d1f(-0x6e,-0x6a,-0x79,-0x6a,-0x6f)+WhatsBixby_0x5526de(-0x4e,-0x4b,-0x4f,-0x53,-0x4c)+'\x0a'+response[WhatsBixby_0xe374f8(-0x14b,-0x13c,-0x140,-0x140,-0x143)][WhatsBixby_0x5526de(-0x51,-0x51,-0x5c,-0x48,-0x51)]):message[WhatsBixby_0xe374f8(-0x145,-0x13d,-0x13e,-0x13f,-0x13e)](WhatsBixby_0x5d0d1f(-0x80,-0x75,-0x7c,-0x7a,-0x7e)+WhatsBixby_0xe374f8(-0x141,-0x13c,-0x141,-0x140,-0x147)+WhatsBixby_0x5f46f9(0x26e,0x27b,0x27a,0x275,0x272)+WhatsBixby_0x5d0d1f(-0x75,-0x7c,-0x6b,-0x6e,-0x7f)+WhatsBixby_0x5d0d1f(-0x70,-0x69,-0x78,-0x6e,-0x65)+WhatsBixby_0x5d0d1f(-0x7a,-0x7f,-0x82,-0x7b,-0x77)+WhatsBixby_0xe374f8(-0x154,-0x148,-0x157,-0x148,-0x14d));
});	  
