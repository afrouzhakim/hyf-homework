const mul = function (req, res) {
    const { first } = req.params;
    const { second } = req.params;
    const mult = first * second;
    res.send(`${first} *${second} =${mult}`);
}
module.exports = mul;
