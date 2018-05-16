import router from '@/router';

export default {
    start() {
        router.start({
            // html5: true,
            view: document.getElementById('app') //顶层容器节点
        });
    }
};