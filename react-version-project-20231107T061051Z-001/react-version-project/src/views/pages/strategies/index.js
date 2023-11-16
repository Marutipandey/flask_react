// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import axios from 'axios'

// ** Reactstrap Imports
import { Row, Col, TabContent, TabPane } from 'reactstrap'

// ** Demo Components
import Tabs from './Tabination'
import Breadcrumbs from '@components/breadcrumbs'
import DeployedStrg from './DeployedStrg'
import MyStrg from './MyStrg'
import CreateStrg from './CreateStrg'
import PaperTradingStrg from './PaperTradingStrg'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/pages/page-account-settings.scss'

const StrategiesTabs = () => {
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
                <DeployedStrg />
              </TabPane>
              <TabPane tabId='2'>
                <MyStrg />
              </TabPane>
              <TabPane tabId='3'>
                <CreateStrg />
              </TabPane>
              <TabPane tabId='4'>
                <PaperTradingStrg />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      ) : null}
    </Fragment>
  )
}

export default StrategiesTabs
