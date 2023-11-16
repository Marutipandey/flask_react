
// ** React Imports
import { Fragment, useContext } from 'react'
// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import React, { useState } from 'react'
import { Button, ButtonGroup, Row, Col, CardText } from 'reactstrap'
import { Link } from 'react-router-dom'
 
const MyIndex = () => {
  return (
    <Fragment>
      <Breadcrumbs title='My Index' data={[{ title: 'Stock' }, { title: 'My Index' }, ]} />
      <div className='bg-white p-2 vh-100'>
        <ButtonGroup className='mb-1 page-menubar' variant="outlined" style={{'margin': 'auto calc(50% - 250px)'}}>
          <Button color='btn btn-outline-primary' tag={Link} to={`/pages/portfolio/`}>
            Portfolio
          </Button>
          <Button color='btn btn-outline-primary active'>
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
          My Index page
        </div>
      </div>
    </Fragment>
  )
}

export default MyIndex;
