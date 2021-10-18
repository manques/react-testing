import React from 'react';

const Hello = props => {

    if(props.name){
        return <h1>Hello, {props.name}</h1>;
    }else {
        return <h1>Hello, World!!</h1>
    }
}

export default Hello;