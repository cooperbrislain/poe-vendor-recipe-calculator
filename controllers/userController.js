const axios = require('axios');

module.exports = {
    getUser: async (req, res) => {
        const { accountName } = req.params;
        const { token } = req.query;
        try {
            await res.json();
        } catch (e) {
            await res.json(e);
        }
    },
    getChars: async (req, res) => {
        const { accountName } = req.params;
        const { token } = req.query;
        const league = 'Delirium';
        const url = 'https://pathofexile.com/character-window/get-characters';
        axios.get(url, {
            headers: {
                Cookie: `POESESSID=${token}`
            },
            params: {
                accountName: accountName
            }
        })
        .then(response => {
            console.log(response.data);
            res.json(response.data);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        });
    }
};
