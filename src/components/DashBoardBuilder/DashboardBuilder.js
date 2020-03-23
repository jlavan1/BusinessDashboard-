import React, {Component } from 'react';
import Aux from '../hoc/Aux';
import DB from '../dashboard/DB';
import DashBoardControl from './../dashboard/DashBoardControl/DashBoardControl'

class DashBoardBuilder extends Component{

    state = {
        components: {
            stock: 0,
            weather: 0,
            news: 0,
            reminder: 0
        }
    }

    addComponentHandler = (type) =>{
        const oldCount = this.state.components[type];
        const updateCount = oldCount + 1;
        const updatedComponents = {
            ...this.state.components
        };

        updatedComponents[type] = updateCount

        this.setState({components: updatedComponents})

    }

    RemoveComponentHandler = (type) =>{
        const oldCount = this.state.components[type];
        if (oldCount <=0){
            return;
        }
        const updateCount = oldCount - 1;
        const updatedComponents = {
            ...this.state.components
        };

        updatedComponents[type] = updateCount
        this.setState({components: updatedComponents})
        
    }
    render (){
        const disabledInfo = {
            ...this.state.components
        };
        for( let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <DB components={this.state.components}/>
                <DashBoardControl 
                componentAdded={this.addComponentHandler} 
                componentRemoved={this.RemoveComponentHandler}
                disabled={disabledInfo}/>
            </Aux>
        )
    }
}

export default DashBoardBuilder;