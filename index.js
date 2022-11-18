const config = require('./config.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const log4js = require('log4js');
const path = require("path");
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
//const swaggerSpec = swaggerJSDoc(options);
const usersRouter = require('./users/routes.config');
// const masterRouter = require('./master/routes.config');
//const dashboardRouter = require('./dashboard/routes.config');
const notificationRouter = require('./notifications/routes.config');
//const communityProperties = require('./sandbox/communityProperties/routes.config')
/**
 * log4js configuration for storing logs while App is running
 * */
const loggerDetails = (function() {
    return {
        fileName: function() {
            return config.log4js.fileName;
        },
        categoryObject: function() {
            return config.log4js.category;
        },
        levelFormat: function() {
            return config.log4js.logLevelFormat;
        }
    }
})();

var customSwaggerOptions = {
    explorer: true,
    swaggerOptions: {
        docExpansions: "none",
        persistAuthorization: true,
        authAction: {
            JWT: {
                name: 'JWT',
                schema: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'Authorization',
                    description: ''
                },
                value: 'Bearer <my own JWT token>'
            }
        }
    }
}

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, customSwaggerOptions)
);

// file object by using of method load Appender
log4js.configure({
    appenders: {
        file: {
            type: 'file',
            filename: loggerDetails.fileName(),
            maxLogSize: 10 * 1024 * 1024, // = 10Mb
            backups: 5, // keep five backup files
            compress: true, // compress the backups
            encoding: 'utf-8',
            mode: 0o0640,
            flags: 'w+',
        },
        out: {
            type: 'stdout'
        }
    },
    categories: {
        default: {
            appenders: ['file', 'out'],
            level: loggerDetails.levelFormat()
        }
    }
});

const logger = log4js.getLogger(loggerDetails.categoryObject());

app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
}));
app.use(express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "assets")));

usersRouter.routesConfig(app);
// masterRouter.routesConfig(app);
//dashboardRouter.routesConfig(app);
notificationRouter.routesConfig(app);

// communityProperties.routesConfig(app)

app.listen(config.port, function() {
    logger.info('app listening at port ' + config.ipaddress + ':%s', config.port);
});
