/*Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic, tiny } = require("../lib/");
const { BASE_URL, API_KEY } = require("../config");
const axios = require("axios");

Bixby({
          pattern: "revtxt",
          fromMe: isPublic,
          desc: "reverse the given text",
          type: "tools",
        },
          async (m, match) => {
var _0x25cac8=_0x1f99;(function(_0x6032d7,_0x35c4a0){var _0x31ae6a=_0x1f99,_0xdf0a04=_0x6032d7();while(!![]){try{var _0x2b1ef6=-parseInt(_0x31ae6a(0x11e))/0x1+-parseInt(_0x31ae6a(0x11d))/0x2+parseInt(_0x31ae6a(0x120))/0x3+parseInt(_0x31ae6a(0x11f))/0x4+parseInt(_0x31ae6a(0x121))/0x5*(-parseInt(_0x31ae6a(0x11a))/0x6)+parseInt(_0x31ae6a(0x11c))/0x7*(parseInt(_0x31ae6a(0x118))/0x8)+-parseInt(_0x31ae6a(0x125))/0x9*(parseInt(_0x31ae6a(0x123))/0xa);if(_0x2b1ef6===_0x35c4a0)break;else _0xdf0a04['push'](_0xdf0a04['shift']());}catch(_0x26d3a9){_0xdf0a04['push'](_0xdf0a04['shift']());}}}(_0x23da,0x2df33),match=match||m[_0x25cac8(0x119)][_0x25cac8(0x116)]);function _0x23da(){var _0x3e968a=['1367303gPmbAk','340230iZioRR','18079fPSjQI','1366252hjwKMY','138429jIFvpF','77770UiDdme','reverse','99910aSoAaR','reply','18WMyyGM','text','Give\x20me\x20a\x20text\x20to\x20reverse','8njxWuR','reply_message','72DMBisL','join'];_0x23da=function(){return _0x3e968a;};return _0x23da();}function _0x1f99(_0x48f7c8,_0x2a53ab){var _0x23dab0=_0x23da();return _0x1f99=function(_0x1f99c1,_0x1107fc){_0x1f99c1=_0x1f99c1-0x116;var _0x321800=_0x23dab0[_0x1f99c1];return _0x321800;},_0x1f99(_0x48f7c8,_0x2a53ab);}if(!match)return await m[_0x25cac8(0x124)](_0x25cac8(0x117));await m[_0x25cac8(0x124)](match['split']('')[_0x25cac8(0x122)]()[_0x25cac8(0x11b)](''));
});

Bixby({
          pattern: "unrevtxt",
          fromMe: isPublic,
          desc: "reverse the given text",
          type: "tools",
        },
          async (m, match) => {
function _0x46b8(){var _0xbccdb4=['1784cmKbDS','1397630wPpIHh','2DINyaF','14334rPpBlM','text','7969375QwBbNs','12900051qpBjvT','9663garrZb','1662179KAEtBQ','split','Give\x20me\x20a\x20text\x20to\x20unreverse','55QGKNBk','reply','1771xsDKJH','7299224qjIJYE','join'];_0x46b8=function(){return _0xbccdb4;};return _0x46b8();}var _0x29a97c=_0x3420;(function(_0x4d4e4d,_0x3f761d){var _0xc797ba=_0x3420,_0x20f6cf=_0x4d4e4d();while(!![]){try{var _0x33b0d0=-parseInt(_0xc797ba(0xa2))/0x1*(-parseInt(_0xc797ba(0x9c))/0x2)+-parseInt(_0xc797ba(0xa1))/0x3*(parseInt(_0xc797ba(0xaa))/0x4)+-parseInt(_0xc797ba(0x9f))/0x5+parseInt(_0xc797ba(0x9d))/0x6*(parseInt(_0xc797ba(0xa7))/0x7)+parseInt(_0xc797ba(0xa8))/0x8+parseInt(_0xc797ba(0xa0))/0x9+-parseInt(_0xc797ba(0xab))/0xa*(parseInt(_0xc797ba(0xa5))/0xb);if(_0x33b0d0===_0x3f761d)break;else _0x20f6cf['push'](_0x20f6cf['shift']());}catch(_0xb716b6){_0x20f6cf['push'](_0x20f6cf['shift']());}}}(_0x46b8,0xd798a),match=match||m['reply_message'][_0x29a97c(0x9e)]);function _0x3420(_0x4eec78,_0x4151ee){var _0x46b8f9=_0x46b8();return _0x3420=function(_0x34201f,_0x508ab8){_0x34201f=_0x34201f-0x9c;var _0x1aa42a=_0x46b8f9[_0x34201f];return _0x1aa42a;},_0x3420(_0x4eec78,_0x4151ee);}if(!match)return await m[_0x29a97c(0xa6)](_0x29a97c(0xa4));await m[_0x29a97c(0xa6)](match[_0x29a97c(0xa3)]('')['reverse']()[_0x29a97c(0xa9)](''));
});

Bixby(
  {
    pattern: "ccgen",
    fromMe: isPublic,
    desc: "generate cc from bin",
    type: "tools",
  },
  async (message, match) => {
match = match || message.reply_message.text;
 if (!match) return await message.reply("*_Give me any bin*");

const response = await axios.get(`${BASE_URL}api/ccgen?text=${match}&apikey=${API_KEY}`);    

    if (response.data) {
      const ccdata = response.data.result.map(card => {
        return `CardNumber: ${card.CVV}\nExpirationDate: ${card.ExpirationDate}\nCVV: ${card.CardNumber}\n\n`;
      }).join('');

      return message.reply(tiny(`*CC GENERATED*\n\n${ccdata}`));
    } else {
      message.reply('api key limit is over');
    }

});
