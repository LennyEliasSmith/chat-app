import React from 'react';

class Hello extends React.Component{

    
    render(){
        
        return(

            <div>
                <h1>This is a test of {this.props.brand}</h1>
                <p>Hello  {this.props.name}</p>
            </div>
        );
    }

}

export default Hello;