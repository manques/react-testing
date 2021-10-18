import React, { Component } from "react";
import B from './b';

class A extends Component {
    constructor(props) {
        super(props);
        this.state = { cName: 'A'};
        console.log(`Constructor ${this.state.cName}`);
    }

    static getDerivedStateFromProps(props, state){
        console.log(`Get Derived State From Props A`);
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Get Snapshot  Before Update A');
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
        return (<B/>);
    }

    render() {
        return(
            <>
                {this.onRender()}
            </>
        );
    }
}

export default A;
