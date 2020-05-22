const axios = require('axios');

const POEAPIURL = 'https://pathofexile.com/character-window/get-stash-items';

module.exports = {
    getStashTabs: async (req, res) => {
        const { accountName } = req.params;
        const league = 'Delirium';
        const url = `${POEAPIURL}`;
        const headers = { Cookie: `POESESSID=${token}` };
        const tabIndex = 0;
        const tabs = 1;
        const params = { accountName, league, tabIndex, tabs };
        axios.get(url, { headers, params })
            .then(response => {
                // console.log(response);
                res.json(response.data);
            })
            .catch(err => {
                // console.log(err);
                res.send(err);
            });
    },
    getStashTab: async (req, res) => {
        const { accountName } = req.query;
        const { token } = req.headers;
        const league = 'Delirium';
        const { tabIndex } = req.query || req.params;
        const tabs = 1;
        const url = `${POEAPIURL}`;
        const headers = { Cookie: `POESESSID=${token}` };
        const params = { accountName, league, tabIndex, tabs };
        axios.get(url, { headers, params })
            .then(response => {
                console.log(response.data);
                res.json(response.data);
            })
            .catch(err => {
                console.log(err);
                res.send(err);
            });
    },
    getStash: async (req, res) => {
        const {accountName} = req.params;
        const league = 'Delirium';
        const url = `${POEAPIURL}`;

    },
    getStashInv: async (req, res) => {
        const { accountName } = req.query;
        const { token } = req.headers;
        const league = 'Delirium';
        const tabIndex = req.query.tabIndex || 0;
        const url = `${POEAPIURL}`;
        const headers = { Cookie: `POESESSID=${token}` };
        const params = { accountName, league, tabIndex };
        console.log('GETSTASHINV', params);
        axios.get(url, { headers, params })
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                console.log(err);
                res.send(err);
            });
    }
};
