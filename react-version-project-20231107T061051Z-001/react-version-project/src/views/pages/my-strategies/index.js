
// ** React Imports
import { Fragment, useContext } from 'react'
// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import React, { useState } from 'react'
import { Button, ButtonGroup, Row, Col, CardText } from 'reactstrap'
import { Link } from 'react-router-dom'
import AvgSession from './AvgSessions'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'

const MyStrategies = () => {
  // ** Context
  const context = useContext(ThemeColors)
  return (
    <Fragment>
      <Breadcrumbs title='Strategies' data={[{ title: 'Strategies' }, { title: 'My Strategies' }, ]} />
      <div className='bg-white p-2'>
        <ButtonGroup className='mb-1 page-menubar' variant="outlined" style={{'margin': 'auto calc(50% - 250px)'}}>
          <Button color='btn btn-outline-primary' tag={Link} to={`/pages/deployed/`}>
            Deployed
          </Button>
          <Button color='btn btn-outline-primary active'>
            My Strategies
          </Button>
          <Button color='btn btn-outline-primary' tag={Link} to={`/pages/create-page/`}>
            Create
          </Button>
          <Button color='btn btn-outline-primary' tag={Link} to={`/pages/paper-trading/`}>
            Paper Trading
          </Button>
        </ButtonGroup>
        <Row>
          <Col xl='6' md='6' xs='12'>
            <AvgSession className="card" primary={context.colors.primary.main} />
          </Col>
          <Col xl='6' md='6' xs='12'>
            <AvgSession className="card" primary={context.colors.primary.main} />
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}

export default MyStrategies;
