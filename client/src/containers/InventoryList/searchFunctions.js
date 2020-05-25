export const searchFunctions = {
    Sorts: {
        level: (a, b) => (a.ilvl-b.ilvl),
            alpha: (a, b) => (a.typeLine-b.typeLine),
    },
    Filters: {
        all: item => true,
        cat: (item, params) => item.category === params.category,
        level: (item, params) => item.ilvl >= params.level_min
            && item.ilvl <= params.level_max,
        string: (item, params) => item.name.search(params.string)
            || item.typeLine.search(params.string)
    },
    combineFilters: (filters, params) =>
        (item) => filters.reduce((pass, filter) => pass && searchFunctions.Filters[filter](item, params), true),
    combineSorts: sorts => sorts,
};
