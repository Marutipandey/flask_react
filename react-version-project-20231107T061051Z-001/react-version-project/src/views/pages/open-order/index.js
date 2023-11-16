// ** React Imports
import { Fragment, useContext } from 'react'
// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import React, { useState } from 'react'
import { Button, ButtonGroup, Row, Col, CardText } from 'reactstrap'
import { Link } from 'react-router-dom'
 
const OpenOrder = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Open Order' data={[{ title: 'Trades' }, { title: 'Open Order' }, ]} />
      <div className='bg-white p-2 vh-100'>
        <ButtonGroup className='mb-1 page-menubar' variant="outlined" style={{'margin': 'auto calc(50% - 250px)'}}>
          <Button color='btn btn-outline-primary active'>
            Open Order
          </Button>
          <Button color='btn btn-outline-primary' tag={Link} to={`/pages/executed-order/`}>
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
          Open Order page
        </div>
      </div>
    </Fragment>
  )
}

export default OpenOrder;