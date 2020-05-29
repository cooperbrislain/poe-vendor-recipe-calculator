const axios = require('axios');
const CONFIG = require('../config');

module.exports = {
    getChar: async (req, res) => {
        const { accountName, charName } = req.params;
        const { token } = req.headers;
        const headers = { Cookie: `POESESSID=${token}` };
        const params = { accountName, character: charName };
        let url, response;
        try {
            url = `${CONFIG.API_URL}/character-window/get-characters`;
            response = await axios.get(url, { headers, params });
            const char = response.data.find({ name: charName });
            console.log(char);
            url = `${CONFIG.API_URL}/character-window/get-passive-skills`;
            response = await axios.get(url, { headers, params });
            char.skills = response.data;
            url = `${CONFIG.API_URL}/character-window/get-items`;
            response = await axios.get(url, { headers, params });
            char.inv = response.data;
            await res.json(char);
        } catch (e) {
            await res.json(e);
        }
    },
    getCharList: async (req, res) => {

    },
    getChars: async (req, res) => {
        const { accountName } = req.params;
        const { token } = req.headers;
        const headers = { Cookie: `POESESSID=${token}` };
        const params = { accountName };
        console.log('GETCHARS', req.params);
        try {
            let url = `${CONFIG.API_URL}/character-window/get-characters`;
            const response = await axios.get(url, { headers, params });
            await res.json(response.data);
        } catch (e) {
            await res.json(e);
        }
    },
    getCharInv: async (req, res) => {
        const { accountName, charName } = req.params;
        const { token } = req.headers;
        const headers = { Cookie: `POESESSID=${token}` };
        const params = { accountName, character: charName };
        const url = `${CONFIG.API_URL}/character-window/get-items`;
        const response = await axios.get(url, { headers, params });
        await res.json(response.data);
    }
};
