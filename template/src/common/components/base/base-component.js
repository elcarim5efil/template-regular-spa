/* BaseComponent */
import Regular from 'regularjs';
import { defaults } from '@/common/utils/tools';
// import BaseMixin from './mixin/_mixin';
// import filter from 'widget/filter.js';

const BaseComponent = Regular.extend({
    enter() {
    },

    config(data) {
        this.supr(data);
    },

    defaults(...args) {
        defaults(this.data, ...args);
    },

    reloadPage() {
        // 跳 中转路由 来刷新页面
        // 如果replace === true, 之前历史的记录会被当前替换，即你无法通过浏览器的后退，回到原状态了
        // 文档：http://regularjs.github.io/regular-state/docs/core/nav.html#nav

        // const option = {
        //     replace: true,
        //     transitData: {
        //         url: location.pathname
        //     }
        // };

        setTimeout(() => {
            // router.nav('/app/router/transit', option);
        }, 600);
    },

    leave() {
        // this.axiosCancelEvt();
        this.destroy();
        this.$phase = 'destroyed';
    }
});

// BaseComponent.use(BaseMixin);
// BaseComponent.filter(filter);

export default BaseComponent;