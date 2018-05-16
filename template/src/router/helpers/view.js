export default function view(path) {
    return function(options, resolve) {
        console.log(`@/views/${path}`);
        return import(`@/views/${path}`).then((s) => {
            resolve(s.default);
        });
    };
}