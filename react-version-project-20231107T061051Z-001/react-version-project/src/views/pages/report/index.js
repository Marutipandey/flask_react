// ** React Imports
import { Fragment, useContext } from 'react'
// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
// ** Reactstrap Imports
import { Row, Col, Button, Label } from 'reactstrap'
import { Search } from 'react-feather'
/*, MessageSquare, Menu, PhoneCall, Video, MoreVertical, Mic, Image, Send */
import PickerDefault from '../../forms/form-elements/datepicker/PickerDefault'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const ReportApp  = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Report' data={[{ title: 'Report' }/*, { title: 'Charts' }, */]} />
      <div className='bg-white p-2 vh-100'>
        <Row className='match-height'>
          <Col sm='3'>
            <PickerDefault label="From Date" />
          </Col>
          <Col sm='3'>
            <PickerDefault label="To Date" />
          </Col>
          <Col className='col-sm-3 justify-content-end align-items-baseline'>
            <Button tag={Label} className='mb-50 m-0 d-flex' size='sm' color='primary' onClick={function() { console.log('click'); }}>
              <Search size={14} className='d-none d-lg-block' />
              <span className='mx-1'>Search</span>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col sm="12 py-1">
            No Records found
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}

export default ReportApp;