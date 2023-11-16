// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import axios from 'axios'
import Chart from 'react-apexcharts'

// ** Utils
import { kFormatter } from '@utils'
import { Copy, MoreVertical, Edit2, Trash2, Eye } from 'react-feather'

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

const AvgSessions = props => {
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
    <Card>
      <CardBody>
        <Row className='pb-50'>
          <Col
            sm={{ size: 6, order: 1 }}
            xs={{ order: 2 }}
            className='d-flex justify-content-between flex-column mt-lg-0 mt-2'
          >
            <div className='session-info mb-1 mb-lg-0'>
              <h2 className='fw-bold mb-25'>Startegy Name</h2>
              {/* <CardText className='fw-bold mb-2'>Avg Sessions: {kFormatter(data.sessions)}</CardText>
              <h5 className='font-medium-2'>
                <span className='text-success me-50'>{data.growth}</span>
                <span className='fw-normal'>vs last 7 days</span>
              </h5> */}
              <CardText className='fw-bold mb-1'>Created : 24-06-2023</CardText>
              <CardText className='fw-bold mb-1'>Live Deplyment : 1</CardText>
              <CardText className='fw-bold mb-1'>Intruments : 3</CardText>
              <div>F&0 Contract (or 12 Stocks)</div>
            </div>
            {/* <Button color='primary'>View Details</Button> */}
          </Col>
          <Col
            sm={{ size: 6, order: 2 }}
            xs={{ order: 1 }}
            className='d-flex justify-content-between flex-column text-end'
          >
            <UncontrolledDropdown className='chart-dropdown'>
              {/* <DropdownToggle color='' className='bg-transparent btn-sm border-0 p-50'>
                Last 7 days
              </DropdownToggle>
              <UncontrolledDropdown className='btn-pinned'>
              </UncontrolledDropdown> */}
                <DropdownToggle tag='span' className='cursor-pointer'>
                  <MoreVertical size={18} />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem className='d-flex align-items-center w-100'>
                    <Eye size={14} className='me-50' />
                    <span>View</span>
                  </DropdownItem>
                  <DropdownItem className='d-flex align-items-center w-100'>
                    <Copy size={14} className='me-50' />
                    <span>Duplicate</span>
                  </DropdownItem>
                  <DropdownItem className='d-flex align-items-center w-100'>
                    <Edit2 size={14} className='me-50' />
                    <span>Status</span>
                  </DropdownItem>
                  <DropdownItem className='d-flex align-items-center w-100'>
                    <Trash2 size={14} className='me-50' />
                    <span>Delete</span>
                  </DropdownItem>
                </DropdownMenu>
              {/* <DropdownMenu end>

                {data.last_days.map(item => (
                  <DropdownItem className='w-100' key={item}>
                    {item}
                  </DropdownItem>
                ))}
              </DropdownMenu> */}
            </UncontrolledDropdown>
            {/* <Chart options={options} series={series} type='bar' height={200} /> */}
            <div className='d-flex justify-content-between'>
              <Button.Ripple color='primary'>Deploy</Button.Ripple>
              <Button.Ripple color='primary'>Edit</Button.Ripple>
              <Button.Ripple color='primary'>Backtest</Button.Ripple>
            </div>
          </Col>
        </Row>
        <hr />
        <Row className='pt-50'>
          <Col className='mb-2' md='4' sm='12'>
            <p className='mb-50'>Minmum Capital: ${data.goal}</p>
            <Progress className='avg-session-progress mt-25' value='50' />
          </Col>
          <Col className='mb-2' md='4' sm='12'>
            <p className='mb-50'>Roi %: {kFormatter(data.users)}</p>
            <Progress className='avg-session-progress progress-bar-warning mt-25' value='60' />
          </Col>
          <Col md='4' sm='12'>
            <p className='mb-50'>Drawdown: {data.retention}%</p>
            <Progress className='avg-session-progress progress-bar-danger mt-25' value='70' />
          </Col>
          {/* <Col md='4' sm='12'>
            <p className='mb-50'>Duration: {data.duration}yr</p>
            <Progress className='avg-session-progress progress-bar-success mt-25' value='80' />
          </Col> */}
        </Row>
      </CardBody>
    </Card>
  ) : null
}
export default AvgSessions
