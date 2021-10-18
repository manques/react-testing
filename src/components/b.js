import React, { Component } from "react";
import C from './c';


class B extends Component {
    constructor(props) {
        super(props);
        this.state = { cName: 'B'};
        console.log(`Constructor ${this.state.cName}`);
    }

    static getDerivedStateFromProps(props, state){
        console.log(`Get Derived State From Props B`);
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Get Snapshot Before Update E');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(`component should update ${this.state.cName}`);
    }

    componentDidMount(){
        console.log(`Component did mount ${this.state.cName}`);
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(`component did update ${this.state.cName}`);
    }
    componentWillUnmount(){
        console.log(`Component will unmount ${this.state.cName}`);
    }

    static getDerivedStateFromError(error) {
        console.log(`getDerivedStateFromError ${this.state.cName}`);
    }
    componentDidCatch(error, info) {
        console.log(`component did catch ${this.state.cName}`);
    }
    
    onRender() {
        console.log(`render ${this.state.cName}`);
        return (<C/>);
    }

    render() {
        return(
            <>
                {this.onRender()}
            </>
        );
    }
}

export default B;