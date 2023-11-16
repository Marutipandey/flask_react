import React, { useState } from 'react'
// ** Reactstrap Imports
import { Button, ButtonGroup, Card, CardHeader, CardTitle, CardFooter, CardText, Input, Label, Row, Col } from 'reactstrap'
import CreateAppPage from './PageCreateApp'
import ShareProject from './ShareProject'
 
const CreateStrg = () => {
  return (
    <div className='bg-white p-2'>
      {/* <CardHeader className='border-bottom mb-2'>
        <CardTitle tag='h4'>Create Statistics</CardTitle>
      </CardHeader> */}
      <Row>
        <Col sm='6'>
          <CreateAppPage />
        </Col>
        <Col sm='6'>
          <ShareProject />
        </Col>
      </Row>
    </div>
  )
}

export default CreateStrg;
