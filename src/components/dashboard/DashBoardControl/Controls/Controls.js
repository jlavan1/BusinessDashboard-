import React from 'react'

import './Contols.css'

const Controls = (props) => (

    <div className='Controls'>
        <div className='label'> {props.label} </div>
        <button className='Add' onClick={props.added}>Add</button>
        <button className='Remove' onClick={props.removed} disabled={props.disabled}>Remove</button>
    </div>


);

export default Controls;