const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger');
const app = express();
const {exec} = require('child_process');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', (req, res) => {
	logger.info('Received: ' + JSON.stringify(req.query));
	const cmd = [ path.join(process.cwd(), 'script.sh'), `"${req.query.text}"` ];
	exec(cmd.join(' '), (err, stdout) => {
		if (err) {
			logger.error(err);
			res.status(200).json({result: 'error', msg: err });
		}
		else {
			logger.info('Message sent. ' + stdout);
			res.status(200).json({result: 'success', msg: stdout });
		}
	});
});


logger.info('--- STARTING -----------------------------------------------------');
app.listen(3000, () => logger.info('Server started: http://localhost:3000'));
