
// ** React Imports
import { Fragment, useContext } from 'react'
// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import React, { useState } from 'react'
import { Button, ButtonGroup, Row, Col, CardText } from 'reactstrap'
import { Link } from 'react-router-dom'
 
const PortfolioUI = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Portfolio' data={[{ title: 'Stock' }, { title: 'Portfolio' }, ]} />
      <div className='bg-white p-2 vh-100'>
        <ButtonGroup className='mb-1 page-menubar' variant="outlined" style={{'margin': 'auto calc(50% - 250px)'}}>
          <Button color='btn btn-outline-primary active'>
            Portfolio
          </Button>
          <Button color='btn btn-outline-primary' tag={Link} to={`/pages/my-index/`}>
            My Index
          </Button>
          <Button color='btn btn-outline-primary' tag={Link} to={`/pages/back-test/`}>
            Back-test
          </Button>
          <Button color='btn btn-outline-primary' tag={Link} to={`/pages/scanners/`}>
            Scanners
          </Button>
        </ButtonGroup>
        <div className='vh-100'>
          Portfolio page
        </div>
      </div>
    </Fragment>
  )
}

export default PortfolioUI;
