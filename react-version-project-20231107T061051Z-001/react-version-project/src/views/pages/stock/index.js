// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import axios from 'axios'

// ** Reactstrap Imports
import { Row, Col, TabContent, TabPane } from 'reactstrap'

// ** Demo Components
import Tabs from './Tabs'
import Breadcrumbs from '@components/breadcrumbs'
import StockMIndex from './StockMIndex'
import StockInvst from './StockInvst'
import StockFO from './StockFO'
import StockScanners from './StockScanners'
import StockBackTest from './StockBackTest'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/pages/page-account-settings.scss'

const StockTabs = () => {
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
                <StockMIndex /> {/*  data={data.general} */}
              </TabPane>
              {/* <TabPane tabId='2'>
                <StockInvst />
              </TabPane> */}
              <TabPane tabId='3'>
                <StockFO />
              </TabPane>
              <TabPane tabId='4'>
                <StockScanners />
              </TabPane>
              <TabPane tabId='5'>
                <StockBackTest />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      ) : null}
    </Fragment>
  )
}

export default StockTabs
