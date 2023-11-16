// ** React Imports
import { Fragment, useState, useEffect } from 'react'
// ** Reactstrap Imports
import { Row, Col, TabContent, TabPane } from 'reactstrap'
// ** Third Party Components
import axios from 'axios'
// ** Demo Components
import Tabs from './Tabs'
import PMSEqsTab from './eqs'
import PMSCdtsTab from './cdts'
import MfsTab from './mfs'
import BondsTab from './bonds'
import FdsTab from './fds'
import NpsTab from './nps'
import InsuranceTab from './insurance'
import PpfEpfTab from './ppf-epf'
import RssTab from './rss'
import OthersTab from './Others'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/pages/page-account-settings.scss'

const PMSTabs = () => {
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
                <PMSEqsTab />
              </TabPane>
              <TabPane tabId='2'>
                <PMSCdtsTab />
              </TabPane>
              <TabPane tabId='3'>
                <MfsTab />
              </TabPane>
              <TabPane tabId='4'>
                <BondsTab />
              </TabPane>
              <TabPane tabId='5'>
                <FdsTab />
              </TabPane>
              <TabPane tabId='6'>
                <NpsTab />
              </TabPane>
              <TabPane tabId='7'>
                <InsuranceTab />
              </TabPane>
              <TabPane tabId='8'>
                <PpfEpfTab />
              </TabPane>
              <TabPane tabId='9'>
                <RssTab />
              </TabPane>
              <TabPane tabId='10'>
                <OthersTab />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      ) : null}
    </Fragment>
  )
}

export default PMSTabs