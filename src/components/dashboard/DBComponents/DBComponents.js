import React, { Component } from 'react';
import PropType from 'prop-types';
import Stock from './../../stock/stock';
import News from './../../news/newsApi';
import Weather from './../../weather/weatherEngine';
import Reminder from './../../reminder/reminder';


class DBComponents extends Component {

    render() {
        let components = null;

        switch (this.props.type) {
            case ('stock'):
                components = <div> <Stock /> </div>;
                break;
            case ('news'):
                components = <div> <News /> </div>;
                break;
            case ('reminder'):
                components = <div> <Reminder /> </div>;
                break;
            case ('weather'):
                components = <div> <Weather location="Houston, USA"/> </div>;;
                break;
            default:
                components = null;
        }

        return components;

    }
}

DBComponents.PropType = {
    type: PropType.string.isRequired
};

export default DBComponents;