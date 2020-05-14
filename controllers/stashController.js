const axios = require('axios');

module.exports = {
    getStashes: async (req, res) => {
        const { accountName } = req.params;
        const league = 'Delirium';
        const url = 'pathofexile.com/character-window/get-stash-items';
        axios.get(url, {
            headers: {
                Cookie: `POESESSID=${token}`
            },
            params: {
                accountName: accountName
            }
        })
        .then(response => {
            // console.log(response);
            res.json(response.data);
        })
        .catch(err => {
            // console.log(err);
            res.send(err);
        });
    },
};
