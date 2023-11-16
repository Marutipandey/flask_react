// ** React Imports
import { Fragment, useState, useEffect } from 'react'
// ** Reactstrap Imports
import { Row, Col, TabContent, TabPane } from 'reactstrap'
// ** Third Party Components
import axios from 'axios'
// ** Demo Components
import AccessTab from './accessTabs'
import RoboTab from './roboTab'
import BrokersTab from './brokersTab'
import UsersTab from './usersTab'
import ReportTab from './reportTab'

const AccessPageTabs = () => {
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
      // <div>testing</div>
      <Fragment>
        {data !== null ? (
          <Row>
            <Col xs={12}>
              <AccessTab className='mb-2' activeTab={activeTab} toggleTab={toggleTab} />
  
              <TabContent activeTab={activeTab}>
                <TabPane tabId='1'>
                  <RoboTab />
                </TabPane>
                <TabPane tabId='2'>
                  <BrokersTab />
                </TabPane>
                <TabPane tabId='3'>
                  <UsersTab />
                </TabPane>
                <TabPane tabId='4'>
                  <ReportTab />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        ) : null}
      </Fragment>
    )
  }
  
  export default AccessPageTabs