// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import axios from 'axios'
import Chart from 'react-apexcharts'

// ** Utils
import { kFormatter } from '@utils'
import { Download, MoreVertical, Edit2, Archive, Trash2, StopCircle } from 'react-feather'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Button,
  CardBody,
  CardText,
  Progress,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

const DeplStatSession = props => {
  // ** States
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-analytics/avg-sessions').then(
      res => setData(res.data)
    )
    // console.log(data);
    // return () => setData(null)
  }, [])

  const options = {
      chart: {
        sparkline: { enabled: true },
        toolbar: { show: false }
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      states: {
        hover: {
          filter: 'none',
          colors: 'green'
        }
      },
      colors: ['#ebf0f7', '#ebf0f7', '#ebf0f7'], /* , props.primary, '#ebf0f7', '#ebf0f7' */
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
          borderRadius: 8,
          borderRadiusApplication: 'end'
        }
      },
      tooltip: {
        x: { show: false }
      },
      xaxis: {
        type: 'numeric'
      }
    },
    series = [
      {
        name: 'Sessions',
        data: [75, 125, 225] /* , 175, 125, 75, 25 */
      }
    ]

  return data !== null ? (
    // <Card>
    //   <CardBody>
        <Row className='pb-50'>
          <Col
            sm={{ size: 6, order: 1 }}
            xs={{ order: 2 }}
            className='d-flex justify-content-between flex-column mt-lg-0 mt-2'
          >
            <div className='session-info mb-1 mb-lg-0'>
              <h2 className='fw-bold mb-25'>Startegy Name</h2>
              <CardText className='fw-bold mb-1'>D Date : 24-06-2023</CardText>
              <CardText className='fw-bold mb-1'>Status : 1</CardText>
              <CardText className='fw-bold mb-1'>Broker : 3</CardText>
              <CardText className='fw-bold mb-1'>Mode : paper / Live</CardText>
            </div>
          </Col>
          <Col
            sm={{ size: 6, order: 2 }}
            xs={{ order: 1 }}
            className='d-flex justify-content-between flex-column text-end'>
            <UncontrolledDropdown className='chart-dropdown'>
                <DropdownToggle tag='span' className='cursor-pointer'>
                  <MoreVertical size={18} />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem className='d-flex align-items-center w-100'>
                    <StopCircle size={14} className='me-50' />
                    <span>Stop/Deploy</span>
                  </DropdownItem>
                  <DropdownItem className='d-flex align-items-center w-100'>
                    <Trash2 size={14} className='me-50' />
                    <span>Delete</span>
                  </DropdownItem>
                  <DropdownItem className='d-flex align-items-center w-100'>
                    <Archive size={14} className='me-50' />
                    <span>Archive</span>
                  </DropdownItem>
                  <DropdownItem className='d-flex align-items-center w-100'>
                    <Edit2 size={14} className='me-50' />
                    <span>Status</span>
                  </DropdownItem>
                  <DropdownItem className='d-flex align-items-center w-100'>
                    <Download size={14} className='me-50' />
                    <span>Download</span>
                  </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
        </Row>
    //   </CardBody>
    // </Card>
  ) : null
}
export default DeplStatSession
