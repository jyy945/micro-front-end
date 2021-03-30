import ReactDOM from "react-dom";
import React from "react";
import App from "./App.js";
import './public-path';


function render(props) {
    const {container} = props;
    ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log('子应用react bootstrap');
}

export async function mount(props) {
    console.log("子应用react mount");
    render(props);
}

export async function unmount(props) {
    const { container } = props;
    console.log("子应用react unmount");
    ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}