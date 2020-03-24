import React from 'react';
import './DashBoardControl.css';
import Controls from './Controls/Controls';

const compControls =[
    { label: 'Stock', type: 'stock'  },
    { label: 'News', type: 'news'  },
    { label: 'Reminder', type: 'reminder'  },
    { label: 'Weather', type: 'weather'  }

];

const DashBoardControl = (props) => (
    <div className='DashBoardControl'>
        {compControls.map(ctrl => (
            <Controls 
            key={ctrl.label} 
            label={ctrl.label}
            
            added={() => props.componentAdded(ctrl.type)}
            removed={() => props.componentRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}/>
        ))}


    </div>

);

export default DashBoardControl;