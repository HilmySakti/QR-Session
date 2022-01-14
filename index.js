/* Codded by @HilmySakti
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const chalk = require('chalk');
const { WAconnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');

async function whatsAsena() {
	const conn = new WAconnection();
	conn.logger.level = 'warn';
	conn.version = [2, 2143, 3];

	conn.on('connecting', async () => {
		console.log(`${chalk.green.bold('Queen')}${chalk.blue.bold('Bear')}
${chalk.white.italic('HilmySakti')}
${chalk.blue.italic('[ ! ] connecting to Whatsapp... Please wait.')}`);
	});

	conn.on('open', async () => {
		console.log(
			chalk.green.bold('QR Code: '),
			'' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo()))
		);
		await conn.sendMessage(
			conn.user.jid,
			'' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())),
			MessageType.text
		);
		if (conn.user.jid.startsWith('90')) {
			await conn.sendMessage(
				conn.user.jid,
				'*[ ! ] Please Do Not Share This Code With Anyone ' +
					conn.user.name +
					'*[ ! ] By HilmySakti',
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*[ ! ] Please Do Not Share This Code With Anyone ' +
					conn.user.name +
					'*[ ! ] By HilmySakti',
				MessageType.text
			);
		}
		console.log(
			chalk.green.bold(
				"IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!"
			),
			chalk.green.bold(
				'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

whatsAsena();
