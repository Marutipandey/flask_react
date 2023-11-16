
// ** React Imports
import { Fragment, useContext } from 'react'
// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import React, { useState } from 'react'
import { Button, ButtonGroup, Row, Col, CardText } from 'reactstrap'
import { Link } from 'react-router-dom'
import CreateAppPage from './PageCreateApp'
import ShareProject from './ShareProject'
 
const CreatePage = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Strategies' data={[{ title: 'Strategies' }, { title: 'Create' }, ]} />
      <div className='bg-white p-2'>
        <ButtonGroup className='mb-1 page-menubar' variant="outlined" style={{'margin': 'auto calc(50% - 250px)'}}>
          <Button color='btn btn-outline-primary' tag={Link} to={`/pages/deployed/`}>
            Deployed
          </Button>
          <Button color='btn btn-outline-primary' tag={Link} to={`/pages/my-strategies/`}>
            My Strategies
          </Button>
          <Button color='btn btn-outline-primary active'>
            Create
          </Button>
          <Button color='btn btn-outline-primary' tag={Link} to={`/pages/paper-trading/`}>
            Paper Trading
          </Button>
        </ButtonGroup>
        <Row>
          <Col sm='6'>
            <CreateAppPage />
          </Col>
          <Col sm='6'>
            <ShareProject />
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}

export default CreatePage;
