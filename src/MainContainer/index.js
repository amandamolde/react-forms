import React, { Component } from 'react';

class MainContainer extends Component {

    render(){
        return(
            <div> Hi {this.props.username}, I'm the MainContainer </div>
        )
    }
}

export default MainContainer;