const axios = require('axios');
const CONFIG = require('../config');

module.exports = {
    getStashTabs: async (req, res) => {
        const { accountName } = req.params;
        const { token } = req.headers;
        const league = 'Delirium';
        const url = `${CONFIG.API_URL}/character-window/get-stash-items`;
        const headers = { Cookie: `POESESSID=${token}` };
        const tabIndex = 0;
        const tabs = 1;
        const params = { accountName, league, tabIndex, tabs };
        axios.get(url, { headers, params })
            .then(response => {
                res.json(response.data);
            })
            .catch(err => {
                res.send(err);
            });
    },
    getStashTab: async (req, res) => {
        const { accountName } = req.query;
        const { token } = req.headers;
        const league = 'Delirium';
        const { tabIndex } = req.query || req.params;
        const tabs = 1;
        const url = `${CONFIG.API_URL}/character-window/get-stash-items`;
        const headers = { Cookie: `POESESSID=${token}` };
        const params = { accountName, league, tabIndex, tabs };
        let response = await axios.get(url, { headers, params });
        const { numTabs } = response.data;
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
        const url = `${CONFIG.API_URL}/character-window/get-stash-items`;
        const headers = { Cookie: `POESESSID=${token}` };
        const params = { accountName, league };
        console.log('GETSTASHINV', params);
        let response = await axios.get(url, { headers, params });
        const { numTabs } = response.data;
        let everything = [];
        for (let i=0; i<numTabs; i++) {
            params.tabIndex = i;
            let response = await axios.get(url, { headers, params });
            const { items } = response.data;
            everything = [...everything, ...items];
        }
        console.log(everything);
        await res.json({ items: everything });
    }
};
