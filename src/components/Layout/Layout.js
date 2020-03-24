import React from 'react';
// import Stock from '../stock/stock';
import Aux from './../hoc/Aux';
import './Layout.css'

const Layout = (props) => (
  <Aux>

    <div></div>
    <main className='Content'>
      {props.children}
    </main>

    </Aux>
);


export default Layout;