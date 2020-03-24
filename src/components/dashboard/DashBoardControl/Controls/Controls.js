import React from 'react'
import Aux from './../../../hoc/Aux'

import './Contols.css'

const Controls = (props) => (

    <Aux>
    <div className='Controls accordion' id="accordionExample">
        <div className='label'> {props.label} </div>
        <button className='Add' onClick={props.added} >Add</button>
        <button className='Remove' onClick={props.removed} disabled={props.disabled}>Remove</button>
    </div>
    
    </Aux>


);

export default Controls;