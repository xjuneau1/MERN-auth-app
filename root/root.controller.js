function list(req, res, next) {
    res.json({ message: "Hey! This is your server response!" });
}

module.exports = {
    list: [list]
}