var jwt = require('jsonwebtoken');

const verifyUser = (req, res) => {
    try {
        return new Promise(function(resolve, reject) {
            const Header = req.headers["authorization"];
            if (typeof Header !== "undefined") {
                try {
                    const verified = jwt.verify(Header, 'CRSuperTenant');
                    if (verified) {
                        resolve(verified);
                    } else {
                        reject('Invalid User');
                    }
                } catch (error) {
                    reject('Invalid User');
                }
            } else {
                reject('Invalid User');
            }
        })
    } catch (e) {
        logger.warn(e.message);
        res.status(403)
            .send({
                success: false,
                message: e.message,
                data: {}
            });
    }
}

exports.authUser = (req, res, next) => {
    verifyUser(req, res)
        .then(result => {
            req.userId = result.userId;
            req.userTypeId = result.userTypeId;
            next();
        })
        .catch(error => {
            res.status(401)
                .send({
                    status: false,
                    message: error,
                    data: {}
                });
        });
}

exports.authGenerator = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
