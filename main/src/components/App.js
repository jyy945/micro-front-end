import React, {Component} from "react";
import { registerMicroApps, start, runAfterFirstMounted } from 'qiankun';
import {Link} from 'react-router-dom'

class App extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    componentDidMount() {
        registerMicroApps([
            {
                name: 'subReact',
                entry: '//localhost:8091',
                container: '#container',
                activeRule: 'app-react',
            },
            {
                name: 'subVue',
                entry: '//localhost:8092',
                container: '#container',
                activeRule: 'app-vue',
            }
        ],{
            beforeLoad: app => console.log("主应用before Load"),
            beforeMount: [
                app => console.log("主应用before mount"),
            ],
            afterMount : [
                app => console.log("主应用after mount"),
            ],
            beforeUnmount  : [
                app => console.log("主应用before unmount"),
            ],
            afterUnmount  : [
                app => console.log("主应用after unmount"),
            ],
        });
        start({
            prefetch: "all"
        });
        runAfterFirstMounted(() => {
            console.log(123123);
        })
    }
    render(){
        return (
            <div>
                <div>
                    <ul>
                        <li><Link to="/app-react">react</Link></li>
                        <li><Link to="/app-vue">vue</Link></li>
                    </ul>
                </div>
                <div className="rightMain">
                    <div id="container"></div>
                </div>
            </div>
        );
    }
}
export default App;