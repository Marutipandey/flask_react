// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import axios from 'axios'

// ** Reactstrap Imports
import { Row, Col, TabContent, TabPane } from 'reactstrap'

// ** Demo Components
import Tabs from './Tabing'
import Breadcrumbs from '@components/breadcrumbs'
import OpenOrder from './OpenOrder'
import ExecutedOrder from './ExecutedOrder'
import OrderPosition from './OrderPosition'
import HoldingOrder from './HoldingOrder'
import OrderNotifications from './OrderNotifications'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/pages/page-account-settings.scss'

const TradeTabs = () => {
  // ** States
  const [activeTab, setActiveTab] = useState('1')
  const [data, setData] = useState(null)

  const toggleTab = tab => {
    setActiveTab(tab)
  }

  useEffect(() => {
    axios.get('/account-setting/data').then(response => setData(response.data))
  }, [])

  return (
    <Fragment>
      {data !== null ? (
        <Row>
          <Col xs={12}>
            <Tabs className='mb-2' activeTab={activeTab} toggleTab={toggleTab} />

            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <OpenOrder /> {/*  data={data.general} */}
              </TabPane>
              <TabPane tabId='2'>
                <ExecutedOrder />
              </TabPane>
              <TabPane tabId='3'>
                <OrderPosition />
              </TabPane>
              <TabPane tabId='4'>
                <HoldingOrder />
              </TabPane>
              <TabPane tabId='5'>
                <OrderNotifications />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      ) : null}
    </Fragment>
  )
}

export default TradeTabs
