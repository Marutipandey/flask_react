// ** React Imports
import { Fragment, useContext } from 'react'
// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import React, { useState } from 'react'
import { Button, ButtonGroup, Row, Col, CardText } from 'reactstrap'
import { Link } from 'react-router-dom'
 
const ExecutedOrder = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Executed Order' data={[{ title: 'Trades' }, { title: 'Executed Order' }, ]} />
      <div className='bg-white p-2 vh-100'>
        <ButtonGroup className='mb-1 page-menubar' variant="outlined" style={{'margin': 'auto calc(50% - 250px)'}}>
          <Button color='btn btn-outline-primary' tag={Link} to={`/pages/open-order/`}>
            Open Order
          </Button>
          <Button color='btn btn-outline-primary active'>
            Executed Order
          </Button>
          <Button color='btn btn-outline-primary' tag={Link} to={`/pages/order-position/`}>
            Position
          </Button>
          <Button color='btn btn-outline-primary' tag={Link} to={`/pages/holding-order/`}>
            Holding
          </Button>
        </ButtonGroup>
        <div className='vh-100'>
          Executed Order page
        </div>
      </div>
    </Fragment>
  )
}

export default ExecutedOrder;