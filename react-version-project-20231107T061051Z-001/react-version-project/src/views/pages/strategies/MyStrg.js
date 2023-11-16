
// ** React Imports
import { Fragment, useContext } from 'react'
// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AvgSession from './AvgSessions'
// ** Reactstrap Imports
import { Button, ButtonGroup, Card, CardHeader, CardTitle, CardFooter, CardText, Input, Label, Row, Col } from 'reactstrap'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'

const MyStrg = () => {
  // ** Context
  const context = useContext(ThemeColors)
  return (
    <div className='bg-white p-2'>
    {/* <CardHeader className='border-bottom mb-2'>
      <CardTitle tag='h4'>My Statistics</CardTitle>
    </CardHeader> */}
      <Row>
        <Col xl='6' md='6' xs='12'>
          <AvgSession className="card" primary={context.colors.primary.main} />
        </Col>
        <Col xl='6' md='6' xs='12'>
          <AvgSession className="card" primary={context.colors.primary.main} />
        </Col>
      </Row>
    </div>
  )
}

export default MyStrg;
