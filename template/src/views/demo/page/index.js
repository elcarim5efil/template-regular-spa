import template from './index.html';
import base from 'components/base';

export default base.BaseComponent.extend({
    template,
    config() {
        this.defaults({
            info: {
                id: 0
            }
        });
    },
    enter(option) {
        this.data.info.id = option.param.id;
    }
});