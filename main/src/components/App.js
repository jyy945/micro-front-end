import React, {Component} from "react";
import { registerMicroApps, start } from 'qiankun';
import {Link, Route} from 'react-router-dom'
import Home from "./Home";
import About from "./About";

class App extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    componentDidMount() {
        registerMicroApps([
            {
                name: 'reactApp',
                entry: '//localhost:8091',
                container: '#container',
                activeRule: 'app-react',
            },
            {
                name: 'vueApp',
                entry: '//localhost:8092',
                container: '#container',
                activeRule: 'app-vue',
            }
        ]);
        start();
    }
    render(){
        return (
            <div>
                <div>
                    <ul>
                        {/*<li><Link to="/home">Home</Link></li>*/}
                        <li><Link to="/app-vue">About</Link></li>
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