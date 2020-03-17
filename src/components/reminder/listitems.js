import React from 'react';
import './listitems.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Checkbox from './checkbox'

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div className="list" key={item.key}>
                <p> 
                    <Checkbox className="checkbox"/>
                    
                    {item.text}
                
                    <span>
                        <FontAwesomeIcon className="faicons" 
                        icon='trash'
                        onClick={ () => props.deleteItem(item.key)}/>
                    </span>
                </p> 
            </div>
        })
    return(
        <div>{listItems}</div>
    )
}

export default ListItems;