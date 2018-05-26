import React, { Component } from 'react'
import { connect } from 'redaction'
import actions from 'redux/actions'

import PageHeadline from 'components/PageHeadline/PageHeadline'
import Table from 'components/Table/Table'

import Row from './Row/Row'


const filterHistory = (items, filter) => {
  if (filter === 'SENT') {
    return items.filter(({ direction }) => direction === 'in')
  }

  if (filter === 'RECEIVED') {
    return items.filter(({ direction }) => direction === 'out')
  }

  return items
}

@connect(({ user: { ethData, btcData, tokenData }, history: { transactions, filter } }) => ({
  items: filterHistory(transactions, filter),
  ethAddress: ethData.address,
  btcAddress: btcData.address,
}))
export default class Balances extends Component {

  componentDidMount() {
    const { ethAddress, btcAddress } = this.props

    actions.user.setTransactions(ethAddress, btcAddress)
  }

  render() {
    const { items } = this.props

    const titles = [ 'Coin', 'Status', 'Amount' ]

    return (
      <section>
        <PageHeadline subtitle="Balances" />
        <Table
          titles={titles}
          rows={items}
          rowRender={(row, index) => (
            <Row key={index} {...row} />
          )}
        />
      </section>
    )
  }
}