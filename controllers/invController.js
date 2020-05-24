const axios = require('axios');
const CONFIG = require('../config');

module.exports = {
    getAllInv: async (req, res) => {
        const { token } = req.headers;
        const { accountName } = req.query;
        const league = 'Delirium'; // todo more dynamic? config?

        let everything = [];
        let url, response;
        const headers = { Cookie: `POESESSID=${token}` };
        let params = { accountName };

        console.log('GETALLINV', params);
        // get stash tabs
        url = `${CONFIG.API_URL}/character-window/get-stash-items`;
        params = { accountName, league };
        response = await axios.get(url, { headers, params });
        const { numTabs } = response.data;

        // get stash tab inventories
        for (let i=0; i<numTabs; i++) {
            params.tabIndex = i;
            response = await axios.get(url, { headers, params });
            const { items } = response.data;
            everything = [...everything, ...items];
        }

        // get char list
        url = `${CONFIG.API_URL}/character-window/get-characters`;
        params = { accountName };
        response = await axios.get(url, { headers, params });
        const chars = response.data.map(char => char.name);
        console.log('CHARACTERS', chars);

        // get char inventories
        url = `${CONFIG.API_URL}/character-window/get-items`;
        for (const character of chars) {
            params = { accountName, character };
            response = await axios.get(url, { headers, params });
            const { items } = response.data;
            everything = [...everything, ...items];
        }

        // spit it all out.
        await res.json({ items: everything });
    }
};
