import regularState from 'regular-state';
import Layout from '@/common/layout';
import { route } from './helpers';

import demo from './demo';
import exception from './exception';

const router = regularState()
    .state({
        app: {
            view: Layout
        }
    })
    .state(route('app.', {
        ...demo,
        ...exception
    }));

router.on('notfound', () => {
    router.go('app.exception/404', {
        replace: true
    });
});

router.on('begin', (evt) => {
    console.log(evt);
});

export default router;
