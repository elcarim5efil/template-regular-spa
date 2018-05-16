import { view } from './helpers';

export default {
    '/demo': {
        title: 'demo',
        view: view('demo')
    },
    '/demo/page': {
        title: 'demo/page',
        url: '/demo/page/:id',
        view: view('demo/page')
    }
};