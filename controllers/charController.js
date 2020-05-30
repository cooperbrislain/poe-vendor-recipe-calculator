const axios = require('axios');
const CONFIG = require('../config');

module.exports = {
    getChar: async (req, res) => {
        console.log('GET CHAR');
        const { accountName, charName } = req.params;
        const { token } = req.headers;
        const headers = { Cookie: `POESESSID=${token}` };
        const params = { accountName, character: charName };
        let url, response;
        try {
            url = `${CONFIG.API_URL}/character-window/get-characters`;
            response = await axios.get(url, { headers, params });
            const char = response.data.find(char => char.name === charName);
            url = `${CONFIG.API_URL}/character-window/get-passive-skills`;
            response = await axios.get(url, { headers, params });
            console.log('PASSIVE SKILL TREE', response.data);
            char.skills = response.data;
            url = `${CONFIG.API_URL}/character-window/get-items`;
            response = await axios.get(url, { headers, params });
            char.inv = response.data.items;
            // console.log(char);
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
    },
    getSkillTree: async (req, res) => {
        const { accountName, charName } = req.query;
        const { token } = req.headers;
        try {
            const url = `${CONFIG.API_URL}/character-window/get-passive-skills`;
            const headers = { Cookie: `POESESSID=${token}` };
            const params = { accountName, character: charName, reqData: false };
            const response = await axios.get(url, { headers, params });
            const { skillTreeData } = JSON.parse(response.data.trim());
            console.log('SKILL TREE DATA', skillTreeData);
            await res.json(skillTreeData);
        } catch (e) {
            await res.json(e);
        }
    }
};
