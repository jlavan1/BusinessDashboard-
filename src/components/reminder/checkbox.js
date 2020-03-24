import React from 'react';

class Checkbox extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            box: false
        }
    }

    render() {
        return (
            <input type="checkbox" name="box" 
            //checked={this.state.box} 
            onChange={this.onCheck}/>
        )}
}

export default Checkbox;