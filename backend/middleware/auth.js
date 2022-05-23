const jwt = require("jsonwebtoken");


function auth(req, res, next) {
    const token = req.headers["x-auth-token"];
    if (!token) return res.status(401).send("Access denied. No token provided.");

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        return next();
    } catch (ex) {
        return res.status(400).send("Invalid token from auth.");
    }
}


module.exports = auth;