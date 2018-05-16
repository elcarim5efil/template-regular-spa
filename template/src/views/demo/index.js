import template from './index.html';
import base from 'components/base';
import { demo } from '@/api';

export default base.BaseComponent.extend({
    template,
    config() {
        this.defaults({
            info: {
                title: 'I am waiting'
            }
        });

        this.getInfo();
        this.getEcho();
        this.$ajax.axios({
            url: '/404api',
            ignoreIntercepors: [
                'addHttpRequestHeader'
            ]
        });
    },
    getInfo() {
        demo.getInfo()
            .then((res) => {
                this.data.info = res.data;
                this.$update();
            });
    },
    getEcho() {
        demo.getEcho({
            data: {
                message: 'hello'
            },
            count: 3
        }).then((res) => {
            console.log(res)
        })
    },
    onNotify() {
        this.$notify({
            title: 'title',
            message: 'msg',
            duration: 3000
        });
    }
});