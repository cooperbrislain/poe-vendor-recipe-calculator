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
        try {
            // get stash tabs
            url = `${CONFIG.API_URL}/character-window/get-stash-items`;
            params = { accountName, league, tabs: 1 };
            response = await axios.get(url, { headers, params });
            const { numTabs, tabs } = response.data;

            // get stash tab inventories
            for (let i = 0; i < numTabs; i++) {
                params.tabIndex = i;
                response = await axios.get(url, { headers, params });
                const { items } = response.data;
                console.log(`FOUND ${items.length} ITEMS IN STASH ${i}`);
                // label where they are stashed
                items.forEach(item => {
                    item.location = { type: 'stash', tabIndex: tabs[i].i, name: tabs[i].n }
                });
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
                console.log(`FOUND ${items.length} ITEMS ON ${character}`);
                // label who has them
                items.forEach(item => {
                    item.location = { type: 'char', character, name: character };
                });
                everything = [...everything, ...items];
            }

            // do some server-side transformation

            console.log(`FOUND ${everything.length} TOTAL ITEMS`);

            let categories = {};
            everything.forEach(item => {
                // pull the category and subcategory out of the icon path and assign them to params
                const rx = /http:\/\/web\.poecdn\.com\/image\/Art\/2DItems\/(.+)\.png/;
                const result = rx.exec(item.icon);
                if (result) {
                    const cats = result[1].split('/');
                    if (cats[0]) item.category = cats[0];
                    if (cats[1]) item.subcat = cats[1];
                    item.catstring = result[0];
                    if (categories[item.category] === undefined) {
                        categories[item.category] = { subcats: {} }
                    }
                    categories[item.category].subcats[item.subcat] = 1;
                }
            });

            console.log(`FOUND ${Object.keys(categories).length} CATEGORIES`)
            // spit it all out.
            await res.json({ items: everything, categories });
        } catch (err) {
            console.log('ERROR',err);
            await res.send(err);
        }
    }
};
