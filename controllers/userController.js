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
        const { accountName } = req.query;
        const { token } = req.headers;
        const league = 'Delirium';
        const url = 'https://pathofexile.com/character-window/get-characters';
        const headers = { Cookie: `POESESSID=${token}` };
        const params = { accountName };
        axios.get(url, { headers, params })
        .then(response => {
            res.json(response.data);
        })
        .catch(err => {
            // console.log(err);
            res.send(err);
        });
    },
    getStashTabs: async (req, res) => {
        const { accountName } = req.query;
        const { token } = req.headers;
        const league = 'Delirium';
        const tabIndex = 0;
        const tabs = 1;
        const url = 'https://pathofexile.com/character-window/get-stash-items';
        const headers = { Cookie: `POESESSID=${token}` };
        const params = { accountName, league, tabIndex, tabs };
        axios.get(url, { headers, params })
            .then(response => {
                res.json(response.data.tabs);
            })
            .catch(err => {
                res.send(err);
            });
    },
    getStash: async (req, res) => {
        const { accountName } = req.query;
        const { token } = req.headers;
        const league = 'Delirium';
        const tabIndex = 0;
        const tabs = 1;
        const url = 'https://pathofexile.com/character-window/get-stash-items';
        const headers = { Cookie: `POESESSID=${token}` };
        const params = { accountName, league, tabIndex, tabs };
        axios.get(url, { headers, params })
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.send(err);
            });
    }
};
