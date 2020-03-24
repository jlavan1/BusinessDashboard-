import React from 'react';

import './DB.css'
import  DBComponents from './DBComponents/DBComponents'

const db = (props) => {

    let transformedComponents = Object.keys(props.components)
    .map(compKey =>{
        return [...Array(props.components[compKey])].map((_, i) =>{
            return <DBComponents key={compKey + i} type={compKey} />;
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if (transformedComponents.length === 0 ){
        transformedComponents = <p> Please Add Your Custom Business Components </p>
    }

    return(
        <div className='DB'>
            {transformedComponents}
            {/* <DBComponents type="stock"/>
            <DBComponents type="news"/>
            <DBComponents type="reminder"/>
            <DBComponents type="weather"/> */}
        </div>
    );

};

export default db;