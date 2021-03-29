import './public-path';
import Vue from 'vue';
import App from './App.vue';

const root = document.createElement("div");
root.id="root";
document.body.appendChild(root);
Vue.config.productionTip = false;

let router = null;
let instance = null;
function render(props = {}) {
    const { container } = props;
    new Vue({
        render: h => h(App)
    }).$mount(root);
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
    console.log('[vue] props from main framework', props);
    render(props);
}
export async function unmount() {
    instance.$destroy();
    instance.$el.innerHTML = '';
    instance = null;
    router = null;
}