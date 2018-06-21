import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Select.scss'


const Select = ({ balance, currency,  changeBalance }) => (
  <div styleName="groupField" >
    <p>{`${currency} ${balance.toFixed(3)}`}</p>
    <div styleName="cell" onClick={() => changeBalance(balance / 2)}>1/2</div>
    <div styleName="cell" onClick={() => changeBalance(balance / 4)}>1/4</div>
    <div styleName="cell" onClick={() => changeBalance(balance)}>ALL</div>
  </div>
)

export default cssModules(Select, styles)