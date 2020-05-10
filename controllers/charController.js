module.exports = {
    getChar: async (req, res) => {
        const { accountName } = req.params;
        try {
            await res.json();
        } catch (e) {
            await res.json(e);
        }
    },
};
