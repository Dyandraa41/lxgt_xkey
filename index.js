const genId1 = require('sbbp_xid');
const genId2 = require('ottq_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|FcStjosPWB|' + genId2()).digest('base64');
}


module.exports = generateKey;
