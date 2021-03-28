import ReactDOM from "react-dom";
import React from "react";
import App from "./App.js";
import './public-path';

ReactDOM.render(<App/>, document.getElementById("root"));

function render() {
    ReactDOM.render(<App />, document.querySelector('#root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('[react16] react app bootstraped');
}

export async function mount(props) {
    console.log('[react16] props from main framework', props);
    render(props);
}

export async function unmount(props) {
    const { container } = props;
    ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}