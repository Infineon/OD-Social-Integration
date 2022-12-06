const ip = require("ip");
const ipaddress = 'localhost';//ip.address();

module.exports = {
    "port": 3601,
    "ipaddress": ipaddress,
    "environment": "dev",
    "log4js": {
        "fileName": "serverlogs.log",
        "logLevelFormat": "INFO",
        "category": "Development"
    },
	//"paymentUrl": "http://"+ ipaddress + ':9000/paymentSuccess'
};
