export default function(prefix, routes) {
    return Object.keys(routes).reduce((res, key) => {
        res[`${prefix}${key}`] = routes[key];
        return res;
    }, {});
}