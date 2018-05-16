import { view, route } from './helpers';

export default route('exception', {
    '/404': {
        title: 404,
        view: view('exception/404')
    },
    '/500': {
        title: 500,
        view: view('exception/500')
    }
});