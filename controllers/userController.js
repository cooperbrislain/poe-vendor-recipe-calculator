module.exports = {
    getUser: async (req, res) => {
        const { accountName } = req.params;
        try {
            await res.json();
        } catch (e) {
            await res.json(e);
        }
    },
    getChars: async (req, res) => {
        const { accountName } = req.params;
    }
};
