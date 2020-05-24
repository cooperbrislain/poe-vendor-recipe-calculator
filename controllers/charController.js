const axios = require('axios');

module.exports = {
    getChar: async (req, res) => {
        const { accountName } = req.params;
        try {
            await res.json();
        } catch (e) {
            await res.json(e);
        }
    },
    getCharInv: async (req, res) => {
        const { accountName, character } = req.params;
        const { token } = req.headers;
        const headers = { Cookie: `POESESSID=${token}` };
        const params = { accountName, character };
        const url = `http://pathofexile.com/character-window/get-items`;
        const response = await axios.get(url, { headers, params });
        await res.json(response.data);
    }
};
