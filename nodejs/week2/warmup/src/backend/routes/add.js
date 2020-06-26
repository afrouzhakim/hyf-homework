const add = function (req, res) {
    const { first } = req.query;
    const { second } = req.query;

    const add = Number(first) + Number(second);
    res.send(`${first} + ${second} = ${add}`);
}
module.exports = add;