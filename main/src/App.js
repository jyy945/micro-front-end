import React, {Component} from "react";
import { registerMicroApps, start } from 'qiankun';

class App extends Component {
    componentDidMount() {
        registerMicroApps([
            {
                name: 'sub-react',
                entry: '//localhost:8091',
                container: '#container',
                activeRule: '/sub-react',
            }
        ]);
        start();
    }

    render(){
        return (
            <div id="container"/>
        )
    }
}
export default App;