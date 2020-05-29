export const searchFunctions = {
    Sorts: {
        level: (a, b) => (a.ilvl-b.ilvl),
        alpha: (a, b) => (a.typeLine-b.typeLine),
        color: (a, b) => (a-b) // todo: compare a and b gem color, sort r-g-b
    },
    Filters: {
        all: item => true,
        cat: (item, params) => params.category !== 'All' && item.category === params.category,
        subcat: (item, params) => !params.subcat || item.subcat === params.subcat,
        level: (item, params) => item.ilvl >= params.level_min
            && item.ilvl <= params.level_max,
        string: (item, params) =>
            (item.name.toLowerCase().search(params.string.toLowerCase())!==-1 ||
                item.typeLine.toLowerCase().search(params.string.toLowerCase())!==-1),
        canuse: (item, params) =>
            (!item.requirements? true : item.requirements.reduce((pass, req) => {
                switch(req.name) {
                    case 'Level': return pass && params.char.level >= req.value[0][0];
                    case 'Dex': return pass && true;
                    default: return 1;
                }
            }, true))
    },
    combineFilters: (filters, params) =>
            item => filters.reduce((pass, filter) => pass && searchFunctions.Filters[filter](item, params), true),
    combineSorts: sorts => sorts,
};
