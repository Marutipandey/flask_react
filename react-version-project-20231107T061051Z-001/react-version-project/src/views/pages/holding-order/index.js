// ** React Imports
import { Fragment, useContext } from 'react'
// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import React, { useState } from 'react'
import { Button, ButtonGroup, Row, Col, CardText } from 'reactstrap'
import { Link } from 'react-router-dom'
 
const HoldingOrder = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Holding' data={[{ title: 'Trades' }, { title: 'Holding' }, ]} />
      <div className='bg-white p-2 vh-100'>
        <ButtonGroup className='mb-1 page-menubar' variant="outlined" style={{'margin': 'auto calc(50% - 250px)'}}>
          <Button color='btn btn-outline-primary' tag={Link} to={`/pages/open-order/`}>
            Open Order
          </Button>
          <Button color='btn btn-outline-primary' tag={Link} to={`/pages/executed-order/`}>
            Executed Order
          </Button>
          <Button color='btn btn-outline-primary' tag={Link} to={`/pages/order-position/`}>
            Position
          </Button>
          <Button color='btn btn-outline-primary active'>
            Holding
          </Button>
        </ButtonGroup>
        <div className='vh-100'>
          Holding Order page
        </div>
      </div>
    </Fragment>
  )
}

export default HoldingOrder;