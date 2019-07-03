// request Request User Profile
(function (callback) {
	'use strict';

	const httpTransport = require('https');
	const responseEncoding = 'utf8';
	const httpOptions = {
		hostname: 'api.fitbit.com',
		port: '443',
		path: '/1/user/-/activities/heart/date/today/3m/1sec.json',
		method: 'GET',
		headers: {
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkRMMjIiLCJzdWIiOiIzNzlaOEsiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdzZXQgd2FjdCB3bG9jIiwiZXhwIjoxNTYyNjYyNjI0LCJpYXQiOjE1NjIxMTcwNjl9.p1r7AI6aEvI-5iTYe364Xl3jnxi1KzxazbZz1ClMPic'
		}
	};
	httpOptions.headers['User-Agent'] = 'node ' + process.version;

	const request = httpTransport
		.request(httpOptions, res => {
			let responseBufs = [];
			let responseStr = '';

			res
				.on('data', chunk => {
					if (Buffer.isBuffer(chunk)) {
						responseBufs.push(chunk);
					} else {
						responseStr = responseStr + chunk;
					}
				})
				.on('end', () => {
					responseStr =
						responseBufs.length > 0 ?
						Buffer.concat(responseBufs).toString(responseEncoding) :
						responseStr;

					callback(null, res.statusCode, res.headers, responseStr);
				});
		})
		.setTimeout(0)
		.on('error', error => {
			callback(error);
		});
	request.write('');
	request.end();
})((error, statusCode, headers, body) => {
	console.log('ERROR:', error);
	console.log('STATUS:', statusCode);
	console.log('HEADERS:', JSON.stringify(headers));
	console.log('BODY:', body);
});
